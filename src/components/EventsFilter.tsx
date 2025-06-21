import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const EventsFilter = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все", icon: "Grid3x3" },
    { id: "music", name: "Музыка", icon: "Music" },
    { id: "conferences", name: "Конференции", icon: "Users" },
    { id: "theater", name: "Театр", icon: "Drama" },
    { id: "sports", name: "Спорт", icon: "Trophy" },
    { id: "art", name: "Искусство", icon: "Palette" },
  ];

  return (
    <section className="bg-white border-b border-gray-200 sticky top-16 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                placeholder="Поиск событий..."
                className="pl-10 h-12 border-gray-300 focus:border-primary"
              />
            </div>
            <Button variant="outline" className="h-12 px-6">
              <Icon name="Filter" size={20} className="mr-2" />
              Фильтры
            </Button>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`flex items-center gap-2 whitespace-nowrap h-10 px-4 ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "hover:bg-primary/10 hover:text-primary"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <Icon name={category.icon} size={16} />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsFilter;
