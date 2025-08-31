import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Icon from "@/components/ui/icon";

const Appointment = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    deviceType: "",
    brand: "",
    problem: "",
    urgency: "normal",
    timeSlot: ""
  });

  const timeSlots = [
    "09:00 - 12:00",
    "12:00 - 15:00", 
    "15:00 - 18:00",
    "18:00 - 21:00"
  ];

  const deviceTypes = [
    "Холодильник",
    "Стиральная машина",
    "Посудомоечная машина", 
    "Микроволновая печь",
    "Духовой шкаф",
    "Варочная панель",
    "Другое"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment request:", { ...formData, date });
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Записаться на ремонт</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-honey-light">
            <CardHeader>
              <CardTitle className="text-brown">Заявка на ремонт</CardTitle>
              <p className="text-forest">Заполните форму и мы свяжемся с вами для подтверждения</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-brown">Контактная информация</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
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
                    <Label>Адрес *</Label>
                    <Input
                      required
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Улица, дом, квартира"
                    />
                  </div>
                </div>

                {/* Device Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-brown">Информация о технике</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
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
                    <div>
                      <Label>Бренд</Label>
                      <Input
                        value={formData.brand}
                        onChange={(e) => handleInputChange("brand", e.target.value)}
                        placeholder="Samsung, LG, Bosch..."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Описание проблемы *</Label>
                    <Textarea
                      required
                      value={formData.problem}
                      onChange={(e) => handleInputChange("problem", e.target.value)}
                      placeholder="Опишите, что случилось с техникой..."
                      rows={3}
                    />
                  </div>
                </div>

                {/* Schedule */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-brown">Время визита</h3>
                  
                  <div>
                    <Label className="text-brown font-medium mb-3 block">Срочность</Label>
                    <RadioGroup value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="urgent" id="urgent" />
                        <Label htmlFor="urgent">Срочно (сегодня, доплата 1000 ₽)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="normal" id="normal" />
                        <Label htmlFor="normal">Обычно (завтра)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="planned" id="planned" />
                        <Label htmlFor="planned">Плановый (выберу дату)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.urgency === "planned" && (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Дата визита</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal"
                            >
                              <Icon name="Calendar" className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP", { locale: ru }) : "Выберите дату"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div>
                        <Label>Время</Label>
                        <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange("timeSlot", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите время" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map(slot => (
                              <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full bg-honey hover:bg-honey-dark text-white">
                  <Icon name="Send" className="w-4 h-4 mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Appointment;