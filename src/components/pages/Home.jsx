import Navbar from "../Layout/Navbar";
import Hero from "../Layout/Hero";
import WeeklyMessage from "../home/WeeklyMessage";
import EventsList from "../home/EventsLists";
import Ministries from "../home/Ministries";
import NextStepCTA from "../home/NextStepCTA";
import Footer from "../Layout/Footer";

function Home() {
  return (
    <>
      <Hero />
      <WeeklyMessage />
      <EventsList />
      <Ministries />
      <NextStepCTA />
    </>
  );
}

export default Home;