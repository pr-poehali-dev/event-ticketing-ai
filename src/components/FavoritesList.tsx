import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([
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
      dateAdded: "2 дня назад",
    },
    {
      id: 2,
      title: "Спектакль «Гамлет»",
      date: "28 июля 2024",
      time: "19:30",
      location: "Большой театр",
      price: "от 2 000 ₽",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      category: "Театр",
      dateAdded: "5 дней назад",
    },
    {
      id: 3,
      title: "Джазовый фестиваль",
      date: "2 августа 2024",
      time: "18:00",
      location: "Музеон",
      price: "от 1 800 ₽",
      image:
        "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=300&fit=crop",
      category: "Музыка",
      dateAdded: "1 неделю назад",
    },
  ]);

  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Избранные события
          </h1>
          <p className="text-gray-600">
            У вас {favorites.length} избранных события
          </p>
        </div>

        {favorites.length > 0 ? (
          <div className="space-y-6">
            {favorites.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {event.title}
                          </h3>
                          <span className="inline-block bg-gradient-to-r from-primary to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {event.category}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {event.price}
                          </div>
                          <div className="text-sm text-gray-600">
                            Добавлено {event.dateAdded}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Icon name="Calendar" size={16} />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Icon name="Clock" size={16} />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Icon name="MapPin" size={16} />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90">
                          <Icon name="Ticket" size={16} className="mr-2" />
                          Купить билет
                        </Button>
                        <Button variant="outline">
                          <Icon name="Share" size={16} className="mr-2" />
                          Поделиться
                        </Button>
                        <Button
                          variant="outline"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => removeFromFavorites(event.id)}
                        >
                          <Icon name="Heart" size={16} className="mr-2" />
                          Удалить из избранного
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Icon
              name="Heart"
              size={64}
              className="mx-auto text-gray-400 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              У вас пока нет избранных событий
            </h3>
            <p className="text-gray-600 mb-6">
              Добавляйте события в избранное, чтобы не потерять их
            </p>
            <Button className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90">
              <Icon name="Plus" size={16} className="mr-2" />
              Найти события
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FavoritesList;
