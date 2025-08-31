import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const SpareParts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все запчасти", count: 150 },
    { id: "compressors", name: "Компрессоры", count: 25 },
    { id: "pumps", name: "Насосы", count: 30 },
    { id: "heating", name: "Нагревательные элементы", count: 40 },
    { id: "electronics", name: "Электроника", count: 35 },
    { id: "seals", name: "Уплотнители", count: 20 }
  ];

  const spareParts = [
    {
      id: 1,
      name: "Компрессор для холодильника Samsung",
      partNumber: "DA31-00146E",
      price: 12500,
      availability: "В наличии",
      category: "compressors",
      compatibility: ["Samsung RB29", "Samsung RB33", "Samsung RB37"],
      warranty: "12 месяцев",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg"
    },
    {
      id: 2,
      name: "ТЭН для стиральной машины LG",
      partNumber: "AEG72909901",
      price: 2800,
      availability: "В наличии",
      category: "heating",
      compatibility: ["LG F1056QD", "LG F1256QD", "LG F1456QD"],
      warranty: "6 месяцев",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg"
    },
    {
      id: 3,
      name: "Сливной насос Bosch",
      partNumber: "00620774",
      price: 3200,
      availability: "Под заказ",
      category: "pumps",
      compatibility: ["Bosch WAE", "Bosch WAS", "Bosch WAW"],
      warranty: "12 месяцев",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg"
    }
  ];

  const filteredParts = spareParts.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         part.partNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || part.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Package" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Запчасти</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Поиск по названию или артикулу..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:w-64">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Parts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredParts.map((part) => (
            <Card key={part.id} className="border-honey-light hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={part.image} 
                  alt={part.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className={`absolute top-3 left-3 ${
                  part.availability === "В наличии" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                }`}>
                  {part.availability}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-brown text-lg">{part.name}</CardTitle>
                <p className="text-sm text-forest">Артикул: {part.partNumber}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-honey">{part.price} ₽</span>
                    <Badge variant="outline">
                      Гарантия {part.warranty}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-1">Совместимость:</h4>
                    <div className="flex flex-wrap gap-1">
                      {part.compatibility.map((model, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {model}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                    <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                    Заказать запчасть
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

export default SpareParts;