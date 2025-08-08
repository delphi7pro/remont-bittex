import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const [sortBy, setSortBy] = useState("date");
  const [filterRating, setFilterRating] = useState("all");
  const [showForm, setShowForm] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Мария Козлова",
      rating: 5,
      date: "2024-01-15",
      product: "Липовый мед",
      title: "Отличный мед!",
      text: "Покупаю уже второй год подряд. Качество на высоте, мед очень ароматный и вкусный. Дети едят с удовольствием. Доставка быстрая, упаковка надежная.",
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      name: "Алексей Петров",
      rating: 5,
      date: "2024-01-10",
      product: "Гречишный мед",
      title: "Настоящий деревенский мед",
      text: "Заказывал для лечения простуды. Мед темный, насыщенный, с характерным вкусом гречихи. Помог быстро справиться с болезнью. Рекомендую!",
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      name: "Елена Смирнова",
      rating: 4,
      date: "2024-01-08",
      product: "Цветочный мед",
      title: "Хороший мед, но...",
      text: "Мед вкусный, натуральный. Единственное - хотелось бы более подробную информацию о составе трав. В целом довольна покупкой.",
      verified: true,
      helpful: 5
    },
    {
      id: 4,
      name: "Дмитрий Волков",
      rating: 5,
      date: "2024-01-05",
      product: "Медовые соты",
      title: "Деликатес!",
      text: "Впервые попробовал соты в меду. Невероятные ощущения! Воск жуется легко, мед течет прямо во рту. Детям очень понравилось. Буду заказывать еще.",
      verified: false,
      helpful: 15
    },
    {
      id: 5,
      name: "Ирина Новикова",
      rating: 5,
      date: "2024-01-03",
      product: "Прополис настойка",
      title: "Эффективное средство",
      text: "Использую для профилактики простудных заболеваний. Настойка качественная, концентрированная. Помогает укрепить иммунитет всей семьи.",
      verified: true,
      helpful: 7
    },
    {
      id: 6,
      name: "Сергей Михайлов",
      rating: 4,
      date: "2023-12-28",
      product: "Пчелиный воск",
      title: "Качественный воск",
      text: "Покупал для изготовления свечей. Воск чистый, без примесей, хорошо плавится. Свечи получились ароматные и долго горят.",
      verified: true,
      helpful: 3
    }
  ];

  const stats = {
    totalReviews: reviews.length,
    averageRating: 4.7,
    ratingDistribution: {
      5: 4,
      4: 2,
      3: 0,
      2: 0,
      1: 0
    }
  };

  const filteredReviews = reviews
    .filter(review => filterRating === "all" || review.rating.toString() === filterRating)
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "helpful":
          return b.helpful - a.helpful;
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
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
              <Icon name="MessageSquare" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Отзывы покупателей</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-honey-light">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-honey mb-2">{stats.totalReviews}</div>
              <div className="text-forest">отзывов</div>
            </CardContent>
          </Card>
          
          <Card className="border-honey-light">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="text-3xl font-bold text-honey">{stats.averageRating}</div>
                <Icon name="Star" className="w-6 h-6 text-yellow-400 fill-current" />
              </div>
              <div className="text-forest">средняя оценка</div>
            </CardContent>
          </Card>
          
          <Card className="border-honey-light">
            <CardContent className="p-6">
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map(rating => (
                  <div key={rating} className="flex items-center space-x-2">
                    <span className="text-sm text-forest w-2">{rating}</span>
                    <Icon name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-honey h-2 rounded-full" 
                        style={{ width: `${(stats.ratingDistribution[rating] / stats.totalReviews) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-forest w-4">{stats.ratingDistribution[rating]}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Add Review */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label className="block text-sm font-medium text-brown mb-2">Сортировка</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">По дате</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="helpful">По полезности</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brown mb-2">Фильтр по оценке</label>
                <Select value={filterRating} onValueChange={setFilterRating}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все оценки</SelectItem>
                    <SelectItem value="5">5 звезд</SelectItem>
                    <SelectItem value="4">4 звезды</SelectItem>
                    <SelectItem value="3">3 звезды</SelectItem>
                    <SelectItem value="2">2 звезды</SelectItem>
                    <SelectItem value="1">1 звезда</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button 
              onClick={() => setShowForm(!showForm)}
              className="bg-honey hover:bg-honey-dark text-white"
            >
              <Icon name="Plus" className="w-4 h-4 mr-2" />
              Написать отзыв
            </Button>
          </div>
        </div>

        {/* Add Review Form */}
        {showForm && (
          <Card className="mb-8 border-honey-light">
            <CardHeader>
              <CardTitle className="text-brown">Написать отзыв</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brown mb-2">Ваше имя</label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown mb-2">Товар</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите товар" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lipovy">Липовый мед</SelectItem>
                      <SelectItem value="grechishny">Гречишный мед</SelectItem>
                      <SelectItem value="cvetochny">Цветочный мед</SelectItem>
                      <SelectItem value="vosk">Пчелиный воск</SelectItem>
                      <SelectItem value="propolis">Прополис настойка</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brown mb-2">Оценка</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Icon key={star} name="Star" className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brown mb-2">Заголовок отзыва</label>
                <Input placeholder="Краткое описание вашего опыта" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brown mb-2">Текст отзыва</label>
                <Textarea 
                  placeholder="Расскажите подробнее о товаре и вашем опыте использования"
                  rows={4}
                />
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-honey hover:bg-honey-dark text-white">
                  <Icon name="Send" className="w-4 h-4 mr-2" />
                  Отправить отзыв
                </Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  Отмена
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <Card key={review.id} className="border-honey-light">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-honey rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-brown">{review.name}</h4>
                        {review.verified && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            <Icon name="CheckCircle" className="w-3 h-3 mr-1" />
                            Проверен
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-forest">{formatDate(review.date)}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {review.product}
                    </Badge>
                  </div>
                </div>
                
                <h5 className="font-semibold text-brown mb-2">{review.title}</h5>
                <p className="text-forest mb-4">{review.text}</p>
                
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="text-forest hover:text-honey">
                    <Icon name="ThumbsUp" className="w-4 h-4 mr-2" />
                    Полезно ({review.helpful})
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="text-forest hover:text-honey">
                    <Icon name="Flag" className="w-4 h-4 mr-2" />
                    Пожаловаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <Icon name="MessageSquare" className="w-16 h-16 text-honey mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brown mb-2">Отзывы не найдены</h3>
            <p className="text-forest">Попробуйте изменить параметры фильтрации</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;