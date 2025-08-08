import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);

  const allProducts = [
    {
      id: 1,
      name: "Липовый мед",
      price: 450,
      weight: "500г",
      description: "Нежный липовый мед с тонким ароматом и целебными свойствами",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "honey",
      badges: ["Новый урожай", "Эко"],
      inStock: true,
      rating: 4.8,
      keywords: ["липовый", "мед", "нежный", "ароматный", "целебный"]
    },
    {
      id: 2,
      name: "Гречишный мед",
      price: 520,
      weight: "500г",
      description: "Темный мед с насыщенным вкусом и высоким содержанием железа",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "honey",
      badges: ["Популярный"],
      inStock: true,
      rating: 4.9,
      keywords: ["гречишный", "мед", "темный", "железо", "насыщенный"]
    },
    {
      id: 3,
      name: "Цветочный мед",
      price: 380,
      weight: "500г",
      description: "Разнотравье с луговых полей, богатый витаминами",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "honey",
      badges: ["Классика"],
      inStock: true,
      rating: 4.7,
      keywords: ["цветочный", "мед", "разнотравье", "витамины", "луговой"]
    },
    {
      id: 4,
      name: "Пчелиный воск",
      price: 280,
      weight: "100г",
      description: "Натуральный воск для творчества и косметических целей",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      category: "wax",
      badges: ["Ремесло"],
      inStock: true,
      rating: 4.6,
      keywords: ["воск", "пчелиный", "натуральный", "творчество", "косметика"]
    },
    {
      id: 5,
      name: "Прополис настойка",
      price: 350,
      weight: "30мл",
      description: "Спиртовая настойка прополиса 20% для укрепления иммунитета",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      category: "propolis",
      badges: ["Здоровье"],
      inStock: false,
      rating: 4.9,
      keywords: ["прополис", "настойка", "иммунитет", "здоровье", "спиртовая"]
    },
    {
      id: 6,
      name: "Медовые соты",
      price: 680,
      weight: "300г",
      description: "Натуральные соты в меду - настоящий деликатес",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "honey",
      badges: ["Деликатес"],
      inStock: true,
      rating: 5.0,
      keywords: ["соты", "медовые", "деликатес", "натуральные"]
    },
    {
      id: 7,
      name: "Пчелиная пыльца",
      price: 420,
      weight: "100г",
      description: "Цветочная пыльца - источник белков и витаминов",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      category: "pollen",
      badges: ["Суперфуд"],
      inStock: true,
      rating: 4.7,
      keywords: ["пыльца", "пчелиная", "белки", "витамины", "суперфуд"]
    },
    {
      id: 8,
      name: "Акациевый мед",
      price: 490,
      weight: "500г",
      description: "Светлый мед с нежным вкусом, долго не кристализуется",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "honey",
      badges: ["Премиум"],
      inStock: true,
      rating: 4.8,
      keywords: ["акациевый", "мед", "светлый", "нежный", "кристаллизация"]
    }
  ];

  const categories = [
    { id: "honey", name: "Мед", count: 5 },
    { id: "wax", name: "Воск", count: 1 },
    { id: "propolis", name: "Прополис", count: 1 },
    { id: "pollen", name: "Пыльца", count: 1 }
  ];

  const popularSearches = [
    "липовый мед", "гречишный мед", "прополис", "пчелиный воск", 
    "медовые соты", "цветочный мед", "пыльца", "акациевый мед"
  ];

  const recentSearches = [
    "липовый мед", "прополис настойка", "пчелиный воск"
  ];

  const filteredProducts = allProducts.filter(product => {
    // Search query filter
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));

    // Price filter
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

    // Category filter
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);

    // Stock filter
    const matchesStock = !inStockOnly || product.inStock;

    // Rating filter
    const matchesRating = product.rating >= minRating;

    return matchesSearch && matchesPrice && matchesCategory && matchesStock && matchesRating;
  }).sort((a, b) => {
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
        // Relevance - простая реализация на основе совпадений в названии
        const aRelevance = a.name.toLowerCase().includes(searchQuery.toLowerCase()) ? 1 : 0;
        const bRelevance = b.name.toLowerCase().includes(searchQuery.toLowerCase()) ? 1 : 0;
        return bRelevance - aRelevance;
    }
  });

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 1000]);
    setSelectedCategories([]);
    setInStockOnly(false);
    setMinRating(0);
    setSortBy("relevance");
  };

  const handlePopularSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Search" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Поиск товаров</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-lg h-12"
              />
            </div>
            <Button className="bg-honey hover:bg-honey-dark text-white h-12 px-8">
              <Icon name="Search" className="w-5 h-5 mr-2" />
              Найти
            </Button>
          </div>

          {/* Popular and Recent Searches */}
          {!searchQuery && (
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-brown mb-3">Популярные запросы:</h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((query, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handlePopularSearch(query)}
                      className="text-forest hover:text-honey"
                    >
                      {query}
                    </Button>
                  ))}
                </div>
              </div>
              
              {recentSearches.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-brown mb-3">Недавние запросы:</h3>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((query, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        onClick={() => handlePopularSearch(query)}
                        className="text-forest hover:text-honey"
                      >
                        <Icon name="Clock" className="w-4 h-4 mr-2" />
                        {query}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-honey-light sticky top-4">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-brown">Фильтры</CardTitle>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <Icon name="RotateCcw" className="w-4 h-4 mr-2" />
                    Сбросить
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price Range */}
                <div>
                  <Label className="text-brown font-medium mb-3 block">
                    Цена: {priceRange[0]} - {priceRange[1]} ₽
                  </Label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    min={0}
                    step={50}
                    className="w-full"
                  />
                </div>

                {/* Categories */}
                <div>
                  <Label className="text-brown font-medium mb-3 block">Категории</Label>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={(checked) => handleCategoryChange(category.id, !!checked)}
                        />
                        <Label htmlFor={category.id} className="flex-1 cursor-pointer">
                          {category.name} ({category.count})
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stock Filter */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="inStock"
                    checked={inStockOnly}
                    onCheckedChange={setInStockOnly}
                  />
                  <Label htmlFor="inStock" className="cursor-pointer">
                    Только в наличии
                  </Label>
                </div>

                {/* Rating Filter */}
                <div>
                  <Label className="text-brown font-medium mb-3 block">
                    Минимальный рейтинг: {minRating} ★
                  </Label>
                  <Slider
                    value={[minRating]}
                    onValueChange={(value) => setMinRating(value[0])}
                    max={5}
                    min={0}
                    step={0.5}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold text-brown">
                    {searchQuery ? `Результаты поиска: "${searchQuery}"` : "Все товары"}
                  </h2>
                  <p className="text-forest">
                    Найдено {filteredProducts.length} товаров
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Label className="text-brown">Сортировка:</Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">По релевантности</SelectItem>
                      <SelectItem value="name">По названию</SelectItem>
                      <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                      <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                      <SelectItem value="rating">По рейтингу</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow border-honey-light">
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
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="Star" 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-sm text-forest ml-2">({product.rating})</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <span className="text-2xl font-bold text-honey">{product.price} ₽</span>
                          <span className="text-sm text-forest ml-1">/ {product.weight}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button 
                          className="flex-1 bg-honey hover:bg-honey-dark text-white"
                          disabled={!product.inStock}
                        >
                          <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                          {product.inStock ? "В корзину" : "Нет в наличии"}
                        </Button>
                        <Button variant="outline" size="icon">
                          <Icon name="Heart" className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Icon name="Search" className="w-24 h-24 text-honey mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-brown mb-4">Товары не найдены</h3>
                <p className="text-forest mb-6">
                  Попробуйте изменить параметры поиска или фильтры
                </p>
                <Button onClick={clearFilters} className="bg-honey hover:bg-honey-dark text-white">
                  <Icon name="RotateCcw" className="w-4 h-4 mr-2" />
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;