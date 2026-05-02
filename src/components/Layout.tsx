import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Results', path: '/results' },
    { name: 'Services', path: '/services' },
    { name: 'Review', path: '/review' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans bg-white">
      {/* HomePro Style Navbar */}
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
          isScrolled 
            ? 'bg-homepro-navy/95 backdrop-blur-md py-4 shadow-lg' 
            : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-homepro-blue rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-homepro-blue/20">
              H
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white leading-none">HomePro</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-homepro-blue uppercase leading-none">Maintenance</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-bold text-white/80 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-homepro-blue transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
            <Link
              to="/contact"
              className="bg-homepro-blue text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-homepro-blue/90 transition-all flex items-center gap-2 shadow-lg shadow-homepro-blue/20"
            >
              Get a free quote <ArrowRightIcon size={16} />
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[150] bg-homepro-navy p-6 flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-black text-white tracking-tighter">HomePro</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-3 rounded-xl bg-white/10 text-white"><X /></button>
            </div>
            
            <nav className="flex flex-col gap-6">
              {navLinks.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="text-4xl font-black text-white hover:text-homepro-blue transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-8 bg-homepro-blue text-white p-6 rounded-2xl font-black text-xl text-center shadow-xl"
              >
                Get a free quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

function ArrowRightIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
}
