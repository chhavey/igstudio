import Footer from "../components/Footer/Footer";
import Clients from "../pages/Clients/Clients";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import Introduction from "../pages/Introduction/Introduction";
import NewsLetter from "../pages/Newsletter/NewsLetter";
import Practices from "../pages/Practices/Practices";
import Team from "../pages/Team/Team";
import WhyUs from "../pages/WhyUs/WhyUs";

function LandingPage() {
  return (
    <div className="App">
      <Home />
      <Introduction />
      <WhyUs />
      <Practices />
      <Clients />
      <Team />
      <FAQ />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default LandingPage;
