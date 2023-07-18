import Header from "./components/navigation/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/features";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import Prices from "./components/prices/Prices";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto relative">
      <Header />
      <Hero />
      <Features />
      <Blog />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;
