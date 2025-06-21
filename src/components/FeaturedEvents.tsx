import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const FeaturedEvents = () => {
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
      isFeatured: true,
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
      isFeatured: true,
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
      isFeatured: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Популярные события
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Самые горячие билеты этого месяца. Не упусти шанс!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group bg-gray-800 border-gray-700"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-black/50 hover:bg-black/70 p-2 text-white"
                  >
                    <Icon name="Heart" size={16} />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Icon name="Calendar" size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Icon name="Clock" size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Icon name="MapPin" size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">
                    {event.price}
                  </span>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black">
                    Купить билет
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/events">
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
            >
              <Icon name="Plus" size={20} className="mr-2" />
              Посмотреть все события
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
