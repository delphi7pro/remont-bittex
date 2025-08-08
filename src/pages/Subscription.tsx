import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [deliveryFrequency, setDeliveryFrequency] = useState("monthly");
  const [autoRenewal, setAutoRenewal] = useState(true);

  const plans = [
    {
      id: "monthly",
      name: "Ежемесячная подписка",
      description: "Свежий мед каждый месяц",
      discount: 5,
      minProducts: 1,
      maxProducts: 5,
      deliveryFee: 0,
      features: [
        "Скидка 5% на все товары",
        "Бесплатная доставка",
        "Приоритетное обслуживание",
        "Уведомления о новинках"
      ]
    },
    {
      id: "quarterly",
      name: "Квартальная подписка",
      description: "Доставка раз в 3 месяца",
      discount: 10,
      minProducts: 2,
      maxProducts: 8,
      deliveryFee: 0,
      features: [
        "Скидка 10% на все товары",
        "Бесплатная доставка",
        "Эксклюзивные сорта меда",
        "Подарки к заказам",
        "Персональные рекомендации"
      ]
    },
    {
      id: "annual",
      name: "Годовая подписка",
      description: "Максимальная выгода на год",
      discount: 15,
      minProducts: 3,
      maxProducts: 12,
      deliveryFee: 0,
      features: [
        "Скидка 15% на все товары",
        "Бесплатная экспресс-доставка",
        "Эксклюзивные и лимитированные сорта",
        "Ценные подарки",
        "Приглашения на мероприятия",
        "Персональный менеджер"
      ]
    }
  ];

  const products = [
    {
      id: 1,
      name: "Липовый мед",
      price: 450,
      weight: "500г",
      description: "Нежный мед с тонким ароматом",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      popular: true
    },
    {
      id: 2,
      name: "Гречишный мед",
      price: 520,
      weight: "500г",
      description: "Темный мед с насыщенным вкусом",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      popular: true
    },
    {
      id: 3,
      name: "Цветочный мед",
      price: 380,
      weight: "500г",
      description: "Разнотравье с луговых полей",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      popular: false
    },
    {
      id: 4,
      name: "Акациевый мед",
      price: 490,
      weight: "500г",
      description: "Светлый мед, долго не кристаллизуется",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      popular: false
    },
    {
      id: 5,
      name: "Медовые соты",
      price: 680,
      weight: "300г",
      description: "Натуральные соты в меду",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      popular: true
    },
    {
      id: 6,
      name: "Прополис настойка",
      price: 350,
      weight: "30мл",
      description: "Для укрепления иммунитета",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      popular: false
    }
  ];

  const subscriptionBenefits = [
    {
      icon: "Percent",
      title: "Постоянные скидки",
      description: "От 5% до 15% на все товары в зависимости от плана"
    },
    {
      icon: "Truck",
      title: "Бесплатная доставка",
      description: "Доставляем бесплатно по всей России"
    },
    {
      icon: "Calendar",
      title: "Регулярные поставки",
      description: "Мед всегда под рукой, не нужно помнить о заказе"
    },
    {
      icon: "Star",
      title: "Эксклюзивные сорта",
      description: "Доступ к лимитированным и сезонным сортам меда"
    },
    {
      icon: "Gift",
      title: "Подарки",
      description: "Приятные сюрпризы и образцы новых продуктов"
    },
    {
      icon: "Settings",
      title: "Гибкость",
      description: "Изменяйте состав, паузьте или отменяйте в любое время"
    }
  ];

  const currentPlan = plans.find(plan => plan.id === selectedPlan);

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else if (prev.length < currentPlan.maxProducts) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const calculateTotal = () => {
    const selectedProductsData = products.filter(p => selectedProducts.includes(p.id));
    const subtotal = selectedProductsData.reduce((sum, product) => sum + product.price, 0);
    const discount = (subtotal * currentPlan.discount) / 100;
    return subtotal - discount;
  };

  const calculateSavings = () => {
    const selectedProductsData = products.filter(p => selectedProducts.includes(p.id));
    const subtotal = selectedProductsData.reduce((sum, product) => sum + product.price, 0);
    const discount = (subtotal * currentPlan.discount) / 100;
    const deliverySavings = currentPlan.deliveryFee === 0 ? 300 : 0;
    return discount + deliverySavings;
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="RotateCcw" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Подписка на мед</h1>
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
            Подписка на регулярные поставки меда
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Получайте свежий мед регулярно с выгодными скидками. Настройте подписку под свои потребности 
            и никогда не оставайтесь без любимого меда.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {subscriptionBenefits.map((benefit, index) => (
            <Card key={index} className="border-honey-light text-center">
              <CardContent className="p-6">
                <Icon name={benefit.icon} className="w-10 h-10 text-honey mx-auto mb-3" />
                <h3 className="font-semibold text-brown mb-2">{benefit.title}</h3>
                <p className="text-sm text-forest">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Plan Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Plans */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Выберите план подписки</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                  <div className="space-y-4">
                    {plans.map((plan) => (
                      <div key={plan.id} className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        selectedPlan === plan.id ? 'border-honey bg-honey-light' : 'border-gray-200'
                      }`}>
                        <div className="flex items-start space-x-3">
                          <RadioGroupItem value={plan.id} id={plan.id} className="mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <Label htmlFor={plan.id} className="font-semibold text-brown cursor-pointer">
                                {plan.name}
                              </Label>
                              <Badge className="bg-honey text-white">
                                -{plan.discount}%
                              </Badge>
                            </div>
                            <p className="text-sm text-forest mb-3">{plan.description}</p>
                            <div className="grid grid-cols-2 gap-4 text-xs text-forest mb-3">
                              <div>Товаров: {plan.minProducts}-{plan.maxProducts}</div>
                              <div>Доставка: {plan.deliveryFee === 0 ? "Бесплатно" : `${plan.deliveryFee} ₽`}</div>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {plan.features.map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Product Selection */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">
                  Выберите товары ({selectedProducts.length}/{currentPlan.maxProducts})
                </CardTitle>
                <p className="text-forest">
                  Минимум {currentPlan.minProducts}, максимум {currentPlan.maxProducts} товаров
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        selectedProducts.includes(product.id) 
                          ? 'border-honey bg-honey-light' 
                          : 'border-gray-200 hover:border-honey-light'
                      }`}
                      onClick={() => toggleProductSelection(product.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-brown">{product.name}</h4>
                            {product.popular && (
                              <Badge className="bg-honey text-white text-xs">
                                Популярный
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-forest mb-2">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-honey">
                              {Math.round(product.price * (1 - currentPlan.discount / 100))} ₽
                            </span>
                            <span className="text-sm text-forest line-through">
                              {product.price} ₽
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Delivery Settings */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Настройки доставки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-brown font-medium mb-3 block">
                    Частота доставки
                  </Label>
                  <Select value={deliveryFrequency} onValueChange={setDeliveryFrequency}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Каждый месяц</SelectItem>
                      <SelectItem value="bimonthly">Каждые 2 месяца</SelectItem>
                      <SelectItem value="quarterly">Каждые 3 месяца</SelectItem>
                      <SelectItem value="semiannual">Каждые 6 месяцев</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-brown font-medium">Автопродление</Label>
                    <p className="text-sm text-forest">Автоматически продлевать подписку</p>
                  </div>
                  <Switch
                    checked={autoRenewal}
                    onCheckedChange={setAutoRenewal}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="border-honey-light sticky top-4">
              <CardHeader>
                <CardTitle className="text-brown">Ваша подписка</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-4">
                  <Badge className="bg-honey text-white text-lg px-4 py-2">
                    {currentPlan.name}
                  </Badge>
                  <div className="text-sm text-forest mt-2">
                    Скидка {currentPlan.discount}% на все товары
                  </div>
                </div>
                
                {selectedProducts.length > 0 ? (
                  <>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-brown">Выбранные товары:</h4>
                      {products
                        .filter(p => selectedProducts.includes(p.id))
                        .map((product) => (
                          <div key={product.id} className="flex justify-between items-center">
                            <div>
                              <div className="font-medium text-brown">{product.name}</div>
                              <div className="text-sm text-forest">{product.weight}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-honey">
                                {Math.round(product.price * (1 - currentPlan.discount / 100))} ₽
                              </div>
                              <div className="text-xs text-forest line-through">
                                {product.price} ₽
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-forest">Товары:</span>
                        <span className="text-brown">
                          {products.filter(p => selectedProducts.includes(p.id)).reduce((sum, p) => sum + p.price, 0)} ₽
                        </span>
                      </div>
                      
                      <div className="flex justify-between text-green-600">
                        <span>Скидка ({currentPlan.discount}%):</span>
                        <span>
                          -{Math.round(products.filter(p => selectedProducts.includes(p.id)).reduce((sum, p) => sum + p.price, 0) * currentPlan.discount / 100)} ₽
                        </span>
                      </div>
                      
                      <div className="flex justify-between text-green-600">
                        <span>Доставка:</span>
                        <span>Бесплатно</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-semibold">
                      <span className="text-brown">Итого за доставку:</span>
                      <span className="text-honey">{calculateTotal()} ₽</span>
                    </div>
                    
                    <div className="text-center text-sm text-forest">
                      Экономия: {calculateSavings()} ₽ за доставку
                    </div>
                    
                    <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                      <Icon name="RotateCcw" className="w-4 h-4 mr-2" />
                      Оформить подписку
                    </Button>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Icon name="Package" className="w-12 h-12 text-honey mx-auto mb-3" />
                    <p className="text-forest">
                      Выберите товары для подписки
                    </p>
                    <p className="text-sm text-forest">
                      Минимум {currentPlan.minProducts} товар
                    </p>
                  </div>
                )}
                
                <div className="text-center pt-4">
                  <div className="flex items-center justify-center space-x-4 text-sm text-forest">
                    <div className="flex items-center space-x-1">
                      <Icon name="Shield" className="w-4 h-4" />
                      <span>Безопасно</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="RotateCcw" className="w-4 h-4" />
                      <span>Отмена в любое время</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How it Works */}
        <div className="mt-12">
          <Card className="border-honey-light">
            <CardHeader>
              <CardTitle className="text-brown">Как работает подписка</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-honey rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Settings" className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-brown mb-2">1. Настройте</h4>
                  <p className="text-sm text-forest">Выберите план, товары и частоту доставки</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-honey rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CreditCard" className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-brown mb-2">2. Оплатите</h4>
                  <p className="text-sm text-forest">Безопасная оплата любым способом</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-honey rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Truck" className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-brown mb-2">3. Получайте</h4>
                  <p className="text-sm text-forest">Регулярные доставки по расписанию</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-honey rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Edit" className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-brown mb-2">4. Управляйте</h4>
                  <p className="text-sm text-forest">Изменяйте, приостанавливайте или отменяйте</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <Card className="border-honey-light">
            <CardHeader>
              <CardTitle className="text-brown">Часто задаваемые вопросы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-brown mb-2">Можно ли изменить состав подписки?</h4>
                    <p className="text-sm text-forest">
                      Да, вы можете изменить товары, частоту доставки или приостановить подписку 
                      в любое время в личном кабинете.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-brown mb-2">Что если меня не будет дома?</h4>
                    <p className="text-sm text-forest">
                      Мы уведомляем о доставке заранее. Можно изменить дату доставки 
                      или указать альтернативный адрес.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-brown mb-2">Как отменить подписку?</h4>
                    <p className="text-sm text-forest">
                      Отмена доступна в любое время в личном кабинете. 
                      Никаких штрафов или дополнительных платежей.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-brown mb-2">Есть ли пробный период?</h4>
                    <p className="text-sm text-forest">
                      Первую доставку можно отменить в течение 7 дней 
                      и получить полный возврат средств.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Subscription;