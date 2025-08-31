import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Diagnostics = () => {
  const [formData, setFormData] = useState({
    deviceType: "",
    brand: "",
    model: "",
    age: "",
    problem: "",
    symptoms: "",
    urgency: "normal"
  });

  const deviceTypes = [
    "Холодильник",
    "Стиральная машина", 
    "Посудомоечная машина",
    "Микроволновая печь",
    "Духовой шкаф",
    "Варочная панель",
    "Другое"
  ];

  const diagnosticSteps = [
    {
      step: 1,
      title: "Внешний осмотр",
      description: "Проверка корпуса, проводов, подключений",
      time: "5-10 мин"
    },
    {
      step: 2,
      title: "Функциональная проверка",
      description: "Тестирование всех режимов работы",
      time: "10-15 мин"
    },
    {
      step: 3,
      title: "Измерения параметров",
      description: "Проверка напряжений, сопротивлений, температур",
      time: "15-20 мин"
    },
    {
      step: 4,
      title: "Заключение",
      description: "Определение причины и составление плана ремонта",
      time: "5 мин"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Diagnostic request:", formData);
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Search" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Диагностика техники</h1>
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
          {/* Diagnostic Form */}
          <Card className="border-honey-light">
            <CardHeader>
              <CardTitle className="text-brown">Заявка на диагностику</CardTitle>
              <p className="text-forest">Опишите проблему для предварительной оценки</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Тип техники *</Label>
                  <Select value={formData.deviceType} onValueChange={(value) => handleInputChange("deviceType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      {deviceTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Бренд</Label>
                    <Input
                      value={formData.brand}
                      onChange={(e) => handleInputChange("brand", e.target.value)}
                      placeholder="Samsung, LG, Bosch..."
                    />
                  </div>
                  <div>
                    <Label>Модель</Label>
                    <Input
                      value={formData.model}
                      onChange={(e) => handleInputChange("model", e.target.value)}
                      placeholder="Модель техники"
                    />
                  </div>
                </div>

                <div>
                  <Label>Возраст техники</Label>
                  <Select value={formData.age} onValueChange={(value) => handleInputChange("age", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите возраст" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">Менее года</SelectItem>
                      <SelectItem value="1-3">1-3 года</SelectItem>
                      <SelectItem value="3-5">3-5 лет</SelectItem>
                      <SelectItem value="5-10">5-10 лет</SelectItem>
                      <SelectItem value="old">Более 10 лет</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Описание проблемы *</Label>
                  <Textarea
                    required
                    value={formData.problem}
                    onChange={(e) => handleInputChange("problem", e.target.value)}
                    placeholder="Что именно не работает?"
                    rows={3}
                  />
                </div>

                <div>
                  <Label>Дополнительные симптомы</Label>
                  <Textarea
                    value={formData.symptoms}
                    onChange={(e) => handleInputChange("symptoms", e.target.value)}
                    placeholder="Звуки, запахи, другие особенности..."
                    rows={2}
                  />
                </div>

                <div>
                  <Label className="text-brown font-medium mb-3 block">Срочность</Label>
                  <RadioGroup value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="urgent" id="urgent" />
                      <Label htmlFor="urgent">Срочно (в течение часа)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="normal" id="normal" />
                      <Label htmlFor="normal">Обычно (в течение дня)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="planned" id="planned" />
                      <Label htmlFor="planned">Плановый (в удобное время)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full bg-honey hover:bg-honey-dark text-white">
                  <Icon name="Send" className="w-4 h-4 mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Diagnostic Process */}
          <div className="space-y-6">
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Процесс диагностики</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {diagnosticSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-brown">{step.title}</h4>
                        <p className="text-forest text-sm">{step.description}</p>
                        <p className="text-honey text-xs">Время: {step.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
              <CardContent className="p-6 text-center">
                <Icon name="Clock" className="w-12 h-12 text-honey mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brown mb-2">
                  Диагностика - 500 ₽
                </h3>
                <p className="text-forest mb-4">
                  При согласии на ремонт - диагностика бесплатно
                </p>
                <Button className="bg-honey hover:bg-honey-dark text-white">
                  Вызвать мастера
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnostics;