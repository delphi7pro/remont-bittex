import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Brands = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const brands = [
    {
      name: "Samsung",
      country: "Южная Корея",
      specialization: "Холодильники, стиральные машины",
      modelsCount: 150,
      popularity: "high",
      repairComplexity: "medium",
      partsAvailability: "excellent",
      avgRepairCost: "2500 ₽",
      commonIssues: ["Электроника", "Компрессоры", "Датчики"],
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg"
    },
    {
      name: "LG",
      country: "Южная Корея",
      specialization: "Вся бытовая техника",
      modelsCount: 120,
      popularity: "high",
      repairComplexity: "medium",
      partsAvailability: "excellent",
      avgRepairCost: "2300 ₽",
      commonIssues: ["Инверторы", "Электроника", "Подшипники"],
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg"
    },
    {
      name: "Bosch",
      country: "Германия",
      specialization: "Встраиваемая техника",
      modelsCount: 80,
      popularity: "high",
      repairComplexity: "high",
      partsAvailability: "good",
      avgRepairCost: "3200 ₽",
      commonIssues: ["Насосы", "Электроника", "Нагревательные элементы"],
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg"
    },
    {
      name: "Siemens",
      country: "Германия",
      specialization: "Премиум техника",
      modelsCount: 70,
      popularity: "medium",
      repairComplexity: "high",
      partsAvailability: "good",
      avgRepairCost: "3500 ₽",
      commonIssues: ["Сложная электроника", "Датчики", "Приводы"],
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg"
    },
    {
      name: "Electrolux",
      country: "Швеция",
      specialization: "Стиральные машины, холодильники",
      modelsCount: 90,
      popularity: "medium",
      repairComplexity: "medium",
      partsAvailability: "good",
      avgRepairCost: "2800 ₽",
      commonIssues: ["Подшипники", "ТЭНы", "Помпы"],
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg"
    },
    {
      name: "Indesit",
      country: "Италия",
      specialization: "Бюджетная техника",
      modelsCount: 100,
      popularity: "high",
      repairComplexity: "low",
      partsAvailability: "excellent",
      avgRepairCost: "1800 ₽",
      commonIssues: ["Механические части", "ТЭНы", "Помпы"],
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg"
    }
  ];

  const filteredBrands = brands.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPopularityColor = (popularity: string) => {
    const colors = {
      high: "bg-green-100 text-green-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-gray-100 text-gray-800"
    };
    return colors[popularity] || "bg-gray-100 text-gray-800";
  };

  const getComplexityColor = (complexity: string) => {
    const colors = {
      low: "bg-green-100 text-green-800",
      medium: "bg-yellow-100 text-yellow-800",
      high: "bg-red-100 text-red-800"
    };
    return colors[complexity] || "bg-gray-100 text-gray-800";
  };

  const getAvailabilityColor = (availability: string) => {
    const colors = {
      excellent: "bg-green-100 text-green-800",
      good: "bg-yellow-100 text-yellow-800",
      poor: "bg-red-100 text-red-800"
    };
    return colors[availability] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Award" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Бренды техники</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <Input
            placeholder="Поиск по брендам..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mx-auto"
          />
        </div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrands.map((brand, index) => (
            <Card key={index} className="border-honey-light hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <Badge className={`absolute top-3 left-3 ${getPopularityColor(brand.popularity)}`}>
                  {brand.popularity === 'high' && 'Популярный'}
                  {brand.popularity === 'medium' && 'Средний'}
                  {brand.popularity === 'low' && 'Редкий'}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-brown text-xl">{brand.name}</CardTitle>
                <p className="text-forest text-sm">{brand.country}</p>
                <p className="text-forest text-sm">{brand.specialization}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-forest">Моделей:</span>
                      <div className="font-semibold text-brown">{brand.modelsCount}</div>
                    </div>
                    <div>
                      <span className="text-forest">Средний ремонт:</span>
                      <div className="font-semibold text-honey">{brand.avgRepairCost}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-forest text-sm">Сложность ремонта:</span>
                    <Badge className={getComplexityColor(brand.repairComplexity)}>
                      {brand.repairComplexity === 'low' && 'Простая'}
                      {brand.repairComplexity === 'medium' && 'Средняя'}
                      {brand.repairComplexity === 'high' && 'Сложная'}
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-forest text-sm">Запчасти:</span>
                    <Badge className={getAvailabilityColor(brand.partsAvailability)}>
                      {brand.partsAvailability === 'excellent' && 'Отлично'}
                      {brand.partsAvailability === 'good' && 'Хорошо'}
                      {brand.partsAvailability === 'poor' && 'Плохо'}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-1">Частые проблемы:</h4>
                    <div className="flex flex-wrap gap-1">
                      {brand.commonIssues.map((issue, issueIndex) => (
                        <Badge key={issueIndex} variant="outline" className="text-xs">
                          {issue}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                    <Icon name="Wrench" className="w-4 h-4 mr-2" />
                    Ремонт {brand.name}
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

export default Brands;