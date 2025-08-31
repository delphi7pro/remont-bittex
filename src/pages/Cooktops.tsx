import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Cooktops = () => {
  const cooktopTypes = [
    {
      type: "Индукционные панели",
      problems: ["Не включается", "Не распознает посуду", "Трещины на поверхности"],
      avgCost: "2500 ₽",
      complexity: "high"
    },
    {
      type: "Электрические панели",
      problems: ["Не нагревается", "Неравномерный нагрев", "Не регулируется мощность"],
      avgCost: "1800 ₽",
      complexity: "medium"
    },
    {
      type: "Газовые панели",
      problems: ["Не зажигается", "Слабое пламя", "Запах газа"],
      avgCost: "1500 ₽",
      complexity: "medium"
    },
    {
      type: "Комбинированные",
      problems: ["Проблемы с газовой частью", "Неисправность электрической части"],
      avgCost: "2200 ₽",
      complexity: "high"
    }
  ];

  const safetyTips = [
    {
      tip: "При запахе газа",
      actions: ["Не включайте свет", "Откройте окна", "Перекройте газ", "Вызовите газовую службу"]
    },
    {
      tip: "При искрении",
      actions: ["Отключите от сети", "Не используйте воду", "Вызовите мастера"]
    },
    {
      tip: "При трещинах",
      actions: ["Прекратите использование", "Не нагружайте поверхность", "Замените стекло"]
    }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Flame" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Ремонт варочных панелей</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Cooktop Types */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cooktopTypes.map((cooktop, index) => (
            <Card key={index} className="border-honey-light">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-brown">{cooktop.type}</CardTitle>
                  <Badge className={cooktop.complexity === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}>
                    {cooktop.complexity === 'high' ? 'Сложный' : 'Средний'}
                  </Badge>
                </div>
                <div className="text-xl font-bold text-honey">{cooktop.avgCost}</div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-brown mb-2">Частые проблемы:</h4>
                <ul className="space-y-1 mb-4">
                  {cooktop.problems.map((problem, problemIndex) => (
                    <li key={problemIndex} className="flex items-start space-x-2">
                      <Icon name="AlertCircle" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span className="text-forest text-sm">{problem}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                  Заказать ремонт
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safety Tips */}
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-700">Меры безопасности</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {safetyTips.map((safety, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-red-700 mb-2">{safety.tip}:</h4>
                  <ul className="space-y-1">
                    {safety.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start space-x-2">
                        <Icon name="AlertTriangle" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-red-600 text-sm">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cooktops;