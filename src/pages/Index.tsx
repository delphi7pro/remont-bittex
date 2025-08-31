import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      id: 1,
      name: "Ремонт холодильников",
      price: "от 1500 ₽",
      description: "Диагностика и ремонт всех марок холодильников",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      badges: ["Гарантия", "Выезд"],
      urgent: true
    },
    {
      id: 2,
      name: "Ремонт стиральных машин",
      price: "от 1200 ₽",
      description: "Замена подшипников, ремонт электроники",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      badges: ["Популярно"],
      urgent: false
    },
    {
      id: 3,
      name: "Ремонт посудомоечных машин",
      price: "от 1800 ₽",
      description: "Устранение протечек, замена насосов",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg",
      badges: ["Сложный ремонт"],
      urgent: false
    },
    {
      id: 4,
      name: "Ремонт микроволновок",
      price: "от 800 ₽",
      description: "Замена магнетрона, ремонт электроники",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      badges: ["Быстро"],
      urgent: false
    },
    {
      id: 5,
      name: "Ремонт духовых шкафов",
      price: "от 1400 ₽",
      description: "Замена нагревательных элементов",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      badges: ["Качество"],
      urgent: false
    },
    {
      id: 6,
      name: "Ремонт варочных панелей",
      price: "от 1000 ₽",
      description: "Ремонт индукционных и электрических панелей",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg",
      badges: ["Срочно"],
      urgent: true
    }
  ];

  const advantages = [
    { name: "Выезд мастера", location: "По всей Москве", icon: "MapPin" },
    { name: "Быстрый ремонт", location: "В день обращения", icon: "Clock" },
    { name: "Гарантия качества", location: "До 2 лет", icon: "Shield" }
  ];

  const stats = [
    { number: "15000+", label: "отремонтированных приборов" },
    { number: "12", label: "лет опыта работы" },
    { number: "98%", label: "довольных клиентов" },
    { number: "24/7", label: "прием заявок" }
  ];

  const brands = [
    "Samsung", "LG", "Bosch", "Siemens", "Electrolux", "Whirlpool", 
    "Indesit", "Ariston", "Beko", "Candy", "Gorenje", "Haier"
  ];

  const reviews = [
    {
      name: "Анна М.",
      text: "Быстро отремонтировали холодильник. Мастер приехал в тот же день!",
      rating: 5,
      service: "Ремонт холодильников"
    },
    {
      name: "Дмитрий К.",
      text: "Качественный ремонт стиральной машины. Работает как новая!",
      rating: 5,
      service: "Ремонт стиральных машин"
    },
    {
      name: "Елена П.",
      text: "Профессиональный подход, разумные цены. Рекомендую!",
      rating: 5,
      service: "Ремонт посудомоечных машин"
    }
  ];

  const emergencyTypes = [
    { icon: "Zap", title: "Короткое замыкание", description: "Срочный выезд в течение часа" },
    { icon: "Droplets", title: "Протечка воды", description: "Устраним протечку немедленно" },
    { icon: "Flame", title: "Перегрев техники", description: "Диагностика и устранение причин" },
    { icon: "AlertTriangle", title: "Странные звуки", description: "Выявим и устраним неисправность" }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">РемТехСервис</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/services" className="text-forest hover:text-honey transition-colors">Услуги</a>
              <a href="/prices" className="text-forest hover:text-honey transition-colors">Цены</a>
              <a href="/masters" className="text-forest hover:text-honey transition-colors">Мастера</a>
              <a href="/reviews" className="text-forest hover:text-honey transition-colors">Отзывы</a>
              <a href="/contacts" className="text-forest hover:text-honey transition-colors">Контакты</a>
            </div>
            <Button className="bg-honey hover:bg-honey-dark text-white">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Вызвать мастера
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
                Ремонт бытовой техники
                <span className="block text-honey">на дому</span>
              </h2>
              <p className="text-xl text-forest mb-8">
                Профессиональный ремонт холодильников, стиральных машин, посудомоек и другой техники. 
                Выезд мастера в день обращения. Гарантия до 2 лет.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-honey hover:bg-honey-dark text-white">
                  <Icon name="Phone" className="w-5 h-5 mr-2" />
                  Вызвать мастера
                </Button>
                <Button size="lg" variant="outline" className="border-brown text-brown hover:bg-brown hover:text-white">
                  <Icon name="Calculator" className="w-5 h-5 mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg" 
                alt="Мастер ремонтирует технику"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" className="w-6 h-6 text-honey" />
                  <div>
                    <p className="text-sm font-semibold text-brown">24/7</p>
                    <p className="text-xs text-forest">прием заявок</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-8 bg-red-50 border-y-2 border-red-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-red-700 mb-2">Срочный ремонт</h3>
            <p className="text-red-600">Выезд мастера в течение часа при аварийных ситуациях</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {emergencyTypes.map((emergency, index) => (
              <Card key={index} className="border-red-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <Icon name={emergency.icon} className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-red-700 mb-1">{emergency.title}</h4>
                  <p className="text-xs text-red-600">{emergency.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Срочный вызов: +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </section>

      {/* Services Catalog */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">Наши услуги</h3>
            <p className="text-forest text-lg max-w-2xl mx-auto">
              Ремонтируем все виды бытовой техники с гарантией качества
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow border-honey-light relative">
                {service.urgent && (
                  <Badge className="absolute top-3 right-3 bg-red-500 text-white z-10">
                    Срочно
                  </Badge>
                )}
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                    {service.badges.map((badge, index) => (
                      <Badge key={index} className="bg-honey text-white text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-brown">{service.name}</CardTitle>
                  <p className="text-sm text-forest">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-honey">{service.price}</span>
                  </div>
                  <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                    <Icon name="Wrench" className="w-4 h-4 mr-2" />
                    Заказать ремонт
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">Наши достижения</h3>
            <p className="text-forest text-lg">Цифры, которые говорят о нашем профессионализме</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-honey-light text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-honey mb-2">{stat.number}</div>
                  <p className="text-forest">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">Ремонтируем технику всех брендов</h3>
            <p className="text-forest text-lg">Работаем с оригинальными запчастями</p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {brands.map((brand, index) => (
              <Card key={index} className="border-honey-light hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <p className="font-semibold text-brown">{brand}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">Почему выбирают нас</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-honey-light">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Icon name={advantage.icon} className="w-6 h-6 text-honey mt-1" />
                    <div>
                      <h4 className="font-semibold text-brown mb-1">{advantage.name}</h4>
                      <p className="text-sm text-forest">{advantage.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">Как мы работаем</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-honey rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-brown mb-2">1. Звонок</h4>
              <p className="text-sm text-forest">Принимаем заявку и консультируем</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-honey rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Car" className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-brown mb-2">2. Выезд</h4>
              <p className="text-sm text-forest">Мастер приезжает в удобное время</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-honey rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-brown mb-2">3. Диагностика</h4>
              <p className="text-sm text-forest">Определяем причину поломки</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-honey rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-brown mb-2">4. Ремонт</h4>
              <p className="text-sm text-forest">Устраняем неисправность</p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-honey-light">
              <CardHeader className="text-center">
                <CardTitle className="text-brown text-2xl">Калькулятор стоимости</CardTitle>
                <p className="text-forest">Узнайте примерную стоимость ремонта</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brown mb-2">Тип техники</label>
                    <select className="w-full p-2 border border-honey-light rounded-md">
                      <option>Холодильник</option>
                      <option>Стиральная машина</option>
                      <option>Посудомоечная машина</option>
                      <option>Микроволновка</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown mb-2">Бренд</label>
                    <select className="w-full p-2 border border-honey-light rounded-md">
                      <option>Samsung</option>
                      <option>LG</option>
                      <option>Bosch</option>
                      <option>Другой</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown mb-2">Описание проблемы</label>
                  <textarea 
                    className="w-full p-2 border border-honey-light rounded-md" 
                    rows={3}
                    placeholder="Опишите, что случилось с техникой..."
                  ></textarea>
                </div>
                <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                  <Icon name="Calculator" className="w-4 h-4 mr-2" />
                  Рассчитать стоимость
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">География работы</h3>
            <p className="text-forest text-lg">Обслуживаем Москву и Московскую область</p>
          </div>
          
          <div className="bg-honey-light rounded-lg p-8 text-center">
            <Icon name="Map" className="w-16 h-16 text-honey mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-brown mb-2">Карта выездов</h4>
            <p className="text-forest mb-4">
              Выезжаем во все районы Москвы и области в радиусе 50 км от МКАД
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm mb-6">
              <div>Москва (в пределах МКАД) - бесплатный выезд</div>
              <div>МО до 30 км - 500 ₽</div>
              <div>МО 30-50 км - 800 ₽</div>
            </div>
            <Button variant="outline" className="border-honey text-honey hover:bg-honey hover:text-white">
              Посмотреть карту
            </Button>
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-brown mb-6">Гарантия на все работы</h3>
              <p className="text-forest mb-6">
                Мы настолько уверены в качестве наших услуг, что даем расширенную гарантию 
                на все виды ремонта. Если техника сломается по той же причине - 
                устраним бесплатно.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" className="w-6 h-6 text-honey" />
                  <span className="text-forest">Гарантия на работы до 2 лет</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Package" className="w-6 h-6 text-honey" />
                  <span className="text-forest">Гарантия на запчасти до 3 лет</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="FileText" className="w-6 h-6 text-honey" />
                  <span className="text-forest">Официальный гарантийный талон</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg" 
                alt="Гарантийный талон"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">Отзывы клиентов</h3>
            <p className="text-forest text-lg">Что говорят о нашей работе</p>
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
                  <div>
                    <p className="font-semibold text-brown">— {review.name}</p>
                    <p className="text-sm text-forest">{review.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-honey text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Нужен ремонт техники?</h3>
          <p className="text-xl mb-8 opacity-90">
            Звоните прямо сейчас! Мастер приедет в течение 2 часов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-honey hover:bg-gray-100">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              +7 (999) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-honey">
              <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">Контакты</h3>
            <p className="text-forest text-lg">Свяжитесь с нами удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Phone" className="w-8 h-8 text-honey mx-auto mb-4" />
              <h4 className="font-semibold text-brown mb-2">Телефон</h4>
              <p className="text-forest">+7 (999) 123-45-67</p>
              <p className="text-forest text-sm">Круглосуточно</p>
            </div>
            
            <div>
              <Icon name="Mail" className="w-8 h-8 text-honey mx-auto mb-4" />
              <h4 className="font-semibold text-brown mb-2">Email</h4>
              <p className="text-forest">info@remtechservice.ru</p>
              <p className="text-forest text-sm">Ответим в течение часа</p>
            </div>
            
            <div>
              <Icon name="MapPin" className="w-8 h-8 text-honey mx-auto mb-4" />
              <h4 className="font-semibold text-brown mb-2">Адрес</h4>
              <p className="text-forest">г. Москва</p>
              <p className="text-forest text-sm">ул. Ремонтная, д. 15</p>
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
                <Icon name="Wrench" className="w-6 h-6 text-honey" />
                <h5 className="font-semibold">РемТехСервис</h5>
              </div>
              <p className="text-sm text-cream-dark">
                Профессиональный ремонт бытовой техники на дому с гарантией качества
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="text-sm space-y-2 text-cream-dark">
                <li><a href="/refrigerators" className="hover:text-honey transition-colors">Холодильники</a></li>
                <li><a href="/washing-machines" className="hover:text-honey transition-colors">Стиральные машины</a></li>
                <li><a href="/dishwashers" className="hover:text-honey transition-colors">Посудомойки</a></li>
                <li><a href="/microwaves" className="hover:text-honey transition-colors">Микроволновки</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="text-sm space-y-2 text-cream-dark">
                <li><a href="/about" className="hover:text-honey transition-colors">О компании</a></li>
                <li><a href="/prices" className="hover:text-honey transition-colors">Цены</a></li>
                <li><a href="/warranty" className="hover:text-honey transition-colors">Гарантия</a></li>
                <li><a href="/contacts" className="hover:text-honey transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-sm text-cream-dark">
                <div>+7 (999) 123-45-67</div>
                <div>info@remtechservice.ru</div>
                <div>Москва, ул. Ремонтная, 15</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-cream-dark mt-8 pt-8 text-center">
            <p className="text-sm text-cream-dark">
              © 2024 РемТехСервис. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;