import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Липовый мед",
      price: "450 ₽",
      weight: "500г",
      description: "Нежный липовый мед с тонким ароматом",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      badges: ["Новый урожай", "Эко"],
    },
    {
      id: 2,
      name: "Гречишный мед",
      price: "520 ₽", 
      weight: "500г",
      description: "Темный мед с насыщенным вкусом",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      badges: ["Популярный"],
    },
    {
      id: 3,
      name: "Цветочный мед",
      price: "380 ₽",
      weight: "500г", 
      description: "Разнотравье с луговых полей",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      badges: ["Классика"],
    },
    {
      id: 4,
      name: "Пчелиный воск",
      price: "280 ₽",
      weight: "100г",
      description: "Натуральный воск для творчества",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      badges: ["Ремесло"],
    },
    {
      id: 5,
      name: "Прополис настойка",
      price: "350 ₽",
      weight: "30мл",
      description: "Спиртовая настойка прополиса 20%",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      badges: ["Здоровье"],
    },
    {
      id: 6,
      name: "Медовые соты",
      price: "680 ₽",
      weight: "300г",
      description: "Натуральные соты в меду",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      badges: ["Деликатес"],
    },
  ];

  const apiaries = [
    { name: "Пасека у дуба", location: "Тульская область", flowers: "Липа, акация" },
    { name: "Медовая долина", location: "Рязанская область", flowers: "Гречиха, подсолнечник" },
    { name: "Лесная пасека", location: "Московская область", flowers: "Разнотравье, клевер" },
  ];

  const reviews = [
    {
      name: "Мария К.",
      text: "Отличный мед! Покупаю уже второй год подряд. Качество на высоте.",
      rating: 5,
    },
    {
      name: "Алексей П.",
      text: "Быстрая доставка, мед очень вкусный. Дети в восторге!",
      rating: 5,
    },
    {
      name: "Елена С.",
      text: "Настоящий деревенский мед, как у бабушки в деревне. Рекомендую!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Hexagon" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Медовая усадьба</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-forest hover:text-honey transition-colors">Каталог</a>
              <a href="#about" className="text-forest hover:text-honey transition-colors">О пасеке</a>
              <a href="#delivery" className="text-forest hover:text-honey transition-colors">Доставка</a>
              <a href="#reviews" className="text-forest hover:text-honey transition-colors">Отзывы</a>
              <a href="#contacts" className="text-forest hover:text-honey transition-colors">Контакты</a>
            </div>
            <Button className="bg-honey hover:bg-honey-dark text-white">
              <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
              Корзина
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-cream to-honey-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-brown mb-6">
                Натуральный мед 
                <span className="block text-honey">прямо с пасеки</span>
              </h2>
              <p className="text-xl text-forest mb-8">
                Более 20 лет мы производим экологически чистый мед в деревенских условиях. 
                Собираем только спелый мед и следуем традиционным технологиям.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-honey hover:bg-honey-dark text-white">
                  <Icon name="ShoppingBag" className="w-5 h-5 mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-brown text-brown hover:bg-brown hover:text-white">
                  <Icon name="MapPin" className="w-5 h-5 mr-2" />
                  Наши пасеки
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg" 
                alt="Пасека в цветущем поле"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" className="w-6 h-6 text-honey" />
                  <div>
                    <p className="text-sm font-semibold text-brown">20+ лет</p>
                    <p className="text-xs text-forest">опыта</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">Каталог товаров</h3>
            <p className="text-forest text-lg max-w-2xl mx-auto">
              Мед разных сортов, воск, прополис и другие продукты пчеловодства
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow border-honey-light">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                    {product.badges.map((badge, index) => (
                      <Badge key={index} className="bg-honey text-white text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-brown">{product.name}</CardTitle>
                  <p className="text-sm text-forest">{product.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-2xl font-bold text-honey">{product.price}</span>
                      <span className="text-sm text-forest ml-1">/ {product.weight}</span>
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
      </section>

      {/* Apiaries Map */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">Карта наших пасек</h3>
            <p className="text-forest text-lg">
              Мед собирается в экологически чистых районах Средней полосы России
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {apiaries.map((apiary, index) => (
              <Card key={index} className="border-honey-light">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" className="w-6 h-6 text-honey mt-1" />
                    <div>
                      <h4 className="font-semibold text-brown mb-1">{apiary.name}</h4>
                      <p className="text-sm text-forest mb-2">{apiary.location}</p>
                      <div className="flex items-center space-x-2">
                        <Icon name="Flower" className="w-4 h-4 text-forest" />
                        <span className="text-xs text-forest">{apiary.flowers}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white rounded-lg p-8 text-center">
            <Icon name="Map" className="w-16 h-16 text-honey mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-brown mb-2">Интерактивная карта</h4>
            <p className="text-forest mb-4">
              Смотрите расположение наших пасек и узнавайте больше о местах сбора меда
            </p>
            <Button variant="outline" className="border-honey text-honey hover:bg-honey hover:text-white">
              Открыть карту
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-brown mb-6">О нашей пасеке</h3>
              <p className="text-forest mb-6">
                Семейная пасека работает уже более 20 лет. Мы придерживаемся традиционных 
                методов пчеловодства и не используем химические препараты. Наши пчелы 
                собирают нектар с цветов в экологически чистых районах.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="w-6 h-6 text-honey" />
                  <span className="text-forest">Без химических добавок</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="w-6 h-6 text-honey" />
                  <span className="text-forest">Собственная лаборатория качества</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="w-6 h-6 text-honey" />
                  <span className="text-forest">Сертифицированная продукция</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="w-6 h-6 text-honey" />
                  <span className="text-forest">Традиционные технологии</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg" 
                alt="Пчеловод за работой"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">Доставка и оплата</h3>
            <p className="text-forest text-lg">
              Быстрая доставка по всей России удобными способами
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-honey-light">
              <CardContent className="p-6">
                <Icon name="Truck" className="w-12 h-12 text-honey mx-auto mb-4" />
                <h4 className="font-semibold text-brown mb-2">Курьерская доставка</h4>
                <p className="text-sm text-forest">По Москве и МО от 300 ₽</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-honey-light">
              <CardContent className="p-6">
                <Icon name="Package" className="w-12 h-12 text-honey mx-auto mb-4" />
                <h4 className="font-semibold text-brown mb-2">Почта России</h4>
                <p className="text-sm text-forest">По всей России от 250 ₽</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-honey-light">
              <CardContent className="p-6">
                <Icon name="CreditCard" className="w-12 h-12 text-honey mx-auto mb-4" />
                <h4 className="font-semibold text-brown mb-2">Онлайн оплата</h4>
                <p className="text-sm text-forest">Банковскими картами</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-honey-light">
              <CardContent className="p-6">
                <Icon name="Banknote" className="w-12 h-12 text-honey mx-auto mb-4" />
                <h4 className="font-semibold text-brown mb-2">При получении</h4>
                <p className="text-sm text-forest">Наличными или картой</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">Отзывы покупателей</h3>
            <p className="text-forest text-lg">
              Что говорят наши постоянные клиенты
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-honey-light">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-forest mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-brown">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">Контакты</h3>
            <p className="text-forest text-lg">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Phone" className="w-8 h-8 text-honey mx-auto mb-4" />
              <h4 className="font-semibold text-brown mb-2">Телефон</h4>
              <p className="text-forest">+7 (999) 123-45-67</p>
              <p className="text-forest text-sm">Ежедневно 9:00 - 21:00</p>
            </div>
            
            <div>
              <Icon name="Mail" className="w-8 h-8 text-honey mx-auto mb-4" />
              <h4 className="font-semibold text-brown mb-2">Email</h4>
              <p className="text-forest">info@medovaya-usadba.ru</p>
              <p className="text-forest text-sm">Ответим в течение дня</p>
            </div>
            
            <div>
              <Icon name="MapPin" className="w-8 h-8 text-honey mx-auto mb-4" />
              <h4 className="font-semibold text-brown mb-2">Адрес</h4>
              <p className="text-forest">Тульская область</p>
              <p className="text-forest text-sm">д. Медовка, ул. Пасечная 12</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-cream py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Hexagon" className="w-6 h-6 text-honey" />
                <h5 className="font-semibold">Медовая усадьба</h5>
              </div>
              <p className="text-sm text-cream-dark">
                Натуральный мед и продукты пчеловодства прямо с семейной пасеки
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="text-sm space-y-2 text-cream-dark">
                <li><a href="#" className="hover:text-honey transition-colors">Мед</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">Воск</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">Прополис</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">Соты</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="text-sm space-y-2 text-cream-dark">
                <li><a href="#" className="hover:text-honey transition-colors">О пасеке</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Социальные сети</h5>
              <div className="flex space-x-3">
                <Icon name="Phone" className="w-5 h-5 text-honey hover:text-cream cursor-pointer transition-colors" />
                <Icon name="Mail" className="w-5 h-5 text-honey hover:text-cream cursor-pointer transition-colors" />
                <Icon name="MessageCircle" className="w-5 h-5 text-honey hover:text-cream cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-cream-dark mt-8 pt-8 text-center">
            <p className="text-sm text-cream-dark">
              © 2024 Медовая усадьба. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;