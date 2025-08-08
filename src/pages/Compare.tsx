import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Compare = () => {
  const [compareItems, setCompareItems] = useState([
    {
      id: 1,
      name: "Липовый мед",
      price: 450,
      weight: "500г",
      description: "Нежный липовый мед с тонким ароматом",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      rating: 4.8,
      inStock: true,
      characteristics: {
        color: "Светло-янтарный",
        taste: "Нежный, цветочный",
        aroma: "Тонкий липовый",
        crystallization: "Медленная",
        harvest: "Июль 2023",
        region: "Тульская область",
        moisture: "17%",
        diastase: "15 ед.",
        benefits: ["Успокаивающий", "Противовоспалительный", "Для сердца"]
      }
    },
    {
      id: 2,
      name: "Гречишный мед",
      price: 520,
      weight: "500г",
      description: "Темный мед с насыщенным вкусом",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      rating: 4.9,
      inStock: true,
      characteristics: {
        color: "Темно-коричневый",
        taste: "Насыщенный, терпкий",
        aroma: "Интенсивный гречишный",
        crystallization: "Быстрая",
        harvest: "Август 2023",
        region: "Рязанская область",
        moisture: "16%",
        diastase: "25 ед.",
        benefits: ["Повышает гемоглобин", "Укрепляет сосуды", "Богат железом"]
      }
    },
    {
      id: 3,
      name: "Цветочный мед",
      price: 380,
      weight: "500г",
      description: "Разнотравье с луговых полей",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      rating: 4.7,
      inStock: true,
      characteristics: {
        color: "Золотистый",
        taste: "Сбалансированный",
        aroma: "Цветочно-травяной",
        crystallization: "Средняя",
        harvest: "Июнь 2023",
        region: "Московская область",
        moisture: "18%",
        diastase: "18 ед.",
        benefits: ["Общеукрепляющий", "Витаминный", "Для иммунитета"]
      }
    }
  ]);

  const removeFromCompare = (id: number) => {
    setCompareItems(items => items.filter(item => item.id !== id));
  };

  const addToCart = (id: number) => {
    console.log("Added to cart:", id);
  };

  const addToFavorites = (id: number) => {
    console.log("Added to favorites:", id);
  };

  const characteristics = [
    { key: "color", label: "Цвет" },
    { key: "taste", label: "Вкус" },
    { key: "aroma", label: "Аромат" },
    { key: "crystallization", label: "Кристаллизация" },
    { key: "harvest", label: "Урожай" },
    { key: "region", label: "Регион" },
    { key: "moisture", label: "Влажность" },
    { key: "diastase", label: "Диастаза" }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="GitCompare" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Сравнение товаров</h1>
              <Badge className="bg-honey text-white">
                {compareItems.length}
              </Badge>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {compareItems.length === 0 ? (
          <div className="text-center py-16">
            <Icon name="GitCompare" className="w-24 h-24 text-honey mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-brown mb-4">Список сравнения пуст</h2>
            <p className="text-forest mb-6">
              Добавьте товары для сравнения их характеристик
            </p>
            <Button className="bg-honey hover:bg-honey-dark text-white">
              <Icon name="ShoppingBag" className="w-4 h-4 mr-2" />
              Перейти в каталог
            </Button>
          </div>
        ) : (
          <>
            {/* Controls */}
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-brown mb-2">
                    Сравнение характеристик
                  </h2>
                  <p className="text-forest">
                    {compareItems.length} {compareItems.length === 1 ? 'товар' : 'товаров'} для сравнения
                  </p>
                </div>
                <Button 
                  variant="outline"
                  onClick={() => setCompareItems([])}
                >
                  <Icon name="Trash2" className="w-4 h-4 mr-2" />
                  Очистить все
                </Button>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-honey-light">
                      <th className="text-left p-4 w-48 bg-honey-light">
                        <span className="font-semibold text-brown">Характеристики</span>
                      </th>
                      {compareItems.map((item) => (
                        <th key={item.id} className="p-4 min-w-80">
                          <Card className="border-honey-light">
                            <div className="relative">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-full h-32 object-cover rounded-t-lg"
                              />
                              <Button
                                variant="ghost"
                                size="sm"
                                className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                                onClick={() => removeFromCompare(item.id)}
                              >
                                <Icon name="X" className="w-4 h-4" />
                              </Button>
                            </div>
                            <CardContent className="p-4">
                              <h3 className="font-semibold text-brown mb-2">{item.name}</h3>
                              <p className="text-sm text-forest mb-3">{item.description}</p>
                              
                              <div className="flex items-center justify-between mb-3">
                                <div className="text-2xl font-bold text-honey">
                                  {item.price} ₽
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Icon name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="text-sm text-forest">({item.rating})</span>
                                </div>
                              </div>
                              
                              <div className="flex space-x-2">
                                <Button 
                                  size="sm" 
                                  className="flex-1 bg-honey hover:bg-honey-dark text-white"
                                  onClick={() => addToCart(item.id)}
                                >
                                  <Icon name="ShoppingCart" className="w-4 h-4 mr-1" />
                                  В корзину
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => addToFavorites(item.id)}
                                >
                                  <Icon name="Heart" className="w-4 h-4" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Basic Info */}
                    <tr className="border-b border-honey-light">
                      <td className="p-4 bg-honey-light font-medium text-brown">Цена</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4 text-center">
                          <span className="text-2xl font-bold text-honey">{item.price} ₽</span>
                          <div className="text-sm text-forest">{item.weight}</div>
                        </td>
                      ))}
                    </tr>
                    
                    <tr className="border-b border-honey-light">
                      <td className="p-4 bg-honey-light font-medium text-brown">Рейтинг</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Icon 
                                key={i} 
                                name="Star" 
                                className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                            <span className="ml-2 text-forest">({item.rating})</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                    
                    <tr className="border-b border-honey-light">
                      <td className="p-4 bg-honey-light font-medium text-brown">Наличие</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4 text-center">
                          <Badge className={item.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                            {item.inStock ? "В наличии" : "Нет в наличии"}
                          </Badge>
                        </td>
                      ))}
                    </tr>

                    {/* Characteristics */}
                    {characteristics.map((char) => (
                      <tr key={char.key} className="border-b border-honey-light">
                        <td className="p-4 bg-honey-light font-medium text-brown">{char.label}</td>
                        {compareItems.map((item) => (
                          <td key={item.id} className="p-4 text-center text-forest">
                            {item.characteristics[char.key] || "—"}
                          </td>
                        ))}
                      </tr>
                    ))}

                    {/* Benefits */}
                    <tr className="border-b border-honey-light">
                      <td className="p-4 bg-honey-light font-medium text-brown">Полезные свойства</td>
                      {compareItems.map((item) => (
                        <td key={item.id} className="p-4">
                          <div className="flex flex-wrap gap-1 justify-center">
                            {item.characteristics.benefits.map((benefit, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-8 bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brown mb-4">Итоги сравнения</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-honey-light">
                  <CardContent className="p-4 text-center">
                    <Icon name="DollarSign" className="w-8 h-8 text-honey mx-auto mb-2" />
                    <h4 className="font-semibold text-brown mb-2">Самый доступный</h4>
                    <p className="text-forest">
                      {compareItems.reduce((min, item) => item.price < min.price ? item : min).name}
                    </p>
                    <p className="text-honey font-semibold">
                      {Math.min(...compareItems.map(item => item.price))} ₽
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-honey-light">
                  <CardContent className="p-4 text-center">
                    <Icon name="Star" className="w-8 h-8 text-honey mx-auto mb-2" />
                    <h4 className="font-semibold text-brown mb-2">Лучший рейтинг</h4>
                    <p className="text-forest">
                      {compareItems.reduce((max, item) => item.rating > max.rating ? item : max).name}
                    </p>
                    <p className="text-honey font-semibold">
                      {Math.max(...compareItems.map(item => item.rating))} ★
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-honey-light">
                  <CardContent className="p-4 text-center">
                    <Icon name="Award" className="w-8 h-8 text-honey mx-auto mb-2" />
                    <h4 className="font-semibold text-brown mb-2">Рекомендуем</h4>
                    <p className="text-forest">
                      {compareItems.reduce((best, item) => 
                        (item.rating * 100 - item.price) > (best.rating * 100 - best.price) ? item : best
                      ).name}
                    </p>
                    <p className="text-honey font-semibold">Лучшее соотношение</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Compare;