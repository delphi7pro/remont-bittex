import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      primary: "+7 (999) 123-45-67",
      secondary: "Круглосуточно",
      description: "Звоните по любым вопросам"
    },
    {
      icon: "Mail",
      title: "Email",
      primary: "info@remtechservice.ru",
      secondary: "Ответим в течение часа",
      description: "Пишите нам на почту"
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      primary: "+7 (999) 123-45-67",
      secondary: "Быстрые ответы",
      description: "Удобное общение в мессенджере"
    },
    {
      icon: "MapPin",
      title: "Офис",
      primary: "г. Москва",
      secondary: "ул. Ремонтная, д. 15",
      description: "Приезжайте к нам в офис"
    }
  ];

  const workingHours = [
    { day: "Понедельник", hours: "9:00 - 21:00" },
    { day: "Вторник", hours: "9:00 - 21:00" },
    { day: "Среда", hours: "9:00 - 21:00" },
    { day: "Четверг", hours: "9:00 - 21:00" },
    { day: "Пятница", hours: "9:00 - 21:00" },
    { day: "Суббота", hours: "10:00 - 20:00" },
    { day: "Воскресенье", hours: "10:00 - 18:00" }
  ];

  const faq = [
    {
      question: "Сколько стоит выезд мастера?",
      answer: "Выезд мастера в пределах МКАД бесплатный. За МКАД - 30 рублей за километр от МКАД."
    },
    {
      question: "Какая гарантия на ремонт?",
      answer: "Гарантия на работы от 12 до 24 месяцев в зависимости от вида ремонта. На запчасти - гарантия производителя."
    },
    {
      question: "Можно ли вызвать мастера в выходные?",
      answer: "Да, мы работаем в выходные и праздничные дни. В выходные действует наценка 50% к стоимости работ."
    },
    {
      question: "Как быстро приедет мастер?",
      answer: "Обычно в течение 2-4 часов в рабочие дни. Срочный выезд - в течение часа за дополнительную плату."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Контакты</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Contact Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="text-center border-honey-light hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name={contact.icon} className="w-12 h-12 text-honey mx-auto mb-4" />
                <h3 className="font-semibold text-brown mb-2">{contact.title}</h3>
                <p className="text-lg font-medium text-honey mb-1">{contact.primary}</p>
                <p className="text-sm text-forest mb-2">{contact.secondary}</p>
                <p className="text-xs text-forest">{contact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Напишите нам</CardTitle>
                <p className="text-forest">Мы ответим на ваши вопросы в течение дня</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brown mb-2">
                        Ваше имя *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brown mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brown mb-2">
                        Телефон
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brown mb-2">
                        Тема обращения
                      </label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тему" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="order">Вопрос по заказу</SelectItem>
                          <SelectItem value="quality">Качество товара</SelectItem>
                          <SelectItem value="delivery">Доставка</SelectItem>
                          <SelectItem value="cooperation">Сотрудничество</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-brown mb-2">
                      Сообщение *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Опишите ваш вопрос подробнее..."
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-honey hover:bg-honey-dark text-white">
                    <Icon name="Send" className="w-4 h-4 mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            {/* Working Hours */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-forest">{schedule.day}</span>
                      <span className="font-medium text-brown">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-honey-light rounded-lg">
                  <p className="text-sm text-brown">
                    <Icon name="Info" className="w-4 h-4 inline mr-2" />
                    В праздничные дни режим работы может изменяться
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Частые вопросы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faq.map((item, index) => (
                    <div key={index} className="border-b border-honey-light pb-4 last:border-b-0">
                      <h4 className="font-medium text-brown mb-2">{item.question}</h4>
                      <p className="text-sm text-forest">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Мы в социальных сетях</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon name="Phone" className="w-4 h-4 mr-2" />
                    Telegram
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon name="Mail" className="w-4 h-4 mr-2" />
                    VK
                  </Button>
                </div>
                <p className="text-sm text-forest mt-3 text-center">
                  Следите за новостями и акциями в наших группах
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card className="border-honey-light">
            <CardHeader>
              <CardTitle className="text-brown">Как нас найти</CardTitle>
              <p className="text-forest">Наша пасека находится в экологически чистом районе</p>
            </CardHeader>
            <CardContent>
              <div className="bg-honey-light rounded-lg p-8 text-center">
                <Icon name="Map" className="w-16 h-16 text-honey mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-brown mb-2">Интерактивная карта</h4>
                <p className="text-forest mb-4">
                  Тульская область, Щекинский район, д. Медовка, ул. Пасечная 12
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <Icon name="Car" className="w-4 h-4 inline mr-2 text-honey" />
                    На автомобиле: 2 часа от Москвы
                  </div>
                  <div>
                    <Icon name="Train" className="w-4 h-4 inline mr-2 text-honey" />
                    На поезде: до ст. Щекино, далее 15 км
                  </div>
                </div>
                <Button className="mt-4 bg-honey hover:bg-honey-dark text-white">
                  Открыть в Яндекс.Картах
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacts;