import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickCategories from './components/QuickCategories';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import BrowseProfiles from './components/BrowseProfiles';
import SuccessStories from './components/SuccessStories';
import FAQ from './components/FAQ';
import RegisterBanner from './components/RegisterBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", margin: 0, padding: 0 }}>
      <Navbar />
      <Hero />
      <QuickCategories />
      <WhyChooseUs />
      <HowItWorks />
      <BrowseProfiles />
      <SuccessStories />
      <FAQ />
      <RegisterBanner />
      <Footer />
    </div>
  );
}

export default App;
