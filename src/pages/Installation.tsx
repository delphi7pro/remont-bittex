import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Installation = () => {
  const installationServices = [
    {
      appliance: "Стиральная машина",
      price: "2500 ₽",
      time: "1-2 часа",
      includes: ["Подключение к водопроводу", "Подключение к канализации", "Выравнивание", "Тестовый запуск"],
      complexity: "medium"
    },
    {
      appliance: "Посудомоечная машина",
      price: "3500 ₽",
      time: "2-3 часа",
      includes: ["Встраивание в нишу", "Подключение коммуникаций", "Настройка программ", "Обучение пользованию"],
      complexity: "high"
    },
    {
      appliance: "Холодильник",
      price: "1500 ₽",
      time: "30-60 мин",
      includes: ["Распаковка", "Установка на место", "Подключение к сети", "Настройка температуры"],
      complexity: "low"
    },
    {
      appliance: "Варочная панель",
      price: "4000 ₽",
      time: "2-4 часа",
      includes: ["Подготовка ниши", "Подключение к электросети", "Герметизация", "Проверка безопасности"],
      complexity: "high"
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

  const getComplexityLabel = (complexity: string) => {
    const labels = {
      low: "Простая",
      medium: "Средняя",
      high: "Сложная"
    };
    return labels[complexity] || complexity;
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Hammer" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Установка техники</h1>
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
          {installationServices.map((service, index) => (
            <Card key={index} className="border-honey-light">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-brown">{service.appliance}</CardTitle>
                  <Badge className={getComplexityColor(service.complexity)}>
                    {getComplexityLabel(service.complexity)}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-honey">{service.price}</span>
                  <span className="text-forest">Время: {service.time}</span>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-brown mb-2">Что включено:</h4>
                <ul className="space-y-1 mb-4">
                  {service.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span className="text-forest text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                  Заказать установку
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;