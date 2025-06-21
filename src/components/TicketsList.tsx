import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TicketsList = () => {
  const tickets = [
    {
      id: 1,
      eventTitle: "Концерт Imagine Dragons",
      date: "15 июля 2024",
      time: "19:00",
      location: "Олимпийский",
      seat: "Сектор A, ряд 5, место 12",
      price: "3 500 ₽",
      status: "active",
      qrCode: "QR123456789",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=200&fit=crop",
    },
    {
      id: 2,
      eventTitle: "Web Summit 2024",
      date: "22 июля 2024",
      time: "10:00",
      location: "Экспоцентр",
      seat: "Общий доступ",
      price: "15 000 ₽",
      status: "upcoming",
      qrCode: "QR987654321",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop",
    },
    {
      id: 3,
      eventTitle: "Спектакль «Гамлет»",
      date: "28 июня 2024",
      time: "19:30",
      location: "Большой театр",
      seat: "Партер, ряд 3, место 8",
      price: "2 000 ₽",
      status: "used",
      qrCode: "QR456789123",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
    },
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "active":
        return {
          text: "Активный",
          color: "bg-green-500",
          textColor: "text-green-700",
        };
      case "upcoming":
        return {
          text: "Предстоящий",
          color: "bg-blue-500",
          textColor: "text-blue-700",
        };
      case "used":
        return {
          text: "Использован",
          color: "bg-gray-500",
          textColor: "text-gray-700",
        };
      default:
        return {
          text: "Неизвестно",
          color: "bg-gray-500",
          textColor: "text-gray-700",
        };
    }
  };

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Мои билеты
          </h1>
          <p className="text-gray-600">У вас {tickets.length} билета</p>
        </div>

        <div className="space-y-6">
          {tickets.map((ticket) => {
            const statusInfo = getStatusInfo(ticket.status);
            return (
              <Card
                key={ticket.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={ticket.image}
                      alt={ticket.eventTitle}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {ticket.eventTitle}
                          </h3>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color} text-white`}
                          >
                            {statusInfo.text}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {ticket.price}
                          </div>
                          <div className="text-sm text-gray-600">
                            #{ticket.id.toString().padStart(6, "0")}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Icon name="Calendar" size={16} />
                            <span>{ticket.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Icon name="Clock" size={16} />
                            <span>{ticket.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Icon name="MapPin" size={16} />
                            <span>{ticket.location}</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Icon name="Armchair" size={16} />
                            <span>{ticket.seat}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Icon name="QrCode" size={16} />
                            <span>{ticket.qrCode}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        {ticket.status === "active" && (
                          <Button className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90">
                            <Icon name="QrCode" size={16} className="mr-2" />
                            Показать QR-код
                          </Button>
                        )}
                        <Button variant="outline">
                          <Icon name="Download" size={16} className="mr-2" />
                          Скачать билет
                        </Button>
                        <Button variant="outline">
                          <Icon name="Share" size={16} className="mr-2" />
                          Поделиться
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {tickets.length === 0 && (
          <div className="text-center py-16">
            <Icon
              name="Ticket"
              size={64}
              className="mx-auto text-gray-400 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              У вас пока нет билетов
            </h3>
            <p className="text-gray-600 mb-6">
              Купите билеты на интересные события
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

export default TicketsList;
