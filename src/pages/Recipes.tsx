import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const categories = [
    { id: "all", name: "Все рецепты", count: 12 },
    { id: "desserts", name: "Десерты", count: 4 },
    { id: "drinks", name: "Напитки", count: 3 },
    { id: "beauty", name: "Красота", count: 3 },
    { id: "health", name: "Здоровье", count: 2 }
  ];

  const recipes = [
    {
      id: 1,
      title: "Медовые пряники",
      description: "Ароматные домашние пряники с липовым медом и специями",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "desserts",
      difficulty: "medium",
      cookTime: "45 мин",
      servings: "12 шт",
      rating: 4.8,
      ingredients: [
        "Мука пшеничная - 400г",
        "Мед липовый - 150г",
        "Масло сливочное - 100г",
        "Яйцо - 1 шт",
        "Сода - 1 ч.л.",
        "Корица - 1 ч.л.",
        "Имбирь молотый - 0.5 ч.л."
      ],
      instructions: [
        "Растопить мед с маслом на водяной бане",
        "Добавить яйцо и специи, перемешать",
        "Постепенно ввести муку с содой",
        "Замесить тесто и охладить 30 минут",
        "Раскатать, вырезать пряники",
        "Выпекать при 180°C 12-15 минут"
      ],
      tips: "Для более насыщенного вкуса добавьте цедру апельсина"
    },
    {
      id: 2,
      title: "Медовая маска для лица",
      description: "Увлажняющая маска с медом и овсянкой для всех типов кожи",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      category: "beauty",
      difficulty: "easy",
      cookTime: "5 мин",
      servings: "1 применение",
      rating: 4.9,
      ingredients: [
        "Мед цветочный - 2 ст.л.",
        "Овсяные хлопья - 1 ст.л.",
        "Молоко - 1 ст.л.",
        "Масло оливковое - 1 ч.л."
      ],
      instructions: [
        "Измельчить овсяные хлопья в кофемолке",
        "Смешать все ингредиенты до однородности",
        "Нанести на очищенную кожу лица",
        "Оставить на 15-20 минут",
        "Смыть теплой водой массирующими движениями"
      ],
      tips: "Используйте 1-2 раза в неделю для лучшего эффекта"
    },
    {
      id: 3,
      title: "Медовый чай с имбирем",
      description: "Согревающий напиток для укрепления иммунитета",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "drinks",
      difficulty: "easy",
      cookTime: "10 мин",
      servings: "2 порции",
      rating: 4.7,
      ingredients: [
        "Вода - 500мл",
        "Имбирь свежий - 30г",
        "Мед липовый - 3 ст.л.",
        "Лимон - 0.5 шт",
        "Корица - 1 палочка"
      ],
      instructions: [
        "Нарезать имбирь тонкими ломтиками",
        "Залить кипятком имбирь и корицу",
        "Настаивать 5-7 минут",
        "Добавить лимонный сок",
        "Остудить до 60°C и добавить мед"
      ],
      tips: "Не добавляйте мед в кипяток - он потеряет полезные свойства"
    },
    {
      id: 4,
      title: "Медовое печенье",
      description: "Хрустящее печенье с медом и орехами",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "desserts",
      difficulty: "easy",
      cookTime: "30 мин",
      servings: "20 шт",
      rating: 4.6,
      ingredients: [
        "Мука - 300г",
        "Мед - 100г",
        "Масло сливочное - 80г",
        "Орехи грецкие - 50г",
        "Разрыхлитель - 1 ч.л."
      ],
      instructions: [
        "Смешать размягченное масло с медом",
        "Добавить муку и разрыхлитель",
        "Вмешать измельченные орехи",
        "Сформировать печенье",
        "Выпекать при 180°C 15-20 минут"
      ],
      tips: "Печенье можно украсить глазурью из меда и сахарной пудры"
    },
    {
      id: 5,
      title: "Медовый скраб для тела",
      description: "Отшелушивающий скраб с медом и морской солью",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      category: "beauty",
      difficulty: "easy",
      cookTime: "3 мин",
      servings: "3-4 применения",
      rating: 4.8,
      ingredients: [
        "Мед - 3 ст.л.",
        "Соль морская - 4 ст.л.",
        "Масло кокосовое - 2 ст.л.",
        "Эфирное масло лаванды - 5 капель"
      ],
      instructions: [
        "Растопить кокосовое масло",
        "Смешать все ингредиенты",
        "Нанести на влажную кожу",
        "Массировать круговыми движениями",
        "Смыть теплой водой"
      ],
      tips: "Храните скраб в холодильнике не более 2 недель"
    },
    {
      id: 6,
      title: "Медовый лимонад",
      description: "Освежающий напиток с медом и мятой",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "drinks",
      difficulty: "easy",
      cookTime: "15 мин",
      servings: "4 порции",
      rating: 4.5,
      ingredients: [
        "Вода - 1л",
        "Лимоны - 4 шт",
        "Мед цветочный - 4 ст.л.",
        "Мята свежая - 10 листиков",
        "Лед - по вкусу"
      ],
      instructions: [
        "Выжать сок из лимонов",
        "Растворить мед в теплой воде",
        "Добавить лимонный сок",
        "Украсить мятой и льдом",
        "Охладить перед подачей"
      ],
      tips: "Для более насыщенного вкуса добавьте цедру лимона"
    }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || recipe.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || recipe.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyLabel = (difficulty: string) => {
    const labels = {
      easy: "Легко",
      medium: "Средне",
      hard: "Сложно"
    };
    return labels[difficulty] || difficulty;
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      easy: "bg-green-100 text-green-800",
      medium: "bg-yellow-100 text-yellow-800",
      hard: "bg-red-100 text-red-800"
    };
    return colors[difficulty] || "bg-gray-100 text-gray-800";
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="ChefHat" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Рецепты с медом</h1>
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
            Рецепты с натуральным медом
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Откройте для себя удивительные рецепты с медом: от вкусных десертов до полезных масок для красоты
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Input
                placeholder="Поиск рецептов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Категория" />
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
            <div>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Сложность" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любая сложность</SelectItem>
                  <SelectItem value="easy">Легко</SelectItem>
                  <SelectItem value="medium">Средне</SelectItem>
                  <SelectItem value="hard">Сложно</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => (
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

        {/* Recipes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <Card key={recipe.id} className="border-honey-light hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className="bg-honey text-white">
                    {getCategoryName(recipe.category)}
                  </Badge>
                  <Badge className={getDifficultyColor(recipe.difficulty)}>
                    {getDifficultyLabel(recipe.difficulty)}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 text-white hover:text-red-500 bg-black bg-opacity-20 hover:bg-white"
                >
                  <Icon name="Heart" className="w-4 h-4" />
                </Button>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-brown text-lg leading-tight">
                  {recipe.title}
                </CardTitle>
                <p className="text-sm text-forest">
                  {recipe.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-forest mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" className="w-4 h-4" />
                      <span>{recipe.cookTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" className="w-4 h-4" />
                      <span>{recipe.servings}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{recipe.rating}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                  <Icon name="BookOpen" className="w-4 h-4 mr-2" />
                  Смотреть рецепт
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" className="w-16 h-16 text-honey mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brown mb-2">Рецепты не найдены</h3>
            <p className="text-forest">Попробуйте изменить параметры поиска</p>
          </div>
        )}

        {/* Recipe Tips */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Icon name="Lightbulb" className="w-12 h-12 text-honey mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brown mb-4">
                  Полезные советы
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-brown mb-3">При готовке с медом:</h4>
                  <ul className="space-y-2 text-forest">
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span>Не нагревайте мед выше 60°C</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span>Добавляйте мед в остывшие блюда</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span>Используйте деревянную ложку</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-brown mb-3">Для красоты:</h4>
                  <ul className="space-y-2 text-forest">
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span>Проверьте на аллергию перед применением</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span>Используйте только свежий мед</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span>Наносите на очищенную кожу</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Recipes;