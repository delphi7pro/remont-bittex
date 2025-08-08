import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Beekeeping = () => {
  const [selectedSeason, setSelectedSeason] = useState("spring");

  const seasons = [
    {
      id: "spring",
      name: "Весна",
      months: "Март - Май",
      description: "Пробуждение пчел и подготовка к медосбору",
      color: "bg-green-100 text-green-800",
      icon: "Flower2"
    },
    {
      id: "summer",
      name: "Лето", 
      months: "Июнь - Август",
      description: "Активный медосбор и основные работы",
      color: "bg-yellow-100 text-yellow-800",
      icon: "Sun"
    },
    {
      id: "autumn",
      name: "Осень",
      months: "Сентябрь - Ноябрь", 
      description: "Подготовка пчел к зимовке",
      color: "bg-orange-100 text-orange-800",
      icon: "Leaf"
    },
    {
      id: "winter",
      name: "Зима",
      months: "Декабрь - Февраль",
      description: "Зимовка пчел и планирование",
      color: "bg-blue-100 text-blue-800",
      icon: "Snowflake"
    }
  ];

  const seasonalWork = {
    spring: [
      {
        title: "Весенний осмотр",
        description: "Проверка состояния пчелиных семей после зимовки",
        importance: "critical",
        timing: "Март",
        details: [
          "Оценка силы семей",
          "Проверка наличия матки",
          "Осмотр кормовых запасов",
          "Выявление болезней"
        ]
      },
      {
        title: "Расширение гнезд",
        description: "Добавление рамок для развития семей",
        importance: "high",
        timing: "Апрель",
        details: [
          "Постановка вощины",
          "Добавление рамок с сушью",
          "Контроль развития расплода"
        ]
      },
      {
        title: "Подкормка пчел",
        description: "Стимулирующая подкормка для развития",
        importance: "medium",
        timing: "Март-Апрель",
        details: [
          "Сахарный сироп 1:1",
          "Белковые подкормки",
          "Витаминные добавки"
        ]
      }
    ],
    summer: [
      {
        title: "Медосбор",
        description: "Основной период сбора меда",
        importance: "critical",
        timing: "Июнь-Август",
        details: [
          "Постановка магазинных надставок",
          "Контроль заполнения рамок",
          "Своевременная откачка меда",
          "Профилактика роения"
        ]
      },
      {
        title: "Борьба с роением",
        description: "Предотвращение роения пчелиных семей",
        importance: "high",
        timing: "Май-Июль",
        details: [
          "Расширение гнезд",
          "Удаление маточников",
          "Смена старых маток",
          "Обеспечение работой"
        ]
      },
      {
        title: "Откачка меда",
        description: "Извлечение зрелого меда из сотов",
        importance: "critical",
        timing: "Июль-Август",
        details: [
          "Проверка зрелости меда",
          "Удаление пчел с рамок",
          "Распечатка сотов",
          "Центрифугирование"
        ]
      }
    ],
    autumn: [
      {
        title: "Подготовка к зиме",
        description: "Подготовка пчелиных семей к зимовке",
        importance: "critical",
        timing: "Сентябрь-Октябрь",
        details: [
          "Сборка гнезд на зиму",
          "Обеспечение кормами",
          "Обработка от варроатоза",
          "Утепление ульев"
        ]
      },
      {
        title: "Заготовка кормов",
        description: "Подготовка кормовых запасов",
        importance: "high",
        timing: "Сентябрь",
        details: [
          "Оставление медовых рамок",
          "Приготовление сахарного сиропа",
          "Заготовка перги",
          "Расчет потребности в кормах"
        ]
      }
    ],
    winter: [
      {
        title: "Контроль зимовки",
        description: "Наблюдение за состоянием пчел зимой",
        importance: "medium",
        timing: "Декабрь-Февраль",
        details: [
          "Прослушивание ульев",
          "Контроль температуры",
          "Очистка летков от подмора",
          "Защита от грызунов"
        ]
      },
      {
        title: "Планирование сезона",
        description: "Подготовка к новому пчеловодному сезону",
        importance: "medium",
        timing: "Январь-Февраль",
        details: [
          "Анализ результатов года",
          "Планирование расширения",
          "Заказ инвентаря",
          "Изучение новых методов"
        ]
      }
    ]
  };

  const equipment = [
    {
      category: "Ульи и рамки",
      items: [
        { name: "Улей Дадана-Блатта", description: "Стандартный 12-рамочный улей", price: "3500 ₽" },
        { name: "Рамки с вощиной", description: "Готовые рамки для расплода", price: "150 ₽/шт" },
        { name: "Магазинные надставки", description: "Для сбора меда", price: "1200 ₽" }
      ]
    },
    {
      category: "Инструменты",
      items: [
        { name: "Дымарь", description: "Для усмирения пчел", price: "800 ₽" },
        { name: "Стамеска", description: "Универсальный инструмент пчеловода", price: "300 ₽" },
        { name: "Медогонка", description: "Для откачки меда", price: "15000 ₽" }
      ]
    },
    {
      category: "Защитная одежда",
      items: [
        { name: "Костюм пчеловода", description: "Полная защита с сеткой", price: "2500 ₽" },
        { name: "Перчатки", description: "Кожаные перчатки", price: "500 ₽" },
        { name: "Сетка лицевая", description: "Отдельная защита лица", price: "400 ₽" }
      ]
    }
  ];

  const tips = [
    {
      title: "Выбор места для пасеки",
      content: "Пасека должна быть защищена от ветра, иметь доступ к воде и находиться вблизи медоносов. Избегайте низин и болотистых мест.",
      icon: "MapPin",
      difficulty: "Начинающий"
    },
    {
      title: "Работа с пчелами без агрессии",
      content: "Работайте спокойно, без резких движений. Используйте дымарь умеренно. Лучшее время - солнечные дни с 10 до 16 часов.",
      icon: "Heart",
      difficulty: "Начинающий"
    },
    {
      title: "Определение качества матки",
      content: "Хорошая матка откладывает яйца плотно, без пропусков. Расплод должен быть ровным, без трутневых ячеек среди пчелиного расплода.",
      icon: "Crown",
      difficulty: "Продвинутый"
    },
    {
      title: "Профилактика болезней",
      content: "Регулярно осматривайте семьи, поддерживайте чистоту в ульях, обеспечивайте качественными кормами и проводите профилактические обработки.",
      icon: "Shield",
      difficulty: "Средний"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      "Начинающий": "bg-green-100 text-green-800",
      "Средний": "bg-yellow-100 text-yellow-800", 
      "Продвинутый": "bg-red-100 text-red-800"
    };
    return colors[difficulty] || "bg-gray-100 text-gray-800";
  };

  const getImportanceColor = (importance: string) => {
    const colors = {
      critical: "bg-red-100 text-red-800",
      high: "bg-orange-100 text-orange-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-green-100 text-green-800"
    };
    return colors[importance] || "bg-gray-100 text-gray-800";
  };

  const getImportanceLabel = (importance: string) => {
    const labels = {
      critical: "Критично",
      high: "Важно",
      medium: "Средне",
      low: "Низко"
    };
    return labels[importance] || importance;
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Bug" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Школа пчеловодства</h1>
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
            Изучайте пчеловодство с экспертами
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Делимся 20-летним опытом пчеловодства: от основ до профессиональных секретов. 
            Практические советы, календарь работ и рекомендации по оборудованию.
          </p>
        </div>

        <Tabs defaultValue="calendar" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="calendar">Календарь работ</TabsTrigger>
            <TabsTrigger value="equipment">Оборудование</TabsTrigger>
            <TabsTrigger value="tips">Советы</TabsTrigger>
            <TabsTrigger value="courses">Курсы</TabsTrigger>
          </TabsList>

          {/* Calendar */}
          <TabsContent value="calendar" className="space-y-8">
            {/* Season Selection */}
            <div className="grid md:grid-cols-4 gap-4">
              {seasons.map((season) => (
                <Card 
                  key={season.id}
                  className={`border-honey-light cursor-pointer transition-all ${
                    selectedSeason === season.id ? 'ring-2 ring-honey shadow-lg' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedSeason(season.id)}
                >
                  <CardContent className="p-4 text-center">
                    <Icon name={season.icon} className="w-8 h-8 text-honey mx-auto mb-3" />
                    <Badge className={season.color + " mb-2"}>
                      {season.name}
                    </Badge>
                    <div className="text-sm text-forest">{season.months}</div>
                    <div className="text-xs text-forest mt-2">{season.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Seasonal Work */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brown">
                Работы: {seasons.find(s => s.id === selectedSeason)?.name}
              </h3>
              
              {seasonalWork[selectedSeason]?.map((work, index) => (
                <Card key={index} className="border-honey-light">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-brown">{work.title}</CardTitle>
                        <p className="text-forest">{work.description}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Badge className={getImportanceColor(work.importance)}>
                          {getImportanceLabel(work.importance)}
                        </Badge>
                        <Badge variant="outline">
                          {work.timing}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-brown mb-3">Что нужно делать:</h4>
                    <ul className="space-y-2">
                      {work.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                          <span className="text-forest">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Equipment */}
          <TabsContent value="equipment" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brown mb-4">Оборудование для пчеловодства</h3>
              <p className="text-forest">Все необходимое для успешного пчеловодства</p>
            </div>

            {equipment.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-honey-light">
                <CardHeader>
                  <CardTitle className="text-brown">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border border-honey-light rounded-lg p-4">
                        <h4 className="font-semibold text-brown mb-2">{item.name}</h4>
                        <p className="text-sm text-forest mb-3">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-honey">{item.price}</span>
                          <Button size="sm" variant="outline">
                            <Icon name="ShoppingCart" className="w-4 h-4 mr-1" />
                            Купить
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Beginner Kit */}
            <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Icon name="Package" className="w-12 h-12 text-honey mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-brown mb-4">
                    Стартовый набор пчеловода
                  </h3>
                  <p className="text-forest mb-6">
                    Все необходимое для начинающего пчеловода в одном комплекте
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-brown mb-3">В комплект входит:</h4>
                    <ul className="space-y-2 text-forest text-sm">
                      <li>• Улей Дадана с 2 корпусами</li>
                      <li>• 24 рамки с вощиной</li>
                      <li>• Костюм пчеловода</li>
                      <li>• Дымарь и стамеска</li>
                      <li>• Кормушка и поилка</li>
                      <li>• Инструкция для начинающих</li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-honey mb-2">25 000 ₽</div>
                    <div className="text-sm text-forest line-through mb-4">30 000 ₽</div>
                    <Badge className="bg-red-500 text-white mb-4">Скидка 17%</Badge>
                    <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                      <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                      Заказать комплект
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tips */}
          <TabsContent value="tips" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brown mb-4">Практические советы</h3>
              <p className="text-forest">Проверенные временем советы от опытных пчеловодов</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <Card key={index} className="border-honey-light">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-3">
                        <Icon name={tip.icon} className="w-6 h-6 text-honey" />
                        <CardTitle className="text-brown">{tip.title}</CardTitle>
                      </div>
                      <Badge className={getDifficultyColor(tip.difficulty)}>
                        {tip.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-forest">{tip.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Common Mistakes */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Частые ошибки начинающих</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Чего НЕ стоит делать:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="X" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Осматривать ульи в плохую погоду</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="X" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Использовать слишком много дыма</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="X" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Откачивать незрелый мед</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="X" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Игнорировать признаки болезней</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Что ОБЯЗАТЕЛЬНО делать:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Ведите дневник пасеки</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Регулярно обновляйте соты</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Обеспечивайте пчел водой</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Изучайте поведение пчел</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses */}
          <TabsContent value="courses" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brown mb-4">Обучающие курсы</h3>
              <p className="text-forest">Практические курсы пчеловодства от наших экспертов</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-honey-light">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-brown">Основы пчеловодства</CardTitle>
                      <p className="text-forest">Курс для начинающих пчеловодов</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Начинающий</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <Icon name="Clock" className="w-4 h-4 text-honey mx-auto mb-1" />
                        <div className="text-forest">16 часов</div>
                      </div>
                      <div>
                        <Icon name="Users" className="w-4 h-4 text-honey mx-auto mb-1" />
                        <div className="text-forest">До 10 чел</div>
                      </div>
                      <div>
                        <Icon name="Award" className="w-4 h-4 text-honey mx-auto mb-1" />
                        <div className="text-forest">Сертификат</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-brown mb-2">Программа курса:</h4>
                      <ul className="space-y-1 text-sm text-forest">
                        <li>• Биология пчелиной семьи</li>
                        <li>• Устройство улья и инвентарь</li>
                        <li>• Календарь пчеловода</li>
                        <li>• Болезни пчел и их лечение</li>
                        <li>• Откачка и хранение меда</li>
                        <li>• Практические занятия на пасеке</li>
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-honey">8 000 ₽</span>
                      <Button className="bg-honey hover:bg-honey-dark text-white">
                        Записаться
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-honey-light">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-brown">Продвинутое пчеловодство</CardTitle>
                      <p className="text-forest">Для опытных пчеловодов</p>
                    </div>
                    <Badge className="bg-red-100 text-red-800">Продвинутый</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <Icon name="Clock" className="w-4 h-4 text-honey mx-auto mb-1" />
                        <div className="text-forest">24 часа</div>
                      </div>
                      <div>
                        <Icon name="Users" className="w-4 h-4 text-honey mx-auto mb-1" />
                        <div className="text-forest">До 8 чел</div>
                      </div>
                      <div>
                        <Icon name="Award" className="w-4 h-4 text-honey mx-auto mb-1" />
                        <div className="text-forest">Диплом</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-brown mb-2">Программа курса:</h4>
                      <ul className="space-y-1 text-sm text-forest">
                        <li>• Селекция и разведение пчел</li>
                        <li>• Матководство</li>
                        <li>• Интенсивные технологии</li>
                        <li>• Производство продуктов пчеловодства</li>
                        <li>• Бизнес в пчеловодстве</li>
                        <li>• Современные методы лечения</li>
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-honey">15 000 ₽</span>
                      <Button className="bg-honey hover:bg-honey-dark text-white">
                        Записаться
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Online Course */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Онлайн-курс "Пчеловодство с нуля"</CardTitle>
                <p className="text-forest">Изучайте пчеловодство в удобном темпе</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Что вы получите:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="Video" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">20 видеоуроков (8 часов)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="FileText" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Методические материалы</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="MessageCircle" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Поддержка куратора</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Award" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Сертификат об окончании</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-honey mb-2">5 000 ₽</div>
                    <div className="text-sm text-forest mb-4">Доступ на 12 месяцев</div>
                    <Button className="w-full bg-honey hover:bg-honey-dark text-white mb-4">
                      <Icon name="Play" className="w-4 h-4 mr-2" />
                      Начать обучение
                    </Button>
                    <div className="text-xs text-forest">
                      30-дневная гарантия возврата денег
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Newsletter */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
            <CardContent className="p-8 text-center">
              <Icon name="BookOpen" className="w-12 h-12 text-honey mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brown mb-4">
                Еженедельные советы пчеловода
              </h3>
              <p className="text-forest mb-6 max-w-md mx-auto">
                Подпишитесь на рассылку и получайте актуальные советы по пчеловодству каждую неделю
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
                Бесплатно, без спама, отписка в любое время
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Beekeeping;