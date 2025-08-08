import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Wholesale = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    city: "",
    businessType: "",
    volume: "",
    products: [],
    message: ""
  });

  const wholesalePrices = [
    {
      product: "Липовый мед",
      retail: 450,
      wholesale: [
        { from: 10, to: 49, price: 400, discount: "11%" },
        { from: 50, to: 99, price: 380, discount: "16%" },
        { from: 100, to: 199, price: 360, discount: "20%" },
        { from: 200, to: null, price: 340, discount: "24%" }
      ],
      unit: "500г"
    },
    {
      product: "Гречишный мед",
      retail: 520,
      wholesale: [
        { from: 10, to: 49, price: 470, discount: "10%" },
        { from: 50, to: 99, price: 450, discount: "13%" },
        { from: 100, to: 199, price: 430, discount: "17%" },
        { from: 200, to: null, price: 410, discount: "21%" }
      ],
      unit: "500г"
    },
    {
      product: "Цветочный мед",
      retail: 380,
      wholesale: [
        { from: 10, to: 49, price: 340, discount: "11%" },
        { from: 50, to: 99, price: 320, discount: "16%" },
        { from: 100, to: 199, price: 300, discount: "21%" },
        { from: 200, to: null, price: 280, discount: "26%" }
      ],
      unit: "500г"
    }
  ];

  const businessTypes = [
    "Розничный магазин",
    "Интернет-магазин",
    "Кафе/Ресторан",
    "Аптека",
    "Дистрибьютор",
    "Другое"
  ];

  const benefits = [
    {
      icon: "TrendingDown",
      title: "Выгодные цены",
      description: "Скидки до 26% от розничной цены при больших объемах"
    },
    {
      icon: "Truck",
      title: "Бесплатная доставка",
      description: "При заказе от 50 000 рублей доставка за наш счет"
    },
    {
      icon: "Clock",
      title: "Быстрая обработка",
      description: "Обработка заявок в течение 24 часов"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Все документы и сертификаты качества прилагаются"
    },
    {
      icon: "Users",
      title: "Персональный менеджер",
      description: "Индивидуальный подход к каждому клиенту"
    },
    {
      icon: "Calendar",
      title: "Отсрочка платежа",
      description: "Возможность работы с отсрочкой для постоянных клиентов"
    }
  ];

  const requirements = [
    "Минимальный заказ от 10 единиц товара",
    "Наличие документов, подтверждающих деятельность",
    "Предоплата 50% для новых клиентов",
    "Самовывоз или доставка транспортной компанией"
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Wholesale request submitted:", formData);
  };

  const formatVolumeRange = (from: number, to: number | null) => {
    if (to === null) {
      return `от ${from} шт`;
    }
    return `${from}-${to} шт`;
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Оптовые продажи</h1>
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
            Оптовые поставки меда
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Предлагаем выгодные условия для магазинов, кафе, аптек и других организаций. 
            Качественный мед напрямую от производителя.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-honey-light text-center">
              <CardContent className="p-6">
                <Icon name={benefit.icon} className="w-12 h-12 text-honey mx-auto mb-4" />
                <h3 className="font-semibold text-brown mb-2">{benefit.title}</h3>
                <p className="text-sm text-forest">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Wholesale Prices */}
          <div>
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Оптовые цены</CardTitle>
                <p className="text-forest">Цены указаны за единицу товара в рублях</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {wholesalePrices.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold text-brown">{item.product}</h4>
                        <Badge variant="outline">
                          Розница: {item.retail} ₽/{item.unit}
                        </Badge>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-honey-light">
                              <th className="text-left py-2 text-brown">Объем</th>
                              <th className="text-left py-2 text-brown">Цена</th>
                              <th className="text-left py-2 text-brown">Скидка</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.wholesale.map((tier, tierIndex) => (
                              <tr key={tierIndex} className="border-b border-gray-100">
                                <td className="py-2 text-forest">
                                  {formatVolumeRange(tier.from, tier.to)}
                                </td>
                                <td className="py-2 text-honey font-semibold">
                                  {tier.price} ₽
                                </td>
                                <td className="py-2">
                                  <Badge className="bg-green-100 text-green-800">
                                    -{tier.discount}
                                  </Badge>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="border-honey-light mt-6">
              <CardHeader>
                <CardTitle className="text-brown">Условия работы</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-honey mt-1 flex-shrink-0" />
                      <span className="text-forest">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Заявка на оптовые поставки</CardTitle>
                <p className="text-forest">Заполните форму и мы свяжемся с вами в течение дня</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="companyName">Название организации *</Label>
                    <Input
                      id="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      placeholder="ООО 'Название'"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactPerson">Контактное лицо *</Label>
                      <Input
                        id="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">Город *</Label>
                      <Input
                        id="city"
                        required
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="Москва"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="company@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessType">Тип деятельности *</Label>
                      <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypes.map(type => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="volume">Планируемый объем закупок</Label>
                      <Select value={formData.volume} onValueChange={(value) => handleInputChange("volume", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите объем" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10-50">10-50 единиц в месяц</SelectItem>
                          <SelectItem value="50-100">50-100 единиц в месяц</SelectItem>
                          <SelectItem value="100-200">100-200 единиц в месяц</SelectItem>
                          <SelectItem value="200+">Более 200 единиц в месяц</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Расскажите о ваших потребностях, интересующих продуктах и объемах..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-honey hover:bg-honey-dark text-white">
                    <Icon name="Send" className="w-4 h-4 mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-honey-light mt-6">
              <CardHeader>
                <CardTitle className="text-brown">Контакты отдела продаж</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="User" className="w-5 h-5 text-honey" />
                    <div>
                      <div className="font-medium text-brown">Алексей Медведев</div>
                      <div className="text-sm text-forest">Менеджер по оптовым продажам</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="w-5 h-5 text-honey" />
                    <div>
                      <div className="font-medium text-brown">+7 (999) 123-45-67</div>
                      <div className="text-sm text-forest">Пн-Пт: 9:00-18:00</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="w-5 h-5 text-honey" />
                    <div>
                      <div className="font-medium text-brown">opt@medovaya-usadba.ru</div>
                      <div className="text-sm text-forest">Ответим в течение дня</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="border-honey-light">
            <CardHeader>
              <CardTitle className="text-brown">Документооборот</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="FileText" className="w-5 h-5 text-honey mt-1" />
                  <div>
                    <div className="font-medium text-brown">Договор поставки</div>
                    <div className="text-sm text-forest">Заключаем официальный договор</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Receipt" className="w-5 h-5 text-honey mt-1" />
                  <div>
                    <div className="font-medium text-brown">Счета и накладные</div>
                    <div className="text-sm text-forest">Полный пакет документов</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Award" className="w-5 h-5 text-honey mt-1" />
                  <div>
                    <div className="font-medium text-brown">Сертификаты качества</div>
                    <div className="text-sm text-forest">К каждой партии товара</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-honey-light">
            <CardHeader>
              <CardTitle className="text-brown">Логистика</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" className="w-5 h-5 text-honey mt-1" />
                  <div>
                    <div className="font-medium text-brown">Самовывоз</div>
                    <div className="text-sm text-forest">Со склада в Тульской области</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Truck" className="w-5 h-5 text-honey mt-1" />
                  <div>
                    <div className="font-medium text-brown">Доставка по России</div>
                    <div className="text-sm text-forest">Транспортными компаниями</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Package" className="w-5 h-5 text-honey mt-1" />
                  <div>
                    <div className="font-medium text-brown">Упаковка</div>
                    <div className="text-sm text-forest">Надежная упаковка для транспортировки</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Icon name="Users" className="w-12 h-12 text-honey mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brown mb-4">
                  Наши партнеры
                </h3>
                <p className="text-forest">
                  Более 100 организаций уже работают с нами на постоянной основе
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-honey mb-2">50+</div>
                  <div className="text-forest">розничных магазинов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-honey mb-2">25+</div>
                  <div className="text-forest">кафе и ресторанов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-honey mb-2">15+</div>
                  <div className="text-forest">аптечных сетей</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Wholesale;