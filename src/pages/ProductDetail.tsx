import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: "Липовый мед",
    price: 450,
    weight: "500г",
    description: "Нежный липовый мед с тонким ароматом и целебными свойствами. Собран в экологически чистых районах Тульской области в период цветения липы.",
    images: [
      "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg"
    ],
    badges: ["Новый урожай", "Эко"],
    inStock: true,
    rating: 4.8,
    reviewsCount: 24,
    characteristics: {
      color: "Светло-янтарный",
      taste: "Нежный, цветочный",
      aroma: "Тонкий липовый",
      crystallization: "Медленная (6-12 месяцев)",
      harvest: "Июль 2023",
      region: "Тульская область",
      moisture: "17%",
      diastase: "15 ед. Готе",
      hmc: "Менее 25 мг/кг",
      acidity: "2.5 мл-экв/кг"
    },
    benefits: [
      "Успокаивающее действие на нервную систему",
      "Противовоспалительные свойства",
      "Полезен для сердечно-сосудистой системы",
      "Помогает при простудных заболеваниях",
      "Улучшает сон и снимает стресс"
    ],
    composition: [
      { name: "Фруктоза", value: "38%" },
      { name: "Глюкоза", value: "31%" },
      { name: "Сахароза", value: "2%" },
      { name: "Вода", value: "17%" },
      { name: "Другие сахара", value: "9%" },
      { name: "Минералы и витамины", value: "3%" }
    ],
    storage: "Хранить в сухом, темном месте при температуре не выше 20°C. Избегать попадания влаги и прямых солнечных лучей.",
    shelfLife: "24 месяца с даты производства"
  };

  const reviews = [
    {
      id: 1,
      name: "Мария К.",
      rating: 5,
      date: "2024-01-15",
      text: "Отличный мед! Очень нежный вкус, аромат потрясающий. Покупаю уже второй раз.",
      verified: true
    },
    {
      id: 2,
      name: "Алексей П.",
      rating: 5,
      date: "2024-01-10",
      text: "Качественный продукт. Помогает при простуде, дети едят с удовольствием.",
      verified: true
    },
    {
      id: 3,
      name: "Елена С.",
      rating: 4,
      date: "2024-01-08",
      text: "Хороший мед, натуральный. Единственное - хотелось бы больше информации о пасеке.",
      verified: false
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: "Гречишный мед",
      price: 520,
      weight: "500г",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      rating: 4.9
    },
    {
      id: 3,
      name: "Цветочный мед",
      price: 380,
      weight: "500г",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      rating: 4.7
    },
    {
      id: 8,
      name: "Акациевый мед",
      price: 490,
      weight: "500г",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      rating: 4.8
    }
  ];

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Package" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">{product.name}</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад в каталог
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-forest">
            <a href="/" className="hover:text-honey">Главная</a>
            <Icon name="ChevronRight" className="w-4 h-4" />
            <a href="/catalog" className="hover:text-honey">Каталог</a>
            <Icon name="ChevronRight" className="w-4 h-4" />
            <span className="text-brown">{product.name}</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-honey' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {product.badges.map((badge, index) => (
                <Badge key={index} className="bg-honey text-white">
                  {badge}
                </Badge>
              ))}
              {product.inStock ? (
                <Badge className="bg-green-100 text-green-800">В наличии</Badge>
              ) : (
                <Badge className="bg-red-100 text-red-800">Нет в наличии</Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold text-brown mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Icon 
                    key={i} 
                    name="Star" 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="text-forest ml-2">({product.rating})</span>
              </div>
              <span className="text-forest">{product.reviewsCount} отзывов</span>
            </div>

            <p className="text-forest text-lg mb-6">{product.description}</p>

            <div className="bg-honey-light rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-4xl font-bold text-honey">{product.price} ₽</span>
                  <span className="text-forest ml-2">/ {product.weight}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-forest">Цена за 1 кг:</div>
                  <div className="text-xl font-semibold text-brown">
                    {Math.round(product.price * 2)} ₽
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <label className="text-brown font-medium">Количество:</label>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    <Icon name="Minus" className="w-4 h-4" />
                  </Button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => updateQuantity(parseInt(e.target.value) || 1)}
                    className="w-20 text-center"
                    min="1"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(quantity + 1)}
                  >
                    <Icon name="Plus" className="w-4 h-4" />
                  </Button>
                </div>
                <span className="text-forest">
                  Итого: <span className="font-semibold text-honey">{product.price * quantity} ₽</span>
                </span>
              </div>

              <div className="flex space-x-3">
                <Button 
                  className="flex-1 bg-honey hover:bg-honey-dark text-white"
                  disabled={!product.inStock}
                >
                  <Icon name="ShoppingCart" className="w-5 h-5 mr-2" />
                  {product.inStock ? "Добавить в корзину" : "Нет в наличии"}
                </Button>
                <Button variant="outline">
                  <Icon name="Heart" className="w-5 h-5" />
                </Button>
                <Button variant="outline">
                  <Icon name="GitCompare" className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Truck" className="w-4 h-4 text-honey" />
                <span className="text-forest">Доставка от 300 ₽</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" className="w-4 h-4 text-honey" />
                <span className="text-forest">Гарантия качества</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="RotateCcw" className="w-4 h-4 text-honey" />
                <span className="text-forest">Возврат 14 дней</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" className="w-4 h-4 text-honey" />
                <span className="text-forest">Сертифицировано</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="characteristics">Характеристики</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы ({product.reviewsCount})</TabsTrigger>
            <TabsTrigger value="delivery">Доставка</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card className="border-honey-light">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-brown mb-4">О продукте</h3>
                    <p className="text-forest mb-6">{product.description}</p>
                    
                    <h4 className="font-semibold text-brown mb-3">Полезные свойства:</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                          <span className="text-forest">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-3">Состав:</h4>
                    <div className="space-y-2 mb-6">
                      {product.composition.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-forest">{item.name}</span>
                          <span className="font-medium text-brown">{item.value}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-honey-light rounded-lg p-4">
                      <h4 className="font-semibold text-brown mb-2">Условия хранения:</h4>
                      <p className="text-forest text-sm mb-2">{product.storage}</p>
                      <p className="text-forest text-sm">
                        <strong>Срок годности:</strong> {product.shelfLife}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="characteristics" className="mt-6">
            <Card className="border-honey-light">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-brown mb-4">Основные характеристики</h3>
                    <div className="space-y-3">
                      {Object.entries(product.characteristics).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-honey-light">
                          <span className="text-forest capitalize">
                            {key === 'color' && 'Цвет'}
                            {key === 'taste' && 'Вкус'}
                            {key === 'aroma' && 'Аромат'}
                            {key === 'crystallization' && 'Кристаллизация'}
                            {key === 'harvest' && 'Урожай'}
                            {key === 'region' && 'Регион'}
                            {key === 'moisture' && 'Влажность'}
                            {key === 'diastase' && 'Диастаза'}
                            {key === 'hmc' && 'ГМФ'}
                            {key === 'acidity' && 'Кислотность'}
                          </span>
                          <span className="font-medium text-brown">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-brown mb-4">Сертификаты</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-honey-light rounded-lg">
                        <Icon name="Award" className="w-6 h-6 text-honey" />
                        <div>
                          <div className="font-medium text-brown">Сертификат качества</div>
                          <div className="text-sm text-forest">ГОСТ 19792-2017</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-honey-light rounded-lg">
                        <Icon name="Leaf" className="w-6 h-6 text-honey" />
                        <div>
                          <div className="font-medium text-brown">Эко-сертификат</div>
                          <div className="text-sm text-forest">Органическое производство</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-honey-light rounded-lg">
                        <Icon name="Shield" className="w-6 h-6 text-honey" />
                        <div>
                          <div className="font-medium text-brown">Декларация соответствия</div>
                          <div className="text-sm text-forest">ТР ТС 021/2011</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card className="border-honey-light">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-brown">
                    Отзывы покупателей ({product.reviewsCount})
                  </h3>
                  <Button className="bg-honey hover:bg-honey-dark text-white">
                    <Icon name="Plus" className="w-4 h-4 mr-2" />
                    Написать отзыв
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-honey-light pb-6 last:border-b-0">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-honey rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">
                              {review.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold text-brown">{review.name}</h4>
                              {review.verified && (
                                <Badge className="bg-green-100 text-green-800 text-xs">
                                  <Icon name="CheckCircle" className="w-3 h-3 mr-1" />
                                  Проверен
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-forest">{formatDate(review.date)}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i} 
                              name="Star" 
                              className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-forest">{review.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="delivery" className="mt-6">
            <Card className="border-honey-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brown mb-6">Доставка и оплата</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Способы доставки:</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="Truck" className="w-5 h-5 text-honey mt-1" />
                        <div>
                          <div className="font-medium text-brown">Курьерская доставка</div>
                          <div className="text-sm text-forest">По Москве и МО - от 300 ₽, 1-2 дня</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Icon name="Package" className="w-5 h-5 text-honey mt-1" />
                        <div>
                          <div className="font-medium text-brown">Почта России</div>
                          <div className="text-sm text-forest">По всей России - от 250 ₽, 5-14 дней</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Icon name="MapPin" className="w-5 h-5 text-honey mt-1" />
                        <div>
                          <div className="font-medium text-brown">Самовывоз</div>
                          <div className="text-sm text-forest">Бесплатно, в день заказа</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Способы оплаты:</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="CreditCard" className="w-5 h-5 text-honey mt-1" />
                        <div>
                          <div className="font-medium text-brown">Банковские карты</div>
                          <div className="text-sm text-forest">Visa, MasterCard, МИР</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Icon name="Banknote" className="w-5 h-5 text-honey mt-1" />
                        <div>
                          <div className="font-medium text-brown">Наличными</div>
                          <div className="text-sm text-forest">При получении заказа</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Icon name="Smartphone" className="w-5 h-5 text-honey mt-1" />
                        <div>
                          <div className="font-medium text-brown">Электронные кошельки</div>
                          <div className="text-sm text-forest">ЮMoney, QIWI, WebMoney</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div>
          <h3 className="text-2xl font-bold text-brown mb-6">Похожие товары</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="border-honey-light hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                
                <CardContent className="p-4">
                  <h4 className="font-semibold text-brown mb-2">{relatedProduct.name}</h4>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-honey">{relatedProduct.price} ₽</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-forest">({relatedProduct.rating})</span>
                    </div>
                  </div>
                  <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                    <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;