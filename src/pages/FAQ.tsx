import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все вопросы", count: 20 },
    { id: "quality", name: "Качество", count: 6 },
    { id: "delivery", name: "Доставка", count: 5 },
    { id: "payment", name: "Оплата", count: 4 },
    { id: "storage", name: "Хранение", count: 3 },
    { id: "health", name: "Здоровье", count: 2 }
  ];

  const faqs = [
    {
      id: 1,
      question: "Как проверить качество меда?",
      answer: "Качество нашего меда подтверждается лабораторными анализами и сертификатами. Каждая партия проходит проверку на влажность, диастазное число, содержание ГМФ и другие показатели. Все документы предоставляются по запросу. Визуально качественный мед должен быть прозрачным, без посторонних включений, с характерным ароматом.",
      category: "quality",
      popular: true
    },
    {
      id: 2,
      question: "Сколько стоит доставка?",
      answer: "Стоимость доставки зависит от региона и способа доставки. По Москве и МО курьерская доставка от 300 ₽, почтой по России от 250 ₽. При заказе от 2000 ₽ доставка по Москве бесплатная. Самовывоз всегда бесплатный.",
      category: "delivery",
      popular: true
    },
    {
      id: 3,
      question: "Можно ли оплатить заказ при получении?",
      answer: "Да, мы принимаем оплату наличными или картой при получении заказа. Также доступна онлайн-оплата банковскими картами, электронными кошельками и банковский перевод для юридических лиц.",
      category: "payment",
      popular: true
    },
    {
      id: 4,
      question: "Как правильно хранить мед?",
      answer: "Мед следует хранить в сухом, темном месте при температуре не выше 20°C. Используйте стеклянную, керамическую или пластиковую тару с плотно закрывающейся крышкой. Избегайте попадания влаги и прямых солнечных лучей. При правильном хранении мед сохраняет свойства годами.",
      category: "storage",
      popular: false
    },
    {
      id: 5,
      question: "Почему мед кристаллизуется?",
      answer: "Кристаллизация - это естественный процесс для натурального меда. Скорость кристаллизации зависит от сорта меда, температуры хранения и содержания глюкозы. Акациевый мед кристаллизуется медленно, гречишный - быстро. Кристаллизованный мед не теряет полезных свойств.",
      category: "quality",
      popular: false
    },
    {
      id: 6,
      question: "Можно ли давать мед детям?",
      answer: "Мед можно давать детям старше 1 года. До года мед противопоказан из-за риска ботулизма. Детям 1-3 лет рекомендуется не более 1 чайной ложки в день, 3-6 лет - не более 1 столовой ложки. При склонности к аллергии начинайте с минимальных доз.",
      category: "health",
      popular: true
    },
    {
      id: 7,
      question: "Какие документы вы предоставляете?",
      answer: "К каждой партии меда прилагается сертификат соответствия ГОСТ, декларация соответствия ТР ТС, протокол лабораторных испытаний. Для оптовых покупателей предоставляем ветеринарные свидетельства и другие необходимые документы.",
      category: "quality",
      popular: false
    },
    {
      id: 8,
      question: "Есть ли скидки для постоянных клиентов?",
      answer: "Да, у нас действует программа лояльности. При заказе от 5000 ₽ - скидка 5%, от 10000 ₽ - 10%. Также начисляются бонусные баллы: 1 балл за каждые потраченные 20 рублей. Баллы можно использовать для оплаты следующих заказов.",
      category: "payment",
      popular: false
    },
    {
      id: 9,
      question: "Как быстро обрабатываются заказы?",
      answer: "Заказы обрабатываются в течение 24 часов в рабочие дни. После подтверждения заказа мы отправляем товар в течение 1-2 дней. Вы получите уведомление с трек-номером для отслеживания посылки.",
      category: "delivery",
      popular: false
    },
    {
      id: 10,
      question: "Можно ли вернуть товар?",
      answer: "Да, вы можете вернуть товар в течение 14 дней с момента получения, если он не подошел по качеству или другим причинам. Товар должен быть в оригинальной упаковке. Возврат денег осуществляется в течение 10 рабочих дней.",
      category: "delivery",
      popular: false
    },
    {
      id: 11,
      question: "Чем отличается ваш мед от магазинного?",
      answer: "Наш мед производится на собственных пасеках без использования химических добавок. Мы не нагреваем мед выше 40°C, не фильтруем через мелкие фильтры, сохраняя все полезные вещества. Каждая партия имеет сертификаты качества и проходит лабораторную проверку.",
      category: "quality",
      popular: true
    },
    {
      id: 12,
      question: "Можно ли заказать мед оптом?",
      answer: "Да, мы работаем с оптовыми покупателями. Минимальный заказ от 10 единиц товара. Предоставляем скидки до 26% в зависимости от объема. Для оптовых клиентов доступна отсрочка платежа и персональный менеджер.",
      category: "payment",
      popular: false
    },
    {
      id: 13,
      question: "Проводите ли вы экскурсии на пасеку?",
      answer: "Да, с мая по сентябрь мы проводим экскурсии на нашу пасеку. Программа включает знакомство с пчелами, дегустацию меда, мастер-класс по изготовлению свечей. Стоимость 500 ₽ с человека. Необходима предварительная запись.",
      category: "delivery",
      popular: false
    },
    {
      id: 14,
      question: "Можно ли нагревать мед?",
      answer: "Мед можно нагревать, но не выше 60°C. При более высоких температурах разрушаются полезные ферменты и витамины, а при температуре выше 80°C образуются вредные вещества. Для растворения кристаллизованного меда используйте водяную баню.",
      category: "storage",
      popular: false
    },
    {
      id: 15,
      question: "Какой мед лучше для детей?",
      answer: "Для детей лучше всего подходит липовый или цветочный мед - они имеют мягкий вкус и реже вызывают аллергию. Гречишный мед более активный и может быть слишком интенсивным для детского организма. Всегда начинайте с небольших порций.",
      category: "health",
      popular: false
    },
    {
      id: 16,
      question: "Почему мед разной консистенции?",
      answer: "Консистенция меда зависит от его сорта, времени сбора и условий хранения. Свежий мед обычно жидкий, со временем кристаллизуется. Акациевый мед долго остается жидким, гречишный быстро густеет. Это нормальные свойства натурального меда.",
      category: "quality",
      popular: false
    },
    {
      id: 17,
      question: "Как отличить натуральный мед от подделки?",
      answer: "Натуральный мед имеет характерный аромат, не слишком сладкий вкус, может кристаллизоваться. Подделка часто слишком прозрачная, без аромата, очень сладкая. Мы предоставляем сертификаты качества и результаты лабораторных анализов для каждой партии.",
      category: "quality",
      popular: true
    },
    {
      id: 18,
      question: "Принимаете ли вы банковские карты?",
      answer: "Да, мы принимаем все основные банковские карты: Visa, MasterCard, МИР. Оплата проходит через защищенный канал банка-эквайера. Также принимаем оплату через электронные кошельки: ЮMoney, QIWI, WebMoney.",
      category: "payment",
      popular: false
    },
    {
      id: 19,
      question: "Можно ли заморозить мед?",
      answer: "Замораживать мед не рекомендуется. При замораживании и последующем размораживании мед может потерять часть полезных свойств и изменить структуру. Лучше хранить мед при комнатной температуре в сухом темном месте.",
      category: "storage",
      popular: false
    },
    {
      id: 20,
      question: "Как долго доставляется заказ?",
      answer: "Сроки доставки зависят от способа и региона: курьером по Москве - 1-2 дня, почтой по России - 5-14 дней, СДЭК в крупные города - 2-5 дней. Самовывоз доступен в день заказа. Точные сроки сообщаем при оформлении заказа.",
      category: "delivery",
      popular: true
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularFAQs = faqs.filter(faq => faq.popular);

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
              <Icon name="HelpCircle" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Частые вопросы</h1>
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
            Ответы на частые вопросы
          </h2>
          <p className="text-lg text-forest max-w-2xl mx-auto">
            Здесь собраны ответы на самые популярные вопросы о нашем меде, доставке и условиях покупки
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Поиск по вопросам..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Button className="bg-honey hover:bg-honey-dark text-white">
              <Icon name="Search" className="w-4 h-4 mr-2" />
              Найти
            </Button>
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

        {/* Popular Questions */}
        {!searchTerm && selectedCategory === "all" && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-brown mb-6">Популярные вопросы</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {popularFAQs.slice(0, 4).map((faq) => (
                <Card key={faq.id} className="border-honey-light hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Icon name="Star" className="w-5 h-5 text-honey mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brown mb-2">{faq.question}</h4>
                        <p className="text-forest text-sm line-clamp-3">{faq.answer}</p>
                        <Badge variant="outline" className="mt-2">
                          {getCategoryName(faq.category)}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Accordion */}
        <Card className="border-honey-light">
          <CardHeader>
            <CardTitle className="text-brown">
              {searchTerm ? `Результаты поиска (${filteredFAQs.length})` : "Все вопросы"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-3">
                        <span className="text-brown">{faq.question}</span>
                        {faq.popular && (
                          <Badge className="bg-honey text-white text-xs">
                            Популярный
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs">
                          {getCategoryName(faq.category)}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="text-forest pt-2">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <Icon name="Search" className="w-16 h-16 text-honey mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brown mb-2">Вопросы не найдены</h3>
                <p className="text-forest mb-4">Попробуйте изменить поисковый запрос</p>
                <Button onClick={() => setSearchTerm("")} variant="outline">
                  Показать все вопросы
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-honey-light to-cream border-honey">
            <CardContent className="p-8 text-center">
              <Icon name="MessageCircle" className="w-12 h-12 text-honey mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brown mb-4">
                Не нашли ответ на свой вопрос?
              </h3>
              <p className="text-forest mb-6 max-w-md mx-auto">
                Свяжитесь с нами любым удобным способом, и мы обязательно поможем
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-honey hover:bg-honey-dark text-white">
                  <Icon name="Phone" className="w-4 h-4 mr-2" />
                  Позвонить
                </Button>
                <Button variant="outline">
                  <Icon name="Mail" className="w-4 h-4 mr-2" />
                  Написать email
                </Button>
                <Button variant="outline">
                  <Icon name="MessageSquare" className="w-4 h-4 mr-2" />
                  Написать в чат
                </Button>
              </div>
              
              <div className="mt-6 text-sm text-forest">
                <p>Время работы: Пн-Вс 9:00-21:00</p>
                <p>Среднее время ответа: 2 часа</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;