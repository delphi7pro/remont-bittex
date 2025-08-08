import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Favorites = () => {
  const [sortBy, setSortBy] = useState("date");
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Липовый мед",
      price: 450,
      weight: "500г",
      description: "Нежный липовый мед с тонким ароматом",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      badges: ["Новый урожай", "Эко"],
      inStock: true,
      rating: 4.8,
      addedDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Медовые соты",
      price: 680,
      weight: "300г",
      description: "Натуральные соты в меду - настоящий деликатес",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      badges: ["Деликатес"],
      inStock: true,
      rating: 5.0,
      addedDate: "2024-01-10"
    },
    {
      id: 3,
      name: "Прополис настойка",
      price: 350,
      weight: "30мл",
      description: "Спиртовая настойка прополиса 20%",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      badges: ["Здоровье"],
      inStock: false,
      rating: 4.9,
      addedDate: "2024-01-08"
    },
    {
      id: 4,
      name: "Пчелиная пыльца",
      price: 420,
      weight: "100г",
      description: "Цветочная пыльца - источник белков и витаминов",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      badges: ["Суперфуд"],
      inStock: true,
      rating: 4.7,
      addedDate: "2024-01-05"
    }
  ]);

  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const addToCart = (id: number) => {
    console.log("Added to cart:", id);
    // Здесь будет логика добавления в корзину
  };

  const sortedFavorites = [...favorites].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
    }
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const recommendedProducts = [
    {
      id: 5,
      name: "Гречишный мед",
      price: 520,
      weight: "500г",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      rating: 4.9
    },
    {
      id: 6,
      name: "Пчелиный воск",
      price: 280,
      weight: "100г",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      rating: 4.6
    },
    {
      id: 7,
      name: "Акациевый мед",
      price: 490,
      weight: "500г",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      rating: 4.8
    }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Избранное</h1>
              <Badge className="bg-honey text-white">
                {favorites.length}
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
        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Icon name="Heart" className="w-24 h-24 text-honey mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-brown mb-4">Список избранного пуст</h2>
            <p className="text-forest mb-6">
              Добавляйте понравившиеся товары в избранное, чтобы не потерять их
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
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-brown mb-2">
                    Ваши избранные товары
                  </h2>
                  <p className="text-forest">
                    {favorites.length} {favorites.length === 1 ? 'товар' : 'товаров'} в избранном
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div>
                    <label className="block text-sm font-medium text-brown mb-2">
                      Сортировка
                    </label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="date">По дате добавления</SelectItem>
                        <SelectItem value="name">По названию</SelectItem>
                        <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                        <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                        <SelectItem value="rating">По рейтингу</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    variant="outline"
                    onClick={() => {
                      favorites.forEach(item => addToCart(item.id));
                    }}
                    disabled={favorites.some(item => !item.inStock)}
                  >
                    <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                    Все в корзину
                  </Button>
                </div>
              </div>
            </div>

            {/* Favorites Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {sortedFavorites.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow border-honey-light relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 z-10 text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => removeFromFavorites(product.id)}
                  >
                    <Icon name="Heart" className="w-5 h-5 fill-current" />
                  </Button>
                  
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                      {product.badges.map((badge, index) => (
                        <Badge key={index} className="bg-honey text-white text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-lg">
                        <span className="text-white font-semibold">Нет в наличии</span>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-brown text-lg">{product.name}</CardTitle>
                    <p className="text-sm text-forest">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="Star" 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-sm text-forest ml-1">({product.rating})</span>
                      </div>
                      <span className="text-xs text-forest">
                        {formatDate(product.addedDate)}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-2xl font-bold text-honey">{product.price} ₽</span>
                        <span className="text-sm text-forest ml-1">/ {product.weight}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-honey hover:bg-honey-dark text-white"
                      disabled={!product.inStock}
                      onClick={() => addToCart(product.id)}
                    >
                      <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                      {product.inStock ? "В корзину" : "Нет в наличии"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brown mb-6">
                Рекомендуем также
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedProducts.map((product) => (
                  <Card key={product.id} className="border-honey-light hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-t-lg"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                      >
                        <Icon name="Heart" className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-brown mb-2">{product.name}</h4>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-bold text-honey">{product.price} ₽</span>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-forest">({product.rating})</span>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        className="w-full bg-honey hover:bg-honey-dark text-white"
                        onClick={() => addToCart(product.id)}
                      >
                        <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                        В корзину
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Favorites;