import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const TechnicalSupport = () => {
  const [ticketData, setTicketData] = useState({
    subject: "",
    description: "",
    priority: "normal",
    category: ""
  });

  const supportChannels = [
    {
      channel: "Телефон",
      contact: "+7 (999) 123-45-67",
      hours: "24/7",
      responseTime: "Немедленно",
      icon: "Phone",
      description: "Для срочных вопросов"
    },
    {
      channel: "Email",
      contact: "support@remtechservice.ru",
      hours: "24/7",
      responseTime: "В течение часа",
      icon: "Mail",
      description: "Для подробных вопросов"
    },
    {
      channel: "Онлайн-чат",
      contact: "На сайте",
      hours: "9:00-21:00",
      responseTime: "5-10 минут",
      icon: "MessageCircle",
      description: "Быстрые ответы"
    },
    {
      channel: "WhatsApp",
      contact: "+7 (999) 123-45-67",
      hours: "9:00-21:00",
      responseTime: "10-30 минут",
      icon: "MessageSquare",
      description: "Удобное общение"
    }
  ];

  const faqCategories = [
    {
      category: "Общие вопросы",
      questions: [
        {
          q: "Сколько стоит выезд мастера?",
          a: "Выезд мастера в пределах МКАД бесплатный. За МКАД - 30 ₽ за км."
        },
        {
          q: "Какая гарантия на ремонт?",
          a: "Гарантия на работы от 12 до 24 месяцев, на запчасти - гарантия производителя."
        }
      ]
    },
    {
      category: "Оплата",
      questions: [
        {
          q: "Какие способы оплаты принимаете?",
          a: "Наличные, банковские карты, безналичный расчет для юридических лиц."
        },
        {
          q: "Можно ли оплатить после ремонта?",
          a: "Да, оплата производится после выполнения работ и проверки результата."
        }
      ]
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setTicketData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Support ticket:", ticketData);
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Headphones" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Техническая поддержка</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="contact" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contact">Связаться с нами</TabsTrigger>
            <TabsTrigger value="ticket">Создать заявку</TabsTrigger>
            <TabsTrigger value="faq">Частые вопросы</TabsTrigger>
          </TabsList>

          {/* Contact Channels */}
          <TabsContent value="contact" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {supportChannels.map((channel, index) => (
                <Card key={index} className="border-honey-light hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Icon name={channel.icon} className="w-8 h-8 text-honey mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-brown mb-1">{channel.channel}</h3>
                        <p className="text-forest font-medium mb-1">{channel.contact}</p>
                        <p className="text-forest text-sm mb-2">{channel.description}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-forest">Часы работы: {channel.hours}</span>
                          <Badge className="bg-green-100 text-green-800">
                            {channel.responseTime}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Support Ticket */}
          <TabsContent value="ticket" className="space-y-6">
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Создать заявку в поддержку</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Тема обращения *</Label>
                    <Input
                      required
                      value={ticketData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Кратко опишите проблему"
                    />
                  </div>

                  <div>
                    <Label>Категория</Label>
                    <Select value={ticketData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Технический вопрос</SelectItem>
                        <SelectItem value="billing">Вопрос по оплате</SelectItem>
                        <SelectItem value="warranty">Гарантийный случай</SelectItem>
                        <SelectItem value="complaint">Жалоба</SelectItem>
                        <SelectItem value="suggestion">Предложение</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Приоритет</Label>
                    <Select value={ticketData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Низкий</SelectItem>
                        <SelectItem value="normal">Обычный</SelectItem>
                        <SelectItem value="high">Высокий</SelectItem>
                        <SelectItem value="urgent">Срочный</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Подробное описание *</Label>
                    <Textarea
                      required
                      value={ticketData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Опишите проблему максимально подробно..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-honey hover:bg-honey-dark text-white">
                    <Icon name="Send" className="w-4 h-4 mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ */}
          <TabsContent value="faq" className="space-y-6">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-honey-light">
                <CardHeader>
                  <CardTitle className="text-brown">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.questions.map((qa, qaIndex) => (
                      <div key={qaIndex} className="border-b border-honey-light pb-4 last:border-b-0">
                        <h4 className="font-medium text-brown mb-2">{qa.q}</h4>
                        <p className="text-forest text-sm">{qa.a}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TechnicalSupport;