import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Dishwashers = () => {
  const commonIssues = [
    {
      issue: "Плохо моет посуду",
      solutions: ["Чистка форсунок", "Замена фильтров", "Регулировка жесткости воды"],
      price: "от 800 ₽"
    },
    {
      issue: "Не сливает воду",
      solutions: ["Чистка сливного насоса", "Прочистка шланга", "Замена помпы"],
      price: "от 1500 ₽"
    },
    {
      issue: "Протечка воды",
      solutions: ["Замена уплотнителей", "Ремонт дверцы", "Замена шлангов"],
      price: "от 1200 ₽"
    },
    {
      issue: "Не включается",
      solutions: ["Проверка электроники", "Замена блока управления", "Ремонт проводки"],
      price: "от 2000 ₽"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Utensils" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Ремонт посудомоечных машин</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {commonIssues.map((item, index) => (
            <Card key={index} className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">{item.issue}</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-brown mb-2">Решения:</h4>
                <ul className="space-y-1 mb-4">
                  {item.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-start space-x-2">
                      <Icon name="Wrench" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span className="text-forest text-sm">{solution}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-honey">{item.price}</span>
                  <Button size="sm" className="bg-honey hover:bg-honey-dark text-white">
                    Заказать
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

export default Dishwashers;