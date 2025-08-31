import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Prices = () => {
  const [selectedService, setSelectedService] = useState("refrigerators");

  const priceCategories = [
    { id: "refrigerators", name: "Холодильники", icon: "Refrigerator" },
    { id: "washing", name: "Стиральные машины", icon: "Washing" },
    { id: "dishwashers", name: "Посудомойки", icon: "Utensils" },
    { id: "small", name: "Мелкая техника", icon: "Zap" }
  ];

  const prices = {
    refrigerators: [
      { service: "Диагностика", price: "500 ₽", description: "Выявление причины поломки" },
      { service: "Замена компрессора", price: "от 8000 ₽", description: "С учетом стоимости детали" },
      { service: "Замена терморегулятора", price: "от 2500 ₽", description: "Включая запчасть" },
      { service: "Устранение протечки", price: "от 1500 ₽", description: "Замена уплотнителей" },
      { service: "Замена вентилятора", price: "от 3000 ₽", description: "Оригинальная запчасть" },
      { service: "Ремонт электроники", price: "от 2000 ₽", description: "Модуль управления" }
    ],
    washing: [
      { service: "Диагностика", price: "500 ₽", description: "Определение неисправности" },
      { service: "Замена подшипников", price: "от 4500 ₽", description: "Включая работу и детали" },
      { service: "Замена ТЭНа", price: "от 2200 ₽", description: "Нагревательный элемент" },
      { service: "Замена помпы", price: "от 2800 ₽", description: "Сливной насос" },
      { service: "Замена амортизаторов", price: "от 2000 ₽", description: "Комплект амортизаторов" },
      { service: "Ремонт блока управления", price: "от 3500 ₽", description: "Электронный модуль" }
    ],
    dishwashers: [
      { service: "Диагностика", price: "500 ₽", description: "Поиск неисправности" },
      { service: "Замена циркуляционного насоса", price: "от 3500 ₽", description: "Оригинальная деталь" },
      { service: "Замена ТЭНа", price: "от 2500 ₽", description: "Нагревательный элемент" },
      { service: "Устранение протечки", price: "от 1800 ₽", description: "Замена уплотнителей" },
      { service: "Замена датчиков", price: "от 1500 ₽", description: "Датчики уровня воды" },
      { service: "Чистка фильтров", price: "от 800 ₽", description: "Профилактическая чистка" }
    ],
    small: [
      { service: "Диагностика", price: "300 ₽", description: "Определение поломки" },
      { service: "Ремонт микроволновки", price: "от 800 ₽", description: "Замена магнетрона" },
      { service: "Ремонт мультиварки", price: "от 600 ₽", description: "Замена нагревательного элемента" },
      { service: "Ремонт блендера", price: "от 400 ₽", description: "Замена ножей, мотора" },
      { service: "Ремонт утюга", price: "от 500 ₽", description: "Замена подошвы, ТЭНа" },
      { service: "Ремонт чайника", price: "от 300 ₽", description: "Замена нагревательного элемента" }
    ]
  };

  const additionalServices = [
    { name: "Выезд мастера", price: "Бесплатно*", note: "В пределах МКАД" },
    { name: "Срочный выезд", price: "1000 ₽", note: "В течение 2 часов" },
    { name: "Выезд за МКАД", price: "30 ₽/км", note: "От МКАД до объекта" },
    { name: "Работа в выходные", price: "+50%", note: "К стоимости работ" },
    { name: "Работа в праздники", price: "+100%", note: "К стоимости работ" }
  ];

  const discounts = [
    { condition: "Пенсионерам", discount: "10%", description: "При предъявлении удостоверения" },
    { condition: "Постоянным клиентам", discount: "15%", description: "При повторном обращении" },
    { condition: "Ремонт 2+ приборов", discount: "20%", description: "При одновременном ремонте" },
    { condition: "Студентам", discount: "5%", description: "При предъявлении студенческого" }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="DollarSign" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Цены на услуги</h1>
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
            Прозрачные цены без скрытых доплат
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Все цены указаны с учетом работы мастера. Запчасти оплачиваются отдельно по себестоимости.
          </p>
        </div>

        <Tabs value={selectedService} onValueChange={setSelectedService} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            {priceCategories.map(category => (
              <TabsTrigger key={category.id} value={category.id}>
                <Icon name={category.icon} className="w-4 h-4 mr-2" />
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(prices).map(([categoryId, categoryPrices]) => (
            <TabsContent key={categoryId} value={categoryId}>
              <Card className="border-honey-light">
                <CardHeader>
                  <CardTitle className="text-brown">
                    {priceCategories.find(cat => cat.id === categoryId)?.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-honey-light">
                          <th className="text-left py-3 text-brown">Услуга</th>
                          <th className="text-left py-3 text-brown">Стоимость</th>
                          <th className="text-left py-3 text-brown">Описание</th>
                          <th className="text-center py-3 text-brown">Действие</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categoryPrices.map((item, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-4 text-forest font-medium">{item.service}</td>
                            <td className="py-4 text-honey font-bold text-lg">{item.price}</td>
                            <td className="py-4 text-forest text-sm">{item.description}</td>
                            <td className="py-4 text-center">
                              <Button size="sm" className="bg-honey hover:bg-honey-dark text-white">
                                Заказать
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Services */}
        <div className="mt-12">
          <Card className="border-honey-light">
            <CardHeader>
              <CardTitle className="text-brown">Дополнительные услуги</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border border-honey-light rounded-lg">
                    <div>
                      <h4 className="font-semibold text-brown">{service.name}</h4>
                      <p className="text-sm text-forest">{service.note}</p>
                    </div>
                    <span className="font-bold text-honey">{service.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Discounts */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
            <CardHeader>
              <CardTitle className="text-brown">Скидки и акции</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {discounts.map((discount, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg">
                    <div className="w-12 h-12 bg-honey rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{discount.discount}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brown">{discount.condition}</h4>
                      <p className="text-sm text-forest">{discount.description}</p>
                    </div>
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
              <Icon name="Calculator" className="w-12 h-12 text-honey mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brown mb-4">
                Точная стоимость после диагностики
              </h3>
              <p className="text-forest mb-6 max-w-md mx-auto">
                Окончательная цена определяется после осмотра техники мастером
              </p>
              <Button className="bg-honey hover:bg-honey-dark text-white">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Вызвать мастера для оценки
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Prices;