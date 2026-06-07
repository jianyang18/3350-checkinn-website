import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Overview from "./components/Overview.jsx";
import Demo from "./components/Demo.jsx";
import Architecture from "./components/Architecture.jsx";
import Reflection from "./components/Reflection.jsx";
import Team from "./components/Team.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Overview />
        <Demo />
        <Architecture />
        <Reflection />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
