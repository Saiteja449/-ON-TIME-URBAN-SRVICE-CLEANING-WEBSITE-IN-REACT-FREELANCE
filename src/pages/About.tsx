import { motion } from 'motion/react';
import { Shield, Target, Heart, CheckCircle, Clock, Star, Users } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
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
            Our Philosophy
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black max-w-4xl mx-auto mb-8 leading-tight tracking-tighter"
          >
            Punctuality. Precision.<br /><span className="text-homepro-blue italic">Perfect Results.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/60 text-xl max-w-2xl mx-auto font-medium"
          >
            We've built ON TIME to serve the high-stakes environment of metropolitan life, where every detail matters.
          </motion.p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-40 left-0 hidden xl:block w-64 h-[400px] rounded-r-[100px] overflow-hidden border-r-8 border-white/10 opacity-50">
          <img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800" alt="Detail" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* 2. Content Section */}
      <section className="py-24 bg-white relative -mt-32 z-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="house-clip overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=1200" alt="Expert" className="w-full aspect-[4/5] object-cover" />
            </div>
            <div className="absolute -z-10 top-10 right-10 w-full h-full bg-homepro-blue/10 house-clip"></div>
          </div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-black text-homepro-navy mb-8 leading-tight">
              A New Era of<br />Urban Reliability
            </h2>
            <div className="space-y-6 text-lg text-gray-500 font-medium leading-relaxed">
              <p>
                Born from the frustration of unpredictable services, ON TIME was established with a singular mission: to provide experiences that urban professionals can definitively rely on.
              </p>
              <p>
                We combine industrial precision with hospitality-grade care to transform your space into a pristine sanctuary. Our name is our guarantee.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              {[
                { title: 'Vetted Specialists', icon: Users },
                { title: 'Eco-Friendly Tech', icon: Heart }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-homepro-light text-homepro-blue flex items-center justify-center">
                    <item.icon size={24} />
                  </div>
                  <span className="font-black text-homepro-navy uppercase tracking-tighter">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Values Grid */}
      <section className="py-32 bg-homepro-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Our Mission", 
                icon: Target, 
                desc: "To deliver flawless, hygienic, and perfectly timed operations that elevate the standard of living."
              },
              { 
                title: "Our Vision", 
                icon: Shield, 
                desc: "To establish ourselves as the unequivocal benchmark in urban space management through consistency."
              },
              { 
                title: "Core Trust", 
                icon: CheckCircle, 
                desc: "Transparency in pricing and operations is at the heart of everything we do. No surprises, just excellence."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-white group"
              >
                <div className="w-20 h-20 rounded-3xl bg-homepro-navy text-white flex items-center justify-center mb-10 group-hover:bg-homepro-blue transition-colors">
                  <item.icon size={36} />
                </div>
                <h3 className="text-3xl font-black text-homepro-navy mb-6 tracking-tighter leading-none">{item.title}</h3>
                <p className="text-lg text-gray-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats bar */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-homepro-navy rounded-[4rem] p-12 md:p-20 flex flex-wrap justify-between gap-12 text-white satisfaction-shape">
            {[
              { num: '2000+', label: 'Happy Clients' },
              { num: '100%', label: 'On Time Rate' },
              { num: '15+', label: 'Years Experience' },
              { num: '4.9/5', label: 'Review Score' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start">
                <span className="text-5xl font-black text-homepro-blue mb-2 leading-none">{stat.num}</span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
