import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  Users,
  Wrench,
  Hammer,
  Paintbrush,
  Droplets,
  Settings,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Shield,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden font-sans">
      {/* 1. Hero Section */}
      <section className="relative bg-homepro-navy text-white pt-32 pb-60 hero-curve">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-homepro-blue font-bold tracking-widest uppercase mb-4"
          >
            Hello! We are HomePro Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black max-w-4xl mx-auto mb-8 leading-tight"
          >
            Need improvement or repair your home? we can help!
          </motion.h1>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex justify-center mb-16"
          >
            <Link to="/contact" className="btn-primary">
              Get a free quote <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Feature highlights below hero text */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: CheckCircle, text: "Certified Technicians" },
              { icon: Clock, text: "24/7 Service Available" },
              { icon: Star, text: "Guaranteed Satisfaction" },
              { icon: Wrench, text: "Modern Equipment" },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-homepro-blue">
                  <f.icon size={24} />
                </div>
                <span className="text-sm font-bold uppercase tracking-tighter opacity-80">
                  {f.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Side Images (Arched) */}
        <div className="absolute top-40 left-0 hidden xl:block w-72 h-[500px] rounded-r-[100px] overflow-hidden border-r-8 border-white/10">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800"
            alt="Repair"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-40 right-0 hidden xl:block w-72 h-[500px] rounded-l-[100px] overflow-hidden border-l-8 border-white/10">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=800"
            alt="Plumbing"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. Professional for home services */}
      <section className="py-24 bg-white relative -mt-32 z-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-black text-homepro-navy mb-6 leading-tight">
              Professional for your
              <br />
              home services
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-lg">
              Specialized in a wide range of home services. We provide
              high-quality repairs and maintenance for your sanctuary.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                "Electrical Repair",
                "Plumbing Service",
                "HVAC Maintenance",
                "Painting Service",
                "Home Cleaning",
                "Roofing Service",
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-homepro-navy font-bold"
                >
                  <div className="w-2 h-2 rounded-full bg-homepro-blue"></div>
                  {s}
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-primary w-fit">
              Explore Our Story
            </Link>
          </motion.div>
          <div className="relative">
            <div className="house-clip overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1595841055318-490333735e26?auto=format&fit=crop&q=80&w=1200"
                alt="Team"
                className="w-full aspect-square object-cover"
              />
            </div>
            {/* Blue floating background shape */}
            <div className="absolute -z-10 top-10 right-10 w-full h-full bg-homepro-blue/10 house-clip"></div>
          </div>
        </div>
      </section>

      {/* 3. Our Services */}
      <section className="py-24 bg-homepro-light">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-black text-homepro-navy mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            Providing high-quality home maintenance solutions for every urban
            need. Reliable, on time, and professional.
          </p>
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Electrical Repair", icon: Wrench },
            { title: "Water Leakage", icon: Droplets },
            { title: "Air Cleaning", icon: WindIcon },
            { title: "House Cleaning", icon: Paintbrush },
            { title: "Appliances Repair", icon: Settings },
            { title: "Home Security", icon: CheckCircle },
            { title: "Plumbing Service", icon: Droplets },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-homepro-navy text-white flex items-center justify-center mb-6 group-hover:bg-homepro-blue transition-colors">
                <s.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-homepro-navy">{s.title}</h4>
            </motion.div>
          ))}
          {/* Blue card in grid */}
          <div className="bg-homepro-blue p-8 rounded-3xl text-white flex flex-col justify-between shadow-xl">
            <h4 className="text-2xl font-black mb-4 leading-tight">
              Need a custom service?
            </h4>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-homepro-blue font-bold rounded-2xl text-center hover:bg-homepro-navy hover:text-white transition-all"
            >
              Ask Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Fast, Friendly, Satisfaction Guarantee */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-homepro-navy text-white rounded-[4rem] p-12 md:p-20 relative overflow-hidden satisfaction-shape shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight">
                Fast, Friendly, and
                <br />
                Satisfaction Guarantee
              </h2>
              <div className="grid sm:grid-cols-2 gap-12">
                {[
                  {
                    title: "Quality Services",
                    desc: "Top-tier results from experienced pros.",
                    icon: Star,
                  },
                  {
                    title: "Fast Arrival",
                    desc: "We value your time above all.",
                    icon: Clock,
                  },
                  {
                    title: "Affordable Rates",
                    desc: "Transparent pricing with no hidden fees.",
                    icon: DollarSignIcon,
                  },
                  {
                    title: "Safe & Secure",
                    desc: "Vetted team for your peace of mind.",
                    icon: Shield,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-homepro-blue shrink-0">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="font-black mb-2 uppercase tracking-tighter">
                        {item.title}
                      </h4>
                      <p className="text-sm text-white/60 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800"
                alt="Satisfaction"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. How HomePro works */}
      <section className="py-32 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200"
                alt="Worker"
                className="w-full aspect-[4/5] object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
            {/* Blue check badge floating */}
            <div className="absolute top-1/2 -right-10 bg-homepro-blue text-white p-6 rounded-3xl shadow-2xl flex items-center gap-4">
              <CheckCircle
                size={40}
                fill="white"
                className="text-homepro-blue"
              />
              <div>
                <p className="text-2xl font-black leading-none">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest">
                  Verified
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-homepro-navy mb-12">
              How On Time
              <br />
              works?
            </h2>
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Call for Appointment",
                  desc: "Contact our concierge to schedule a visit.",
                },
                {
                  step: "02",
                  title: "Service Details",
                  desc: "Provide us with your specific needs and address.",
                },
                {
                  step: "03",
                  title: "Work In Progress",
                  desc: "Our experts arrive on time and complete the task.",
                },
              ].map((s, i) => (
                <div key={i} className="flex gap-8 group">
                  <span className="text-5xl font-black text-gray-200 group-hover:text-homepro-blue transition-colors">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="text-2xl font-black text-homepro-navy mb-2">
                      {s.title}
                    </h4>
                    <p className="text-gray-500 font-medium leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Reviews */}
      <section className="py-32 bg-homepro-light">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-black text-homepro-navy mb-8">
            Here our original reviews from trusted platform
          </h2>
          <div className="flex justify-center items-center gap-2 mb-12">
            <Star className="text-emerald-500 fill-emerald-500" />
            <span className="font-black text-2xl tracking-tighter italic">
              Trustpilot
            </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-12 rounded-[3rem] shadow-xl border border-white"
          >
            <p className="text-2xl font-medium text-homepro-navy italic leading-relaxed mb-10">
              "Absolutely best service I've ever experienced. They arrived
              exactly on time and fixed my HVAC in under an hour. Highly
              recommended!"
            </p>
            <div className="flex flex-col items-center">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="Avatar"
                className="w-16 h-16 rounded-full mb-4"
              />
              <h4 className="font-black text-lg">Robert Downey</h4>
              <div className="flex gap-1 text-yellow-400 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill="currentColor" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Blog/Insights */}
      <section className="py-32 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-homepro-navy">
            Explore Insights in Our Blog
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Understanding Home Heating System Maintenance",
              img: "https://images.unsplash.com/photo-1517646288021-22ed2f2bb2a0?auto=format&fit=crop&q=80&w=800",
              date: "May 12, 2024",
            },
            {
              title: "The Essentials of Professional Plumbing Care",
              img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800",
              date: "May 10, 2024",
            },
            {
              title: "Modern House Painting Trends for 2024",
              img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800",
              date: "May 08, 2024",
            },
          ].map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="rounded-[2.5rem] overflow-hidden mb-6 h-64 shadow-lg">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <p className="text-xs font-black text-homepro-blue uppercase mb-3">
                {post.date}
              </p>
              <h4 className="text-2xl font-black text-homepro-navy leading-tight group-hover:text-homepro-blue transition-colors">
                {post.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-32 bg-homepro-light">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-homepro-navy mb-16 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              "How long does a typical repair take?",
              "What areas do you serve in the city?",
              "Are your technicians fully insured?",
              "Do you offer same-day emergency services?",
            ].map((q, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-sm border border-white flex items-center justify-between group cursor-pointer hover:bg-homepro-navy hover:text-white transition-all"
              >
                <span className="text-xl font-bold">{q}</span>
                <ChevronDown className="group-hover:rotate-180 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-32 container mx-auto px-4">
        <div className="bg-homepro-navy text-white rounded-[4rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
          {/* Wave background cutout shape simulation */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-homepro-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

          <div className="max-w-2xl relative z-10 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.95] tracking-tighter">
              Already to improve or repair your home? Let's Talk!
            </h2>
            <Link to="/contact" className="btn-primary w-fit mx-auto md:mx-0">
              Get Started Now <ArrowRight size={24} />
            </Link>
          </div>
          <div className="relative z-10 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
              alt="Success"
              className="w-80 h-80 rounded-[3rem] object-cover border-8 border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 10. Footer Section */}
      <footer className="bg-homepro-navy text-white pt-24 pb-12">
        {/* Sky blue bar */}
        <div className="container mx-auto px-4 -mt-32 mb-16 relative z-30">
          <div className="bg-homepro-blue p-8 md:p-12 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <h3 className="text-3xl font-black leading-tight max-w-sm">
              Stay updated with our latest offers
            </h3>
            <div className="flex w-full md:w-auto bg-white rounded-2xl overflow-hidden p-2 shadow-inner">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-6 py-4 outline-none text-homepro-navy font-bold"
              />
              <button className="bg-homepro-navy text-white px-8 py-4 rounded-xl font-black hover:bg-homepro-navy/90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-homepro-blue rounded-xl flex items-center justify-center font-black text-xl">
                O
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                On Time
              </span>
            </div>
            <p className="text-white/60 font-medium leading-relaxed mb-10">
              Professional home services you can trust. Reliable, efficient, and
              high-quality repairs for urban sanctuaries.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-homepro-blue transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-homepro-blue">
              Company
            </h4>
            <ul className="space-y-4 font-bold text-white/60">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-homepro-blue">
              Support
            </h4>
            <ul className="space-y-4 font-bold text-white/60">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-homepro-blue">
              Get In Touch
            </h4>
            <ul className="space-y-6 font-bold text-white/60">
              <li className="flex items-start gap-3">
                <MapPinIcon size={20} className="text-homepro-blue mt-1" />
                <span>123 Urban Ave, Metro City</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon size={20} className="text-homepro-blue" />
                <span>+1 (234) 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon size={20} className="text-homepro-blue" />
                <span>hello@ontime.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-10 border-t border-white/10 text-center text-sm font-bold text-white/40 uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} ON TIME HOMEPRO. All Rights
          Reserved.
        </div>
      </footer>
    </div>
  );
}

// Simple icons missing in imports
function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function WindIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4a2 2 0 1 0-1.4-3.4H2" />
    </svg>
  );
}
function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
