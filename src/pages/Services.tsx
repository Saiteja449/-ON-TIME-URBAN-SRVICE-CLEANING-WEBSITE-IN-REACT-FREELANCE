import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const services = [
  {
    title: 'Residential Cleaning',
    desc: 'Comprehensive cleaning for apartments and homes. We handle both furnished and unfurnished spaces with extreme care and precision.',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    features: ['Dusting & Vacuuming', 'Surface Sanitization', 'Trash Removal', 'Detail Hand Wiping']
  },
  {
    title: 'Move-in / Move-out',
    desc: 'Perfect for new interiors or clearing out. We extract accumulated dust and ensure the property is immaculately live-in ready.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    features: ['Post-construction dust', 'Cabinet interiors', 'Window & Track cleaning', 'Heavy floor scrubbing']
  },
  {
    title: 'Kitchen Deep Clean',
    desc: 'Intensive degreasing, sanitization, and detailing of your kitchen architecture, appliances, and hard-to-reach crevices.',
    img: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80&w=800',
    features: ['Appliance detailing', 'Complete degreasing', 'Sink restoration', 'Cabinet wipe down']
  },
  {
    title: 'Bathroom Sanitization',
    desc: 'A complete washroom overhaul targeting hard water stains, grout grime, ensuring absolute hygienic sanitization.',
    img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800',
    features: ['Toilet descale & sanitize', 'Shower glass treatment', 'Mirror polishing', 'Tile grout restoration']
  },
  {
    title: 'Floor & Tile Polish',
    desc: 'Industrial-grade floor scrubbing and careful polishing techniques to restore the original luster of your surface.',
    img: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&q=80&w=800',
    features: ['Machine scrubbing', 'Deep stain removal', 'Marble polishing', 'Grout line clearing']
  },
  {
    title: 'Office & Commercial',
    desc: 'Scheduled rotational cleaning services to maintain a pristine, sophisticated environment for employees and clients.',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800',
    features: ['Workstation sanitization', 'Pantry reset', 'Restroom maintenance', 'Carpet vacuuming']
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full ">
      <section className="bg-gray-900 pt-32 pb-24 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-gray-900 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Signature Services</h1>
            <p className="text-xl text-gray-400">Professional, rigorous, and flawlessly on time.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }
                }}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold tracking-tight text-white">{service.title}</h3>
                </div>
                
                <div className="p-8 flex-grow">
                  <p className="text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                  <Link to="/contact" className="w-full py-4 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-md">
                    Book Service <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
