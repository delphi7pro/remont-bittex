import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Calculator = () => {
  const [calculation, setCalculation] = useState({
    deviceType: "",
    brand: "",
    age: "",
    problem: "",
    urgency: false,
    weekend: false,
    outsideMKAD: false,
    distance: 0
  });

  const basePrices = {
    "refrigerator": { diagnostic: 500, repair: 2000 },
    "washing": { diagnostic: 500, repair: 1500 },
    "dishwasher": { diagnostic: 500, repair: 1800 },
    "microwave": { diagnostic: 300, repair: 800 },
    "oven": { diagnostic: 500, repair: 1400 }
  };

  const brandMultipliers = {
    "premium": 1.3,
    "standard": 1.0,
    "budget": 0.8
  };

  const ageMultipliers = {
    "new": 1.0,
    "medium": 1.2,
    "old": 1.5
  };

  const calculateCost = () => {
    if (!calculation.deviceType) return 0;

    const base = basePrices[calculation.deviceType];
    if (!base) return 0;

    let total = base.diagnostic + base.repair;

    // Brand multiplier
    if (calculation.brand) {
      total *= brandMultipliers[calculation.brand] || 1.0;
    }

    // Age multiplier
    if (calculation.age) {
      total *= ageMultipliers[calculation.age] || 1.0;
    }

    // Additional fees
    if (calculation.urgency) total += 1000;
    if (calculation.weekend) total *= 1.5;
    if (calculation.outsideMKAD) total += calculation.distance * 30;

    return Math.round(total);
  };

  const handleChange = (field: string, value: any) => {
    setCalculation(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-honey-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Calculator" className="w-8 h-8 text-honey" />
              <h1 className="text-2xl font-bold text-brown">Калькулятор стоимости</h1>
            </div>
            <Button onClick={() => window.history.back()} variant="outline">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Параметры ремонта</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Тип техники *</Label>
                  <Select value={calculation.deviceType} onValueChange={(value) => handleChange("deviceType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="refrigerator">Холодильник</SelectItem>
                      <SelectItem value="washing">Стиральная машина</SelectItem>
                      <SelectItem value="dishwasher">Посудомоечная машина</SelectItem>
                      <SelectItem value="microwave">Микроволновка</SelectItem>
                      <SelectItem value="oven">Духовой шкаф</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Категория бренда</Label>
                  <Select value={calculation.brand} onValueChange={(value) => handleChange("brand", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="premium">Премиум (Bosch, Siemens, Miele)</SelectItem>
                      <SelectItem value="standard">Стандарт (Samsung, LG, Electrolux)</SelectItem>
                      <SelectItem value="budget">Бюджет (Indesit, Beko, Candy)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Возраст техники</Label>
                  <Select value={calculation.age} onValueChange={(value) => handleChange("age", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите возраст" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">До 3 лет</SelectItem>
                      <SelectItem value="medium">3-7 лет</SelectItem>
                      <SelectItem value="old">Более 7 лет</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="urgency"
                      checked={calculation.urgency}
                      onCheckedChange={(checked) => handleChange("urgency", checked)}
                    />
                    <Label htmlFor="urgency">Срочный выезд (+1000 ₽)</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="weekend"
                      checked={calculation.weekend}
                      onCheckedChange={(checked) => handleChange("weekend", checked)}
                    />
                    <Label htmlFor="weekend">Выходной день (+50%)</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="outsideMKAD"
                      checked={calculation.outsideMKAD}
                      onCheckedChange={(checked) => handleChange("outsideMKAD", checked)}
                    />
                    <Label htmlFor="outsideMKAD">За МКАД</Label>
                  </div>

                  {calculation.outsideMKAD && (
                    <div className="ml-6">
                      <Label>Расстояние от МКАД (км)</Label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={calculation.distance}
                        onChange={(e) => handleChange("distance", parseInt(e.target.value) || 0)}
                        className="w-full p-2 border border-honey-light rounded-md"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Cost Breakdown */}
            <Card className="border-honey-light">
              <CardHeader>
                <CardTitle className="text-brown">Расчет стоимости</CardTitle>
              </CardHeader>
              <CardContent>
                {calculation.deviceType ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-forest">Диагностика:</span>
                        <span className="text-brown">{basePrices[calculation.deviceType]?.diagnostic || 0} ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-forest">Базовый ремонт:</span>
                        <span className="text-brown">{basePrices[calculation.deviceType]?.repair || 0} ₽</span>
                      </div>
                      
                      {calculation.urgency && (
                        <div className="flex justify-between text-red-600">
                          <span>Срочность:</span>
                          <span>+1000 ₽</span>
                        </div>
                      )}
                      
                      {calculation.weekend && (
                        <div className="flex justify-between text-red-600">
                          <span>Выходной день:</span>
                          <span>+50%</span>
                        </div>
                      )}
                      
                      {calculation.outsideMKAD && calculation.distance > 0 && (
                        <div className="flex justify-between text-red-600">
                          <span>Выезд за МКАД:</span>
                          <span>+{calculation.distance * 30} ₽</span>
                        </div>
                      )}
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-xl font-bold">
                      <span className="text-brown">Итого:</span>
                      <span className="text-honey">{calculateCost()} ₽</span>
                    </div>
                    
                    <div className="text-sm text-forest text-center">
                      * Окончательная стоимость определяется после диагностики
                    </div>
                    
                    <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                      <Icon name="Phone" className="w-4 h-4 mr-2" />
                      Вызвать мастера
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Icon name="Calculator" className="w-16 h-16 text-honey mx-auto mb-4" />
                    <p className="text-forest">Выберите тип техники для расчета стоимости</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;