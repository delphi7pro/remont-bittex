import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const WashingMachines = () => {
  const commonProblems = [
    {
      problem: "Не сливает воду",
      causes: ["Засор сливного фильтра", "Неисправность помпы", "Засор сливного шланга"],
      price: "от 1200 ₽",
      urgency: "high",
      diy: true
    },
    {
      problem: "Не отжимает белье",
      causes: ["Износ подшипников", "Неисправность таходатчика", "Проблемы с ремнем"],
      price: "от 2500 ₽",
      urgency: "medium",
      diy: false
    },
    {
      problem: "Течет вода",
      causes: ["Повреждение манжеты", "Износ сальника", "Трещина в баке"],
      price: "от 1800 ₽",
      urgency: "high",
      diy: false
    },
    {
      problem: "Не греет воду",
      causes: ["Неисправность ТЭНа", "Проблемы с датчиком температуры", "Накипь"],
      price: "от 2200 ₽",
      urgency: "medium",
      diy: false
    }
  ];

  const repairSteps = [
    {
      step: 1,
      title: "Диагностика",
      description: "Определяем точную причину поломки",
      time: "15-30 мин",
      cost: "500 ₽"
    },
    {
      step: 2,
      title: "Разборка",
      description: "Аккуратно разбираем машину для доступа к деталям",
      time: "30-60 мин",
      cost: "Включено"
    },
    {
      step: 3,
      title: "Замена деталей",
      description: "Устанавливаем новые оригинальные запчасти",
      time: "60-120 мин",
      cost: "По прайсу"
    },
    {
      step: 4,
      title: "Сборка и тестирование",
      description: "Собираем машину и проверяем работу",
      time: "30-45 мин",
      cost: "Включено"
    }
  ];

  const diyTips = [
    {
      title: "Чистка сливного фильтра",
      difficulty: "Легко",
      time: "10 мин",
      tools: ["Тряпка", "Емкость для воды"],
      steps: [
        "Отключите машину от сети",
        "Найдите сливной фильтр внизу",
        "Подставьте емкость",
        "Выкрутите фильтр против часовой стрелки",
        "Промойте под проточной водой",
        "Установите обратно"
      ]
    },
    {
      title: "Проверка сливного шланга",
      difficulty: "Средне",
      time: "20 мин",
      tools: ["Фонарик", "Проволока"],
      steps: [
        "Отключите машину",
        "Отсоедините шланг от канализации",
        "Проверьте на засоры",
        "Промойте горячей водой",
        "При необходимости прочистите проволокой",
        "Подключите обратно"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Washing" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Ремонт стиральных машин</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="problems" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="problems">Проблемы</TabsTrigger>
            <TabsTrigger value="process">Процесс ремонта</TabsTrigger>
            <TabsTrigger value="diy">Самостоятельно</TabsTrigger>
            <TabsTrigger value="prevention">Профилактика</TabsTrigger>
          </TabsList>

          <TabsContent value="problems" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {commonProblems.map((item, index) => (
                <Card key={index} className="border-honey-light">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-brown">{item.problem}</CardTitle>
                      <div className="flex gap-2">
                        <Badge className={item.urgency === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}>
                          {item.urgency === 'high' ? 'Срочно' : 'Средне'}
                        </Badge>
                        {item.diy && (
                          <Badge className="bg-blue-100 text-blue-800">
                            Можно попробовать самому
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-brown mb-2">Причины:</h4>
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

          <TabsContent value="process" className="space-y-6">
            <div className="space-y-6">
              {repairSteps.map((step, index) => (
                <Card key={index} className="border-honey-light">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-honey rounded-full flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-brown mb-2">{step.title}</h3>
                        <p className="text-forest mb-3">{step.description}</p>
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center space-x-2">
                            <Icon name="Clock" className="w-4 h-4 text-honey" />
                            <span className="text-forest">{step.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="DollarSign" className="w-4 h-4 text-honey" />
                            <span className="text-forest">{step.cost}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="diy" className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <div className="flex items-start space-x-3">
                <Icon name="AlertTriangle" className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Внимание!</h3>
                  <p className="text-yellow-700 text-sm">
                    Самостоятельный ремонт может быть опасен и привести к потере гарантии. 
                    Выполняйте только простые операции и при полной уверенности в своих силах.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {diyTips.map((tip, index) => (
                <Card key={index} className="border-honey-light">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-brown">{tip.title}</CardTitle>
                      <Badge className={tip.difficulty === 'Легко' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                        {tip.difficulty}
                      </Badge>
                    </div>
                    <p className="text-forest">Время: {tip.time}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-brown mb-2">Понадобится:</h4>
                      <div className="flex flex-wrap gap-1">
                        {tip.tools.map((tool, toolIndex) => (
                          <Badge key={toolIndex} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-brown mb-2">Пошаговая инструкция:</h4>
                      <ol className="space-y-1">
                        {tip.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start space-x-2">
                            <span className="text-honey font-semibold">{stepIndex + 1}.</span>
                            <span className="text-forest text-sm">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="prevention" className="space-y-6">
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Уход за стиральной машиной</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Регулярный уход:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest">Чистите фильтр раз в месяц</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest">Протирайте манжету после стирки</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest">Оставляйте дверцу приоткрытой</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest">Используйте средства от накипи</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Правила эксплуатации:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="Info" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest">Не превышайте максимальную загрузку</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Info" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest">Проверяйте карманы перед стиркой</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Info" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest">Используйте качественные порошки</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Info" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                        <span className="text-forest">Не перегружайте электросеть</span>
                      </li>
                    </ul>
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

export default WashingMachines;