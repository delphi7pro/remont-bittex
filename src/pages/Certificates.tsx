import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: "Сертификат соответствия ГОСТ",
      number: "РОСС RU.АГ99.Н00123",
      issueDate: "2023-06-15",
      expiryDate: "2026-06-15",
      issuer: "Центр сертификации 'Ростест-Москва'",
      scope: "Мед натуральный цветочный, липовый, гречишный",
      standard: "ГОСТ 19792-2017",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      type: "quality"
    },
    {
      id: 2,
      name: "Декларация соответствия ТР ТС",
      number: "ТС N RU Д-RU.АГ99.В.00456/23",
      issueDate: "2023-07-01",
      expiryDate: "2026-07-01",
      issuer: "Испытательная лаборатория 'Агроконтроль'",
      scope: "Продукты пчеловодства",
      standard: "ТР ТС 021/2011, ТР ТС 022/2011",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      type: "safety"
    },
    {
      id: 3,
      name: "Сертификат органического производства",
      number: "ORG-RU-2023-789",
      issueDate: "2023-05-20",
      expiryDate: "2025-05-20",
      issuer: "Органик Сертификация",
      scope: "Органическое производство меда",
      standard: "ГОСТ 33980-2016",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      type: "organic"
    },
    {
      id: 4,
      name: "Ветеринарное свидетельство",
      number: "ВС-77-123456",
      issueDate: "2023-08-10",
      expiryDate: "2024-08-10",
      issuer: "Государственная ветеринарная служба",
      scope: "Продукты пчеловодства для пищевых целей",
      standard: "Ветеринарные требования",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      type: "veterinary"
    },
    {
      id: 5,
      name: "Протокол лабораторных испытаний",
      number: "ПИ-2023-1547",
      issueDate: "2023-09-05",
      expiryDate: "2024-09-05",
      issuer: "Аккредитованная лаборатория 'Пищевик'",
      scope: "Физико-химические показатели меда",
      standard: "ГОСТ 31766-2012",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      type: "testing"
    },
    {
      id: 6,
      name: "Сертификат ISO 22000",
      number: "ISO-22000-2023-456",
      issueDate: "2023-04-12",
      expiryDate: "2026-04-12",
      issuer: "Международный центр сертификации",
      scope: "Система менеджмента безопасности пищевых продуктов",
      standard: "ISO 22000:2018",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg",
      type: "iso"
    }
  ];

  const awards = [
    {
      id: 1,
      name: "Золотая медаль",
      event: "Выставка 'Мед России 2023'",
      date: "2023-10-15",
      category: "Липовый мед",
      description: "За высокое качество и органолептические свойства",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg"
    },
    {
      id: 2,
      name: "Диплом участника",
      event: "Международная выставка пчеловодства",
      date: "2023-09-20",
      category: "Продукты пчеловодства",
      description: "За участие в международной выставке",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg"
    },
    {
      id: 3,
      name: "Благодарность",
      event: "Региональный конкурс качества",
      date: "2023-08-10",
      category: "Гречишный мед",
      description: "За стабильно высокое качество продукции",
      image: "/img/9086a193-d0f4-4859-b74b-ac81f93aa4a8.jpg"
    }
  ];

  const labResults = [
    { parameter: "Влажность", value: "17.2%", norm: "не более 20%", status: "pass" },
    { parameter: "Диастазное число", value: "15.8 ед. Готе", norm: "не менее 8 ед.", status: "pass" },
    { parameter: "ГМФ", value: "18.5 мг/кг", norm: "не более 25 мг/кг", status: "pass" },
    { parameter: "Кислотность", value: "2.3 мл-экв/кг", norm: "не более 4.0 мл-экв/кг", status: "pass" },
    { parameter: "Механические примеси", value: "Отсутствуют", norm: "Отсутствуют", status: "pass" },
    { parameter: "Пыльцевой анализ", value: "Соответствует", norm: "Соответствует заявленному", status: "pass" }
  ];

  const getTypeIcon = (type: string) => {
    const icons = {
      quality: "Award",
      safety: "Shield",
      organic: "Leaf",
      veterinary: "Heart",
      testing: "FlaskConical",
      iso: "Building"
    };
    return icons[type] || "FileText";
  };

  const getTypeName = (type: string) => {
    const names = {
      quality: "Качество",
      safety: "Безопасность",
      organic: "Органик",
      veterinary: "Ветеринария",
      testing: "Испытания",
      iso: "ISO"
    };
    return names[type] || type;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      quality: "bg-blue-100 text-blue-800",
      safety: "bg-green-100 text-green-800",
      organic: "bg-emerald-100 text-emerald-800",
      veterinary: "bg-pink-100 text-pink-800",
      testing: "bg-purple-100 text-purple-800",
      iso: "bg-orange-100 text-orange-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

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
              <Icon name="Award" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Сертификаты и награды</h1>
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
            Качество, подтвержденное документами
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Вся наша продукция имеет необходимые сертификаты качества и безопасности. 
            Мы гордимся признанием нашего труда на выставках и конкурсах.
          </p>
        </div>

        <Tabs defaultValue="certificates" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="certificates">Сертификаты</TabsTrigger>
            <TabsTrigger value="awards">Награды</TabsTrigger>
            <TabsTrigger value="lab-results">Анализы</TabsTrigger>
          </TabsList>

          {/* Certificates */}
          <TabsContent value="certificates" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <Card key={cert.id} className="border-honey-light hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className={`absolute top-3 left-3 ${getTypeColor(cert.type)}`}>
                      {getTypeName(cert.type)}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-brown text-lg leading-tight">
                      {cert.name}
                    </CardTitle>
                    <p className="text-sm text-forest">
                      {cert.scope}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-forest">Номер:</span>
                        <span className="text-brown font-medium">{cert.number}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-forest">Выдан:</span>
                        <span className="text-brown">{formatDate(cert.issueDate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-forest">Действует до:</span>
                        <span className="text-brown">{formatDate(cert.expiryDate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-forest">Стандарт:</span>
                        <span className="text-brown font-medium">{cert.standard}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-xs text-forest">
                      <p><strong>Выдан:</strong> {cert.issuer}</p>
                    </div>
                    
                    <Button className="w-full mt-4 bg-honey hover:bg-honey-dark text-white">
                      <Icon name="Download" className="w-4 h-4 mr-2" />
                      Скачать PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Awards */}
          <TabsContent value="awards" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award) => (
                <Card key={award.id} className="border-honey-light hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={award.image} 
                      alt={award.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-yellow-100 text-yellow-800">
                        <Icon name="Trophy" className="w-3 h-3 mr-1" />
                        Награда
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-brown text-lg leading-tight">
                      {award.name}
                    </CardTitle>
                    <p className="text-sm text-forest">
                      {award.event}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-forest">Дата:</span>
                        <span className="text-brown">{formatDate(award.date)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-forest">Категория:</span>
                        <span className="text-brown">{award.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-forest mb-4">{award.description}</p>
                    
                    <Button variant="outline" className="w-full">
                      <Icon name="Eye" className="w-4 h-4 mr-2" />
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Lab Results */}
          <TabsContent value="lab-results" className="space-y-8">
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Результаты лабораторных исследований</CardTitle>
                <p className="text-forest">
                  Последние анализы липового меда от 15 января 2024 года
                </p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-honey-light">
                        <th className="text-left py-3 text-brown">Показатель</th>
                        <th className="text-left py-3 text-brown">Результат</th>
                        <th className="text-left py-3 text-brown">Норма</th>
                        <th className="text-left py-3 text-brown">Статус</th>
                      </tr>
                    </thead>
                    <tbody>
                      {labResults.map((result, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 text-forest font-medium">{result.parameter}</td>
                          <td className="py-3 text-brown font-semibold">{result.value}</td>
                          <td className="py-3 text-forest">{result.norm}</td>
                          <td className="py-3">
                            <Badge className="bg-green-100 text-green-800">
                              <Icon name="CheckCircle" className="w-3 h-3 mr-1" />
                              Соответствует
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 p-4 bg-honey-light rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" className="w-5 h-5 text-honey mt-1" />
                    <div>
                      <h4 className="font-semibold text-brown mb-2">Заключение лаборатории:</h4>
                      <p className="text-forest text-sm">
                        Исследованный образец меда соответствует требованиям ГОСТ 19792-2017 
                        "Мед натуральный. Технические условия" и безопасен для употребления в пищу.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <Button className="bg-honey hover:bg-honey-dark text-white">
                    <Icon name="Download" className="w-4 h-4 mr-2" />
                    Скачать полный протокол
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quality Control Process */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Контроль качества</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Этапы контроля:</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          1
                        </div>
                        <div>
                          <div className="font-medium text-brown">Контроль сырья</div>
                          <div className="text-sm text-forest">Проверка каждой партии меда</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          2
                        </div>
                        <div>
                          <div className="font-medium text-brown">Лабораторные анализы</div>
                          <div className="text-sm text-forest">Физико-химические исследования</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          3
                        </div>
                        <div>
                          <div className="font-medium text-brown">Органолептическая оценка</div>
                          <div className="text-sm text-forest">Проверка вкуса, запаха, цвета</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          4
                        </div>
                        <div>
                          <div className="font-medium text-brown">Упаковка и маркировка</div>
                          <div className="text-sm text-forest">Соблюдение стандартов упаковки</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown mb-4">Наша лаборатория:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Icon name="CheckCircle" className="w-4 h-4 text-honey" />
                        <span className="text-forest">Современное оборудование</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="CheckCircle" className="w-4 h-4 text-honey" />
                        <span className="text-forest">Квалифицированные специалисты</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="CheckCircle" className="w-4 h-4 text-honey" />
                        <span className="text-forest">Аккредитация Росаккредитации</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="CheckCircle" className="w-4 h-4 text-honey" />
                        <span className="text-forest">Регулярная калибровка приборов</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-honey-light rounded-lg">
                      <p className="text-sm text-brown">
                        <Icon name="Info" className="w-4 h-4 inline mr-2" />
                        Каждая партия меда проходит обязательную проверку в нашей лаборатории 
                        перед поступлением в продажу.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Trust Indicators */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Icon name="Shield" className="w-12 h-12 text-honey mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brown mb-4">
                  Гарантии качества
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Icon name="Award" className="w-8 h-8 text-honey mx-auto mb-3" />
                  <h4 className="font-semibold text-brown mb-2">6 сертификатов</h4>
                  <p className="text-forest text-sm">Подтверждающих качество и безопасность</p>
                </div>
                
                <div>
                  <Icon name="Trophy" className="w-8 h-8 text-honey mx-auto mb-3" />
                  <h4 className="font-semibold text-brown mb-2">3 награды</h4>
                  <p className="text-forest text-sm">За высокое качество продукции</p>
                </div>
                
                <div>
                  <Icon name="FlaskConical" className="w-8 h-8 text-honey mx-auto mb-3" />
                  <h4 className="font-semibold text-brown mb-2">Регулярные анализы</h4>
                  <p className="text-forest text-sm">Каждая партия проходит проверку</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Certificates;