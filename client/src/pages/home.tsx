import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Projector, 
  Monitor, 
  Music, 
  Home, 
  Wrench, 
  Truck,
  ChevronDown,
  Target,
  Eye,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Image as ImageIcon,
  Cpu,
  CheckCircle,
  Quote,
  Calendar,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@assets/generated_images/luxury_home_theatre_interior.png";
import heroVideo from "@assets/generated_videos/luxury_theatre_ambience.mp4";
import logoImage from "@assets/Solution_AV_1767881159285.jpg";
import galleryImage1 from "@assets/generated_images/completed_home_theatre_project.png";
import galleryImage2 from "@assets/generated_images/living_room_projector_setup.png";
import galleryImage3 from "@assets/generated_images/conference_room_projector_setup.png";
import galleryImage4 from "@assets/generated_images/hotel_restaurant_projector_setup.png";
import galleryImage5 from "@assets/generated_images/school_classroom_projector_setup.png";
import galleryImage6 from "@assets/generated_images/dedicated_home_theatre_room.png";
import productImage1 from "@assets/generated_images/4k_projector_product_shot.png";
import productImage2 from "@assets/generated_images/projection_screen_product.png";
import interactivePanelImage from "@assets/Vutec_Interactive-panel_1767965132963.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img 
            src={logoImage} 
            alt="Solution AV" 
            className="h-12 w-auto rounded"
            data-testid="img-logo"
          />
          
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Products', 'Gallery', 'Reviews', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
                data-testid={`link-nav-${item.toLowerCase()}`}
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gold text-gold-foreground hover:bg-gold/90"
              data-testid="button-get-quote"
            >
              Get a Quote
            </Button>
          </div>

          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden pt-4 pb-2"
          >
            {['About', 'Products', 'Gallery', 'Reviews', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-foreground hover:text-gold transition-colors"
                data-testid={`link-mobile-nav-${item.toLowerCase()}`}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={heroImage}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-8">
            Premium Home Theatre Solutions
          </span>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          data-testid="text-hero-title"
        >
          Bringing <span className="text-gradient-gold">Cinema-Class</span>
          <br />
          Projection to Your Home
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="text-hero-subtitle"
        >
          Experience 4K & 8K projection with customized screens and complete home theatre solutions, 
          tailored to transform any space into your personal cinema.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button 
            size="lg" 
            className="bg-gold text-gold-foreground hover:bg-gold/90 text-base px-8 py-6 glow-gold"
            onClick={scrollToContact}
            data-testid="button-hero-consultation"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gold/40 text-foreground hover:bg-gold/10 text-base px-8 py-6"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-hero-explore"
          >
            Explore Products
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-gold/60" />
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="text-about-title">
              About <span className="text-gradient-gold">Solution AV</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p data-testid="text-about-description">
                Solution AV is a specialized Home Projection & Home Theatre solutions provider, 
                offering end-to-end customized setups designed to deliver a true cinema experience at home.
              </p>
              <p>
                We focus on 4K and 8K home projectors, customized projection screens, and complete 
                home theatre solutions, tailored to suit different room sizes, lighting conditions, and budgets.
              </p>
              <p>
                From compact living rooms to dedicated home theatre rooms, we design and deliver setups 
                that combine performance, aesthetics, and immersive viewing.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-4"
            variants={staggerContainer}
          >
            {[
              { icon: Projector, label: "4K & 8K Projectors", value: "Premium" },
              { icon: Monitor, label: "Custom Screens", value: "All Sizes" },
              { icon: Music, label: "Audio Integration", value: "Immersive" },
              { icon: Truck, label: "Pan-India", value: "Delivery" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-gradient-card border-gradient-gold rounded-2xl p-6 text-center hover:scale-105 transition-transform"
                data-testid={`card-stat-${i}`}
              >
                <item.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <div className="text-2xl font-bold text-foreground mb-1">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Products() {
  const products = [
    {
      image: productImage1,
      title: "4K & 8K Home Projectors",
      description: "Premium projectors with stunning picture quality, HDR support, and long lamp life for the ultimate viewing experience.",
      features: ["4K Ultra HD", "8K Ready", "HDR10+", "Long Lamp Life"]
    },
    {
      image: productImage2,
      title: "Projection Screens",
      description: "Fixed frame, motorized, and tab-tensioned screens in various sizes to suit your room and viewing preferences.",
      features: ["Fixed Frame", "Motorized", "Tab-Tensioned", "Custom Sizes"]
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-card relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="text-products-title">
            Premium <span className="text-gradient-gold">Equipment</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Top-quality projectors and screens for your perfect home cinema setup
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group bg-background/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-gold/50 transition-all duration-300"
              data-testid={`card-product-${i}`}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{product.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, j) => (
                    <span 
                      key={j}
                      className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background/50 backdrop-blur-sm border border-border rounded-3xl overflow-hidden"
          data-testid="card-interactive-panel"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-gold" />
                </div>
                <span className="text-gold text-sm font-semibold tracking-widest uppercase">
                  New Arrival
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Interactive Board <span className="text-gradient-gold">Flat Panel</span> with AI & Gemini Assistant
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Consistent design available in 65", 75" & 86" sizes to fit any room dimension perfectly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "8GB + 256GB with Micro SD Card Slot",
                  "Latest Android Version 14.8",
                  "EDLA Google Certified, Made in USA",
                  "48MP & 8 Array Microphone",
                  "Water & Dust Resistant",
                  "AI Whiteboard with V-WRITE PEN",
                  "AirGo Cast",
                  "3 Years Onsite Warranty"
                ].map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['65"', '75"', '86"'].map((size) => (
                  <span 
                    key={size}
                    className="text-sm px-4 py-2 rounded-full bg-gold/20 text-gold border border-gold/30 font-semibold"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-muted/50 to-background flex items-center justify-center p-8">
              <img 
                src={interactivePanelImage} 
                alt="Interactive Board Flat Panel"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Gallery() {
  const projects = [
    { image: galleryImage1, title: "Dedicated Home Theatre Room" },
    { image: galleryImage2, title: "Living Room Cinema Setup" },
    { image: galleryImage6, title: "Premium Theatre Installation" },
    { image: galleryImage3, title: "Conference Room Setup" },
    { image: galleryImage4, title: "Hotel & Restaurant Installation" },
    { image: galleryImage5, title: "School Classroom Setup" }
  ];

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="text-gallery-title">
            Project <span className="text-gradient-gold">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our completed projector and screen installations across India
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
              data-testid={`card-gallery-${i}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ImageIcon className="w-5 h-5 text-gold" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      type: "Home Theatre",
      location: "Hyderabad",
      text: "I purchased a projector and screen for my home theatre from Solution AV. The quality of the projector and the screen is excellent, and the cinematic experience is amazing. Mr. Lalit personally guided me with the right setup and ensured proper installation. Very happy with the service and overall experience."
    },
    {
      type: "Home Theatre",
      location: "Chennai",
      text: "We bought a projector and projection screen from Solution AV for our home. The product quality is very good and installation was smooth. Mr. Lalit and his team were very supportive and professional throughout. Highly recommended for home theatre solutions."
    },
    {
      type: "Resort Project",
      location: "Goa",
      text: "Solution AV installed a cinematic automatic screen for our resort. The screen quality and automation are top class and perfect for our guests' experience. Mr. Lalit understood our requirement clearly and delivered exactly what we wanted. Excellent service and professional execution."
    },
    {
      type: "Customized Screen",
      location: "Vadodara",
      text: "I required a customized projector screen as per my space. Solution AV delivered exactly as promised. The 4K / 4D fabric quality is outstanding, and the clarity is excellent. I am also very happy with the quick support and professional approach. Truly value-for-money."
    },
    {
      type: "Restaurant Setup",
      location: "Restaurant Owner",
      text: "We purchased a complete projector and screen setup for our restaurant from Solution AV. The viewing experience has enhanced our ambience. Mr. Lalit and his team are very professional and supportive. Unlike others who charge site visit fees, Solution AV provided expert guidance without unnecessary charges."
    },
    {
      type: "School",
      location: "Interactive Flat Panel",
      text: "We purchased an interactive flat panel for our school from Solution AV. Mr. Lalit guided us for the latest model with built-in camera and AI-supported features, which other brands were not offering. The pricing was very competitive, and the product quality is excellent."
    },
    {
      type: "Conference Room",
      location: "Corporate Office",
      text: "Solution AV completed a full conference room setup for us including projector and screen. The system integration was done professionally, and the presentation quality is excellent. Timely delivery and expert installation made the entire process smooth."
    },
    {
      type: "Screen Repair & AMC",
      location: "Residential Customer",
      text: "Our old projection screen motor had stopped working, and the previous vendor was not supporting us. Solution AV took responsibility, repaired the issue, and replaced the motor with a new one. Very reliable service and honest guidance. Highly appreciated."
    }
  ];

  // Auto-scroll logic
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scroll = async () => {
      if (!isHovered && containerRef.current) {
        const width = containerRef.current.scrollWidth / 2;
        await controls.start({
          x: -width,
          transition: {
            duration: 40,
            ease: "linear",
            repeat: Infinity
          }
        });
      } else {
        controls.stop();
      }
    };
    scroll();
  }, [isHovered, controls]);

  return (
    <section id="reviews" className="py-24 bg-gradient-card relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="text-reviews-title">
            Customer <span className="text-gradient-gold">Reviews</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What our clients say about their experience with Solution AV
          </p>
        </motion.div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            ref={containerRef}
            animate={controls}
            className="flex gap-6 w-max"
          >
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={i}
                className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-gold/30 transition-colors w-[300px] md:w-[350px] shrink-0"
                data-testid={`card-review-${i}`}
              >
                <Quote className="w-8 h-8 text-gold/40 mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-5">
                  "{review.text}"
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="text-foreground font-semibold text-sm">{review.type}</div>
                  <div className="text-gold text-xs">{review.location}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-card border-gradient-gold rounded-3xl p-8 md:p-10"
          >
            <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6" data-testid="text-mission-title">
              Our Mission
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our mission is to create immersive home cinema experiences by delivering high-quality 
              projection and audio solutions customized to individual needs.
            </p>
            <ul className="space-y-3">
              {[
                "Provide 4K & 8K home projector solutions with superior picture quality",
                "Offer customized projection screens for all room types",
                "Deliver complete home theatre setups, including audio and control solutions",
                "Ensure professional installation, tuning, and after-sales support"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <Sparkles className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-card border-gradient-gold rounded-3xl p-8 md:p-10"
          >
            <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6" data-testid="text-vision-title">
              Our Vision
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our vision is to become a trusted name in home projection and home theatre solutions 
              across India, known for excellence and reliability.
            </p>
            <ul className="space-y-3">
              {[
                "Expertise in customized projector-based setups",
                "Wide range of 4K & 8K projection screens",
                "Honest consultation and customer-first approach",
                "Reliable service, support, and long-term relationships"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <Sparkles className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Projector,
      title: "Home Projector Setups",
      description: "Full HD, 4K & 8K projector installations with expert calibration for stunning picture quality.",
      features: ["4K Ultra HD", "8K Ready", "HDR Support"]
    },
    {
      icon: Monitor,
      title: "Customized Projection Screens",
      description: "Fixed frame, motorized, and tab-tensioned screens tailored to your room specifications.",
      features: ["Fixed Frame", "Motorized", "Tab-Tensioned"]
    },
    {
      icon: Music,
      title: "Complete Home Theatre",
      description: "Integrated audio and video solutions for a truly immersive cinema experience.",
      features: ["Dolby Atmos", "Surround Sound", "AV Integration"]
    },
    {
      icon: Home,
      title: "Room Design Solutions",
      description: "Living room and dedicated home theatre room designs optimized for your space.",
      features: ["Space Planning", "Acoustic Design", "Lighting Control"]
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Expert installation and calibration services ensuring optimal performance.",
      features: ["Expert Setup", "Color Calibration", "Fine Tuning"]
    },
    {
      icon: Truck,
      title: "Pan-India Delivery",
      description: "Nationwide delivery and support to bring premium home cinema across India.",
      features: ["Free Shipping", "Safe Handling", "Quick Delivery"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-card relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="text-services-title">
            Our <span className="text-gradient-gold">Specializations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive home theatre solutions from consultation to installation
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-gold/30 transition-all duration-300"
              data-testid={`card-service-${i}`}
            >
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, j) => (
                  <span 
                    key={j}
                    className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Enquiry Sent",
        description: "Thank you for contacting Solution AV. We will get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="text-contact-title">
            Contact Us – <span className="text-gradient-gold">Solution AV</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We're here to help you with the right audio-visual solutions for your space. Whether it's a home theatre, 
            projector setup, customized screens, or professional AV integration, our team is ready to assist you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-card border-gradient-gold rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-gold" />
                Visits by Prior Appointment Only
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Solution AV operates on an appointment-only basis. To ensure dedicated consultation and expert guidance, 
                we request clients to schedule an appointment in advance for meetings, demos, or site visits.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Dispatches and deliveries are processed as per confirmed orders. For enquiries, orders, and site visits, 
                please call or email us to book an appointment.
              </p>
            </div>

            <div className="bg-gradient-card border-gradient-gold rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-gold" />
                Service Coverage
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We provide AV solutions and deliveries across India, including residential, commercial, educational, 
                hospitality, and institutional projects.
              </p>
            </div>

            <div className="bg-gradient-card border-gradient-gold rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-gold" />
                Office Address
              </h3>
              <div className="text-muted-foreground leading-relaxed" data-testid="text-address">
                <strong className="text-foreground">Solution AV</strong><br />
                Master Business Centre (MBC),<br />
                2nd Floor, Office No. S-71,<br />
                Kalyan – Badlapur Road,<br />
                Next to Star Big Cinema, Wimco Naka,<br />
                Ambernath (W), Maharashtra – 421505
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href="tel:9049443975"
                className="bg-gradient-card border-gradient-gold rounded-2xl p-6 hover:scale-[1.02] transition-transform group"
                data-testid="link-phone-1"
              >
                <Phone className="w-6 h-6 text-gold mb-3" />
                <div className="text-sm text-muted-foreground mb-1">Call / WhatsApp</div>
                <div className="text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                  9049443975
                </div>
              </a>
              <a 
                href="tel:9322643975"
                className="bg-gradient-card border-gradient-gold rounded-2xl p-6 hover:scale-[1.02] transition-transform group"
                data-testid="link-phone-2"
              >
                <Phone className="w-6 h-6 text-gold mb-3" />
                <div className="text-sm text-muted-foreground mb-1">Call / WhatsApp</div>
                <div className="text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                  9322643975
                </div>
              </a>
            </div>

            <a 
              href="mailto:info@solutionav.in"
              className="block bg-gradient-card border-gradient-gold rounded-2xl p-6 hover:scale-[1.02] transition-transform group"
              data-testid="link-email"
            >
              <Mail className="w-6 h-6 text-gold mb-3" />
              <div className="text-sm text-muted-foreground mb-1">For Enquiries & Orders</div>
              <div className="text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                info@solutionav.in
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-card border-gradient-gold rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-gold" />
              Send Us a Message
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                <input 
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-foreground"
                  placeholder="Your name"
                  data-testid="input-name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Phone</label>
                <input 
                  required
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-foreground"
                  placeholder="Your phone number"
                  data-testid="input-phone"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                <input 
                  required
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-foreground"
                  placeholder="Your email"
                  data-testid="input-email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-foreground resize-none"
                  placeholder="Tell us about your requirements..."
                  data-testid="input-message"
                />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-gold-foreground hover:bg-gold/90 py-6 text-base glow-gold"
                data-testid="button-submit-form"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <img 
            src={logoImage} 
            alt="Solution AV" 
            className="h-10 w-auto rounded"
          />
          <div className="flex items-center gap-6">
            <a 
              href="tel:9049443975" 
              className="text-muted-foreground hover:text-gold transition-colors"
              data-testid="link-footer-phone"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a 
              href="mailto:info@solutionav.in" 
              className="text-muted-foreground hover:text-gold transition-colors"
              data-testid="link-footer-email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-center border-t border-border pt-6">
          <p className="text-muted-foreground text-xs leading-relaxed max-w-4xl mx-auto mb-4">
            Solution AV is a system integrator and solution provider. Products are supplied, installed, and serviced as per project requirements. 
            Visits are scheduled by prior appointment only. Specifications and availability are subject to change without prior notice.
          </p>
          <p className="text-muted-foreground text-sm" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Solution AV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Reviews />
      <MissionVision />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
