import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Consultation = () => {
  const [consultationType, setConsultationType] = useState("phone");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    deviceType: "",
    question: "",
    preferredTime: ""
  });

  const consultationTypes = [
    {
      id: "phone",
      name: "Телефонная консультация",
      price: "Бесплатно",
      duration: "10-15 мин",
      description: "Быстрые ответы на простые вопросы"
    },
    {
      id: "video",
      name: "Видеоконсультация",
      price: "500 ₽",
      duration: "30 мин",
      description: "Подробная диагностика по видеосвязи"
    },
    {
      id: "onsite",
      name: "Консультация на дому",
      price: "1000 ₽",
      duration: "1 час",
      description: "Осмотр техники и рекомендации"
    }
  ];

  const faqTopics = [
    "Выбор новой техники",
    "Профилактика поломок",
    "Самостоятельный ремонт",
    "Гарантийные вопросы",
    "Совместимость запчастей",
    "Энергоэффективность"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation request:", { ...formData, type: consultationType });
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="MessageCircle" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Консультации</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Consultation Types */}
          <div>
            <h2 className="text-2xl font-bold text-brown mb-6">Виды консультаций</h2>
            <div className="space-y-4 mb-8">
              {consultationTypes.map((type) => (
                <Card 
                  key={type.id} 
                  className={`border-honey-light cursor-pointer transition-all ${
                    consultationType === type.id ? 'ring-2 ring-honey bg-honey-light' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setConsultationType(type.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-brown">{type.name}</h3>
                        <p className="text-forest text-sm">{type.description}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-honey font-bold">{type.price}</span>
                          <span className="text-forest text-sm">Длительность: {type.duration}</span>
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        consultationType === type.id ? 'bg-honey border-honey' : 'border-gray-300'
                      }`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Topics */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Популярные вопросы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {faqTopics.map((topic, index) => (
                    <Button key={index} variant="outline" size="sm" className="text-left justify-start">
                      {topic}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Consultation Form */}
          <Card className="border-honey-light">
            <CardHeader>
              <CardTitle className="text-brown">Заказать консультацию</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Ваше имя *</Label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <Label>Телефон *</Label>
                  <Input
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label>Тип техники</Label>
                  <Select value={formData.deviceType} onValueChange={(value) => handleInputChange("deviceType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="refrigerator">Холодильник</SelectItem>
                      <SelectItem value="washing">Стиральная машина</SelectItem>
                      <SelectItem value="dishwasher">Посудомоечная машина</SelectItem>
                      <SelectItem value="microwave">Микроволновка</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Ваш вопрос *</Label>
                  <Textarea
                    required
                    value={formData.question}
                    onChange={(e) => handleInputChange("question", e.target.value)}
                    placeholder="Опишите вашу проблему или вопрос..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label>Удобное время для связи</Label>
                  <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Утром (9:00-12:00)</SelectItem>
                      <SelectItem value="afternoon">Днем (12:00-17:00)</SelectItem>
                      <SelectItem value="evening">Вечером (17:00-21:00)</SelectItem>
                      <SelectItem value="anytime">В любое время</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full bg-honey hover:bg-honey-dark text-white">
                  <Icon name="Send" className="w-4 h-4 mr-2" />
                  Заказать консультацию
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Consultation;