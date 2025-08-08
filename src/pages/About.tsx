import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const timeline = [
    {
      year: "2003",
      title: "Основание пасеки",
      description: "Начали с 5 ульев в деревне Медовка"
    },
    {
      year: "2008",
      title: "Расширение производства",
      description: "Увеличили количество ульев до 50, начали продажи на рынке"
    },
    {
      year: "2015",
      title: "Сертификация качества",
      description: "Получили сертификат органического производства"
    },
    {
      year: "2020",
      title: "Онлайн-магазин",
      description: "Запустили интернет-продажи и доставку по всей России"
    },
    {
      year: "2024",
      title: "Современная пасека",
      description: "Более 200 ульев, собственная лаборатория качества"
    }
  ];

  const team = [
    {
      name: "Иван Петрович Медведев",
      role: "Главный пчеловод",
      experience: "25 лет",
      description: "Основатель пасеки, потомственный пчеловод в третьем поколении",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg"
    },
    {
      name: "Мария Ивановна Медведева",
      role: "Технолог производства",
      experience: "20 лет",
      description: "Отвечает за качество продукции и разработку новых продуктов",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg"
    },
    {
      name: "Алексей Иванович Медведев",
      role: "Менеджер по продажам",
      experience: "10 лет",
      description: "Развивает онлайн-продажи и работает с клиентами",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg"
    }
  ];

  const achievements = [
    {
      icon: "Award",
      title: "Золотая медаль",
      description: "Региональная выставка 'Мед России 2023'"
    },
    {
      icon: "Shield",
      title: "Сертификат качества",
      description: "ISO 22000 система менеджмента безопасности пищевых продуктов"
    },
    {
      icon: "Leaf",
      title: "Эко-сертификат",
      description: "Органическое производство без химических добавок"
    },
    {
      icon: "Users",
      title: "5000+ клиентов",
      description: "Довольных покупателей по всей России"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Hexagon" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">О нашей пасеке</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-cream to-honey-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brown mb-6">
                Семейная пасека с 2003 года
              </h2>
              <p className="text-lg text-forest mb-6">
                Мы - семья пчеловодов в третьем поколении. Наша страсть к пчеловодству 
                передается из поколения в поколение, а традиции и секреты мастерства 
                бережно сохраняются и совершенствуются.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-honey">200+</div>
                  <div className="text-sm text-forest">ульев</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-honey">20+</div>
                  <div className="text-sm text-forest">лет опыта</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg" 
                alt="Семейная пасека"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">История развития</h3>
            <p className="text-forest text-lg">Путь от маленькой пасеки до современного производства</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-honey-light"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="border-honey-light">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-honey mb-2">{item.year}</div>
                        <h4 className="text-lg font-semibold text-brown mb-2">{item.title}</h4>
                        <p className="text-forest">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-honey rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">Наша команда</h3>
            <p className="text-forest text-lg">Люди, которые создают качественные продукты</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-honey-light">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-semibold text-brown mb-2">{member.name}</h4>
                  <p className="text-honey font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-forest mb-3">Опыт: {member.experience}</p>
                  <p className="text-sm text-forest">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">Наши достижения</h3>
            <p className="text-forest text-lg">Признание качества нашей продукции</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-honey-light hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name={achievement.icon} className="w-12 h-12 text-honey mx-auto mb-4" />
                  <h4 className="font-semibold text-brown mb-2">{achievement.title}</h4>
                  <p className="text-sm text-forest">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brown mb-4">Наши принципы</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon name="Heart" className="w-16 h-16 text-honey mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-brown mb-4">Любовь к делу</h4>
              <p className="text-forest">
                Мы искренне любим пчеловодство и вкладываем душу в каждый продукт
              </p>
            </div>
            <div className="text-center">
              <Icon name="Leaf" className="w-16 h-16 text-honey mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-brown mb-4">Экологичность</h4>
              <p className="text-forest">
                Используем только натуральные методы без химических добавок
              </p>
            </div>
            <div className="text-center">
              <Icon name="Shield" className="w-16 h-16 text-honey mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-brown mb-4">Качество</h4>
              <p className="text-forest">
                Строгий контроль качества на всех этапах производства
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;