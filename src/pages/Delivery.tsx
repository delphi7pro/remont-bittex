import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Delivery = () => {
  const [weight, setWeight] = useState(1);
  const [distance, setDistance] = useState(10);

  const deliveryMethods = [
    {
      id: "courier",
      name: "Курьерская доставка",
      icon: "Truck",
      description: "Доставка курьером до двери",
      areas: "Москва и МО",
      time: "1-2 дня",
      price: "от 300 ₽",
      features: ["Доставка до двери", "Оплата при получении", "Проверка товара"]
    },
    {
      id: "pickup",
      name: "Самовывоз",
      icon: "MapPin",
      description: "Забрать товар самостоятельно",
      areas: "Пункты выдачи",
      time: "В день заказа",
      price: "Бесплатно",
      features: ["Экономия на доставке", "Быстрое получение", "Консультация специалиста"]
    },
    {
      id: "post",
      name: "Почта России",
      icon: "Package",
      description: "Доставка почтой",
      areas: "Вся Россия",
      time: "5-14 дней",
      price: "от 250 ₽",
      features: ["Доставка в любую точку", "Отслеживание посылки", "Страхование"]
    },
    {
      id: "cdek",
      name: "СДЭК",
      icon: "Zap",
      description: "Быстрая доставка СДЭК",
      areas: "Крупные города",
      time: "2-5 дней",
      price: "от 200 ₽",
      features: ["Быстрая доставка", "Пункты выдачи", "SMS уведомления"]
    }
  ];

  const paymentMethods = [
    {
      name: "Банковские карты",
      icon: "CreditCard",
      description: "Visa, MasterCard, МИР",
      commission: "Без комиссии"
    },
    {
      name: "Электронные кошельки",
      icon: "Smartphone",
      description: "ЮMoney, QIWI, WebMoney",
      commission: "Без комиссии"
    },
    {
      name: "Наличными при получении",
      icon: "Banknote",
      description: "Оплата курьеру или в пункте выдачи",
      commission: "Без комиссии"
    },
    {
      name: "Банковский перевод",
      icon: "Building",
      description: "Для юридических лиц",
      commission: "По тарифам банка"
    }
  ];

  const zones = [
    { name: "Москва (в пределах МКАД)", price: 300, time: "1 день" },
    { name: "Московская область (до 30 км)", price: 400, time: "1-2 дня" },
    { name: "Московская область (30-50 км)", price: 500, time: "1-2 дня" },
    { name: "Московская область (50+ км)", price: 600, time: "2-3 дня" }
  ];

  const calculateDelivery = () => {
    let basePrice = 300;
    if (distance > 30) basePrice = 400;
    if (distance > 50) basePrice = 500;
    if (distance > 100) basePrice = 600;
    
    const weightSurcharge = weight > 3 ? (weight - 3) * 50 : 0;
    return basePrice + weightSurcharge;
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Truck" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Доставка и оплата</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="delivery" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="delivery">Способы доставки</TabsTrigger>
            <TabsTrigger value="payment">Способы оплаты</TabsTrigger>
            <TabsTrigger value="calculator">Калькулятор</TabsTrigger>
          </TabsList>

          <TabsContent value="delivery" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brown mb-4">Способы доставки</h2>
              <p className="text-forest text-lg">Выберите удобный способ получения заказа</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {deliveryMethods.map((method) => (
                <Card key={method.id} className="border-honey-light hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Icon name={method.icon} className="w-8 h-8 text-honey" />
                      <div>
                        <CardTitle className="text-brown">{method.name}</CardTitle>
                        <p className="text-sm text-forest">{method.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-forest uppercase tracking-wide">Зона</p>
                        <p className="font-semibold text-brown">{method.areas}</p>
                      </div>
                      <div>
                        <p className="text-xs text-forest uppercase tracking-wide">Срок</p>
                        <p className="font-semibold text-brown">{method.time}</p>
                      </div>
                      <div>
                        <p className="text-xs text-forest uppercase tracking-wide">Стоимость</p>
                        <p className="font-semibold text-honey">{method.price}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {method.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="Check" className="w-4 h-4 text-honey" />
                          <span className="text-sm text-forest">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Delivery Zones */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brown mb-4">Зоны доставки курьером</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-honey-light">
                      <th className="text-left py-3 text-brown">Зона доставки</th>
                      <th className="text-left py-3 text-brown">Стоимость</th>
                      <th className="text-left py-3 text-brown">Срок доставки</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zones.map((zone, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 text-forest">{zone.name}</td>
                        <td className="py-3 text-honey font-semibold">{zone.price} ₽</td>
                        <td className="py-3 text-forest">{zone.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="payment" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brown mb-4">Способы оплаты</h2>
              <p className="text-forest text-lg">Удобные и безопасные способы оплаты</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {paymentMethods.map((method, index) => (
                <Card key={index} className="border-honey-light">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Icon name={method.icon} className="w-8 h-8 text-honey mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-brown mb-2">{method.name}</h4>
                        <p className="text-sm text-forest mb-2">{method.description}</p>
                        <p className="text-xs text-honey font-medium">{method.commission}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Security Info */}
            <Card className="bg-honey-light border-honey">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Shield" className="w-8 h-8 text-honey mt-1" />
                  <div>
                    <h4 className="font-semibold text-brown mb-2">Безопасность платежей</h4>
                    <p className="text-forest mb-4">
                      Все онлайн-платежи защищены SSL-сертификатом и проходят через 
                      защищенные каналы банков-эквайеров. Мы не храним данные ваших карт.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="Lock" className="w-4 h-4 text-honey" />
                        <span className="text-sm text-forest">SSL защита</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Shield" className="w-4 h-4 text-honey" />
                        <span className="text-sm text-forest">PCI DSS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calculator" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brown mb-4">Калькулятор доставки</h2>
              <p className="text-forest text-lg">Рассчитайте стоимость доставки вашего заказа</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="border-honey-light">
                <CardHeader>
                  <CardTitle className="text-brown">Параметры заказа</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-brown mb-2">
                      Вес заказа (кг)
                    </label>
                    <Input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      min="0.1"
                      step="0.1"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-brown mb-2">
                      Расстояние от МКАД (км)
                    </label>
                    <Input
                      type="number"
                      value={distance}
                      onChange={(e) => setDistance(Number(e.target.value))}
                      min="0"
                      className="w-full"
                    />
                  </div>

                  <div className="bg-cream-light rounded-lg p-4">
                    <h4 className="font-semibold text-brown mb-2">Расчет стоимости:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-forest">Базовая стоимость:</span>
                        <span className="text-brown">300 ₽</span>
                      </div>
                      {distance > 30 && (
                        <div className="flex justify-between">
                          <span className="text-forest">Доплата за расстояние:</span>
                          <span className="text-brown">+{distance > 50 ? (distance > 100 ? 300 : 200) : 100} ₽</span>
                        </div>
                      )}
                      {weight > 3 && (
                        <div className="flex justify-between">
                          <span className="text-forest">Доплата за вес:</span>
                          <span className="text-brown">+{(weight - 3) * 50} ₽</span>
                        </div>
                      )}
                      <hr className="border-honey-light" />
                      <div className="flex justify-between font-semibold">
                        <span className="text-brown">Итого:</span>
                        <span className="text-honey text-lg">{calculateDelivery()} ₽</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button className="bg-honey hover:bg-honey-dark text-white">
                      <Icon name="Calculator" className="w-4 h-4 mr-2" />
                      Оформить заказ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Delivery;