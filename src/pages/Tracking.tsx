import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [orderData, setOrderData] = useState(null);

  // Пример данных заказа
  const sampleOrder = {
    id: "ORD-2024-001",
    status: "in_transit",
    trackingNumber: "123456789",
    orderDate: "2024-01-15",
    estimatedDelivery: "2024-01-17",
    deliveryMethod: "courier",
    items: [
      { name: "Липовый мед", quantity: 2, price: 450, weight: "500г" },
      { name: "Гречишный мед", quantity: 1, price: 520, weight: "500г" }
    ],
    total: 1420,
    customer: {
      name: "Мария Козлова",
      phone: "+7 (999) 123-45-67",
      address: "г. Москва, ул. Тверская, д. 10, кв. 25"
    },
    timeline: [
      {
        status: "confirmed",
        title: "Заказ подтвержден",
        description: "Ваш заказ принят в обработку",
        date: "2024-01-15T10:30:00",
        completed: true
      },
      {
        status: "packed",
        title: "Заказ упакован",
        description: "Товары упакованы и готовы к отправке",
        date: "2024-01-15T16:45:00",
        completed: true
      },
      {
        status: "shipped",
        title: "Заказ отправлен",
        description: "Передан курьерской службе",
        date: "2024-01-16T09:15:00",
        completed: true
      },
      {
        status: "in_transit",
        title: "В пути",
        description: "Заказ находится в пути к получателю",
        date: "2024-01-16T14:20:00",
        completed: true
      },
      {
        status: "out_for_delivery",
        title: "Передан курьеру",
        description: "Заказ у курьера, ожидается доставка",
        date: null,
        completed: false
      },
      {
        status: "delivered",
        title: "Доставлен",
        description: "Заказ успешно доставлен получателю",
        date: null,
        completed: false
      }
    ]
  };

  const statusMap = {
    confirmed: { label: "Подтвержден", color: "bg-blue-100 text-blue-800", icon: "CheckCircle" },
    packed: { label: "Упакован", color: "bg-purple-100 text-purple-800", icon: "Package" },
    shipped: { label: "Отправлен", color: "bg-orange-100 text-orange-800", icon: "Truck" },
    in_transit: { label: "В пути", color: "bg-yellow-100 text-yellow-800", icon: "MapPin" },
    out_for_delivery: { label: "У курьера", color: "bg-indigo-100 text-indigo-800", icon: "User" },
    delivered: { label: "Доставлен", color: "bg-green-100 text-green-800", icon: "CheckCircle2" }
  };

  const deliveryMethods = {
    courier: "Курьерская доставка",
    post: "Почта России",
    pickup: "Самовывоз",
    cdek: "СДЭК"
  };

  const handleTrack = () => {
    if (trackingNumber === "123456789" || trackingNumber === "ORD-2024-001") {
      setOrderData(sampleOrder);
    } else {
      setOrderData(null);
      // Здесь будет запрос к API для получения данных заказа
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDateShort = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCurrentStatus = () => {
    if (!orderData) return null;
    const currentStep = orderData.timeline.find(step => step.completed && step.date);
    return currentStep ? statusMap[currentStep.status] : null;
  };

  const getProgress = () => {
    if (!orderData) return 0;
    const completedSteps = orderData.timeline.filter(step => step.completed).length;
    return (completedSteps / orderData.timeline.length) * 100;
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Package" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Отслеживание заказа</h1>
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
            Отследите ваш заказ
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Введите номер заказа или трек-номер для получения актуальной информации о статусе доставки
          </p>
        </div>

        {/* Tracking Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="border-honey-light">
            <CardContent className="p-6">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Input
                    placeholder="Введите номер заказа или трек-номер"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="text-lg h-12"
                  />
                  <p className="text-sm text-forest mt-2">
                    Например: ORD-2024-001 или 123456789
                  </p>
                </div>
                <Button 
                  onClick={handleTrack}
                  className="bg-honey hover:bg-honey-dark text-white h-12 px-8"
                >
                  <Icon name="Search" className="w-5 h-5 mr-2" />
                  Отследить
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Information */}
        {orderData ? (
          <div className="space-y-8">
            {/* Order Header */}
            <Card className="border-honey-light">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-brown mb-2">Заказ #{orderData.id}</h3>
                    <p className="text-forest">от {formatDateShort(orderData.orderDate)}</p>
                    <p className="text-forest">Сумма: {orderData.total} ₽</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-2">Получатель</h4>
                    <p className="text-forest">{orderData.customer.name}</p>
                    <p className="text-forest">{orderData.customer.phone}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-2">Доставка</h4>
                    <p className="text-forest">{deliveryMethods[orderData.deliveryMethod]}</p>
                    <p className="text-forest">До: {formatDateShort(orderData.estimatedDelivery)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Status */}
            <Card className="border-honey-light">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-brown mb-2">Текущий статус</h3>
                    <div className="flex items-center space-x-3">
                      <Badge className={getCurrentStatus()?.color}>
                        <Icon name={getCurrentStatus()?.icon} className="w-4 h-4 mr-2" />
                        {getCurrentStatus()?.label}
                      </Badge>
                      <span className="text-forest">
                        Прогресс: {Math.round(getProgress())}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-forest">Ожидаемая доставка:</div>
                    <div className="text-lg font-semibold text-honey">
                      {formatDateShort(orderData.estimatedDelivery)}
                    </div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-honey h-3 rounded-full transition-all duration-500" 
                    style={{ width: `${getProgress()}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">История заказа</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {orderData.timeline.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step.completed ? 'bg-honey text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                        <Icon name={statusMap[step.status]?.icon} className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-semibold ${step.completed ? 'text-brown' : 'text-gray-500'}`}>
                            {step.title}
                          </h4>
                          {step.date && (
                            <span className="text-sm text-forest">
                              {formatDate(step.date)}
                            </span>
                          )}
                        </div>
                        <p className={`text-sm ${step.completed ? 'text-forest' : 'text-gray-400'}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Состав заказа</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-brown">{item.name}</h4>
                        <p className="text-sm text-forest">{item.weight} × {item.quantity}</p>
                      </div>
                      <span className="font-semibold text-honey">
                        {item.price * item.quantity} ₽
                      </span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-brown">Итого:</span>
                  <span className="text-honey">{orderData.total} ₽</span>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Address */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Адрес доставки</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" className="w-5 h-5 text-honey mt-1" />
                  <div>
                    <p className="text-brown font-medium">{orderData.customer.address}</p>
                    <p className="text-forest text-sm">Получатель: {orderData.customer.name}</p>
                    <p className="text-forest text-sm">Телефон: {orderData.customer.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-honey hover:bg-honey-dark text-white">
                <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
                Связаться с курьером
              </Button>
              <Button variant="outline">
                <Icon name="Calendar" className="w-4 h-4 mr-2" />
                Изменить дату доставки
              </Button>
              <Button variant="outline">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Поддержка
              </Button>
            </div>
          </div>
        ) : trackingNumber && (
          <div className="text-center py-12">
            <Icon name="Search" className="w-16 h-16 text-honey mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brown mb-2">Заказ не найден</h3>
            <p className="text-forest mb-4">
              Проверьте правильность введенного номера заказа или трек-номера
            </p>
            <Button onClick={() => setTrackingNumber("")} variant="outline">
              Попробовать еще раз
            </Button>
          </div>
        )}

        {/* Help Section */}
        {!orderData && (
          <div className="mt-12">
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Нужна помощь с отслеживанием?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Где найти номер заказа:</h4>
                    <ul className="space-y-2 text-forest">
                      <li className="flex items-start space-x-2">
                        <Icon name="Mail" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span>В письме-подтверждении заказа</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="User" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span>В личном кабинете на сайте</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="MessageSquare" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span>В SMS-уведомлении</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Receipt" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span>На чеке или накладной</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Контакты службы поддержки:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon name="Phone" className="w-5 h-5 text-honey" />
                        <div>
                          <div className="font-medium text-brown">+7 (999) 123-45-67</div>
                          <div className="text-sm text-forest">Ежедневно 9:00-21:00</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Icon name="Mail" className="w-5 h-5 text-honey" />
                        <div>
                          <div className="font-medium text-brown">support@medovaya-usadba.ru</div>
                          <div className="text-sm text-forest">Ответим в течение часа</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Icon name="MessageCircle" className="w-5 h-5 text-honey" />
                        <div>
                          <div className="font-medium text-brown">Онлайн-чат</div>
                          <div className="text-sm text-forest">Быстрые ответы на вопросы</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Sample Tracking */}
        {!orderData && !trackingNumber && (
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
              <CardContent className="p-8 text-center">
                <Icon name="Eye" className="w-12 h-12 text-honey mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brown mb-4">
                  Попробуйте демо-отслеживание
                </h3>
                <p className="text-forest mb-6 max-w-md mx-auto">
                  Посмотрите, как выглядит отслеживание заказа на примере
                </p>
                <Button 
                  onClick={() => {
                    setTrackingNumber("123456789");
                    setOrderData(sampleOrder);
                  }}
                  className="bg-honey hover:bg-honey-dark text-white"
                >
                  <Icon name="Play" className="w-4 h-4 mr-2" />
                  Показать пример
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;