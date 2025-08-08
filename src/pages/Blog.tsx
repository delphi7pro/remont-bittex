import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все статьи", count: 12 },
    { id: "beekeeping", name: "Пчеловодство", count: 5 },
    { id: "health", name: "Здоровье", count: 4 },
    { id: "recipes", name: "Рецепты", count: 3 }
  ];

  const articles = [
    {
      id: 1,
      title: "Как правильно хранить мед в домашних условиях",
      excerpt: "Узнайте секреты длительного хранения меда, чтобы он не потерял свои полезные свойства и вкусовые качества.",
      content: "Мед - это уникальный продукт, который при правильном хранении может сохранять свои свойства годами...",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "health",
      author: "Иван Медведев",
      date: "2024-01-15",
      readTime: "5 мин",
      tags: ["хранение", "советы", "качество"]
    },
    {
      id: 2,
      title: "Весенние работы на пасеке: подготовка к медосбору",
      excerpt: "Подробное руководство по весенним работам на пасеке для получения максимального урожая меда.",
      content: "Весна - самое важное время для пчеловода. От качества весенних работ зависит весь сезон...",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg",
      category: "beekeeping",
      author: "Мария Медведева",
      date: "2024-01-10",
      readTime: "8 мин",
      tags: ["пасека", "весна", "подготовка"]
    },
    {
      id: 3,
      title: "Медовые маски для лица: рецепты красоты",
      excerpt: "Натуральные рецепты масок с медом для ухода за кожей лица в домашних условиях.",
      content: "Мед издавна используется в косметологии благодаря своим увлажняющим и питательным свойствам...",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "recipes",
      author: "Елена Пчелкина",
      date: "2024-01-08",
      readTime: "6 мин",
      tags: ["красота", "маски", "уход"]
    },
    {
      id: 4,
      title: "Прополис: природный антибиотик и его применение",
      excerpt: "Все о прополисе - его составе, полезных свойствах и способах применения для укрепления здоровья.",
      content: "Прополис называют природным антибиотиком не случайно. Этот продукт пчеловодства обладает уникальными свойствами...",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      category: "health",
      author: "Иван Медведев",
      date: "2024-01-05",
      readTime: "7 мин",
      tags: ["прополис", "здоровье", "иммунитет"]
    },
    {
      id: 5,
      title: "Как выбрать качественный мед: советы эксперта",
      excerpt: "Практические советы по выбору натурального меда и способы определения его качества.",
      content: "На рынке много некачественного меда. Как не ошибиться в выборе и купить действительно натуральный продукт?",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "health",
      author: "Мария Медведева",
      date: "2024-01-03",
      readTime: "4 мин",
      tags: ["выбор", "качество", "советы"]
    },
    {
      id: 6,
      title: "Пчелиная пыльца: суперфуд от природы",
      excerpt: "Изучаем состав и полезные свойства пчелиной пыльцы - одного из самых питательных продуктов.",
      content: "Пчелиная пыльца содержит все необходимые человеку аминокислоты, витамины и минералы...",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      category: "health",
      author: "Алексей Медведев",
      date: "2024-01-01",
      readTime: "6 мин",
      tags: ["пыльца", "суперфуд", "питание"]
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="BookOpen" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Блог о пчеловодстве</h1>
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
            Полезные статьи о меде и пчеловодстве
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Делимся знаниями и опытом: от секретов пчеловодства до рецептов здоровья с медом
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Поиск по статьям..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="md:w-48">
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

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="border-honey-light hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-3 left-3 bg-honey text-white">
                  {categories.find(cat => cat.id === article.category)?.name}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-brown text-lg leading-tight">
                  {article.title}
                </CardTitle>
                <p className="text-sm text-forest line-clamp-3">
                  {article.excerpt}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-xs text-forest mb-3">
                  <div className="flex items-center space-x-3">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                  <Icon name="ArrowRight" className="w-4 h-4 mr-2" />
                  Читать статью
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" className="w-16 h-16 text-honey mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brown mb-2">Статьи не найдены</h3>
            <p className="text-forest">Попробуйте изменить параметры поиска</p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
            <CardContent className="p-8 text-center">
              <Icon name="Mail" className="w-12 h-12 text-honey mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brown mb-4">
                Подпишитесь на нашу рассылку
              </h3>
              <p className="text-forest mb-6 max-w-md mx-auto">
                Получайте новые статьи, советы по пчеловодству и специальные предложения
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  placeholder="Ваш email"
                  className="flex-1"
                />
                <Button className="bg-honey hover:bg-honey-dark text-white">
                  <Icon name="Send" className="w-4 h-4 mr-2" />
                  Подписаться
                </Button>
              </div>
              <p className="text-xs text-forest mt-3">
                Мы не передаем данные третьим лицам и не рассылаем спам
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;