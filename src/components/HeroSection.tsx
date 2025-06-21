import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-pink-500 to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Открой мир
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              невероятных событий
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            ИИ подберёт идеальные мероприятия специально для тебя. Концерты,
            конференции, спектакли — всё в одном месте!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/events">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
              >
                <Icon name="Search" size={20} className="mr-2" />
                Найти события
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              <Icon name="Sparkles" size={20} className="mr-2" />
              ИИ рекомендации
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1000+ событий</h3>
              <p className="text-white/80">Каждый день новые мероприятия</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">50k+ пользователей</h3>
              <p className="text-white/80">Присоединяйся к сообществу</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4.9★ рейтинг</h3>
              <p className="text-white/80">Лучшие отзывы пользователей</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
