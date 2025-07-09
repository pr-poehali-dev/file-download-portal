import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const popularFiles = [
    {
      id: 1,
      title: "Creative Design Pack",
      description: "Коллекция шаблонов для дизайнеров",
      downloads: 1547,
      size: "125 MB",
      type: "ZIP",
      featured: true,
    },
    {
      id: 2,
      title: "Developer Tools 2024",
      description: "Набор утилит для разработчиков",
      downloads: 892,
      size: "89 MB",
      type: "EXE",
      featured: false,
    },
    {
      id: 3,
      title: "Font Collection Pro",
      description: "500+ премиальных шрифтов",
      downloads: 2341,
      size: "67 MB",
      type: "ZIP",
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center text-white mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <Icon
              name="Rocket"
              size={80}
              className="text-white animate-float"
            />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Космический Хаб Файлов
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Скачивайте файлы мгновенно! Регистрация ускоряет загрузку, но не
            обязательна для старта 🚀
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all"
            >
              <Icon name="LogIn" size={20} className="mr-2" />
              Войти через Google
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-full border-2 hover:scale-105 transition-all"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать без регистрации
            </Button>
          </div>
        </div>

        {/* Popular Downloads */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            🔥 Популярные загрузки
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularFiles.map((file, index) => (
              <Card
                key={file.id}
                className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="bg-white/20 rounded-lg p-3 mb-3 group-hover:bg-white/30 transition-colors">
                      <Icon name="FileDown" size={24} className="text-white" />
                    </div>
                    {file.featured && (
                      <Badge className="bg-secondary text-white border-0 animate-pulse-slow">
                        TOP
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-white text-lg">
                    {file.title}
                  </CardTitle>
                  <CardDescription className="text-gray-200">
                    {file.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-300">
                    <span className="flex items-center gap-1">
                      <Icon name="Download" size={14} />
                      {file.downloads.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="HardDrive" size={14} />
                      {file.size}
                    </span>
                    <Badge
                      variant="outline"
                      className="border-white/40 text-white text-xs"
                    >
                      {file.type}
                    </Badge>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/80 text-white font-semibold rounded-full hover:scale-105 transition-all">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать файл
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 text-center text-white">
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-lg">
              <Icon name="Zap" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Мгновенная скорость</h3>
            <p className="text-gray-200">
              Скачивайте файлы на максимальной скорости
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-lg">
              <Icon name="Shield" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">100% безопасность</h3>
            <p className="text-gray-200">Все файлы проверены и защищены</p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-lg">
              <Icon name="Users" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Сообщество</h3>
            <p className="text-gray-200">
              Присоединяйтесь к миллионам пользователей
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
