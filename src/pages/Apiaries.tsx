import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Apiaries = () => {
  const [selectedApiary, setSelectedApiary] = useState(0);

  const apiaries = [
    {
      id: 1,
      name: "Пасека у дуба",
      location: "Тульская область, д. Медовка",
      coordinates: "54.2045° N, 37.6156° E",
      established: "2003",
      hives: 80,
      area: "15 га",
      flowers: ["Липа", "Акация", "Клевер", "Донник"],
      honeyTypes: ["Липовый", "Цветочный", "Акациевый"],
      season: "Май - Сентябрь",
      description: "Основная пасека, расположенная в экологически чистом районе среди липовых рощ. Здесь производится наш знаменитый липовый мед.",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg",
      features: [
        "Липовая роща возрастом 100+ лет",
        "Удаленность от дорог 5 км",
        "Собственный источник воды",
        "Современные ульи-лежаки"
      ],
      production: {
        "2023": "1200 кг",
        "2022": "1100 кг",
        "2021": "950 кг"
      }
    },
    {
      id: 2,
      name: "Медовая долина",
      location: "Рязанская область, с. Пчелино",
      coordinates: "54.6269° N, 39.6916° E",
      established: "2008",
      hives: 60,
      area: "12 га",
      flowers: ["Гречиха", "Подсолнечник", "Эспарцет"],
      honeyTypes: ["Гречишный", "Подсолнечный"],
      season: "Июнь - Август",
      description: "Специализированная пасека для производства гречишного меда. Расположена рядом с полями гречихи и подсолнечника.",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg",
      features: [
        "Поля гречихи 200+ га",
        "Органическое земледелие",
        "Отсутствие химических обработок",
        "Ульи Дадана-Блатта"
      ],
      production: {
        "2023": "800 кг",
        "2022": "750 кг",
        "2021": "680 кг"
      }
    },
    {
      id: 3,
      name: "Лесная пасека",
      location: "Московская область, д. Пчелкино",
      coordinates: "55.7558° N, 37.6176° E",
      established: "2015",
      hives: 40,
      area: "8 га",
      flowers: ["Разнотравье", "Клевер", "Иван-чай", "Малина"],
      honeyTypes: ["Цветочный", "Лесной"],
      season: "Май - Август",
      description: "Молодая пасека в лесной зоне, специализирующаяся на производстве цветочного меда из лесного разнотравья.",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg",
      features: [
        "Смешанный лес",
        "Богатое разнотравье",
        "Чистый воздух",
        "Современные технологии"
      ],
      production: {
        "2023": "600 кг",
        "2022": "550 кg",
        "2021": "480 кг"
      }
    }
  ];

  const totalStats = {
    totalHives: apiaries.reduce((sum, apiary) => sum + apiary.hives, 0),
    totalArea: apiaries.reduce((sum, apiary) => sum + parseInt(apiary.area), 0),
    totalProduction2023: apiaries.reduce((sum, apiary) => sum + parseInt(apiary.production["2023"]), 0),
    averageExperience: Math.round(apiaries.reduce((sum, apiary) => sum + (2024 - parseInt(apiary.established)), 0) / apiaries.length)
  };

  const seasonCalendar = [
    { month: "Март", activity: "Подготовка ульев", status: "preparation" },
    { month: "Апрель", activity: "Весенний осмотр", status: "preparation" },
    { month: "Май", activity: "Начало медосбора", status: "active" },
    { month: "Июнь", activity: "Активный медосбор", status: "active" },
    { month: "Июль", activity: "Пик медосбора", status: "peak" },
    { month: "Август", activity: "Завершение сбора", status: "active" },
    { month: "Сентябрь", activity: "Подготовка к зиме", status: "preparation" },
    { month: "Октябрь-Февраль", activity: "Зимовка пчел", status: "winter" }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      preparation: "bg-blue-100 text-blue-800",
      active: "bg-green-100 text-green-800",
      peak: "bg-yellow-100 text-yellow-800",
      winter: "bg-gray-100 text-gray-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
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
              <Icon name="MapPin" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Наши пасеки</h1>
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
            Экологически чистые пасеки
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Наши пасеки расположены в самых чистых уголках Средней полосы России, 
            вдали от промышленных предприятий и автомагистралей.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="border-honey-light text-center">
            <CardContent className="p-6">
              <Icon name="Home" className="w-8 h-8 text-honey mx-auto mb-3" />
              <div className="text-3xl font-bold text-honey mb-2">{totalStats.totalHives}</div>
              <div className="text-forest">ульев</div>
            </CardContent>
          </Card>
          
          <Card className="border-honey-light text-center">
            <CardContent className="p-6">
              <Icon name="Map" className="w-8 h-8 text-honey mx-auto mb-3" />
              <div className="text-3xl font-bold text-honey mb-2">{totalStats.totalArea}</div>
              <div className="text-forest">гектаров</div>
            </CardContent>
          </Card>
          
          <Card className="border-honey-light text-center">
            <CardContent className="p-6">
              <Icon name="Droplets" className="w-8 h-8 text-honey mx-auto mb-3" />
              <div className="text-3xl font-bold text-honey mb-2">{totalStats.totalProduction2023}</div>
              <div className="text-forest">кг меда в 2023</div>
            </CardContent>
          </Card>
          
          <Card className="border-honey-light text-center">
            <CardContent className="p-6">
              <Icon name="Calendar" className="w-8 h-8 text-honey mx-auto mb-3" />
              <div className="text-3xl font-bold text-honey mb-2">{totalStats.averageExperience}</div>
              <div className="text-forest">лет опыта</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="locations" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="locations">Расположение пасек</TabsTrigger>
            <TabsTrigger value="calendar">Календарь медосбора</TabsTrigger>
            <TabsTrigger value="tours">Экскурсии</TabsTrigger>
          </TabsList>

          {/* Locations */}
          <TabsContent value="locations" className="space-y-8">
            {/* Apiaries List */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {apiaries.map((apiary, index) => (
                <Card 
                  key={apiary.id} 
                  className={`border-honey-light cursor-pointer transition-all ${
                    selectedApiary === index ? 'ring-2 ring-honey shadow-lg' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedApiary(index)}
                >
                  <div className="relative">
                    <img 
                      src={apiary.image} 
                      alt={apiary.name}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 left-2 bg-honey text-white">
                      {apiary.hives} ульев
                    </Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-brown mb-2">{apiary.name}</h3>
                    <p className="text-sm text-forest mb-2">{apiary.location}</p>
                    <div className="flex items-center space-x-2 text-xs text-forest">
                      <Icon name="Calendar" className="w-3 h-3" />
                      <span>С {apiary.established} года</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Selected Apiary Details */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">{apiaries[selectedApiary].name}</CardTitle>
                <p className="text-forest">{apiaries[selectedApiary].description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Основная информация</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-forest">Местоположение:</span>
                        <span className="text-brown">{apiaries[selectedApiary].location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-forest">Координаты:</span>
                        <span className="text-brown">{apiaries[selectedApiary].coordinates}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-forest">Основана:</span>
                        <span className="text-brown">{apiaries[selectedApiary].established} год</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-forest">Количество ульев:</span>
                        <span className="text-brown">{apiaries[selectedApiary].hives}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-forest">Площадь:</span>
                        <span className="text-brown">{apiaries[selectedApiary].area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-forest">Сезон:</span>
                        <span className="text-brown">{apiaries[selectedApiary].season}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Медоносы</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {apiaries[selectedApiary].flowers.map((flower, index) => (
                        <Badge key={index} variant="outline" className="text-forest">
                          <Icon name="Flower" className="w-3 h-3 mr-1" />
                          {flower}
                        </Badge>
                      ))}
                    </div>
                    
                    <h4 className="font-semibold text-brown mb-4">Виды меда</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {apiaries[selectedApiary].honeyTypes.map((type, index) => (
                        <Badge key={index} className="bg-honey text-white">
                          {type}
                        </Badge>
                      ))}
                    </div>
                    
                    <h4 className="font-semibold text-brown mb-4">Особенности</h4>
                    <ul className="space-y-2">
                      {apiaries[selectedApiary].features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                          <span className="text-forest text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Production Statistics */}
                <div className="mt-8 p-6 bg-honey-light rounded-lg">
                  <h4 className="font-semibold text-brown mb-4">Производство меда по годам</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(apiaries[selectedApiary].production).map(([year, amount]) => (
                      <div key={year}>
                        <div className="text-2xl font-bold text-honey">{amount}</div>
                        <div className="text-sm text-forest">{year} год</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Calendar */}
          <TabsContent value="calendar" className="space-y-8">
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Календарь медосбора</CardTitle>
                <p className="text-forest">Сезонные работы и периоды цветения медоносов</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {seasonCalendar.map((period, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-honey-light rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 text-center">
                          <div className="font-semibold text-brown">{period.month}</div>
                        </div>
                        <div>
                          <div className="font-medium text-brown">{period.activity}</div>
                        </div>
                      </div>
                      <Badge className={getStatusColor(period.status)}>
                        {period.status === 'preparation' && 'Подготовка'}
                        {period.status === 'active' && 'Активный сбор'}
                        {period.status === 'peak' && 'Пик сезона'}
                        {period.status === 'winter' && 'Зимовка'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Flowering Calendar */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Календарь цветения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-honey-light">
                        <th className="text-left py-3 text-brown">Медонос</th>
                        <th className="text-center py-3 text-brown">Май</th>
                        <th className="text-center py-3 text-brown">Июнь</th>
                        <th className="text-center py-3 text-brown">Июль</th>
                        <th className="text-center py-3 text-brown">Август</th>
                        <th className="text-center py-3 text-brown">Сентябрь</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 text-forest font-medium">Акация</td>
                        <td className="text-center py-3">
                          <div className="w-4 h-4 bg-honey rounded-full mx-auto"></div>
                        </td>
                        <td className="text-center py-3">
                          <div className="w-4 h-4 bg-honey rounded-full mx-auto"></div>
                        </td>
                        <td className="text-center py-3"></td>
                        <td className="text-center py-3"></td>
                        <td className="text-center py-3"></td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 text-forest font-medium">Липа</td>
                        <td className="text-center py-3"></td>
                        <td className="text-center py-3">
                          <div className="w-4 h-4 bg-honey rounded-full mx-auto"></div>
                        </td>
                        <td className="text-center py-3">
                          <div className="w-4 h-4 bg-honey rounded-full mx-auto"></div>
                        </td>
                        <td className="text-center py-3"></td>
                        <td className="text-center py-3"></td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 text-forest font-medium">Гречиха</td>
                        <td className="text-center py-3"></td>
                        <td className="text-center py-3">
                          <div className="w-4 h-4 bg-honey rounded-full mx-auto"></div>
                        </td>
                        <td className="text-center py-3">
                          <div className="w-4 h-4 bg-honey rounded-full mx-auto"></div>
                        </td>
                        <td className="text-center py-3">
                          <div className="w-4 h-4 bg-honey rounded-full mx-auto"></div>
                        </td>
                        <td className="text-center py-3"></td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 text-forest font-medium">Подсолнечник</td>
                        <td className="text-center py-3"></td>
                        <td className="text-center py-3"></td>
                        <td className="text-center py-3">
                          <div className="w-4 h-4 bg-honey rounded-full mx-auto"></div>
                        </td>
                        <td className="text-center py-3">
                          <div className="w-4 h-4 bg-honey rounded-full mx-auto"></div>
                        </td>
                        <td className="text-center py-3"></td>
                      </tr>
                      <tr>
                        <td className="py-3 text-forest font-medium">Разнотравье</td>
                        <td className="text-center py-3">
                          <div className="w-4 h-4 bg-honey rounded-full mx-auto"></div>
                        </td>
                        <td className="text-center py-3">
                          <div className="w-4 h-4 bg-honey rounded-full mx-auto"></div>
                        </td>
                        <td className="text-center py-3">
                          <div className="w-4 h-4 bg-honey rounded-full mx-auto"></div>
                        </td>
                        <td className="text-center py-3">
                          <div className="w-4 h-4 bg-honey rounded-full mx-auto"></div>
                        </td>
                        <td className="text-center py-3">
                          <div className="w-4 h-4 bg-honey rounded-full mx-auto"></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tours */}
          <TabsContent value="tours" className="space-y-8">
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Экскурсии на пасеку</CardTitle>
                <p className="text-forest">
                  Приглашаем познакомиться с удивительным миром пчел и процессом производства меда
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Программа экскурсии:</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          1
                        </div>
                        <div>
                          <div className="font-medium text-brown">Знакомство с пасекой</div>
                          <div className="text-sm text-forest">История, традиции, современные технологии</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          2
                        </div>
                        <div>
                          <div className="font-medium text-brown">Наблюдение за пчелами</div>
                          <div className="text-sm text-forest">Безопасное знакомство с пчелиными семьями</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          3
                        </div>
                        <div>
                          <div className="font-medium text-brown">Дегустация меда</div>
                          <div className="text-sm text-forest">Пробуем разные сорта меда</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          4
                        </div>
                        <div>
                          <div className="font-medium text-brown">Мастер-класс</div>
                          <div className="text-sm text-forest">Изготовление свечей из воска</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Практическая информация:</h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" className="w-4 h-4 text-honey" />
                        <span className="text-forest">Продолжительность: 2 часа</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Users" className="w-4 h-4 text-honey" />
                        <span className="text-forest">Группы до 15 человек</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" className="w-4 h-4 text-honey" />
                        <span className="text-forest">Май - Сентябрь</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="DollarSign" className="w-4 h-4 text-honey" />
                        <span className="text-forest">Стоимость: 500 ₽/чел</span>
                      </div>
                    </div>
                    
                    <div className="bg-honey-light rounded-lg p-4 mb-6">
                      <h5 className="font-semibold text-brown mb-2">Что включено:</h5>
                      <ul className="space-y-1 text-sm text-forest">
                        <li>• Защитная одежда</li>
                        <li>• Дегустация 5 сортов меда</li>
                        <li>• Мастер-класс по изготовлению свечей</li>
                        <li>• Подарок - баночка меда 100г</li>
                        <li>• Фотосессия с пчелами</li>
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                      <Icon name="Calendar" className="w-4 h-4 mr-2" />
                      Записаться на экскурсию
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Safety Information */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Безопасность на пасеке</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Меры предосторожности:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="AlertTriangle" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Обязательное использование защитной одежды</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="AlertTriangle" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Соблюдение дистанции от ульев</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="AlertTriangle" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Запрет на резкие движения и громкие звуки</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="AlertTriangle" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Наличие аптечки и антигистаминных препаратов</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Противопоказания:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="X" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Аллергия на продукты пчеловодства</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="X" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Острые аллергические реакции в анамнезе</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="X" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Возраст до 6 лет</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="X" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-forest text-sm">Беременность (по рекомендации врача)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Map Section */}
        <div className="mt-12">
          <Card className="border-honey-light">
            <CardHeader>
              <CardTitle className="text-brown">Карта расположения пасек</CardTitle>
              <p className="text-forest">Все наши пасеки находятся в экологически чистых районах</p>
            </CardHeader>
            <CardContent>
              <div className="bg-honey-light rounded-lg p-8 text-center">
                <Icon name="Map" className="w-16 h-16 text-honey mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-brown mb-2">Интерактивная карта</h4>
                <p className="text-forest mb-6">
                  Посмотрите точное расположение наших пасек и проложите маршрут для посещения
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm mb-6">
                  {apiaries.map((apiary, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-honey rounded-full"></div>
                      <span className="text-forest">{apiary.name}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-honey hover:bg-honey-dark text-white">
                  <Icon name="ExternalLink" className="w-4 h-4 mr-2" />
                  Открыть в Яндекс.Картах
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Apiaries;