import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ServiceAreas = () => {
  const moscowDistricts = [
    { name: "ЦАО", fullName: "Центральный административный округ", calloutFee: "Бесплатно", responseTime: "1-2 часа" },
    { name: "САО", fullName: "Северный административный округ", calloutFee: "Бесплатно", responseTime: "1-2 часа" },
    { name: "СВАО", fullName: "Северо-Восточный административный округ", calloutFee: "Бесплатно", responseTime: "1-2 часа" },
    { name: "ВАО", fullName: "Восточный административный округ", calloutFee: "Бесплатно", responseTime: "1-2 часа" },
    { name: "ЮВАО", fullName: "Юго-Восточный административный округ", calloutFee: "Бесплатно", responseTime: "1-2 часа" },
    { name: "ЮАО", fullName: "Южный административный округ", calloutFee: "Бесплатно", responseTime: "1-2 часа" },
    { name: "ЮЗАО", fullName: "Юго-Западный административный округ", calloutFee: "Бесплатно", responseTime: "1-2 часа" },
    { name: "ЗАО", fullName: "Западный административный округ", calloutFee: "Бесплатно", responseTime: "1-2 часа" },
    { name: "СЗАО", fullName: "Северо-Западный административный округ", calloutFee: "Бесплатно", responseTime: "1-2 часа" },
    { name: "ЗелАО", fullName: "Зеленоградский административный округ", calloutFee: "500 ₽", responseTime: "2-3 часа" },
    { name: "ТиНАО", fullName: "Троицкий и Новомосковский административные округа", calloutFee: "800 ₽", responseTime: "2-4 часа" }
  ];

  const moscowRegionCities = [
    { city: "Балашиха", distance: "15 км", calloutFee: "500 ₽", responseTime: "2-3 часа" },
    { city: "Химки", distance: "20 км", calloutFee: "600 ₽", responseTime: "2-3 часа" },
    { city: "Мытищи", distance: "25 км", calloutFee: "700 ₽", responseTime: "2-4 часа" },
    { city: "Люберцы", distance: "18 км", calloutFee: "550 ₽", responseTime: "2-3 часа" },
    { city: "Красногорск", distance: "22 км", calloutFee: "650 ₽", responseTime: "2-3 часа" },
    { city: "Одинцово", distance: "30 км", calloutFee: "800 ₽", responseTime: "3-4 часа" },
    { city: "Подольск", distance: "35 км", calloutFee: "900 ₽", responseTime: "3-4 часа" },
    { city: "Королев", distance: "28 км", calloutFee: "750 ₽", responseTime: "2-4 часа" }
  ];

  const serviceStats = [
    { metric: "Покрытие", value: "100%", description: "Москвы и ближнего Подмосковья" },
    { metric: "Время отклика", value: "< 2 часов", description: "в пределах МКАД" },
    { metric: "Мастеров", value: "15", description: "работают в разных районах" },
    { metric: "Выездов в день", value: "50+", description: "по всем районам" }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Map" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">География обслуживания</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {serviceStats.map((stat, index) => (
            <Card key={index} className="border-honey-light text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-honey mb-2">{stat.value}</div>
                <div className="font-semibold text-brown mb-1">{stat.metric}</div>
                <div className="text-sm text-forest">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Moscow Districts */}
        <Card className="border-honey-light mb-8">
          <CardHeader>
            <CardTitle className="text-brown">Районы Москвы</CardTitle>
            <p className="text-forest">Обслуживаем все административные округа</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {moscowDistricts.map((district, index) => (
                <div key={index} className="p-4 border border-honey-light rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-brown">{district.name}</h4>
                      <p className="text-sm text-forest">{district.fullName}</p>
                    </div>
                    <Badge className={district.calloutFee === "Бесплатно" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                      {district.calloutFee}
                    </Badge>
                  </div>
                  <div className="text-sm text-forest">
                    Время приезда: {district.responseTime}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Moscow Region */}
        <Card className="border-honey-light">
          <CardHeader>
            <CardTitle className="text-brown">Московская область</CardTitle>
            <p className="text-forest">Выезжаем в города Подмосковья</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {moscowRegionCities.map((city, index) => (
                <div key={index} className="p-4 border border-honey-light rounded-lg">
                  <h4 className="font-semibold text-brown mb-1">{city.city}</h4>
                  <div className="text-sm text-forest space-y-1">
                    <div>Расстояние: {city.distance}</div>
                    <div>Выезд: <span className="text-honey font-semibold">{city.calloutFee}</span></div>
                    <div>Время: {city.responseTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
            <CardContent className="p-8 text-center">
              <Icon name="MapPin" className="w-12 h-12 text-honey mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brown mb-4">
                Не нашли свой район?
              </h3>
              <p className="text-forest mb-6 max-w-md mx-auto">
                Свяжитесь с нами - возможно, мы сможем организовать выезд
              </p>
              <Button className="bg-honey hover:bg-honey-dark text-white">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Уточнить возможность выезда
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;