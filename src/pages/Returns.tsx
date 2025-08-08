import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Returns = () => {
  const [returnData, setReturnData] = useState({
    orderNumber: "",
    reason: "",
    description: "",
    refundMethod: "original",
    contactEmail: "",
    contactPhone: "",
    agreeTerms: false
  });

  const returnReasons = [
    { value: "quality", label: "Проблемы с качеством товара" },
    { value: "damaged", label: "Товар поврежден при доставке" },
    { value: "wrong", label: "Доставлен не тот товар" },
    { value: "expired", label: "Истек срок годности" },
    { value: "not_satisfied", label: "Товар не понравился" },
    { value: "other", label: "Другая причина" }
  ];

  const refundMethods = [
    { value: "original", label: "На исходный способ оплаты", description: "Возврат на карту или кошелек" },
    { value: "bank", label: "На банковский счет", description: "Перевод на указанные реквизиты" },
    { value: "bonus", label: "Бонусными баллами", description: "Зачисление на бонусный счет" }
  ];

  const returnPolicy = [
    {
      title: "Сроки возврата",
      items: [
        "14 дней с момента получения товара",
        "Для скоропортящихся продуктов - 3 дня",
        "Подарочные сертификаты - 14 дней (если не использованы)"
      ]
    },
    {
      title: "Условия возврата",
      items: [
        "Товар в оригинальной упаковке",
        "Сохранены все этикетки и пломбы",
        "Товар не был в употреблении (кроме дегустации)",
        "Наличие документов о покупке"
      ]
    },
    {
      title: "Что можно вернуть",
      items: [
        "Мед в нераспечатанной упаковке",
        "Продукты пчеловодства",
        "Подарочные наборы",
        "Аксессуары и сопутствующие товары"
      ]
    },
    {
      title: "Что нельзя вернуть",
      items: [
        "Товары с нарушенной упаковкой",
        "Продукты с истекшим сроком годности",
        "Товары, изготовленные по индивидуальному заказу",
        "Цифровые товары (электронные сертификаты)"
      ]
    }
  ];

  const returnProcess = [
    {
      step: 1,
      title: "Подача заявки",
      description: "Заполните форму возврата на сайте или свяжитесь с поддержкой",
      icon: "FileText"
    },
    {
      step: 2,
      title: "Рассмотрение заявки",
      description: "Мы рассмотрим вашу заявку в течение 24 часов",
      icon: "Search"
    },
    {
      step: 3,
      title: "Отправка товара",
      description: "Отправьте товар по указанному адресу или передайте курьеру",
      icon: "Package"
    },
    {
      step: 4,
      title: "Проверка товара",
      description: "Проверим соответствие товара условиям возврата",
      icon: "CheckCircle"
    },
    {
      step: 5,
      title: "Возврат средств",
      description: "Вернем деньги в течение 10 рабочих дней",
      icon: "CreditCard"
    }
  ];

  const faqItems = [
    {
      question: "Сколько времени занимает возврат денег?",
      answer: "После получения и проверки товара возврат средств осуществляется в течение 10 рабочих дней. На банковскую карту деньги поступают в течение 3-5 рабочих дней."
    },
    {
      question: "Кто оплачивает доставку при возврате?",
      answer: "Если причина возврата - наша вина (брак, неправильный товар), мы оплачиваем доставку. В остальных случаях доставка за счет покупателя."
    },
    {
      question: "Можно ли вернуть часть заказа?",
      answer: "Да, можно вернуть как весь заказ, так и отдельные товары из него. Укажите в заявке, какие именно товары хотите вернуть."
    },
    {
      question: "Что делать, если товар испортился?",
      answer: "Если товар испортился по нашей вине (нарушение условий хранения при доставке), мы заменим его или вернем деньги. Сфотографируйте товар и свяжитесь с нами."
    }
  ];

  const handleInputChange = (field: string, value: any) => {
    setReturnData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Return request submitted:", returnData);
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="RotateCcw" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Возврат товара</h1>
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
            Возврат и обмен товаров
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Мы заботимся о ваших интересах. Если товар не подошел или возникли проблемы с качеством, 
            мы поможем решить вопрос быстро и справедливо.
          </p>
        </div>

        <Tabs defaultValue="return-form" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="return-form">Заявка на возврат</TabsTrigger>
            <TabsTrigger value="policy">Условия возврата</TabsTrigger>
            <TabsTrigger value="process">Процесс возврата</TabsTrigger>
          </TabsList>

          {/* Return Form */}
          <TabsContent value="return-form" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-honey-light">
                <CardHeader>
                  <CardTitle className="text-brown">Заявка на возврат товара</CardTitle>
                  <p className="text-forest">Заполните форму для оформления возврата</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="orderNumber">Номер заказа *</Label>
                      <Input
                        id="orderNumber"
                        required
                        value={returnData.orderNumber}
                        onChange={(e) => handleInputChange("orderNumber", e.target.value)}
                        placeholder="ORD-2024-001"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-brown font-medium mb-3 block">Причина возврата *</Label>
                      <RadioGroup 
                        value={returnData.reason} 
                        onValueChange={(value) => handleInputChange("reason", value)}
                      >
                        {returnReasons.map((reason) => (
                          <div key={reason.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={reason.value} id={reason.value} />
                            <Label htmlFor={reason.value} className="cursor-pointer">
                              {reason.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Подробное описание *</Label>
                      <Textarea
                        id="description"
                        required
                        value={returnData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Опишите проблему подробнее..."
                        rows={4}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contactEmail">Email для связи *</Label>
                        <Input
                          id="contactEmail"
                          type="email"
                          required
                          value={returnData.contactEmail}
                          onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactPhone">Телефон *</Label>
                        <Input
                          id="contactPhone"
                          type="tel"
                          required
                          value={returnData.contactPhone}
                          onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-brown font-medium mb-3 block">Способ возврата средств</Label>
                      <RadioGroup 
                        value={returnData.refundMethod} 
                        onValueChange={(value) => handleInputChange("refundMethod", value)}
                      >
                        {refundMethods.map((method) => (
                          <div key={method.value} className="flex items-start space-x-3 p-3 border border-honey-light rounded-lg">
                            <RadioGroupItem value={method.value} id={method.value} className="mt-1" />
                            <Label htmlFor={method.value} className="cursor-pointer flex-1">
                              <div className="font-medium text-brown">{method.label}</div>
                              <div className="text-sm text-forest">{method.description}</div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeTerms"
                        checked={returnData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeTerms", checked)}
                        required
                      />
                      <Label htmlFor="agreeTerms" className="text-sm">
                        Я согласен с{" "}
                        <a href="#" className="text-honey hover:underline">
                          условиями возврата
                        </a>{" "}
                        и подтверждаю достоверность предоставленной информации
                      </Label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-honey hover:bg-honey-dark text-white"
                      disabled={!returnData.agreeTerms}
                    >
                      <Icon name="Send" className="w-4 h-4 mr-2" />
                      Отправить заявку на возврат
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-honey-light">
                <CardHeader>
                  <CardTitle className="text-brown">Нужна помощь?</CardTitle>
                  <p className="text-forest">Свяжитесь с нами для быстрого решения вопроса</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 border border-honey-light rounded-lg">
                    <Icon name="Phone" className="w-6 h-6 text-honey" />
                    <div>
                      <div className="font-medium text-brown">Горячая линия</div>
                      <div className="text-sm text-forest">+7 (999) 123-45-67</div>
                      <div className="text-xs text-forest">Ежедневно 9:00-21:00</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 border border-honey-light rounded-lg">
                    <Icon name="MessageCircle" className="w-6 h-6 text-honey" />
                    <div>
                      <div className="font-medium text-brown">Онлайн-чат</div>
                      <div className="text-sm text-forest">Быстрые ответы</div>
                      <div className="text-xs text-forest">Среднее время ответа: 5 минут</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 border border-honey-light rounded-lg">
                    <Icon name="Mail" className="w-6 h-6 text-honey" />
                    <div>
                      <div className="font-medium text-brown">Email поддержка</div>
                      <div className="text-sm text-forest">support@medovaya-usadba.ru</div>
                      <div className="text-xs text-forest">Ответим в теч. часа</div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                      <Icon name="MessageSquare" className="w-4 h-4 mr-2" />
                      Открыть чат
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Return Policy */}
          <TabsContent value="policy" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {returnPolicy.map((section, index) => (
                <Card key={index} className="border-honey-light">
                  <CardHeader>
                    <CardTitle className="text-brown">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                          <span className="text-forest text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Important Notes */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Важная информация</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Возврат денег:</h4>
                    <ul className="space-y-2 text-forest text-sm">
                      <li>• Возврат осуществляется на тот же способ оплаты</li>
                      <li>• Срок возврата: 10 рабочих дней</li>
                      <li>• Возвращается полная стоимость товара</li>
                      <li>• Стоимость доставки не возвращается (кроме случаев брака)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Обмен товара:</h4>
                    <ul className="space-y-2 text-forest text-sm">
                      <li>• Обмен на аналогичный товар</li>
                      <li>• Доплата при обмене на более дорогой товар</li>
                      <li>• Возврат разницы при обмене на более дешевый</li>
                      <li>• Бесплатная доставка обмененного товара</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-honey-light rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" className="w-5 h-5 text-honey mt-1" />
                    <div>
                      <h4 className="font-semibold text-brown mb-2">Гарантия качества</h4>
                      <p className="text-forest text-sm">
                        Мы гарантируем качество всех наших товаров. Если вы не удовлетворены покупкой 
                        по любой причине, мы найдем решение, которое устроит обе стороны.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Return Process */}
          <TabsContent value="process" className="space-y-8">
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Процесс возврата товара</CardTitle>
                <p className="text-forest">Пошаговое руководство по возврату</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {returnProcess.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-honey rounded-full flex items-center justify-center text-white font-semibold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-brown mb-2">{step.title}</h4>
                        <p className="text-forest">{step.description}</p>
                      </div>
                      <Icon name={step.icon} className="w-6 h-6 text-honey mt-1" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Часто задаваемые вопросы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-honey-light pb-4 last:border-b-0">
                      <h4 className="font-medium text-brown mb-2">{item.question}</h4>
                      <p className="text-forest text-sm">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact for Returns */}
            <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
              <CardContent className="p-8 text-center">
                <Icon name="Headphones" className="w-12 h-12 text-honey mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brown mb-4">
                  Служба возвратов
                </h3>
                <p className="text-forest mb-6 max-w-md mx-auto">
                  Наши специалисты помогут оформить возврат и ответят на все вопросы
                </p>
                <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
                  <Button className="bg-honey hover:bg-honey-dark text-white">
                    <Icon name="Phone" className="w-4 h-4 mr-2" />
                    Позвонить
                  </Button>
                  <Button variant="outline">
                    <Icon name="Mail" className="w-4 h-4 mr-2" />
                    Написать
                  </Button>
                </div>
                <p className="text-xs text-forest mt-4">
                  Работаем ежедневно с 9:00 до 21:00
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Returns;