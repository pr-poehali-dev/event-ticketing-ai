import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AIRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: "Джазовый фестиваль",
      reason: "Основано на ваших предпочтениях в музыке",
      confidence: 95,
      image:
        "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=300&h=200&fit=crop",
      date: "2 августа",
      price: "от 1 800 ₽",
    },
    {
      id: 2,
      title: "Стендап Comedy Club",
      reason: "Вы часто посещаете комедийные шоу",
      confidence: 88,
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop",
      date: "5 августа",
      price: "от 1 200 ₽",
    },
    {
      id: 3,
      title: "IT-конференция DevOps",
      reason: "Соответствует вашим профессиональным интересам",
      confidence: 92,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
      date: "8 августа",
      price: "от 8 000 ₽",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" size={32} className="text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              ИИ рекомендует
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Наш алгоритм проанализировал ваши предпочтения и подобрал идеальные
            события
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {recommendations.map((rec) => (
            <Card
              key={rec.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-primary/20"
            >
              <div className="relative">
                <img
                  src={rec.image}
                  alt={rec.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-primary to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {rec.confidence}% совпадение
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {rec.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Brain" size={16} className="text-primary" />
                  <p className="text-sm text-gray-600">{rec.reason}</p>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">{rec.date}</span>
                  <span className="text-lg font-bold text-primary">
                    {rec.price}
                  </span>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90">
                  <Icon name="Zap" size={16} className="mr-2" />
                  Заинтересован
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90"
          >
            <Icon name="Settings" size={20} className="mr-2" />
            Настроить предпочтения
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIRecommendations;
