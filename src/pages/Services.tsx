import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const serviceCategories = [
    { id: "all", name: "Все услуги", count: 15 },
    { id: "major", name: "Крупная техника", count: 8 },
    { id: "small", name: "Мелкая техника", count: 7 }
  ];

  const services = [
    {
      id: 1,
      name: "Ремонт холодильников",
      category: "major",
      price: "от 1500 ₽",
      description: "Замена компрессора, терморегулятора, устранение протечек",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      commonIssues: ["Не морозит", "Течет", "Шумит", "Не включается"],
      warranty: "24 месяца",
      urgency: "В день обращения"
    },
    {
      id: 2,
      name: "Ремонт стиральных машин",
      category: "major",
      price: "от 1200 ₽",
      description: "Замена подшипников, ремонт электроники, устранение протечек",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      commonIssues: ["Не сливает", "Не отжимает", "Течет", "Не греет воду"],
      warranty: "18 месяцев",
      urgency: "В день обращения"
    },
    {
      id: 3,
      name: "Ремонт посудомоечных машин",
      category: "major",
      price: "от 1800 ₽",
      description: "Замена насосов, ремонт системы подачи воды",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg",
      commonIssues: ["Не моет", "Не сливает", "Течет", "Не сушит"],
      warranty: "18 месяцев",
      urgency: "1-2 дня"
    },
    {
      id: 4,
      name: "Ремонт микроволновок",
      category: "small",
      price: "от 800 ₽",
      description: "Замена магнетрона, ремонт электроники",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      commonIssues: ["Не греет", "Искрит", "Не включается", "Шумит"],
      warranty: "12 месяцев",
      urgency: "В день обращения"
    },
    {
      id: 5,
      name: "Ремонт духовых шкафов",
      category: "major",
      price: "от 1400 ₽",
      description: "Замена нагревательных элементов, ремонт термостата",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      commonIssues: ["Не греет", "Неравномерный нагрев", "Не включается"],
      warranty: "18 месяцев",
      urgency: "1-2 дня"
    },
    {
      id: 6,
      name: "Ремонт варочных панелей",
      category: "major",
      price: "от 1000 ₽",
      description: "Ремонт индукционных и электрических панелей",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg",
      commonIssues: ["Не включается", "Не греет", "Трещины"],
      warranty: "18 месяцев",
      urgency: "В день обращения"
    }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === "all" || service.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Settings" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Наши услуги</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brown mb-4">
            Полный спектр услуг по ремонту техники
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Ремонтируем любую бытовую технику: от холодильников до мелких приборов. 
            Выезд мастера, диагностика, ремонт с гарантией.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {serviceCategories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? "bg-honey hover:bg-honey-dark text-white" : ""}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} className="border-honey-light hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-3 left-3 bg-honey text-white">
                  {service.urgency}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-brown text-lg">{service.name}</CardTitle>
                <p className="text-sm text-forest">{service.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-honey">{service.price}</span>
                    <Badge variant="outline">
                      Гарантия {service.warranty}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-2">Частые проблемы:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.commonIssues.map((issue, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {issue}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                    <Icon name="Phone" className="w-4 h-4 mr-2" />
                    Вызвать мастера
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

export default Services;