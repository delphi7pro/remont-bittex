import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const SmallAppliances = () => {
  const appliances = [
    {
      name: "Микроволновые печи",
      problems: ["Не греет", "Искрит", "Не вращается тарелка"],
      avgPrice: "800-2500 ₽",
      repairTime: "30-60 мин",
      icon: "Microwave"
    },
    {
      name: "Мультиварки",
      problems: ["Не включается", "Не греет", "Протекает пар"],
      avgPrice: "600-1500 ₽",
      repairTime: "45-90 мин",
      icon: "ChefHat"
    },
    {
      name: "Блендеры",
      problems: ["Не крутит", "Тупые ножи", "Течет"],
      avgPrice: "400-1200 ₽",
      repairTime: "20-45 мин",
      icon: "Blend"
    },
    {
      name: "Кофемашины",
      problems: ["Не варит кофе", "Протечки", "Засоры"],
      avgPrice: "1000-3500 ₽",
      repairTime: "60-120 мин",
      icon: "Coffee"
    },
    {
      name: "Утюги",
      problems: ["Не греет", "Течет", "Не подает пар"],
      avgPrice: "500-1000 ₽",
      repairTime: "30-60 мин",
      icon: "Shirt"
    },
    {
      name: "Пылесосы",
      problems: ["Слабая тяга", "Не включается", "Перегревается"],
      avgPrice: "800-2000 ₽",
      repairTime: "45-90 мин",
      icon: "Wind"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Ремонт мелкой техники</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appliances.map((appliance, index) => (
            <Card key={index} className="border-honey-light hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name={appliance.icon} className="w-8 h-8 text-honey" />
                  <CardTitle className="text-brown">{appliance.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-forest">Цена:</span>
                      <div className="font-semibold text-honey">{appliance.avgPrice}</div>
                    </div>
                    <div>
                      <span className="text-forest">Время:</span>
                      <div className="font-semibold text-brown">{appliance.repairTime}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-2">Частые проблемы:</h4>
                    <div className="space-y-1">
                      {appliance.problems.map((problem, problemIndex) => (
                        <div key={problemIndex} className="flex items-start space-x-2">
                          <Icon name="AlertCircle" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                          <span className="text-forest text-sm">{problem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                    <Icon name="Wrench" className="w-4 h-4 mr-2" />
                    Заказать ремонт
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

export default SmallAppliances;