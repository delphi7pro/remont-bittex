import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Promotions = () => {
  const [promoCode, setPromoCode] = useState("");

  const activePromotions = [
    {
      id: 1,
      title: "Зимняя распродажа",
      description: "Скидки до 25% на весь ассортимент меда",
      discount: 25,
      type: "percentage",
      startDate: "2024-01-01",
      endDate: "2024-01-31",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      conditions: "При заказе от 1500 рублей",
      code: "WINTER25",
      featured: true,
      products: ["Все виды меда"],
      used: 156,
      limit: 500
    },
    {
      id: 2,
      title: "Новый клиент",
      description: "Специальная скидка для первого заказа",
      discount: 15,
      type: "percentage",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      conditions: "Только для новых покупателей",
      code: "NEWCLIENT15",
      featured: false,
      products: ["Весь ассортимент"],
      used: 89,
      limit: null
    },
    {
      id: 3,
      title: "Комплект здоровья",
      description: "Мед + прополис + пыльца со скидкой",
      discount: 500,
      type: "fixed",
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      conditions: "При покупке комплекта из 3 товаров",
      code: "HEALTH500",
      featured: true,
      products: ["Мед", "Прополис", "Пыльца"],
      used: 23,
      limit: 100
    },
    {
      id: 4,
      title: "Бесплатная доставка",
      description: "Доставка за наш счет при заказе от 2000 ₽",
      discount: 0,
      type: "delivery",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg",
      conditions: "Заказ от 2000 рублей",
      code: "FREEDEL",
      featured: false,
      products: ["Весь ассортимент"],
      used: 234,
      limit: null
    },
    {
      id: 5,
      title: "Двойные бонусы",
      description: "Удвоенные бонусные баллы за покупки",
      discount: 0,
      type: "bonus",
      startDate: "2024-01-20",
      endDate: "2024-01-27",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      conditions: "На липовый и цветочный мед",
      code: "DOUBLE",
      featured: true,
      products: ["Липовый мед", "Цветочный мед"],
      used: 67,
      limit: 200
    },
    {
      id: 6,
      title: "Подарок к заказу",
      description: "Баночка меда 100г в подарок",
      discount: 0,
      type: "gift",
      startDate: "2024-01-10",
      endDate: "2024-02-10",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      conditions: "При заказе от 3000 рублей",
      code: "GIFT100",
      featured: false,
      products: ["Весь ассортимент"],
      used: 45,
      limit: 150
    }
  ];

  const expiredPromotions = [
    {
      id: 7,
      title: "Новогодняя акция",
      description: "Скидка 20% на новогодние подарочные наборы",
      discount: 20,
      endDate: "2023-12-31",
      used: 89
    },
    {
      id: 8,
      title: "Черная пятница",
      description: "Максимальные скидки до 30%",
      discount: 30,
      endDate: "2023-11-24",
      used: 156
    }
  ];

  const getPromotionIcon = (type: string) => {
    const icons = {
      percentage: "Percent",
      fixed: "DollarSign",
      delivery: "Truck",
      bonus: "Gift",
      gift: "Package"
    };
    return icons[type] || "Tag";
  };

  const getPromotionBadge = (type: string, discount: number) => {
    switch (type) {
      case "percentage":
        return `${discount}%`;
      case "fixed":
        return `${discount} ₽`;
      case "delivery":
        return "Доставка";
      case "bonus":
        return "×2 бонуса";
      case "gift":
        return "Подарок";
      default:
        return "Акция";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDaysLeft = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const copyPromoCode = (code: string) => {
    navigator.clipboard.writeText(code);
    // Здесь можно добавить уведомление о копировании
  };

  const featuredPromotions = activePromotions.filter(promo => promo.featured);
  const regularPromotions = activePromotions.filter(promo => !promo.featured);

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Tag" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Акции и скидки</h1>
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
            Выгодные предложения
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Следите за нашими акциями и специальными предложениями, чтобы покупать качественный мед еще выгоднее
          </p>
        </div>

        {/* Promo Code Input */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold text-brown mb-2">Есть промокод?</h3>
            <p className="text-forest">Введите промокод для получения скидки</p>
          </div>
          <div className="flex space-x-4 max-w-md mx-auto">
            <Input
              placeholder="Введите промокод"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
              className="flex-1"
            />
            <Button className="bg-honey hover:bg-honey-dark text-white">
              <Icon name="Check" className="w-4 h-4 mr-2" />
              Применить
            </Button>
          </div>
        </div>

        {/* Featured Promotions */}
        {featuredPromotions.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-brown mb-6">Горячие предложения</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPromotions.map((promo) => (
                <Card key={promo.id} className="border-honey-light hover:shadow-lg transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-sm font-semibold">
                    ХИТ
                  </div>
                  
                  <div className="relative">
                    <img 
                      src={promo.image} 
                      alt={promo.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-honey text-white text-lg px-3 py-1">
                        {getPromotionBadge(promo.type, promo.discount)}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-brown text-lg">
                      {promo.title}
                    </CardTitle>
                    <p className="text-sm text-forest">
                      {promo.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-forest">Действует до:</span>
                        <span className="text-brown font-medium">
                          {formatDate(promo.endDate)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-forest">Осталось дней:</span>
                        <Badge className={getDaysLeft(promo.endDate) <= 3 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}>
                          {getDaysLeft(promo.endDate)}
                        </Badge>
                      </div>
                      
                      <div className="text-sm">
                        <span className="text-forest">Условия: </span>
                        <span className="text-brown">{promo.conditions}</span>
                      </div>
                      
                      {promo.limit && (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-forest">Использовано:</span>
                            <span className="text-brown">{promo.used} из {promo.limit}</span>
                          </div>
                          <Progress value={(promo.used / promo.limit) * 100} className="h-2" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-4 p-3 bg-honey-light rounded-lg">
                      <Icon name="Copy" className="w-4 h-4 text-honey" />
                      <code className="flex-1 font-mono text-brown">{promo.code}</code>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => copyPromoCode(promo.code)}
                      >
                        Копировать
                      </Button>
                    </div>
                    
                    <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                      <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                      Использовать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Promotions */}
        {regularPromotions.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-brown mb-6">Текущие акции</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPromotions.map((promo) => (
                <Card key={promo.id} className="border-honey-light hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={promo.image} 
                      alt={promo.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-honey text-white">
                        {getPromotionBadge(promo.type, promo.discount)}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-brown text-lg">
                      {promo.title}
                    </CardTitle>
                    <p className="text-sm text-forest">
                      {promo.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-forest">До:</span>
                        <span className="text-brown">{formatDate(promo.endDate)}</span>
                      </div>
                      
                      <div className="text-sm">
                        <span className="text-forest">Условия: </span>
                        <span className="text-brown">{promo.conditions}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {promo.products.map((product, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-4 p-3 bg-honey-light rounded-lg">
                      <code className="flex-1 font-mono text-brown">{promo.code}</code>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => copyPromoCode(promo.code)}
                      >
                        <Icon name="Copy" className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      <Icon name="Eye" className="w-4 h-4 mr-2" />
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Expired Promotions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-brown mb-6">Завершенные акции</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {expiredPromotions.map((promo) => (
              <Card key={promo.id} className="border-honey-light opacity-75">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-brown mb-2">{promo.title}</h4>
                      <p className="text-sm text-forest">{promo.description}</p>
                    </div>
                    <Badge className="bg-gray-100 text-gray-600">
                      Завершена
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-forest">Завершилась:</span>
                    <span className="text-brown">{formatDate(promo.endDate)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-forest">Участников:</span>
                    <span className="text-brown">{promo.used}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Use */}
        <Card className="border-honey-light">
          <CardHeader>
            <CardTitle className="text-brown">Как использовать промокоды</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-brown mb-4">Пошаговая инструкция:</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <div className="font-medium text-brown">Выберите товары</div>
                      <div className="text-sm text-forest">Добавьте нужные товары в корзину</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <div className="font-medium text-brown">Введите промокод</div>
                      <div className="text-sm text-forest">В корзине найдите поле "Промокод"</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <div className="font-medium text-brown">Получите скидку</div>
                      <div className="text-sm text-forest">Скидка применится автоматически</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      4
                    </div>
                    <div>
                      <div className="font-medium text-brown">Оформите заказ</div>
                      <div className="text-sm text-forest">Завершите покупку со скидкой</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-brown mb-4">Важные условия:</h4>
                <ul className="space-y-2 text-forest">
                  <li className="flex items-start space-x-2">
                    <Icon name="AlertCircle" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                    <span>Промокоды нельзя суммировать</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="AlertCircle" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                    <span>Один промокод на один заказ</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="AlertCircle" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                    <span>Проверяйте срок действия</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="AlertCircle" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                    <span>Соблюдайте минимальную сумму заказа</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-honey-light rounded-lg">
                  <p className="text-sm text-brown">
                    <Icon name="Info" className="w-4 h-4 inline mr-2" />
                    Если промокод не работает, проверьте условия акции или свяжитесь с нами
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Newsletter Subscription */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
            <CardContent className="p-8 text-center">
              <Icon name="Bell" className="w-12 h-12 text-honey mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brown mb-4">
                Не пропустите новые акции
              </h3>
              <p className="text-forest mb-6 max-w-md mx-auto">
                Подпишитесь на уведомления о новых акциях, скидках и специальных предложениях
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  placeholder="Ваш email"
                  className="flex-1"
                />
                <Button className="bg-honey hover:bg-honey-dark text-white">
                  <Icon name="Send" className="w-4 h-4 mr-2" />
                  Подписаться
                </Button>
              </div>
              <p className="text-xs text-forest mt-3">
                Отправляем только важные уведомления, не спамим
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Promotions;