import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Ovens = () => {
  const ovenProblems = [
    {
      problem: "Не нагревается",
      causes: ["Неисправность ТЭНа", "Поломка термостата", "Проблемы с электроникой"],
      price: "от 1800 ₽",
      complexity: "medium"
    },
    {
      problem: "Неравномерный нагрев",
      causes: ["Неисправность конвекции", "Поломка вентилятора", "Засор воздуховодов"],
      price: "от 2200 ₽",
      complexity: "medium"
    },
    {
      problem: "Не включается",
      causes: ["Неисправность блока управления", "Поломка переключателей", "Обрыв проводки"],
      price: "от 1500 ₽",
      complexity: "low"
    },
    {
      problem: "Дверца не закрывается",
      causes: ["Износ петель", "Деформация дверцы", "Поломка замка"],
      price: "от 1200 ₽",
      complexity: "low"
    }
  ];

  const ovenTypes = [
    {
      type: "Электрические духовки",
      features: ["ТЭНы верхний и нижний", "Конвекция", "Гриль", "Автоматические программы"],
      commonIssues: ["Перегорание ТЭНов", "Неисправность термостата", "Поломка вентилятора"]
    },
    {
      type: "Газовые духовки",
      features: ["Газовые горелки", "Электроподжиг", "Газ-контроль", "Термостат"],
      commonIssues: ["Проблемы с подачей газа", "Неисправность термопары", "Засор форсунок"]
    },
    {
      type: "Комбинированные",
      features: ["Газовая варочная поверхность", "Электрическая духовка", "Гриль"],
      commonIssues: ["Комбинированные проблемы", "Сложная диагностика", "Дорогие запчасти"]
    }
  ];

  const getComplexityColor = (complexity: string) => {
    const colors = {
      low: "bg-green-100 text-green-800",
      medium: "bg-yellow-100 text-yellow-800",
      high: "bg-red-100 text-red-800"
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
              <Icon name="ChefHat" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Ремонт духовых шкафов</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Problems */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {ovenProblems.map((item, index) => (
            <Card key={index} className="border-honey-light">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-brown">{item.problem}</CardTitle>
                  <Badge className={getComplexityColor(item.complexity)}>
                    {item.complexity === 'low' && 'Простой'}
                    {item.complexity === 'medium' && 'Средний'}
                    {item.complexity === 'high' && 'Сложный'}
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
                    Заказать ремонт
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Oven Types */}
        <div className="space-y-6">
          {ovenTypes.map((oven, index) => (
            <Card key={index} className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">{oven.type}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-brown mb-2">Особенности:</h4>
                    <ul className="space-y-1">
                      {oven.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                          <span className="text-forest text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-2">Частые проблемы:</h4>
                    <ul className="space-y-1">
                      {oven.commonIssues.map((issue, issueIndex) => (
                        <li key={issueIndex} className="flex items-start space-x-2">
                          <Icon name="AlertTriangle" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-forest text-sm">{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ovens;