import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-pink-500 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              EventHub
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/events"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Мероприятия
            </Link>
            <Link
              to="/tickets"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Мои билеты
            </Link>
            <Link
              to="/favorites"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Избранное
            </Link>
            <Link
              to="/profile"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Профиль
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Icon
              name="Bell"
              size={20}
              className="text-gray-600 hover:text-primary cursor-pointer transition-colors"
            />
            <Icon
              name="Search"
              size={20}
              className="text-gray-600 hover:text-primary cursor-pointer transition-colors"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
