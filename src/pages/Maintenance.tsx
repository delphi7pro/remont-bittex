import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Maintenance = () => {
  const maintenanceServices = [
    {
      service: "Профилактика холодильника",
      price: "1500 ₽",
      duration: "1 час",
      frequency: "Раз в год",
      includes: ["Чистка конденсатора", "Проверка уплотнителей", "Диагностика компрессора", "Чистка дренажа"]
    },
    {
      service: "Профилактика стиральной машины",
      price: "1200 ₽",
      duration: "45 мин",
      frequency: "Раз в 6 месяцев",
      includes: ["Чистка фильтра", "Удаление накипи", "Проверка шлангов", "Смазка подшипников"]
    },
    {
      service: "Профилактика посудомойки",
      price: "1000 ₽",
      duration: "40 мин",
      frequency: "Раз в 6 месяцев",
      includes: ["Чистка фильтров", "Проверка форсунок", "Удаление жира", "Калибровка датчиков"]
    }
  ];

  const benefits = [
    {
      icon: "TrendingUp",
      title: "Увеличение срока службы",
      description: "Техника прослужит на 30-50% дольше"
    },
    {
      icon: "Zap",
      title: "Экономия электроэнергии",
      description: "Снижение потребления до 15%"
    },
    {
      icon: "Shield",
      title: "Предотвращение поломок",
      description: "90% проблем можно предупредить"
    },
    {
      icon: "DollarSign",
      title: "Экономия на ремонте",
      description: "Профилактика дешевле ремонта в 3-5 раз"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Settings" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Профилактическое обслуживание</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-honey-light text-center">
              <CardContent className="p-6">
                <Icon name={benefit.icon} className="w-12 h-12 text-honey mx-auto mb-4" />
                <h3 className="font-semibold text-brown mb-2">{benefit.title}</h3>
                <p className="text-sm text-forest">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services */}
        <div className="space-y-6">
          {maintenanceServices.map((service, index) => (
            <Card key={index} className="border-honey-light">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-brown">{service.service}</CardTitle>
                    <div className="flex items-center space-x-4 mt-2">
                      <Badge className="bg-honey text-white">{service.price}</Badge>
                      <span className="text-forest text-sm">Время: {service.duration}</span>
                      <span className="text-forest text-sm">Частота: {service.frequency}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-brown mb-2">Что включено:</h4>
                <div className="grid md:grid-cols-2 gap-2 mb-4">
                  {service.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey" />
                      <span className="text-forest text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-honey hover:bg-honey-dark text-white">
                  Заказать обслуживание
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maintenance;