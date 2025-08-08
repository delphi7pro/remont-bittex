import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Липовый мед",
      price: 450,
      weight: "500г",
      quantity: 2,
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      inStock: true
    },
    {
      id: 2,
      name: "Гречишный мед",
      price: 520,
      weight: "500г",
      quantity: 1,
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      inStock: true
    },
    {
      id: 3,
      name: "Прополис настойка",
      price: 350,
      weight: "30мл",
      quantity: 1,
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      inStock: false
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    const validCodes = {
      "HONEY10": { discount: 10, type: "percent" },
      "NEWCLIENT": { discount: 200, type: "fixed" },
      "SWEET15": { discount: 15, type: "percent" }
    };

    if (validCodes[promoCode]) {
      setAppliedPromo({ code: promoCode, ...validCodes[promoCode] });
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 2000 ? 0 : 300;
  
  let discount = 0;
  if (appliedPromo) {
    discount = appliedPromo.type === "percent" 
      ? (subtotal * appliedPromo.discount) / 100
      : appliedPromo.discount;
  }

  const total = subtotal + deliveryFee - discount;

  const recommendedProducts = [
    {
      id: 4,
      name: "Медовые соты",
      price: 680,
      weight: "300г",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg"
    },
    {
      id: 5,
      name: "Пчелиная пыльца",
      price: 420,
      weight: "100г",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="ShoppingCart" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Корзина</h1>
              <Badge className="bg-honey text-white">
                {cartItems.length}
              </Badge>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Продолжить покупки
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <Icon name="ShoppingCart" className="w-24 h-24 text-honey mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-brown mb-4">Корзина пуста</h2>
            <p className="text-forest mb-6">Добавьте товары из каталога</p>
            <Button className="bg-honey hover:bg-honey-dark text-white">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              В каталог
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-semibold text-brown mb-4">Товары в корзине</h2>
              
              {cartItems.map((item) => (
                <Card key={item.id} className="border-honey-light">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-brown">{item.name}</h3>
                        <p className="text-sm text-forest">{item.weight}</p>
                        {!item.inStock && (
                          <Badge variant="destructive" className="mt-1">
                            Нет в наличии
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={!item.inStock}
                        >
                          <Icon name="Minus" className="w-4 h-4" />
                        </Button>
                        
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={!item.inStock}
                        >
                          <Icon name="Plus" className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-semibold text-honey">
                          {item.price * item.quantity} ₽
                        </div>
                        <div className="text-sm text-forest">
                          {item.price} ₽ за шт.
                        </div>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Icon name="Trash2" className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Promo Code */}
              <Card className="border-honey-light">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-brown mb-3">Промокод</h3>
                  <div className="flex space-x-3">
                    <Input
                      placeholder="Введите промокод"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      className="flex-1"
                    />
                    <Button 
                      onClick={applyPromoCode}
                      variant="outline"
                      disabled={!promoCode || appliedPromo}
                    >
                      Применить
                    </Button>
                  </div>
                  {appliedPromo && (
                    <div className="mt-3 p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-green-800">
                          Промокод {appliedPromo.code} применен
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setAppliedPromo(null)}
                          className="text-green-600"
                        >
                          <Icon name="X" className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="border-honey-light sticky top-4">
                <CardHeader>
                  <CardTitle className="text-brown">Итого к оплате</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-forest">Товары ({cartItems.length})</span>
                      <span className="text-brown">{subtotal} ₽</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-forest">Доставка</span>
                      <span className="text-brown">
                        {deliveryFee === 0 ? "Бесплатно" : `${deliveryFee} ₽`}
                      </span>
                    </div>
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Скидка</span>
                        <span>-{discount} ₽</span>
                      </div>
                    )}
                    
                    {subtotal < 2000 && (
                      <div className="text-sm text-forest bg-honey-light p-3 rounded-lg">
                        <Icon name="Info" className="w-4 h-4 inline mr-2" />
                        Добавьте товаров на {2000 - subtotal} ₽ для бесплатной доставки
                      </div>
                    )}
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-brown">Итого:</span>
                    <span className="text-honey">{total} ₽</span>
                  </div>
                  
                  <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                    <Icon name="CreditCard" className="w-4 h-4 mr-2" />
                    Оформить заказ
                  </Button>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-4 text-sm text-forest">
                      <div className="flex items-center space-x-1">
                        <Icon name="Shield" className="w-4 h-4" />
                        <span>Безопасная оплата</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Truck" className="w-4 h-4" />
                        <span>Быстрая доставка</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Products */}
              <Card className="border-honey-light mt-6">
                <CardHeader>
                  <CardTitle className="text-brown">Рекомендуем добавить</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recommendedProducts.map((product) => (
                    <div key={product.id} className="flex items-center space-x-3">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-brown">{product.name}</h4>
                        <p className="text-xs text-forest">{product.weight}</p>
                        <p className="text-sm font-semibold text-honey">{product.price} ₽</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Icon name="Plus" className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;