import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import EventsFilter from "@/components/EventsFilter";
import EventsGrid from "@/components/EventsGrid";

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pb-20 md:pb-8">
        <EventsFilter />
        <EventsGrid />
      </main>
      <Navigation />
    </div>
  );
};

export default Events;
