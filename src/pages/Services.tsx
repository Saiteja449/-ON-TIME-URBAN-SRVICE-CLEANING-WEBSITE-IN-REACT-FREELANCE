import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Wrench, 
  Droplets, 
  Paintbrush, 
  Settings, 
  Shield, 
  Clock, 
  Sparkles,
  Zap,
  Hammer
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const serviceList = [
  {
    title: 'Electrical Repair',
    desc: 'Expert solutions for all electrical issues, from wiring to lighting installation.',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
    icon: Zap
  },
  {
    title: 'Plumbing Service',
    desc: 'Professional plumbing repairs, leak detection, and fixture installation.',
    img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800',
    icon: Droplets
  },
  {
    title: 'HVAC Maintenance',
    desc: 'Comprehensive air conditioning and heating system repairs and tuning.',
    img: 'https://images.unsplash.com/photo-1517646288021-22ed2f2bb2a0?auto=format&fit=crop&q=80&w=800',
    icon: Settings
  },
  {
    title: 'House Cleaning',
    desc: 'Bespoke residential cleaning services for homes of all sizes.',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800',
    icon: Sparkles
  },
  {
    title: 'Painting Service',
    desc: 'Interior and exterior painting with premium finishes and attention to detail.',
    img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800',
    icon: Paintbrush
  },
  {
    title: 'Roofing Service',
    desc: 'Durable roofing solutions, including repairs, replacements, and inspections.',
    img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800',
    icon: Hammer
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-white font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative bg-homepro-navy text-white pt-48 pb-60 hero-curve overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-homepro-blue font-bold tracking-widest uppercase mb-4"
          >
            Our Expertise
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black max-w-4xl mx-auto mb-8 leading-tight tracking-tighter"
          >
            Comprehensive Care<br />For Your <span className="text-homepro-blue italic">Sanctuary.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/60 text-xl max-w-2xl mx-auto font-medium"
          >
            From electrical repairs to deep cleaning, we provide high-quality maintenance for every urban need.
          </motion.p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-24 bg-white relative -mt-32 z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {serviceList.map((service, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col h-full"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-homepro-navy/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 rounded-2xl bg-homepro-blue text-white flex items-center justify-center shadow-lg">
                      <service.icon size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-homepro-navy mb-4 tracking-tighter leading-none">{service.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <div className="mt-auto">
                    <Link to="/contact" className="inline-flex items-center gap-3 font-black text-homepro-navy group-hover:text-homepro-blue transition-all uppercase text-xs tracking-widest">
                      Inquire Now <div className="w-8 h-8 rounded-full bg-homepro-light flex items-center justify-center group-hover:bg-homepro-blue group-hover:text-white transition-all"><ArrowRight size={14} /></div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="py-32 bg-homepro-light">
        <div className="container mx-auto px-4">
          <div className="bg-homepro-navy text-white rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden satisfaction-shape shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tighter max-w-3xl mx-auto">
              Ready to restore your space to perfection?
            </h2>
            <Link to="/contact" className="btn-primary w-fit mx-auto">
              Get Started Now <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
