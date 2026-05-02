import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Clock, Users, Leaf, DollarSign } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Premium Split Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-20 right-0 -mr-20 w-72 h-72 rounded-full bg-blue-100 mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-emerald-100 mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="lg:w-1/2"
            >
              <motion.div variants={fadeIn} className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white shadow-sm border border-emerald-100 text-emerald-700 font-semibold tracking-wide text-xs md:text-sm uppercase">
                ✨ Top Rated Cleaning Service
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Clean Spaces.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                  Better Places.
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Professional urban cleaning services tailored to your lifestyle. We bring the sparkle back to your home and office—on time, every time.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4">
                <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-900 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-black transition-all hover:-translate-y-1 sm:min-w-[200px] flex items-center justify-center gap-2">
                  Book Now <ArrowRight size={20} />
                </Link>
                <a href="tel:+1234567890" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold text-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-all hover:-translate-y-1 sm:min-w-[200px] flex items-center justify-center">
                  Call Now
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000" 
                  alt="Spotless Modern Living Room" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 leading-tight">4.9/5</p>
                  <p className="text-sm text-gray-500">From 500+ Reviews</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services with Images */}
      <section className="py-24 bg-gray-50 border-t border-gray-200/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Premium Services</h2>
            <p className="text-lg text-gray-600">Meticulous cleaning tailored to the highest standards.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: 'Apartment Cleaning', desc: '1BHK to 4BHK. Flawless detailing for your living spaces.', img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" },
              { title: 'Move-in / Move-out', desc: 'Deep cleaning before you move in or after you leave.', img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800" },
              { title: 'Office Cleaning', desc: 'Maintain a productive and hygienic workspace.', img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800" },
            ].map((service, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
              >
                <div className="h-60 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white tracking-tight">{service.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-lg">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    Learn more <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-block px-8 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 font-semibold shadow-sm hover:bg-gray-50 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Integrated Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:w-5/12 relative order-2 lg:order-1"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-2xl relative aspect-[3/4]">
                 <img 
                   src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
                   alt="Professional Cleaning Supplies" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gray-900/10 mix-blend-multiply"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:w-7/12 order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Why Urban Spaces Trust Us</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">We aren't just another cleaning company. We are a team of dedicated professionals committed to punctuality, perfection, and making your space truly immaculate.</p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Clock, title: 'On-Time Guarantee', desc: 'We value your schedule. Precision arrival times.' },
                  { icon: Users, title: 'Trained Pros', desc: 'Thoroughly vetted and expertly trained staff.' },
                  { icon: Leaf, title: 'Eco-Friendly', desc: 'Safe products for your family and pets.' },
                  { icon: DollarSign, title: 'Clear Pricing', desc: 'No hidden fees, complete transparency.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1 tracking-tight">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900 text-white border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
           <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl tracking-tight font-bold mb-4">Client Experiences</h2>
          </motion.div>

          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: "Sarah J.", text: "Absolutely incredible service! The team showed up exactly on time and my apartment looks brand new.", role: "Apartment Owner", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200" },
              { name: "Michael T.", text: "We use On Time for our startup office. They are unobtrusive, fast, and highly professional.", role: "Office Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" },
              { name: "Priya R.", text: "The deep kitchen clean was worth every penny. Will definitely be booking them regularly now.", role: "Homeowner", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200" }
            ].map((testimonial, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="bg-gray-800/50 rounded-[2rem] p-8 border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="flex gap-1 text-emerald-400 mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-gray-600" />
                  <div>
                    <h4 className="font-bold tracking-tight text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-gray-900 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-gray-900 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl tracking-tight font-bold text-white mb-6">Experience the Difference</h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Book your premium cleaning service in under 60 seconds and come back to a spotless space.</p>
              <Link to="/contact" className="px-10 py-5 rounded-full bg-emerald-500 text-white font-bold text-lg shadow-lg hover:shadow-emerald-500/30 hover:bg-emerald-400 transition-all hover:-translate-y-1 inline-flex items-center gap-2">
                Get a Free Quote <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
