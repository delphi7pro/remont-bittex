import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Microwaves = () => {
  const problems = [
    {
      problem: "Не греет еду",
      cause: "Неисправность магнетрона",
      price: "от 2500 ₽",
      time: "1-2 часа"
    },
    {
      problem: "Искрит внутри",
      cause: "Повреждение слюдяной пластины",
      price: "от 800 ₽",
      time: "30 мин"
    },
    {
      problem: "Не включается",
      cause: "Неисправность блока управления",
      price: "от 1500 ₽",
      time: "1 час"
    },
    {
      problem: "Не вращается тарелка",
      cause: "Поломка привода вращения",
      price: "от 1000 ₽",
      time: "45 мин"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Microwave" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Ремонт микроволновок</h1>
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
          {problems.map((item, index) => (
            <Card key={index} className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">{item.problem}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forest mb-4">{item.cause}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-honey">{item.price}</span>
                  <span className="text-forest">Время: {item.time}</span>
                </div>
                <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                  Заказать ремонт
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Microwaves;