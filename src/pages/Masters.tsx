import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Masters = () => {
  const masters = [
    {
      id: 1,
      name: "Александр Петров",
      specialization: "Холодильное оборудование",
      experience: "12 лет",
      rating: 4.9,
      completedJobs: 2500,
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg",
      certificates: ["Сертификат Samsung", "Сертификат LG", "Сертификат Bosch"],
      skills: ["Компрессоры", "Электроника", "Системы охлаждения"],
      description: "Ведущий специалист по ремонту холодильников. Работает с техникой премиум-класса."
    },
    {
      id: 2,
      name: "Михаил Сидоров",
      specialization: "Стиральные машины",
      experience: "8 лет",
      rating: 4.8,
      completedJobs: 1800,
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      certificates: ["Сертификат Electrolux", "Сертификат Whirlpool"],
      skills: ["Подшипники", "Электроника", "Гидравлика"],
      description: "Эксперт по ремонту стиральных машин всех типов и марок."
    },
    {
      id: 3,
      name: "Дмитрий Козлов",
      specialization: "Посудомоечные машины",
      experience: "6 лет",
      rating: 4.7,
      completedJobs: 1200,
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg",
      certificates: ["Сертификат Siemens", "Сертификат Bosch"],
      skills: ["Насосы", "Фильтры", "Электроника"],
      description: "Специалист по встраиваемой технике и посудомоечным машинам."
    }
  ];

  const teamStats = [
    { number: "15", label: "мастеров в команде" },
    { number: "98%", label: "успешных ремонтов" },
    { number: "4.8", label: "средний рейтинг" },
    { number: "24/7", label: "готовность к выезду" }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Users" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Наши мастера</h1>
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
            Команда профессионалов
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Наши мастера имеют многолетний опыт и сертификаты от ведущих производителей техники
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {teamStats.map((stat, index) => (
            <Card key={index} className="border-honey-light text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-honey mb-2">{stat.number}</div>
                <p className="text-forest">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Masters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {masters.map((master) => (
            <Card key={master.id} className="border-honey-light hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={master.image} 
                  alt={master.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-3 left-3 bg-honey text-white">
                  {master.experience} опыта
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-brown">{master.name}</CardTitle>
                <p className="text-forest font-medium">{master.specialization}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        className={`w-4 h-4 ${i < Math.floor(master.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-forest ml-2">({master.rating})</span>
                  </div>
                  <span className="text-sm text-forest">{master.completedJobs} работ</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-forest mb-4">{master.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-brown mb-2">Специализация:</h4>
                    <div className="flex flex-wrap gap-1">
                      {master.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-2">Сертификаты:</h4>
                    <div className="flex flex-wrap gap-1">
                      {master.certificates.map((cert, index) => (
                        <Badge key={index} className="bg-green-100 text-green-800 text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-honey hover:bg-honey-dark text-white">
                  <Icon name="Phone" className="w-4 h-4 mr-2" />
                  Вызвать мастера
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Requirements */}
        <div className="mt-12">
          <Card className="border-honey-light">
            <CardHeader>
              <CardTitle className="text-brown">Требования к мастерам</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-brown mb-4">Профессиональные требования:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span className="text-forest">Опыт работы от 3 лет</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span className="text-forest">Сертификаты производителей</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span className="text-forest">Знание электроники и механики</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span className="text-forest">Регулярное повышение квалификации</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-brown mb-4">Личные качества:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span className="text-forest">Пунктуальность и ответственность</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span className="text-forest">Вежливость и аккуратность</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span className="text-forest">Честность и порядочность</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span className="text-forest">Умение объяснить проблему</span>
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

export default Masters;