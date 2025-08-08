import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterCategory, setFilterCategory] = useState("all");

  const products = [
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
      rating: 4.8
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
      rating: 4.9
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
      rating: 4.7
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
      rating: 4.6
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
      rating: 4.9
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
      rating: 5.0
    },
    {
      id: 7,
      name: "Акациевый мед",
      price: 490,
      weight: "500г",
      description: "Светлый мед с нежным вкусом, долго не кристализуется",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "honey",
      badges: ["Премиум"],
      inStock: true,
      rating: 4.8
    },
    {
      id: 8,
      name: "Пчелиная пыльца",
      price: 420,
      weight: "100г",
      description: "Цветочная пыльца - источник белков и витаминов",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      category: "pollen",
      badges: ["Суперфуд"],
      inStock: true,
      rating: 4.7
    }
  ];

  const categories = [
    { value: "all", label: "Все товары" },
    { value: "honey", label: "Мед" },
    { value: "wax", label: "Воск" },
    { value: "propolis", label: "Прополис" },
    { value: "pollen", label: "Пыльца" }
  ];

  const filteredProducts = products
    .filter(product => 
      (filterCategory === "all" || product.category === filterCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Hexagon" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Каталог товаров</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-brown mb-2">Поиск</label>
              <Input
                placeholder="Найти товар..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brown mb-2">Категория</label>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brown mb-2">Сортировка</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                <Button 
                  className="w-full bg-honey hover:bg-honey-dark text-white"
                  disabled={!product.inStock}
                >
                  <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                  {product.inStock ? "В корзину" : "Нет в наличии"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" className="w-16 h-16 text-honey mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brown mb-2">Товары не найдены</h3>
            <p className="text-forest">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;