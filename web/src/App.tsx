import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import Ranking from './components/Ranking';
import Projects from './components/Projects';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#146131',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Ranking />
        <Projects />
        {/* <Team /> */}
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
