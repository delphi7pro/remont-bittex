import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const RepairHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const repairHistory = [
    {
      id: "REP-2024-001",
      date: "2024-01-15",
      device: "Холодильник Samsung RB33",
      problem: "Не морозит",
      solution: "Замена компрессора",
      master: "Александр Петров",
      cost: 12500,
      status: "completed",
      warranty: "24 месяца",
      nextMaintenance: "2025-01-15"
    },
    {
      id: "REP-2024-002",
      date: "2024-01-10",
      device: "Стиральная машина LG F1256QD",
      problem: "Не сливает воду",
      solution: "Замена сливного насоса",
      master: "Михаил Сидоров",
      cost: 3200,
      status: "completed",
      warranty: "18 месяцев",
      nextMaintenance: "2024-07-10"
    },
    {
      id: "REP-2024-003",
      date: "2024-01-08",
      device: "Посудомоечная машина Bosch",
      problem: "Протечка воды",
      solution: "Замена уплотнителя дверцы",
      master: "Дмитрий Козлов",
      cost: 2800,
      status: "in_progress",
      warranty: "18 месяцев",
      nextMaintenance: "2024-07-08"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusMap = {
      completed: { label: "Завершен", color: "bg-green-100 text-green-800" },
      in_progress: { label: "В работе", color: "bg-yellow-100 text-yellow-800" },
      scheduled: { label: "Запланирован", color: "bg-blue-100 text-blue-800" },
      cancelled: { label: "Отменен", color: "bg-red-100 text-red-800" }
    };
    
    const statusInfo = statusMap[status] || statusMap.completed;
    return (
      <Badge className={statusInfo.color}>
        {statusInfo.label}
      </Badge>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredHistory = repairHistory.filter(repair =>
    repair.device.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repair.problem.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repair.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="History" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">История ремонтов</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <Input
            placeholder="Поиск по номеру заказа, технике или проблеме..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mx-auto"
          />
        </div>

        {/* Repair History */}
        <div className="space-y-6">
          {filteredHistory.map((repair) => (
            <Card key={repair.id} className="border-honey-light">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-brown">Заказ #{repair.id}</CardTitle>
                    <p className="text-forest">{formatDate(repair.date)}</p>
                  </div>
                  {getStatusBadge(repair.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <span className="text-forest">Техника:</span>
                      <div className="font-semibold text-brown">{repair.device}</div>
                    </div>
                    <div>
                      <span className="text-forest">Проблема:</span>
                      <div className="font-semibold text-brown">{repair.problem}</div>
                    </div>
                    <div>
                      <span className="text-forest">Решение:</span>
                      <div className="font-semibold text-brown">{repair.solution}</div>
                    </div>
                    <div>
                      <span className="text-forest">Мастер:</span>
                      <div className="font-semibold text-brown">{repair.master}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-forest">Стоимость:</span>
                      <div className="font-semibold text-honey text-xl">{repair.cost} ₽</div>
                    </div>
                    <div>
                      <span className="text-forest">Гарантия:</span>
                      <div className="font-semibold text-brown">{repair.warranty}</div>
                    </div>
                    <div>
                      <span className="text-forest">Следующее ТО:</span>
                      <div className="font-semibold text-brown">{formatDate(repair.nextMaintenance)}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-6">
                  <Button variant="outline" size="sm">
                    <Icon name="FileText" className="w-4 h-4 mr-2" />
                    Скачать акт
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="RotateCcw" className="w-4 h-4 mr-2" />
                    Повторный ремонт
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Star" className="w-4 h-4 mr-2" />
                    Оставить отзыв
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

export default RepairHistory;