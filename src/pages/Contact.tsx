import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import React, { useState } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="w-full">
      <section className="bg-gray-900 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Office Contact Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">Set your appointment today and return to a pristine space.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Get In Touch</h3>
                <p className="text-gray-600 mb-10 leading-relaxed">
                  Whether you need a massive deep clean or just want to schedule routine maintenance, our team is ready to deliver.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 tracking-tight">Direct Call</h4>
                      <p className="text-gray-500 mb-2 text-sm">For immediate scheduling.</p>
                      <a href="tel:+1234567890" className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors">+1 (234) 567-890</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 tracking-tight">Email Inquiries</h4>
                      <p className="text-gray-500 mb-2 text-sm">Responses within 24hr.</p>
                      <a href="mailto:hello@ontimecleaning.com" className="text-lg font-bold text-emerald-600 hover:text-emerald-700 transition-colors">hello@ontimecleaning.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 tracking-tight">Urban Office</h4>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        123 Premium Avenue<br />
                        Metro District, ST 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-3 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[4rem] flex items-start justify-end p-8 text-emerald-500 pointer-events-none">
                 <Send size={32} className="opacity-50" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8">Request a Quote</h2>
              
              {submitted ? (
                <div className="h-64 flex flex-col items-center justify-center text-center py-10">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">Request Received!</h3>
                  <p className="text-gray-600 max-w-sm">We'll review your details and contact you shortly with a personalized quote.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-2 rounded-full border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-3">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-3">Required Service</label>
                    <select 
                      id="service"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option>Apartment Cleaning</option>
                      <option>Move-in / Move-out</option>
                      <option>Kitchen Deep Clean</option>
                      <option>Bathroom Sanitization</option>
                      <option>Floor & Tile Restoration</option>
                      <option>Office & Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">Extra Details (Optional)</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
                      placeholder="Describe the square footage or any specific requests..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-5 rounded-2xl bg-gray-900 text-white font-bold text-lg hover:bg-black transition-all disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg"
                  >
                    {isSubmitting ? 'Processing...' : 'Send Request'}
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
