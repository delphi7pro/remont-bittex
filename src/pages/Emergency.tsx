import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Emergency = () => {
  const emergencyTypes = [
    {
      type: "Короткое замыкание",
      description: "Техника искрит, пахнет гарью",
      actions: ["Отключить от сети", "Проветрить помещение", "Вызвать мастера"],
      danger: "high",
      response: "30 мин"
    },
    {
      type: "Протечка воды",
      description: "Вода на полу, риск затопления",
      actions: ["Перекрыть воду", "Отключить технику", "Убрать воду"],
      danger: "high",
      response: "45 мин"
    },
    {
      type: "Перегрев техники",
      description: "Техника сильно нагревается",
      actions: ["Отключить питание", "Обеспечить вентиляцию", "Не включать до ремонта"],
      danger: "medium",
      response: "1 час"
    },
    {
      type: "Странные звуки",
      description: "Необычный шум, стук, скрежет",
      actions: ["Остановить работу", "Записать характер звука", "Вызвать диагностику"],
      danger: "low",
      response: "2 часа"
    }
  ];

  const getDangerColor = (danger: string) => {
    const colors = {
      high: "bg-red-100 text-red-800 border-red-200",
      medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
      low: "bg-green-100 text-green-800 border-green-200"
    };
    return colors[danger] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-red-500 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="AlertTriangle" className="w-8 h-8" />
              <h1 className="text-2xl font-bold">Аварийная служба</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline" className="border-white text-white hover:bg-white hover:text-red-500">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Emergency Contact */}
        <div className="bg-red-500 text-white rounded-lg p-8 mb-8 text-center">
          <Icon name="Phone" className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Срочный вызов мастера</h2>
          <p className="text-xl mb-6">+7 (999) 123-45-67</p>
          <p className="opacity-90">Работаем круглосуточно • Выезд в течение часа</p>
        </div>

        {/* Emergency Types */}
        <div className="grid md:grid-cols-2 gap-6">
          {emergencyTypes.map((emergency, index) => (
            <Card key={index} className={`border-2 ${getDangerColor(emergency.danger)}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-brown">{emergency.type}</CardTitle>
                  <Badge className={emergency.danger === 'high' ? 'bg-red-500 text-white' : 
                                  emergency.danger === 'medium' ? 'bg-yellow-500 text-white' : 
                                  'bg-green-500 text-white'}>
                    {emergency.danger === 'high' && 'Опасно'}
                    {emergency.danger === 'medium' && 'Внимание'}
                    {emergency.danger === 'low' && 'Не критично'}
                  </Badge>
                </div>
                <p className="text-forest">{emergency.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-brown mb-2">Что делать:</h4>
                <ol className="space-y-1 mb-4">
                  {emergency.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="flex items-start space-x-2">
                      <span className="text-honey font-semibold">{actionIndex + 1}.</span>
                      <span className="text-forest text-sm">{action}</span>
                    </li>
                  ))}
                </ol>
                <div className="flex justify-between items-center">
                  <span className="text-forest">Выезд: {emergency.response}</span>
                  <Button className="bg-red-500 hover:bg-red-600 text-white">
                    Вызвать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Emergency;