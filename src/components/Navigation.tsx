import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: "Home", label: "Главная" },
    { path: "/events", icon: "Calendar", label: "Мероприятия" },
    { path: "/tickets", icon: "Ticket", label: "Билеты" },
    { path: "/favorites", icon: "Heart", label: "Избранное" },
    { path: "/profile", icon: "User", label: "Профиль" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-50 md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "text-orange-500 bg-orange-500/10 scale-105"
                  : "text-gray-400 hover:text-orange-500 hover:bg-orange-500/5"
              }`}
            >
              <Icon
                name={item.icon}
                size={20}
                className={isActive ? "text-orange-500" : ""}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
