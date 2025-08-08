import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все новости", count: 8 },
    { id: "company", name: "О компании", count: 3 },
    { id: "products", name: "Продукция", count: 2 },
    { id: "events", name: "События", count: 2 },
    { id: "tips", name: "Советы", count: 1 }
  ];

  const news = [
    {
      id: 1,
      title: "Новый урожай липового меда 2024 года",
      excerpt: "Мы рады сообщить о начале сбора нового урожая липового меда. В этом году благодаря благоприятным погодным условиям качество меда превосходит все ожидания.",
      content: "Липовый мед 2024 года отличается особенно нежным вкусом и ароматом...",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "products",
      author: "Иван Медведев",
      date: "2024-01-20",
      readTime: "3 мин",
      featured: true
    },
    {
      id: 2,
      title: "Экскурсии на пасеку возобновляются с мая",
      excerpt: "С наступлением теплых дней мы возобновляем проведение экскурсий на нашу пасеку. Приглашаем всех желающих познакомиться с удивительным миром пчел.",
      content: "Экскурсии будут проводиться каждые выходные с мая по сентябрь...",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg",
      category: "events",
      author: "Мария Медведева",
      date: "2024-01-18",
      readTime: "4 мин",
      featured: false
    },
    {
      id: 3,
      title: "Получили сертификат органического производства",
      excerpt: "Наша пасека успешно прошла сертификацию и получила официальный сертификат органического производства меда и продуктов пчеловодства.",
      content: "Сертификация подтверждает, что наша продукция соответствует самым высоким стандартам...",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      category: "company",
      author: "Алексей Медведев",
      date: "2024-01-15",
      readTime: "5 мин",
      featured: true
    },
    {
      id: 4,
      title: "Как правильно хранить мед зимой",
      excerpt: "Зимний период требует особого внимания к условиям хранения меда. Делимся полезными советами, которые помогут сохранить все полезные свойства продукта.",
      content: "Правильное хранение меда зимой включает несколько важных аспектов...",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "tips",
      author: "Мария Медведева",
      date: "2024-01-12",
      readTime: "6 мин",
      featured: false
    },
    {
      id: 5,
      title: "Расширение ассортимента: новые продукты пчеловодства",
      excerpt: "В нашем каталоге появились новые продукты: маточное молочко, перга и медовые композиции с орехами и сухофруктами.",
      content: "Мы постоянно работаем над расширением ассортимента...",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      category: "products",
      author: "Иван Медведев",
      date: "2024-01-10",
      readTime: "4 мин",
      featured: false
    },
    {
      id: 6,
      title: "Участие в выставке 'Мед России 2024'",
      excerpt: "Наша пасека примет участие в крупнейшей российской выставке продуктов пчеловодства, которая пройдет в Москве с 15 по 18 февраля.",
      content: "Выставка 'Мед России' - это главное событие года для всех пчеловодов...",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg",
      category: "events",
      author: "Алексей Медведев",
      date: "2024-01-08",
      readTime: "3 мин",
      featured: false
    },
    {
      id: 7,
      title: "20 лет на рынке: история нашей пасеки",
      excerpt: "В этом году наша семейная пасека отмечает 20-летний юбилей. Рассказываем о пути от небольшой пасеки до современного производства.",
      content: "Двадцать лет назад все начиналось с пяти ульев...",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg",
      category: "company",
      author: "Иван Медведев",
      date: "2024-01-05",
      readTime: "8 мин",
      featured: true
    },
    {
      id: 8,
      title: "Новая упаковка для меда",
      excerpt: "Мы обновили дизайн упаковки для нашего меда. Новая упаковка не только красивее, но и более экологична.",
      content: "Новая упаковка изготовлена из переработанных материалов...",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      category: "company",
      author: "Мария Медведева",
      date: "2024-01-03",
      readTime: "2 мин",
      featured: false
    }
  ];

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
              <Icon name="Newspaper" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Новости пасеки</h1>
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
            Новости и события
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Следите за новостями нашей пасеки, узнавайте о новых продуктах и полезных советах
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Поиск по новостям..."
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

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-brown mb-6">Главные новости</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredNews.map((article) => (
                <Card key={article.id} className="border-honey-light hover:shadow-lg transition-shadow cursor-pointer relative">
                  <Badge className="absolute top-3 left-3 bg-honey text-white z-10">
                    Важное
                  </Badge>
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">
                        {getCategoryName(article.category)}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs text-forest">
                        <Icon name="Clock" className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-brown text-lg leading-tight">
                      {article.title}
                    </CardTitle>
                    <p className="text-sm text-forest line-clamp-3">
                      {article.excerpt}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-forest mb-3">
                      <span>{article.author}</span>
                      <span>{formatDate(article.date)}</span>
                    </div>
                    
                    <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                      <Icon name="ArrowRight" className="w-4 h-4 mr-2" />
                      Читать полностью
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular News */}
        {regularNews.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-brown mb-6">Все новости</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNews.map((article) => (
                <Card key={article.id} className="border-honey-light hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3 bg-honey text-white">
                      {getCategoryName(article.category)}
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
                    
                    <Button variant="outline" className="w-full">
                      <Icon name="ArrowRight" className="w-4 h-4 mr-2" />
                      Читать далее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" className="w-16 h-16 text-honey mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brown mb-2">Новости не найдены</h3>
            <p className="text-forest">Попробуйте изменить параметры поиска</p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
            <CardContent className="p-8 text-center">
              <Icon name="Bell" className="w-12 h-12 text-honey mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brown mb-4">
                Подпишитесь на новости
              </h3>
              <p className="text-forest mb-6 max-w-md mx-auto">
                Будьте в курсе всех новостей пасеки, акций и полезных советов
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

export default News;