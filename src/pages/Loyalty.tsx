import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Loyalty = () => {
  const [userLevel, setUserLevel] = useState("bronze");
  const [currentPoints, setCurrentPoints] = useState(250);
  const [totalSpent, setTotalSpent] = useState(3500);

  const levels = [
    {
      id: "bronze",
      name: "Бронзовый",
      minSpent: 0,
      maxSpent: 4999,
      discount: 0,
      bonusRate: 3,
      color: "bg-amber-100 text-amber-800",
      icon: "Medal",
      benefits: [
        "Накопление бонусных баллов",
        "Уведомления о новинках",
        "Доступ к акциям"
      ]
    },
    {
      id: "silver",
      name: "Серебряный",
      minSpent: 5000,
      maxSpent: 14999,
      discount: 5,
      bonusRate: 5,
      color: "bg-gray-100 text-gray-800",
      icon: "Award",
      benefits: [
        "Скидка 5% на все товары",
        "Ускоренное начисление бонусов",
        "Приоритетная поддержка",
        "Эксклюзивные предложения"
      ]
    },
    {
      id: "gold",
      name: "Золотой",
      minSpent: 15000,
      maxSpent: 29999,
      discount: 10,
      bonusRate: 7,
      color: "bg-yellow-100 text-yellow-800",
      icon: "Crown",
      benefits: [
        "Скидка 10% на все товары",
        "Максимальное начисление бонусов",
        "Персональный менеджер",
        "Бесплатная доставка",
        "Подарки к заказам"
      ]
    },
    {
      id: "platinum",
      name: "Платиновый",
      minSpent: 30000,
      maxSpent: null,
      discount: 15,
      bonusRate: 10,
      color: "bg-purple-100 text-purple-800",
      icon: "Gem",
      benefits: [
        "Скидка 15% на все товары",
        "Максимальные бонусы",
        "VIP поддержка 24/7",
        "Бесплатная экспресс-доставка",
        "Эксклюзивные продукты",
        "Приглашения на мероприятия"
      ]
    }
  ];

  const bonusHistory = [
    {
      id: 1,
      date: "2024-01-15",
      type: "earned",
      amount: 71,
      description: "Покупка: Липовый мед × 2, Гречишный мед × 1",
      orderId: "ORD-2024-001"
    },
    {
      id: 2,
      date: "2024-01-10",
      type: "used",
      amount: -50,
      description: "Оплата бонусами: Медовые соты",
      orderId: "ORD-2024-002"
    },
    {
      id: 3,
      date: "2024-01-05",
      type: "earned",
      amount: 48,
      description: "Покупка: Цветочный мед × 2, Прополис настойка × 1",
      orderId: "ORD-2023-045"
    },
    {
      id: 4,
      date: "2023-12-28",
      type: "bonus",
      amount: 100,
      description: "Бонус за отзыв о товаре",
      orderId: null
    },
    {
      id: 5,
      date: "2023-12-20",
      type: "earned",
      amount: 35,
      description: "Покупка: Пчелиный воск × 3",
      orderId: "ORD-2023-044"
    }
  ];

  const currentLevelInfo = levels.find(level => level.id === userLevel);
  const nextLevel = levels.find(level => level.minSpent > totalSpent);
  const progressToNext = nextLevel ? 
    ((totalSpent - currentLevelInfo.minSpent) / (nextLevel.minSpent - currentLevelInfo.minSpent)) * 100 : 100;

  const specialOffers = [
    {
      id: 1,
      title: "Двойные бонусы на липовый мед",
      description: "Получайте в 2 раза больше бонусов при покупке липового меда",
      validUntil: "2024-02-01",
      minLevel: "bronze",
      discount: null,
      bonusMultiplier: 2
    },
    {
      id: 2,
      title: "Скидка 20% на первый заказ",
      description: "Специальная скидка для новых клиентов программы лояльности",
      validUntil: "2024-01-31",
      minLevel: "bronze",
      discount: 20,
      bonusMultiplier: null
    },
    {
      id: 3,
      title: "Бесплатная доставка для золотых клиентов",
      description: "Золотые и платиновые клиенты получают бесплатную доставку на все заказы",
      validUntil: "Постоянно",
      minLevel: "gold",
      discount: null,
      bonusMultiplier: null
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTransactionIcon = (type: string) => {
    const icons = {
      earned: "Plus",
      used: "Minus",
      bonus: "Gift"
    };
    return icons[type] || "Circle";
  };

  const getTransactionColor = (type: string) => {
    const colors = {
      earned: "text-green-600",
      used: "text-red-600",
      bonus: "text-blue-600"
    };
    return colors[type] || "text-gray-600";
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gift" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Программа лояльности</h1>
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
            Программа лояльности "Медовый клуб"
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Покупайте мед и получайте бонусы, скидки и эксклюзивные предложения. 
            Чем больше покупаете, тем больше выгода!
          </p>
        </div>

        {/* Current Status */}
        <div className="bg-gradient-to-r from-honey-light to-cream rounded-lg p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-honey-light">
              <CardContent className="p-6 text-center">
                <Icon name={currentLevelInfo.icon} className="w-12 h-12 text-honey mx-auto mb-3" />
                <Badge className={currentLevelInfo.color + " text-lg px-4 py-2"}>
                  {currentLevelInfo.name} клиент
                </Badge>
                <div className="mt-3 text-sm text-forest">
                  Ваш текущий статус
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-honey-light">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-honey mb-2">{currentPoints}</div>
                <div className="text-forest mb-2">бонусных баллов</div>
                <div className="text-sm text-forest">
                  = {currentPoints} рублей к оплате
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-honey-light">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-honey mb-2">{totalSpent}</div>
                <div className="text-forest mb-2">рублей потрачено</div>
                <div className="text-sm text-forest">
                  Скидка: {currentLevelInfo.discount}%
                </div>
              </CardContent>
            </Card>
          </div>
          
          {nextLevel && (
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-brown font-medium">
                  Прогресс до уровня "{nextLevel.name}"
                </span>
                <span className="text-forest">
                  {nextLevel.minSpent - totalSpent} ₽ до следующего уровня
                </span>
              </div>
              <Progress value={progressToNext} className="h-3" />
            </div>
          )}
        </div>

        <Tabs defaultValue="levels" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="levels">Уровни</TabsTrigger>
            <TabsTrigger value="history">История</TabsTrigger>
            <TabsTrigger value="offers">Предложения</TabsTrigger>
            <TabsTrigger value="rules">Правила</TabsTrigger>
          </TabsList>

          {/* Levels */}
          <TabsContent value="levels" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {levels.map((level) => (
                <Card 
                  key={level.id} 
                  className={`border-honey-light ${
                    level.id === userLevel ? 'ring-2 ring-honey shadow-lg' : ''
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <Icon name={level.icon} className="w-12 h-12 text-honey mx-auto mb-4" />
                    <Badge className={level.color + " text-lg px-4 py-2 mb-4"}>
                      {level.name}
                    </Badge>
                    
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-forest">
                        Потратить: {level.minSpent.toLocaleString()} - {level.maxSpent?.toLocaleString() || "∞"} ₽
                      </div>
                      {level.discount > 0 && (
                        <div className="text-lg font-semibold text-honey">
                          Скидка {level.discount}%
                        </div>
                      )}
                      <div className="text-sm text-forest">
                        Бонусы: {level.bonusRate}% с покупок
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {level.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs text-forest">
                          <Icon name="Check" className="w-3 h-3 text-honey flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* History */}
          <TabsContent value="history" className="space-y-6">
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">История бонусов</CardTitle>
                <p className="text-forest">Все операции с бонусными баллами</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bonusHistory.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border border-honey-light rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'earned' ? 'bg-green-100' :
                          transaction.type === 'used' ? 'bg-red-100' : 'bg-blue-100'
                        }`}>
                          <Icon 
                            name={getTransactionIcon(transaction.type)} 
                            className={`w-5 h-5 ${getTransactionColor(transaction.type)}`} 
                          />
                        </div>
                        
                        <div>
                          <div className="font-medium text-brown">{transaction.description}</div>
                          <div className="text-sm text-forest">{formatDate(transaction.date)}</div>
                          {transaction.orderId && (
                            <div className="text-xs text-forest">Заказ: {transaction.orderId}</div>
                          )}
                        </div>
                      </div>
                      
                      <div className={`text-lg font-semibold ${getTransactionColor(transaction.type)}`}>
                        {transaction.amount > 0 ? '+' : ''}{transaction.amount} б.
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Special Offers */}
          <TabsContent value="offers" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialOffers.map((offer) => (
                <Card key={offer.id} className="border-honey-light">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Icon name="Gift" className="w-8 h-8 text-honey" />
                      <Badge className="bg-honey text-white">
                        {levels.find(l => l.id === offer.minLevel)?.name}+
                      </Badge>
                    </div>
                    
                    <h3 className="font-semibold text-brown mb-2">{offer.title}</h3>
                    <p className="text-sm text-forest mb-4">{offer.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-forest">Действует до:</span>
                        <span className="text-brown">{offer.validUntil}</span>
                      </div>
                      
                      {offer.discount && (
                        <div className="flex justify-between">
                          <span className="text-forest">Скидка:</span>
                          <span className="text-honey font-semibold">{offer.discount}%</span>
                        </div>
                      )}
                      
                      {offer.bonusMultiplier && (
                        <div className="flex justify-between">
                          <span className="text-forest">Бонусы:</span>
                          <span className="text-honey font-semibold">×{offer.bonusMultiplier}</span>
                        </div>
                      )}
                    </div>
                    
                    <Button className="w-full mt-4 bg-honey hover:bg-honey-dark text-white">
                      Использовать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Rules */}
          <TabsContent value="rules" className="space-y-6">
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Правила программы лояльности</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Начисление бонусов:</h4>
                    <ul className="space-y-2 text-forest">
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span>Бонусы начисляются после получения заказа</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span>Размер бонуса зависит от вашего уровня</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span>Бонусы не начисляются при оплате бонусами</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span>Дополнительные бонусы за отзывы и рекомендации</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Использование бонусов:</h4>
                    <ul className="space-y-2 text-forest">
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span>1 бонус = 1 рубль при оплате</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span>Можно оплатить до 50% стоимости заказа</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span>Бонусы действуют 12 месяцев</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span>Минимальная сумма для использования: 100 ₽</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-honey-light rounded-lg">
                  <h4 className="font-semibold text-brown mb-3">Важная информация:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-forest">
                    <div>
                      <Icon name="Info" className="w-4 h-4 inline mr-2 text-honey" />
                      Уровень определяется суммой всех покупок
                    </div>
                    <div>
                      <Icon name="Info" className="w-4 h-4 inline mr-2 text-honey" />
                      Скидки и бонусы не суммируются с другими акциями
                    </div>
                    <div>
                      <Icon name="Info" className="w-4 h-4 inline mr-2 text-honey" />
                      Статус пересматривается каждые 12 месяцев
                    </div>
                    <div>
                      <Icon name="Info" className="w-4 h-4 inline mr-2 text-honey" />
                      Бонусы сгорают через 12 месяцев неактивности
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
            <CardContent className="p-8 text-center">
              <Icon name="Star" className="w-12 h-12 text-honey mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brown mb-4">
                Присоединяйтесь к программе лояльности
              </h3>
              <p className="text-forest mb-6 max-w-md mx-auto">
                Регистрация бесплатная. Начните накапливать бонусы уже с первой покупки!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-honey hover:bg-honey-dark text-white">
                  <Icon name="UserPlus" className="w-4 h-4 mr-2" />
                  Зарегистрироваться
                </Button>
                <Button variant="outline">
                  <Icon name="ShoppingBag" className="w-4 h-4 mr-2" />
                  Начать покупки
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Loyalty;