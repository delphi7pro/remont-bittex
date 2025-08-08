import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "Мария",
    lastName: "Козлова",
    email: "maria.kozlova@email.com",
    phone: "+7 (999) 123-45-67",
    birthDate: "1985-03-15",
    city: "Москва"
  });

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Домашний адрес",
      address: "г. Москва, ул. Тверская, д. 10, кв. 25",
      isDefault: true
    },
    {
      id: 2,
      name: "Рабочий адрес",
      address: "г. Москва, ул. Арбат, д. 5, офис 301",
      isDefault: false
    }
  ]);

  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "delivered",
      total: 1420,
      items: [
        { name: "Липовый мед", quantity: 2, price: 450 },
        { name: "Гречишный мед", quantity: 1, price: 520 }
      ]
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-10",
      status: "processing",
      total: 680,
      items: [
        { name: "Медовые соты", quantity: 1, price: 680 }
      ]
    },
    {
      id: "ORD-2023-045",
      date: "2023-12-20",
      status: "delivered",
      total: 950,
      items: [
        { name: "Цветочный мед", quantity: 2, price: 380 },
        { name: "Прополис настойка", quantity: 1, price: 350 }
      ]
    }
  ];

  const bonuses = {
    current: 250,
    total: 1500,
    nextLevel: 2000,
    level: "Золотой клиент"
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      delivered: { label: "Доставлен", variant: "default" as const, color: "bg-green-100 text-green-800" },
      processing: { label: "В обработке", variant: "secondary" as const, color: "bg-yellow-100 text-yellow-800" },
      shipped: { label: "Отправлен", variant: "outline" as const, color: "bg-blue-100 text-blue-800" },
      cancelled: { label: "Отменен", variant: "destructive" as const, color: "bg-red-100 text-red-800" }
    };
    
    const statusInfo = statusMap[status] || statusMap.processing;
    return (
      <Badge className={statusInfo.color}>
        {statusInfo.label}
      </Badge>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleUserInfoChange = (field: string, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="User" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Личный кабинет</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-honey-light to-cream rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-brown mb-2">
                Добро пожаловать, {userInfo.firstName}!
              </h2>
              <p className="text-forest">
                Статус: <Badge className="bg-honey text-white ml-2">{bonuses.level}</Badge>
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-honey">{bonuses.current}</div>
              <div className="text-sm text-forest">бонусных баллов</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders">Заказы</TabsTrigger>
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="addresses">Адреса</TabsTrigger>
            <TabsTrigger value="bonuses">Бонусы</TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">История заказов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <Card key={order.id} className="border-honey-light">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-semibold text-brown">Заказ #{order.id}</h4>
                            <p className="text-sm text-forest">{formatDate(order.date)}</p>
                          </div>
                          <div className="text-right">
                            {getStatusBadge(order.status)}
                            <div className="text-lg font-semibold text-honey mt-1">
                              {order.total} ₽
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span className="text-forest">
                                {item.name} × {item.quantity}
                              </span>
                              <span className="text-brown">{item.price * item.quantity} ₽</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex space-x-3">
                          <Button variant="outline" size="sm">
                            <Icon name="Eye" className="w-4 h-4 mr-2" />
                            Подробнее
                          </Button>
                          {order.status === "delivered" && (
                            <Button variant="outline" size="sm">
                              <Icon name="RotateCcw" className="w-4 h-4 mr-2" />
                              Повторить заказ
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Личная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Имя</Label>
                    <Input
                      id="firstName"
                      value={userInfo.firstName}
                      onChange={(e) => handleUserInfoChange("firstName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input
                      id="lastName"
                      value={userInfo.lastName}
                      onChange={(e) => handleUserInfoChange("lastName", e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => handleUserInfoChange("email", e.target.value)}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      value={userInfo.phone}
                      onChange={(e) => handleUserInfoChange("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">Город</Label>
                    <Input
                      id="city"
                      value={userInfo.city}
                      onChange={(e) => handleUserInfoChange("city", e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="birthDate">Дата рождения</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={userInfo.birthDate}
                    onChange={(e) => handleUserInfoChange("birthDate", e.target.value)}
                  />
                </div>
                
                <Button className="bg-honey hover:bg-honey-dark text-white">
                  <Icon name="Save" className="w-4 h-4 mr-2" />
                  Сохранить изменения
                </Button>
              </CardContent>
            </Card>

            {/* Change Password */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Изменить пароль</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword">Текущий пароль</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div>
                  <Label htmlFor="newPassword">Новый пароль</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Button variant="outline">
                  <Icon name="Key" className="w-4 h-4 mr-2" />
                  Изменить пароль
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses" className="space-y-6">
            <Card className="border-honey-light">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-brown">Адреса доставки</CardTitle>
                  <Button className="bg-honey hover:bg-honey-dark text-white">
                    <Icon name="Plus" className="w-4 h-4 mr-2" />
                    Добавить адрес
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {addresses.map((address) => (
                    <Card key={address.id} className="border-honey-light">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold text-brown">{address.name}</h4>
                              {address.isDefault && (
                                <Badge className="bg-honey text-white">По умолчанию</Badge>
                              )}
                            </div>
                            <p className="text-forest">{address.address}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Icon name="Edit" className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Icon name="Trash2" className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bonuses Tab */}
          <TabsContent value="bonuses" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-honey-light">
                <CardHeader>
                  <CardTitle className="text-brown">Бонусный баланс</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-honey mb-2">
                      {bonuses.current}
                    </div>
                    <div className="text-forest mb-4">бонусных баллов</div>
                    <div className="text-sm text-forest">
                      1 балл = 1 рубль при оплате заказа
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-honey-light">
                <CardHeader>
                  <CardTitle className="text-brown">Статус клиента</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <Badge className="bg-honey text-white text-lg px-4 py-2 mb-4">
                      {bonuses.level}
                    </Badge>
                    <div className="text-sm text-forest mb-2">
                      Потрачено: {bonuses.total} ₽
                    </div>
                    <div className="text-sm text-forest">
                      До следующего уровня: {bonuses.nextLevel - bonuses.total} ₽
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div 
                        className="bg-honey h-2 rounded-full" 
                        style={{ width: `${(bonuses.total / bonuses.nextLevel) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bonus History */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">История бонусов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-honey-light">
                    <div>
                      <div className="font-medium text-brown">Покупка #ORD-2024-001</div>
                      <div className="text-sm text-forest">15 января 2024</div>
                    </div>
                    <div className="text-green-600 font-semibold">+71 балл</div>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-honey-light">
                    <div>
                      <div className="font-medium text-brown">Использование бонусов</div>
                      <div className="text-sm text-forest">10 января 2024</div>
                    </div>
                    <div className="text-red-600 font-semibold">-50 баллов</div>
                  </div>
                  
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <div className="font-medium text-brown">Покупка #ORD-2023-045</div>
                      <div className="text-sm text-forest">20 декабря 2023</div>
                    </div>
                    <div className="text-green-600 font-semibold">+48 баллов</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;