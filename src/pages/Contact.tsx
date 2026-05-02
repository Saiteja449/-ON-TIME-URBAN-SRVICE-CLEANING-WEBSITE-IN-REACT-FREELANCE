import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowRight, Clock, Shield } from 'lucide-react';
import { useState } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 1500);
  };

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
            Get In Touch
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black max-w-4xl mx-auto mb-8 leading-tight tracking-tighter"
          >
            Let's Talk About Your<br /><span className="text-homepro-blue italic">Home Improvement.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/60 text-xl max-w-2xl mx-auto font-medium"
          >
            Our concierge team is ready to assist you with bespoke maintenance solutions.
          </motion.p>
        </div>
      </section>

      {/* 2. Contact Form & Info */}
      <section className="py-24 bg-white relative -mt-32 z-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-homepro-navy text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-homepro-blue/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-3xl font-black mb-8 tracking-tighter uppercase">Concierge</h3>
                <div className="space-y-10 relative z-10">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 text-homepro-blue flex items-center justify-center shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">Call Us Now</p>
                      <a href="tel:+1234567890" className="text-2xl font-black hover:text-homepro-blue transition-colors">+1 (234) 567 890</a>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 text-homepro-blue flex items-center justify-center shrink-0">
                      <Mail size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">Email Us</p>
                      <a href="mailto:hello@ontime.com" className="text-2xl font-black hover:text-homepro-blue transition-colors">hello@ontime.com</a>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 text-homepro-blue flex items-center justify-center shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">Visit Office</p>
                      <p className="text-2xl font-black">123 Urban Ave, Metro City</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-homepro-light p-8 rounded-[2.5rem] border border-gray-100">
                  <Clock size={32} className="text-homepro-blue mb-4" />
                  <h4 className="font-black text-homepro-navy mb-1 uppercase tracking-tighter">Response Time</h4>
                  <p className="text-sm text-gray-500 font-medium">Under 60 Minutes</p>
                </div>
                <div className="bg-homepro-light p-8 rounded-[2.5rem] border border-gray-100">
                  <Shield size={32} className="text-homepro-blue mb-4" />
                  <h4 className="font-black text-homepro-navy mb-1 uppercase tracking-tighter">Fully Insured</h4>
                  <p className="text-sm text-gray-500 font-medium">Peace of Mind</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white p-10 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-50"
              >
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-homepro-navy uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe"
                        className="w-full bg-homepro-light border-2 border-transparent px-8 py-5 rounded-2xl font-bold text-homepro-navy focus:border-homepro-blue focus:bg-white outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-homepro-navy uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@example.com"
                        className="w-full bg-homepro-light border-2 border-transparent px-8 py-5 rounded-2xl font-bold text-homepro-navy focus:border-homepro-blue focus:bg-white outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-homepro-navy uppercase tracking-widest ml-1">Service Type</label>
                    <select className="w-full bg-homepro-light border-2 border-transparent px-8 py-5 rounded-2xl font-bold text-homepro-navy focus:border-homepro-blue focus:bg-white outline-none transition-all appearance-none">
                      <option>Electrical Repair</option>
                      <option>Plumbing Service</option>
                      <option>HVAC Maintenance</option>
                      <option>House Cleaning</option>
                      <option>Other Service</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-homepro-navy uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      rows={4} 
                      required 
                      placeholder="How can we help you today?"
                      className="w-full bg-homepro-light border-2 border-transparent px-8 py-5 rounded-2xl font-bold text-homepro-navy focus:border-homepro-blue focus:bg-white outline-none transition-all placeholder:text-gray-300 resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={formState !== 'idle'}
                    className="btn-primary w-full py-6 text-xl rounded-2xl shadow-xl shadow-homepro-blue/20"
                  >
                    {formState === 'idle' && <><span>Send Inquiry</span> <ArrowRight size={24} /></>}
                    {formState === 'sending' && <span>Processing...</span>}
                    {formState === 'sent' && <span>Inquiry Sent Successfully!</span>}
                  </button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
