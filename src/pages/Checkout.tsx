import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    
    // Delivery
    deliveryMethod: "courier",
    address: "",
    city: "",
    postalCode: "",
    comment: "",
    
    // Payment
    paymentMethod: "card",
    
    // Agreement
    agreeTerms: false,
    subscribeNews: false
  });

  const orderItems = [
    {
      id: 1,
      name: "Липовый мед",
      price: 450,
      quantity: 2,
      weight: "500г"
    },
    {
      id: 2,
      name: "Гречишный мед",
      price: 520,
      quantity: 1,
      weight: "500г"
    }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = formData.deliveryMethod === "pickup" ? 0 : 300;
  const total = subtotal + deliveryFee;

  const deliveryMethods = [
    {
      id: "courier",
      name: "Курьерская доставка",
      description: "Доставка до двери",
      price: 300,
      time: "1-2 дня"
    },
    {
      id: "pickup",
      name: "Самовывоз",
      description: "Забрать в пункте выдачи",
      price: 0,
      time: "В день заказа"
    },
    {
      id: "post",
      name: "Почта России",
      description: "Доставка почтой",
      price: 250,
      time: "5-14 дней"
    }
  ];

  const paymentMethods = [
    {
      id: "card",
      name: "Банковская карта",
      description: "Visa, MasterCard, МИР",
      icon: "CreditCard"
    },
    {
      id: "cash",
      name: "Наличными при получении",
      description: "Оплата курьеру",
      icon: "Banknote"
    },
    {
      id: "wallet",
      name: "Электронный кошелек",
      description: "ЮMoney, QIWI",
      icon: "Smartphone"
    }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const submitOrder = () => {
    console.log("Order submitted:", formData);
    // Здесь будет логика отправки заказа
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="ShoppingBag" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Оформление заказа</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад в корзину
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= stepNumber 
                    ? 'bg-honey text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {stepNumber}
                </div>
                <span className={`ml-2 ${step >= stepNumber ? 'text-brown' : 'text-gray-500'}`}>
                  {stepNumber === 1 && "Контакты"}
                  {stepNumber === 2 && "Доставка"}
                  {stepNumber === 3 && "Оплата"}
                </span>
                {stepNumber < 3 && (
                  <div className={`w-8 h-0.5 mx-4 ${
                    step > stepNumber ? 'bg-honey' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <Card className="border-honey-light">
                <CardHeader>
                  <CardTitle className="text-brown">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Имя *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Введите имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Фамилия *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Введите фамилию"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="subscribeNews"
                      checked={formData.subscribeNews}
                      onCheckedChange={(checked) => handleInputChange("subscribeNews", checked)}
                    />
                    <Label htmlFor="subscribeNews" className="text-sm">
                      Подписаться на новости и акции
                    </Label>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Delivery */}
            {step === 2 && (
              <Card className="border-honey-light">
                <CardHeader>
                  <CardTitle className="text-brown">Способ доставки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup
                    value={formData.deliveryMethod}
                    onValueChange={(value) => handleInputChange("deliveryMethod", value)}
                  >
                    {deliveryMethods.map((method) => (
                      <div key={method.id} className="flex items-center space-x-3 p-4 border border-honey-light rounded-lg">
                        <RadioGroupItem value={method.id} id={method.id} />
                        <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-brown">{method.name}</h4>
                              <p className="text-sm text-forest">{method.description}</p>
                              <p className="text-xs text-forest">Срок: {method.time}</p>
                            </div>
                            <div className="text-right">
                              <span className="font-semibold text-honey">
                                {method.price === 0 ? "Бесплатно" : `${method.price} ₽`}
                              </span>
                            </div>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  
                  {formData.deliveryMethod === "courier" && (
                    <div className="space-y-4 p-4 bg-honey-light rounded-lg">
                      <h4 className="font-semibold text-brown">Адрес доставки</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">Город *</Label>
                          <Input
                            id="city"
                            required
                            value={formData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            placeholder="Москва"
                          />
                        </div>
                        <div>
                          <Label htmlFor="postalCode">Индекс</Label>
                          <Input
                            id="postalCode"
                            value={formData.postalCode}
                            onChange={(e) => handleInputChange("postalCode", e.target.value)}
                            placeholder="123456"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="address">Адрес *</Label>
                        <Input
                          id="address"
                          required
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          placeholder="Улица, дом, квартира"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <Label htmlFor="comment">Комментарий к заказу</Label>
                    <Textarea
                      id="comment"
                      value={formData.comment}
                      onChange={(e) => handleInputChange("comment", e.target.value)}
                      placeholder="Дополнительная информация для курьера"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <Card className="border-honey-light">
                <CardHeader>
                  <CardTitle className="text-brown">Способ оплаты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => handleInputChange("paymentMethod", value)}
                  >
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center space-x-3 p-4 border border-honey-light rounded-lg">
                        <RadioGroupItem value={method.id} id={method.id} />
                        <Icon name={method.icon} className="w-6 h-6 text-honey" />
                        <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                          <h4 className="font-semibold text-brown">{method.name}</h4>
                          <p className="text-sm text-forest">{method.description}</p>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeTerms", checked)}
                      required
                    />
                    <Label htmlFor="agreeTerms" className="text-sm">
                      Я согласен с{" "}
                      <a href="#" className="text-honey hover:underline">
                        условиями использования
                      </a>{" "}
                      и{" "}
                      <a href="#" className="text-honey hover:underline">
                        политикой конфиденциальности
                      </a>
                    </Label>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={step === 1}
              >
                <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
                Назад
              </Button>
              
              {step < 3 ? (
                <Button
                  onClick={nextStep}
                  className="bg-honey hover:bg-honey-dark text-white"
                >
                  Далее
                  <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={submitOrder}
                  disabled={!formData.agreeTerms}
                  className="bg-honey hover:bg-honey-dark text-white"
                >
                  <Icon name="CreditCard" className="w-4 h-4 mr-2" />
                  Оформить заказ
                </Button>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="border-honey-light sticky top-4">
              <CardHeader>
                <CardTitle className="text-brown">Ваш заказ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium text-brown">{item.name}</h4>
                        <p className="text-sm text-forest">{item.weight} × {item.quantity}</p>
                      </div>
                      <span className="font-semibold text-honey">
                        {item.price * item.quantity} ₽
                      </span>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-forest">Товары</span>
                    <span className="text-brown">{subtotal} ₽</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-forest">Доставка</span>
                    <span className="text-brown">
                      {deliveryFee === 0 ? "Бесплатно" : `${deliveryFee} ₽`}
                    </span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-brown">Итого:</span>
                  <span className="text-honey">{total} ₽</span>
                </div>
                
                <div className="text-center pt-4">
                  <div className="flex items-center justify-center space-x-4 text-sm text-forest">
                    <div className="flex items-center space-x-1">
                      <Icon name="Shield" className="w-4 h-4" />
                      <span>Безопасно</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Lock" className="w-4 h-4" />
                      <span>SSL защита</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;