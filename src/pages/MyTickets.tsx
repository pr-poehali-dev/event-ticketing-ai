import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import TicketsList from "@/components/TicketsList";

const MyTickets = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pb-20 md:pb-8">
        <TicketsList />
      </main>
      <Navigation />
    </div>
  );
};

export default MyTickets;
