import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import FavoritesList from "@/components/FavoritesList";

const Favorites = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pb-20 md:pb-8">
        <FavoritesList />
      </main>
      <Navigation />
    </div>
  );
};

export default Favorites;
