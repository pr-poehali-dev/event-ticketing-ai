import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const EventsGrid = () => {
  const events = [
    {
      id: 1,
      title: "Концерт Imagine Dragons",
      date: "15 июля 2024",
      time: "19:00",
      location: "Олимпийский",
      price: "от 3 500 ₽",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
      category: "Музыка",
      isPopular: true,
    },
    {
      id: 2,
      title: "Web Summit 2024",
      date: "22 июля 2024",
      time: "10:00",
      location: "Экспоцентр",
      price: "от 15 000 ₽",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      category: "Конференции",
      isPopular: false,
    },
    {
      id: 3,
      title: "Спектакль «Гамлет»",
      date: "28 июля 2024",
      time: "19:30",
      location: "Большой театр",
      price: "от 2 000 ₽",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      category: "Театр",
      isPopular: true,
    },
    {
      id: 4,
      title: "Фестиваль электронной музыки",
      date: "5 августа 2024",
      time: "20:00",
      location: "Парк Горького",
      price: "от 2 500 ₽",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      category: "Музыка",
      isPopular: false,
    },
    {
      id: 5,
      title: "Выставка современного искусства",
      date: "12 августа 2024",
      time: "11:00",
      location: "Третьяковская галерея",
      price: "от 800 ₽",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "Искусство",
      isPopular: false,
    },
    {
      id: 6,
      title: "Чемпионат по киберспорту",
      date: "18 августа 2024",
      time: "14:00",
      location: "ВТБ Арена",
      price: "от 1 500 ₽",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      category: "Спорт",
      isPopular: true,
    },
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Все события</h1>
            <p className="text-gray-600">Найдено {events.length} событий</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Сортировка:</span>
            <Button variant="outline" size="sm">
              По дате
              <Icon name="ChevronDown" size={16} className="ml-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-gradient-to-r from-primary to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                  {event.isPopular && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Популярное
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-white/80 hover:bg-white p-2"
                  >
                    <Icon name="Heart" size={16} />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Icon name="Calendar" size={16} />
                    <span>
                      {event.date} в {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Icon name="MapPin" size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {event.price}
                  </span>
                  <Button className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90">
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Icon name="Plus" size={20} className="mr-2" />
            Загрузить ещё
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;
