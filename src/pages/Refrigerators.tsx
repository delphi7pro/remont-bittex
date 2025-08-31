import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Refrigerators = () => {
  const commonProblems = [
    {
      problem: "Не морозит",
      causes: ["Неисправность компрессора", "Утечка фреона", "Засор капиллярной трубки"],
      price: "от 2000 ₽",
      urgency: "high"
    },
    {
      problem: "Течет вода",
      causes: ["Засор дренажной системы", "Повреждение уплотнителя", "Неисправность оттайки"],
      price: "от 1200 ₽",
      urgency: "medium"
    },
    {
      problem: "Сильно шумит",
      causes: ["Износ компрессора", "Неисправность вентилятора", "Разбалансировка"],
      price: "от 1500 ₽",
      urgency: "low"
    },
    {
      problem: "Не включается",
      causes: ["Неисправность терморегулятора", "Проблемы с электроникой", "Обрыв проводки"],
      price: "от 1000 ₽",
      urgency: "high"
    }
  ];

  const repairTypes = [
    {
      type: "Замена компрессора",
      description: "Полная замена компрессорного агрегата",
      price: "от 8000 ₽",
      time: "2-3 часа",
      warranty: "24 месяца",
      complexity: "high"
    },
    {
      type: "Заправка фреоном",
      description: "Дозаправка или полная замена хладагента",
      price: "от 3500 ₽",
      time: "1-2 часа",
      warranty: "12 месяцев",
      complexity: "medium"
    },
    {
      type: "Замена терморегулятора",
      description: "Установка нового термостата",
      price: "от 2500 ₽",
      time: "1 час",
      warranty: "18 месяцев",
      complexity: "low"
    },
    {
      type: "Ремонт системы No Frost",
      description: "Восстановление системы автоматической оттайки",
      price: "от 4000 ₽",
      time: "2-4 часа",
      warranty: "18 месяцев",
      complexity: "high"
    }
  ];

  const brands = [
    { name: "Samsung", models: 150, popularity: "high" },
    { name: "LG", models: 120, popularity: "high" },
    { name: "Bosch", models: 80, popularity: "medium" },
    { name: "Siemens", models: 70, popularity: "medium" },
    { name: "Electrolux", models: 90, popularity: "medium" },
    { name: "Whirlpool", models: 60, popularity: "low" }
  ];

  const getUrgencyColor = (urgency: string) => {
    const colors = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-green-100 text-green-800"
    };
    return colors[urgency] || "bg-gray-100 text-gray-800";
  };

  const getComplexityColor = (complexity: string) => {
    const colors = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-green-100 text-green-800"
    };
    return colors[complexity] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Refrigerator" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Ремонт холодильников</h1>
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
            Профессиональный ремонт холодильников
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Ремонтируем холодильники всех марок и моделей. Выезд мастера в день обращения. 
            Гарантия до 2 лет на все виды работ.
          </p>
        </div>

        <Tabs defaultValue="problems" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="problems">Частые проблемы</TabsTrigger>
            <TabsTrigger value="repairs">Виды ремонта</TabsTrigger>
            <TabsTrigger value="brands">Бренды</TabsTrigger>
            <TabsTrigger value="prevention">Профилактика</TabsTrigger>
          </TabsList>

          {/* Common Problems */}
          <TabsContent value="problems" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {commonProblems.map((item, index) => (
                <Card key={index} className="border-honey-light">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-brown">{item.problem}</CardTitle>
                      <Badge className={getUrgencyColor(item.urgency)}>
                        {item.urgency === 'high' && 'Срочно'}
                        {item.urgency === 'medium' && 'Средне'}
                        {item.urgency === 'low' && 'Не срочно'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-brown mb-2">Возможные причины:</h4>
                    <ul className="space-y-1 mb-4">
                      {item.causes.map((cause, causeIndex) => (
                        <li key={causeIndex} className="flex items-start space-x-2">
                          <Icon name="AlertCircle" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                          <span className="text-forest text-sm">{cause}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-honey">{item.price}</span>
                      <Button size="sm" className="bg-honey hover:bg-honey-dark text-white">
                        Вызвать мастера
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Repair Types */}
          <TabsContent value="repairs" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {repairTypes.map((repair, index) => (
                <Card key={index} className="border-honey-light">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-brown">{repair.type}</CardTitle>
                      <Badge className={getComplexityColor(repair.complexity)}>
                        {repair.complexity === 'high' && 'Сложный'}
                        {repair.complexity === 'medium' && 'Средний'}
                        {repair.complexity === 'low' && 'Простой'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-forest mb-4">{repair.description}</p>
                    <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                      <div>
                        <span className="text-forest">Цена:</span>
                        <div className="font-semibold text-honey">{repair.price}</div>
                      </div>
                      <div>
                        <span className="text-forest">Время:</span>
                        <div className="font-semibold text-brown">{repair.time}</div>
                      </div>
                      <div>
                        <span className="text-forest">Гарантия:</span>
                        <div className="font-semibold text-brown">{repair.warranty}</div>
                      </div>
                    </div>
                    <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                      Заказать ремонт
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Brands */}
          <TabsContent value="brands" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((brand, index) => (
                <Card key={index} className="border-honey-light text-center">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-brown mb-2">{brand.name}</h3>
                    <p className="text-forest mb-2">{brand.models} моделей</p>
                    <Badge className={
                      brand.popularity === 'high' ? 'bg-green-100 text-green-800' :
                      brand.popularity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }>
                      {brand.popularity === 'high' && 'Популярный'}
                      {brand.popularity === 'medium' && 'Средний'}
                      {brand.popularity === 'low' && 'Редкий'}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Prevention */}
          <TabsContent value="prevention" className="space-y-6">
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Профилактика поломок</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Что делать:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest">Регулярно размораживайте</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest">Чистите дренажную систему</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest">Проверяйте уплотнители</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest">Не перегружайте полки</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Чего избегать:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="X" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-forest">Ставить горячую еду</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="X" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-forest">Блокировать вентиляцию</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="X" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-forest">Использовать острые предметы для чистки</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="X" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-forest">Игнорировать странные звуки</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Emergency Call */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
            <CardContent className="p-8 text-center">
              <Icon name="AlertTriangle" className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-700 mb-4">
                Срочный ремонт холодильника
              </h3>
              <p className="text-red-600 mb-6 max-w-md mx-auto">
                Если холодильник полностью не работает - вызывайте мастера немедленно!
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Срочный вызов: +7 (999) 123-45-67
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Refrigerators;