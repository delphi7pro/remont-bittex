import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const timeline = [
    {
      year: "2012",
      title: "Основание компании",
      description: "Начали с ремонта холодильников в гараже"
    },
    {
      year: "2015",
      title: "Расширение услуг",
      description: "Добавили ремонт стиральных машин и посудомоек"
    },
    {
      year: "2018",
      title: "Сертификация мастеров",
      description: "Получили официальные сертификаты от производителей"
    },
    {
      year: "2020",
      title: "Онлайн-сервис",
      description: "Запустили сайт и систему онлайн-записи"
    },
    {
      year: "2024",
      title: "Лидер рынка",
      description: "15000+ отремонтированных приборов, команда из 15 мастеров"
    }
  ];

  const team = [
    {
      name: "Александр Петров",
      role: "Главный мастер",
      experience: "12 лет",
      description: "Основатель компании, специалист по холодильному оборудованию",
      image: "/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg"
    },
    {
      name: "Михаил Сидоров",
      role: "Ведущий мастер",
      experience: "8 лет",
      description: "Эксперт по ремонту стиральных машин и посудомоечных машин",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg"
    },
    {
      name: "Дмитрий Козлов",
      role: "Мастер-универсал",
      experience: "6 лет",
      description: "Специализируется на встраиваемой технике и мелких приборах",
      image: "/img/eefef1fe-f4cf-4978-a9be-514bd1b84f2f.jpg"
    }
  ];

  const achievements = [
    {
      icon: "Award",
      title: "15000+ ремонтов",
      description: "Успешно отремонтированных приборов за 12 лет"
    },
    {
      icon: "Shield",
      title: "Сертифицированные мастера",
      description: "Официальные сертификаты от Samsung, LG, Bosch"
    },
    {
      icon: "Clock",
      title: "24/7 поддержка",
      description: "Круглосуточный прием заявок и аварийные выезды"
    },
    {
      icon: "Users",
      title: "98% довольных клиентов",
      description: "Высокий рейтинг удовлетворенности услугами"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">О компании</h1>
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
                РемТехСервис с 2012 года
              </h2>
              <p className="text-lg text-forest mb-6">
                Мы - команда профессиональных мастеров с многолетним опытом. 
                Специализируемся на ремонте бытовой техники всех марок и моделей. 
                Наша цель - вернуть вашей технике вторую жизнь.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-honey">15000+</div>
                  <div className="text-sm text-forest">ремонтов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-honey">12</div>
                  <div className="text-sm text-forest">лет опыта</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/img/0b81fc7a-0179-4edc-8d1d-664da96158aa.jpg" 
                alt="Команда мастеров"
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
            <p className="text-forest text-lg">Путь от небольшой мастерской до ведущего сервиса</p>
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
            <p className="text-forest text-lg">Профессионалы, которые решают ваши проблемы</p>
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
            <p className="text-forest text-lg">Цифры, которые говорят о нашем профессионализме</p>
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
              <h4 className="text-xl font-semibold text-brown mb-4">Профессионализм</h4>
              <p className="text-forest">
                Постоянно совершенствуем навыки и изучаем новые технологии
              </p>
            </div>
            <div className="text-center">
              <Icon name="Clock" className="w-16 h-16 text-honey mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-brown mb-4">Оперативность</h4>
              <p className="text-forest">
                Быстро реагируем на заявки и выполняем ремонт в кратчайшие сроки
              </p>
            </div>
            <div className="text-center">
              <Icon name="Shield" className="w-16 h-16 text-honey mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-brown mb-4">Надежность</h4>
              <p className="text-forest">
                Даем гарантию на все работы и используем качественные запчасти
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;