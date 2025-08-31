import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const [showForm, setShowForm] = useState(false);
  const [filterRating, setFilterRating] = useState("all");

  const testimonials = [
    {
      id: 1,
      name: "Анна Михайлова",
      rating: 5,
      date: "2024-01-15",
      service: "Ремонт холодильника Samsung",
      title: "Отличная работа!",
      text: "Холодильник перестал морозить в самый неподходящий момент. Мастер Александр приехал в тот же день, быстро определил проблему - неисправный компрессор. Заменил на следующий день. Работает как новый! Спасибо за профессионализм.",
      verified: true,
      helpful: 12,
      master: "Александр Петров"
    },
    {
      id: 2,
      name: "Дмитрий Козлов",
      rating: 5,
      date: "2024-01-12",
      service: "Ремонт стиральной машины LG",
      title: "Быстро и качественно",
      text: "Стиральная машина начала сильно шуметь и вибрировать. Мастер Михаил приехал точно в назначенное время, заменил подшипники. Теперь работает тихо. Цена адекватная, гарантия 18 месяцев.",
      verified: true,
      helpful: 8,
      master: "Михаил Сидоров"
    },
    {
      id: 3,
      name: "Елена Петрова",
      rating: 4,
      date: "2024-01-10",
      service: "Ремонт посудомоечной машины Bosch",
      title: "Хорошо, но дорого",
      text: "Посудомойка перестала сливать воду. Мастер быстро нашел проблему - засор в насосе. Почистил, заменил фильтр. Работает хорошо, но цена показалась высоковатой для такой простой работы.",
      verified: true,
      helpful: 5,
      master: "Дмитрий Козлов"
    },
    {
      id: 4,
      name: "Сергей Волков",
      rating: 5,
      date: "2024-01-08",
      service: "Ремонт микроволновки Samsung",
      title: "Спасли микроволновку!",
      text: "Микроволновка перестала греть еду. Думал, что придется покупать новую. Мастер заменил магнетрон, и она снова работает как новая. Очень доволен результатом и ценой.",
      verified: false,
      helpful: 15,
      master: "Александр Петров"
    },
    {
      id: 5,
      name: "Ирина Новикова",
      rating: 5,
      date: "2024-01-05",
      service: "Установка посудомоечной машины",
      title: "Профессиональная установка",
      text: "Заказывали установку встраиваемой посудомойки. Мастер приехал со всеми необходимыми инструментами, аккуратно встроил, подключил все коммуникации. Объяснил, как пользоваться. Очень довольны!",
      verified: true,
      helpful: 7,
      master: "Дмитрий Козлов"
    }
  ];

  const stats = {
    totalReviews: testimonials.length,
    averageRating: 4.8,
    ratingDistribution: {
      5: 4,
      4: 1,
      3: 0,
      2: 0,
      1: 0
    }
  };

  const filteredTestimonials = testimonials.filter(testimonial => 
    filterRating === "all" || testimonial.rating.toString() === filterRating
  );

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
              <h1 className="text-2xl font-bold text-brown">Отзывы клиентов</h1>
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
          <Card className="border-honey-light text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-honey mb-2">{stats.totalReviews}</div>
              <div className="text-forest">отзывов</div>
            </CardContent>
          </Card>
          
          <Card className="border-honey-light text-center">
            <CardContent className="p-6">
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

        {/* Reviews */}
        <div className="space-y-6">
          {filteredTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-honey-light">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-honey rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-brown">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            <Icon name="CheckCircle" className="w-3 h-3 mr-1" />
                            Проверен
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-forest">{formatDate(testimonial.date)}</p>
                      <p className="text-sm text-forest">Мастер: {testimonial.master}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>
                </div>
                
                <h5 className="font-semibold text-brown mb-2">{testimonial.title}</h5>
                <p className="text-forest mb-4">{testimonial.text}</p>
                
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="text-forest hover:text-honey">
                    <Icon name="ThumbsUp" className="w-4 h-4 mr-2" />
                    Полезно ({testimonial.helpful})
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

export default Testimonials;