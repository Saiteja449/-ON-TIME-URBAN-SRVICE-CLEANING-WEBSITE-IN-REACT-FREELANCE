import { motion } from 'motion/react';
import { Target, Heart, CheckCircle } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=2000" 
            alt="Professional cleaner wiping a surface" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">Elevating Urban Standards</h1>
            <p className="text-xl text-gray-300">Bringing perfection and punctuality to every corner of your space.</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">A New Era of Reliability</h2>
              <div className="w-20 h-1 bg-emerald-500 mb-8 rounded-full"></div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Born from the frustration of unpredictable services, ON TIME was established with a singular mission: to provide cleaning experiences that urban professionals can definitively rely on. 
                </p>
                <p>
                  We recognize that in a fast-paced environment, your time is your ultimate luxury. Our name serves as our unwavering guarantee. When we confirm an appointment, our arrival is precise, and our executed work is impeccable.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Vetted, experienced cleaning specialists",
                    "Premium eco-friendly supplies",
                    "Rigorous quality assurance checks"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-gray-800">
                      <CheckCircle className="text-emerald-500" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
                alt="Cleaning arrangement" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/60 to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-full text-white">
                  <span className="text-4xl font-bold mb-1 block tracking-tight text-emerald-400">5+</span>
                  <span className="text-sm uppercase tracking-wider font-semibold">Years of Excellence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Our Mission", icon: Target, text: "To deliver flawless, hygienic, and perfectly timed cleaning operations that elevate the standard of living for our metropolitan clients." },
              { title: "Our Vision", icon: Heart, text: "To establish ourselves as the unequivocal benchmark in urban space management, guaranteeing peace of mind through unwavering consistency." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
                }}
                className="bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
