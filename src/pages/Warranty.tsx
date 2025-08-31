import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Warranty = () => {
  const warrantyTypes = [
    {
      type: "Гарантия на работы",
      duration: "12-24 месяца",
      description: "Гарантируем качество выполненных работ",
      coverage: ["Повторная поломка по той же причине", "Некачественная сборка", "Ошибки мастера"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      type: "Гарантия на запчасти",
      duration: "6-36 месяцев",
      description: "Гарантия производителя на установленные детали",
      coverage: ["Заводской брак", "Преждевременный износ", "Несоответствие характеристикам"],
      color: "bg-green-100 text-green-800"
    },
    {
      type: "Расширенная гарантия",
      duration: "до 5 лет",
      description: "Дополнительная защита для дорогой техники",
      coverage: ["Все виды поломок", "Профилактическое обслуживание", "Приоритетный сервис"],
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const warrantyConditions = [
    "Соблюдение правил эксплуатации",
    "Использование оригинальных запчастей",
    "Отсутствие вмешательства третьих лиц",
    "Сохранение гарантийного талона"
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Гарантийное обслуживание</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Warranty Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {warrantyTypes.map((warranty, index) => (
            <Card key={index} className="border-honey-light">
              <CardHeader>
                <Badge className={warranty.color}>{warranty.duration}</Badge>
                <CardTitle className="text-brown">{warranty.type}</CardTitle>
                <p className="text-forest">{warranty.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-brown mb-2">Покрывает:</h4>
                <ul className="space-y-1">
                  {warranty.coverage.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span className="text-forest text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Warranty Check */}
        <Card className="border-honey-light mb-8">
          <CardHeader>
            <CardTitle className="text-brown">Проверить гарантию</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Input placeholder="Номер гарантийного талона" className="flex-1" />
              <Button className="bg-honey hover:bg-honey-dark text-white">
                Проверить
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Conditions */}
        <Card className="border-honey-light">
          <CardHeader>
            <CardTitle className="text-brown">Условия гарантии</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {warrantyConditions.map((condition, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon name="Info" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                  <span className="text-forest">{condition}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Diagnostics;