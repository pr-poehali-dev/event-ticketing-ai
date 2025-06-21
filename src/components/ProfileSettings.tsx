import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";

const ProfileSettings = () => {
  const preferences = [
    { id: "music", name: "Музыка", icon: "Music", enabled: true },
    { id: "conferences", name: "Конференции", icon: "Users", enabled: true },
    { id: "theater", name: "Театр", icon: "Drama", enabled: false },
    { id: "sports", name: "Спорт", icon: "Trophy", enabled: true },
    { id: "art", name: "Искусство", icon: "Palette", enabled: false },
    { id: "comedy", name: "Комедия", icon: "Smile", enabled: true },
  ];

  const notifications = [
    { id: "email", name: "Email уведомления", enabled: true },
    { id: "push", name: "Push уведомления", enabled: true },
    { id: "sms", name: "SMS уведомления", enabled: false },
    { id: "recommendations", name: "ИИ рекомендации", enabled: true },
  ];

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Профиль
          </h1>
          <p className="text-gray-600">
            Управляйте своими настройками и предпочтениями
          </p>
        </div>

        <div className="space-y-6">
          {/* Личная информация */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="User" size={20} />
                Личная информация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-pink-500 rounded-full flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Алексей Петров</h3>
                  <p className="text-gray-600">alexey.petrov@example.com</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Изменить фото
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Имя</Label>
                  <Input id="firstName" defaultValue="Алексей" />
                </div>
                <div>
                  <Label htmlFor="lastName">Фамилия</Label>
                  <Input id="lastName" defaultValue="Петров" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="alexey.petrov@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" defaultValue="+7 (999) 123-45-67" />
                </div>
              </div>

              <Button className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90">
                Сохранить изменения
              </Button>
            </CardContent>
          </Card>

          {/* Предпочтения для ИИ */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Brain" size={20} />
                Предпочтения для ИИ рекомендаций
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Выберите категории событий, которые вас интересуют. ИИ будет
                использовать эти данные для персональных рекомендаций.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {preferences.map((pref) => (
                  <div
                    key={pref.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        name={pref.icon}
                        size={20}
                        className="text-primary"
                      />
                      <span className="font-medium">{pref.name}</span>
                    </div>
                    <Switch defaultChecked={pref.enabled} />
                  </div>
                ))}
              </div>

              <Button className="mt-6 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Обновить рекомендации
              </Button>
            </CardContent>
          </Card>

          {/* Уведомления */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Bell" size={20} />
                Уведомления
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium">{notif.name}</span>
                    <Switch defaultChecked={notif.enabled} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Статистика */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BarChart3" size={20} />
                Моя статистика
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-pink-500/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">12</div>
                  <div className="text-gray-600">Купленных билетов</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    5
                  </div>
                  <div className="text-gray-600">Избранных событий</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg">
                  <div className="text-3xl font-bold text-green-500 mb-2">
                    8
                  </div>
                  <div className="text-gray-600">Посещённых событий</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfileSettings;
