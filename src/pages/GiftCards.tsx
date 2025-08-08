import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const GiftCards = () => {
  const [selectedAmount, setSelectedAmount] = useState("1000");
  const [customAmount, setCustomAmount] = useState("");
  const [selectedDesign, setSelectedDesign] = useState("classic");
  const [giftData, setGiftData] = useState({
    recipientName: "",
    recipientEmail: "",
    senderName: "",
    message: "",
    deliveryDate: ""
  });

  const predefinedAmounts = [
    { value: "500", label: "500 ₽" },
    { value: "1000", label: "1000 ₽" },
    { value: "2000", label: "2000 ₽" },
    { value: "3000", label: "3000 ₽" },
    { value: "5000", label: "5000 ₽" },
    { value: "custom", label: "Другая сумма" }
  ];

  const designs = [
    {
      id: "classic",
      name: "Классический",
      description: "Элегантный дизайн с пчелами и сотами",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      preview: "Золотистый фон с изображением пчел"
    },
    {
      id: "nature",
      name: "Природный",
      description: "Дизайн с цветущими лугами",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg",
      preview: "Зеленый фон с полевыми цветами"
    },
    {
      id: "honey",
      name: "Медовый",
      description: "Теплые медовые оттенки",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      preview: "Янтарный фон с каплями меда"
    },
    {
      id: "festive",
      name: "Праздничный",
      description: "Для особых случаев",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      preview: "Торжественный дизайн с лентами"
    }
  ];

  const occasions = [
    { value: "birthday", label: "День рождения", icon: "Cake" },
    { value: "anniversary", label: "Годовщина", icon: "Heart" },
    { value: "wedding", label: "Свадьба", icon: "Gift" },
    { value: "newYear", label: "Новый год", icon: "Sparkles" },
    { value: "valentine", label: "День влюбленных", icon: "Heart" },
    { value: "other", label: "Другой повод", icon: "Star" }
  ];

  const benefits = [
    {
      icon: "Gift",
      title: "Идеальный подарок",
      description: "Подходит для любого случая и получателя"
    },
    {
      icon: "Calendar",
      title: "Гибкая доставка",
      description: "Отправьте сейчас или запланируйте на определенную дату"
    },
    {
      icon: "Smartphone",
      title: "Цифровая доставка",
      description: "Мгновенная доставка на email получателя"
    },
    {
      icon: "CreditCard",
      title: "Удобная оплата",
      description: "Все способы оплаты, включая рассрочку"
    },
    {
      icon: "Shield",
      title: "Гарантия",
      description: "Сертификат действует 12 месяцев"
    },
    {
      icon: "Repeat",
      title: "Легкое использование",
      description: "Простое применение при оформлении заказа"
    }
  ];

  const faqItems = [
    {
      question: "Как долго действует подарочный сертификат?",
      answer: "Подарочные сертификаты действуют 12 месяцев с даты покупки."
    },
    {
      question: "Можно ли использовать сертификат частями?",
      answer: "Да, остаток средств сохраняется и может быть использован в следующих заказах."
    },
    {
      question: "Что если сумма заказа больше номинала сертификата?",
      answer: "Разницу можно доплатить любым удобным способом."
    },
    {
      question: "Можно ли вернуть подарочный сертификат?",
      answer: "Возврат возможен в течение 14 дней, если сертификат не был использован."
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setGiftData(prev => ({ ...prev, [field]: value }));
  };

  const getAmount = () => {
    return selectedAmount === "custom" ? customAmount : selectedAmount;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Gift card order:", { ...giftData, amount: getAmount(), design: selectedDesign });
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gift" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Подарочные сертификаты</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brown mb-4">
            Подарите вкус натурального меда
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Подарочные сертификаты - это отличный способ порадовать близких качественным медом 
            и продуктами пчеловодства. Получатель сможет выбрать то, что ему больше нравится.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-honey-light text-center">
              <CardContent className="p-6">
                <Icon name={benefit.icon} className="w-10 h-10 text-honey mx-auto mb-3" />
                <h3 className="font-semibold text-brown mb-2">{benefit.title}</h3>
                <p className="text-sm text-forest">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gift Card Form */}
          <div>
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Создать подарочный сертификат</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amount Selection */}
                  <div>
                    <Label className="text-brown font-medium mb-3 block">Номинал сертификата</Label>
                    <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount}>
                      <div className="grid grid-cols-3 gap-3">
                        {predefinedAmounts.map((amount) => (
                          <div key={amount.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={amount.value} id={amount.value} />
                            <Label htmlFor={amount.value} className="cursor-pointer">
                              {amount.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                    
                    {selectedAmount === "custom" && (
                      <div className="mt-3">
                        <Input
                          type="number"
                          placeholder="Введите сумму"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          min="100"
                          max="50000"
                        />
                        <p className="text-xs text-forest mt-1">Минимум 100 ₽, максимум 50 000 ₽</p>
                      </div>
                    )}
                  </div>

                  {/* Design Selection */}
                  <div>
                    <Label className="text-brown font-medium mb-3 block">Дизайн сертификата</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {designs.map((design) => (
                        <div
                          key={design.id}
                          className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                            selectedDesign === design.id ? 'border-honey bg-honey-light' : 'border-gray-200'
                          }`}
                          onClick={() => setSelectedDesign(design.id)}
                        >
                          <img 
                            src={design.image} 
                            alt={design.name}
                            className="w-full h-20 object-cover rounded mb-2"
                          />
                          <h4 className="font-medium text-brown text-sm">{design.name}</h4>
                          <p className="text-xs text-forest">{design.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recipient Info */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-brown">Информация о получателе</h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="recipientName">Имя получателя *</Label>
                        <Input
                          id="recipientName"
                          required
                          value={giftData.recipientName}
                          onChange={(e) => handleInputChange("recipientName", e.target.value)}
                          placeholder="Имя получателя"
                        />
                      </div>
                      <div>
                        <Label htmlFor="recipientEmail">Email получателя *</Label>
                        <Input
                          id="recipientEmail"
                          type="email"
                          required
                          value={giftData.recipientEmail}
                          onChange={(e) => handleInputChange("recipientEmail", e.target.value)}
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="senderName">Ваше имя *</Label>
                      <Input
                        id="senderName"
                        required
                        value={giftData.senderName}
                        onChange={(e) => handleInputChange("senderName", e.target.value)}
                        placeholder="От кого подарок"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Поздравительное сообщение</Label>
                      <Textarea
                        id="message"
                        value={giftData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Напишите поздравление или пожелание..."
                        rows={3}
                      />
                      <p className="text-xs text-forest mt-1">Максимум 200 символов</p>
                    </div>
                    
                    <div>
                      <Label htmlFor="deliveryDate">Дата доставки (необязательно)</Label>
                      <Input
                        id="deliveryDate"
                        type="date"
                        value={giftData.deliveryDate}
                        onChange={(e) => handleInputChange("deliveryDate", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <p className="text-xs text-forest mt-1">
                        Если не указано, сертификат будет отправлен сразу после оплаты
                      </p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-honey hover:bg-honey-dark text-white">
                    <Icon name="CreditCard" className="w-4 h-4 mr-2" />
                    Купить сертификат за {getAmount() || "0"} ₽
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Preview and Info */}
          <div className="space-y-6">
            {/* Preview */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Предварительный просмотр</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-honey-light to-cream p-6 rounded-lg border-2 border-honey">
                  <div className="text-center">
                    <Icon name="Gift" className="w-12 h-12 text-honey mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-brown mb-2">
                      Подарочный сертификат
                    </h3>
                    <div className="text-3xl font-bold text-honey mb-4">
                      {getAmount() || "0"} ₽
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <p className="text-brown font-medium mb-2">
                        {giftData.recipientName || "Имя получателя"}
                      </p>
                      <p className="text-forest text-sm">
                        {giftData.message || "Поздравительное сообщение появится здесь"}
                      </p>
                      <p className="text-forest text-xs mt-2">
                        От: {giftData.senderName || "Ваше имя"}
                      </p>
                    </div>
                    
                    <div className="text-xs text-forest">
                      Медовая усадьба • medovaya-usadba.ru
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Occasions */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Популярные поводы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {occasions.map((occasion) => (
                    <div key={occasion.value} className="flex items-center space-x-2 p-3 border border-honey-light rounded-lg hover:bg-honey-light transition-colors cursor-pointer">
                      <Icon name={occasion.icon} className="w-5 h-5 text-honey" />
                      <span className="text-forest text-sm">{occasion.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How it Works */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Как это работает</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <div className="font-medium text-brown">Выберите номинал</div>
                      <div className="text-sm text-forest">От 100 до 50 000 рублей</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <div className="font-medium text-brown">Персонализируйте</div>
                      <div className="text-sm text-forest">Добавьте сообщение и выберите дизайн</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <div className="font-medium text-brown">Отправьте</div>
                      <div className="text-sm text-forest">Сразу или в выбранную дату</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      4
                    </div>
                    <div>
                      <div className="font-medium text-brown">Получатель использует</div>
                      <div className="text-sm text-forest">При оформлении заказа на сайте</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <Card className="border-honey-light">
            <CardHeader>
              <CardTitle className="text-brown">Часто задаваемые вопросы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-brown">{item.question}</h4>
                    <p className="text-sm text-forest">{item.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
            <CardContent className="p-8 text-center">
              <Icon name="Heart" className="w-12 h-12 text-honey mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brown mb-4">
                Дарите радость и здоровье
              </h3>
              <p className="text-forest mb-6 max-w-md mx-auto">
                Подарочный сертификат на натуральный мед - это забота о здоровье и благополучии ваших близких
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-honey hover:bg-honey-dark text-white">
                  <Icon name="Gift" className="w-4 h-4 mr-2" />
                  Создать сертификат
                </Button>
                <Button variant="outline">
                  <Icon name="Phone" className="w-4 h-4 mr-2" />
                  Задать вопрос
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;