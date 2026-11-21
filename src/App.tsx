import React, { useState } from 'react';
import { 
  Palette, 
  Video, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Download, 
  Send, 
  CheckCircle2, 
  Menu, 
  X, 
  Sparkles, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Check, 
  ChevronRight,
  Heart,
  Calendar,
  Image as ImageIcon
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'design' | 'video'>('all');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Graphic Design',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setFormData({ name: '', email: '', service: 'Graphic Design', message: '' });
    }, 5000);
  };

  const projects = [
    {
      id: 1,
      title: "Modern Brand Identity & Logo Suite",
      category: "design",
      tag: "Logo & Brand Design",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
      description: "Comprehensive visual identity and custom logo design crafted for local businesses in Mahendranagar. Focused on clean minimalism, memorable typography, and versatile azure color palettes for digital and print media.",
      tools: ["Adobe Illustrator", "Photoshop", "Brand Strategy"],
      client: "Local Retail & Cafe Brand",
      metrics: "100% Brand Recognition Boost"
    },
    {
      id: 2,
      title: "High-Impact Event Posters & Flex Banners",
      category: "design",
      tag: "Poster/Banner/Flex Design",
      image: "https://images.unsplash.com/photo-1542744094-3a31243324d0?auto=format&fit=crop&q=80&w=800",
      description: "Eye-catching promotional flex banners, festival posters, and outdoor advertising boards designed with striking typography, high-resolution imagery, and balanced visual hierarchy.",
      tools: ["Adobe Photoshop", "Canva", "Print Production"],
      client: "Community Festival & Cultural Committee",
      metrics: "5000+ Printed Impressions"
    },
    {
      id: 3,
      title: "Dynamic Reels & Promotional Event Videos",
      category: "video",
      tag: "Reels & YouTube Editing",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
      description: "Engaging short-form reels, event highlight videos, and promotional content edited with professional color correction, seamless transitions, rhythm-synced cuts, and dynamic motion graphics.",
      tools: ["Adobe Premiere Pro", "CapCut", "After Effects"],
      client: "Regional Event Organizers",
      metrics: "120K+ Total Video Views"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#070e1c] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#070e1c]/90 backdrop-blur-xl border-b border-blue-900/30 shadow-2xl shadow-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-blue-500/50 shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform bg-slate-900">
              <img 
                src="/assets/aistudio/image_7171112c.png" 
                alt="Surendra SK"
                className="w-full h-full object-cover object-center scale-125"
              />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Surendra SK
              </span>
              <span className="block text-xs text-blue-400 font-semibold tracking-wider uppercase">Designer & Editor</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#gallery" className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">Photos</a>
            <a href="#skills" className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#portfolio" className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="#experience" className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setCvModalOpen(true)}
              className="px-4.5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-blue-950/60 border border-blue-800/60 text-blue-300 hover:bg-blue-900/50 hover:text-white transition-all flex items-center gap-2 shadow-sm"
            >
              <FileText className="w-4 h-4 text-blue-400" /> View CV
            </button>
            <a 
              href="#contact"
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-blue-950/80 border border-blue-900/60 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a1329] border-b border-blue-900/60 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-300 hover:text-blue-400"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-300 hover:text-blue-400"
            >
              About
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-300 hover:text-blue-400"
            >
              Photos
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-300 hover:text-blue-400"
            >
              Skills
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-300 hover:text-blue-400"
            >
              Portfolio
            </a>
            <a 
              href="#experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-300 hover:text-blue-400"
            >
              Experience
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-300 hover:text-blue-400"
            >
              Contact
            </a>
            <div className="pt-4 border-t border-blue-900/50 flex flex-col gap-3">
              <button 
                onClick={() => { setMobileMenuOpen(false); setCvModalOpen(true); }}
                className="w-full py-3 text-sm font-semibold rounded-xl bg-blue-950 border border-blue-800 text-blue-300 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" /> View CV
              </button>
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-sm font-bold uppercase tracking-wider text-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        {/* Background azure glowing gradient blur */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-12 w-[450px] h-[350px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-bold tracking-wide shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse"></span>
                Available for Freelance & Creative Projects
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Surendra SK</span>
              </h1>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 text-sm sm:text-base font-semibold text-slate-300">
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-900/40 text-blue-300"><Palette className="w-4 h-4 text-blue-400" /> Graphic Designer</span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-950/40 border border-cyan-900/40 text-cyan-300"><Video className="w-4 h-4 text-cyan-400" /> Video Editor</span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-900/40 text-emerald-300"><MapPin className="w-4 h-4 text-[#22c55e]" /> Kanchanpur, Nepal</span>
              </div>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Born in <span className="text-white font-semibold">2059 BS</span> in <span className="text-white font-semibold">Mahendranagar, Kanchanpur, Nepal</span>. I am a passionate creative professional dedicated to crafting clean brand identities, striking posters, and cinematic video edits.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href="#portfolio"
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5"
                >
                  Explore Portfolio <ChevronRight className="w-4 h-4" />
                </a>
                <button 
                  onClick={() => setCvModalOpen(true)}
                  className="px-7 py-4 rounded-2xl bg-[#0b162c] border border-blue-900/60 hover:bg-blue-950 text-slate-200 font-bold text-sm transition-all flex items-center gap-2.5 shadow-sm"
                >
                  <Download className="w-4 h-4 text-blue-400" /> Download CV
                </button>
              </div>

              {/* Quick bio details */}
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-blue-900/40 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="p-4 rounded-2xl bg-[#0a1329] border border-blue-900/50 shadow-md">
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Birth Date</div>
                  <div className="text-sm font-extrabold text-white mt-1">2059 BS</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#0a1329] border border-blue-900/50 shadow-md">
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Birthplace</div>
                  <div className="text-sm font-extrabold text-white mt-1">Kanchanpur, NP</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#0a1329] border border-blue-900/50 shadow-md col-span-2 sm:col-span-1">
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Phone</div>
                  <div className="text-sm font-extrabold text-white mt-1">9763835839</div>
                </div>
              </div>

            </div>

            {/* Hero Visual Card with Surendra SK's Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 opacity-40 blur-xl"></div>
                <div className="relative rounded-3xl bg-[#0a1329]/95 border border-blue-900/60 p-7 shadow-2xl backdrop-blur-2xl text-center space-y-5">
                  
                  <div className="relative w-52 h-52 mx-auto rounded-2xl overflow-hidden border-2 border-blue-500/50 shadow-2xl bg-slate-950">
                    <img 
                      src="/assets/aistudio/image_7171112c.png" 
                      alt="Surendra SK"
                      className="w-full h-full object-cover object-[center_35%] hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-[#22c55e] text-slate-950 text-[10px] font-extrabold uppercase tracking-widest shadow-lg flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse"></span> Online
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-extrabold text-white text-2xl tracking-tight">Surendra SK</h3>
                    <p className="text-xs text-blue-300 font-medium flex items-center justify-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#22c55e]" /> Mahendranagar, Kanchanpur, Nepal
                    </p>
                    <p className="text-xs text-slate-400 flex items-center justify-center gap-1 pt-0.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" /> Born: 2059 BS
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5 pt-1">
                    <a 
                      href="#gallery"
                      className="py-3 text-center text-xs font-bold uppercase tracking-wider rounded-xl bg-blue-950/80 hover:bg-blue-900 text-slate-200 transition-colors flex items-center justify-center gap-2 border border-blue-900/50 shadow-sm"
                    >
                      <ImageIcon className="w-4 h-4 text-blue-400" /> Photos
                    </a>
                    <a 
                      href="#contact"
                      className="py-3 text-center text-xs font-bold uppercase tracking-wider rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                    >
                      <Mail className="w-4 h-4" /> Hire Me
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 bg-[#050b17] border-t border-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-extrabold px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Creative Journey & Personal Background</h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Born in 2059 BS in Mahendranagar, Kanchanpur, Sudurpashchim Province, Nepal. Dedicated to professional graphic design and video editing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0a1329] border border-blue-900/60 shadow-2xl space-y-6">
                <h4 className="text-2xl font-extrabold text-white flex items-center gap-3">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></span> 
                  Surendra SK — Professional Bio
                </h4>
                
                <p className="text-slate-300 text-base leading-relaxed font-normal">
                  Hello! I am Surendra SK, a professional Graphic Designer and Video Editor based in Mahendranagar, Kanchanpur, Nepal. Born in 2059 BS, I have always had a deep passion for visual arts, creative branding, and digital media production. Over the years, I have honed my expertise in crafting clean brand identities, striking promotional posters, flex banners, and dynamic video edits (Reels, YouTube, and event highlights) that elevate local businesses and captivate audiences.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-blue-950 text-sm">
                  <div className="p-3 rounded-xl bg-[#050b17] border border-blue-900/40">
                    <span className="text-slate-400 block text-xs font-semibold uppercase">Full Name</span>
                    <span className="font-bold text-white text-base">Surendra SK</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#050b17] border border-blue-900/40">
                    <span className="text-slate-400 block text-xs font-semibold uppercase">Birth Date</span>
                    <span className="font-bold text-white text-base">2059 BS</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#050b17] border border-blue-900/40">
                    <span className="text-slate-400 block text-xs font-semibold uppercase">Birthplace</span>
                    <span className="font-bold text-white text-base">Kanchanpur</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#050b17] border border-blue-900/40">
                    <span className="text-slate-400 block text-xs font-semibold uppercase">Phone</span>
                    <span className="font-bold text-white text-base">9763835839</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-5">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden border border-blue-900/60 aspect-[4/5] bg-slate-950 shadow-2xl group">
                  <img 
                    src="/assets/aistudio/image_e2bbf84c.png" 
                    alt="Surendra SK with Scooter"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="rounded-3xl overflow-hidden border border-blue-900/60 aspect-[4/5] bg-slate-950 shadow-2xl group">
                  <img 
                    src="/assets/aistudio/image_46e30b55.png" 
                    alt="Surendra SK in Suit"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#0a1329] border border-blue-900/40 shadow-xl hover:border-blue-500/60 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform shadow-md">
                <Palette className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Graphic Design</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Expert in logo creation, brand identity suites, high-impact festival posters, flex banners, and social media graphics tailored for local and regional clients.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0a1329] border border-blue-900/40 shadow-xl hover:border-cyan-500/60 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-600/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform shadow-md">
                <Video className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Video Editing</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Professional editing for promotional videos, Reels, YouTube shorts, and event coverages with color grading, smooth transitions, and motion graphics.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0a1329] border border-blue-900/40 shadow-xl hover:border-blue-400/60 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 mb-6 group-hover:scale-110 transition-transform shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">On-Time Delivery</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Committed to delivering clean, eye-catching work on time while growing alongside dynamic teams and forward-thinking clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-28 border-t border-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-extrabold px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50">Photo Gallery</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Moments & Portraits</h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Explore recent personal snapshots from Mahendranagar, Kanchanpur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group rounded-3xl bg-[#0a1329] border border-blue-900/50 overflow-hidden shadow-2xl hover:border-blue-500 transition-all">
              <div className="aspect-[4/5] overflow-hidden bg-slate-950">
                <img 
                  src="/assets/aistudio/image_7171112c.png" 
                  alt="Surendra SK Portrait"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white">Classic Portrait</h4>
                <p className="text-slate-400 text-xs mt-1">Mahendranagar, Kanchanpur</p>
              </div>
            </div>

            <div className="group rounded-3xl bg-[#0a1329] border border-blue-900/50 overflow-hidden shadow-2xl hover:border-blue-500 transition-all">
              <div className="aspect-[4/5] overflow-hidden bg-slate-950">
                <img 
                  src="/assets/aistudio/image_e2bbf84c.png" 
                  alt="Surendra SK Outdoors"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white">Nature & Ride</h4>
                <p className="text-slate-400 text-xs mt-1">Kanchanpur Outdoors</p>
              </div>
            </div>

            <div className="group rounded-3xl bg-[#0a1329] border border-blue-900/50 overflow-hidden shadow-2xl hover:border-blue-500 transition-all">
              <div className="aspect-[4/5] overflow-hidden bg-slate-950">
                <img 
                  src="/assets/aistudio/image_46e30b55.png" 
                  alt="Surendra SK in Suit"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white">Formal & Professional</h4>
                <p className="text-slate-400 text-xs mt-1">Creative Director Vibe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-28 bg-[#050b17] border-t border-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-extrabold px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50">Expertise & Stack</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Skills & Software Proficiency</h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Tools and creative proficiencies mastered through years of hands-on project execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Design Skills */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0a1329] border border-blue-900/60 shadow-2xl space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 shadow-md">
                  <Palette className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-white">Design & Branding</h4>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-semibold">Adobe Photoshop</span>
                    <span className="text-blue-400 font-bold">Advanced</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#050b17] overflow-hidden p-0.5 border border-blue-950">
                    <div className="h-full bg-blue-600 rounded-full w-[95%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-semibold">Adobe Illustrator</span>
                    <span className="text-blue-400 font-bold">Advanced</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#050b17] overflow-hidden p-0.5 border border-blue-950">
                    <div className="h-full bg-blue-600 rounded-full w-[90%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-semibold">Canva Pro & Design Assets</span>
                    <span className="text-blue-400 font-bold">Expert</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#050b17] overflow-hidden p-0.5 border border-blue-950">
                    <div className="h-full bg-blue-600 rounded-full w-[98%]" />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-2.5">
                {['Logo & Brand Design', 'Poster Design', 'Banner Design', 'Flex Design', 'Social Media Graphics'].map((skill, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-xl bg-[#050b17] border border-blue-900/50 text-xs font-semibold text-slate-300 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Video Skills */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0a1329] border border-blue-900/60 shadow-2xl space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 flex items-center justify-center text-cyan-400 shadow-md">
                  <Video className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-white">Video Editing & Motion</h4>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-semibold">Adobe Premiere Pro</span>
                    <span className="text-cyan-400 font-bold">Advanced</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#050b17] overflow-hidden p-0.5 border border-blue-950">
                    <div className="h-full bg-cyan-500 rounded-full w-[92%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-semibold">CapCut & Mobile Editing</span>
                    <span className="text-cyan-400 font-bold">Expert</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#050b17] overflow-hidden p-0.5 border border-blue-950">
                    <div className="h-full bg-cyan-500 rounded-full w-[98%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-semibold">After Effects & Motion Graphics</span>
                    <span className="text-cyan-400 font-bold">Intermediate</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#050b17] overflow-hidden p-0.5 border border-blue-950">
                    <div className="h-full bg-cyan-500 rounded-full w-[80%]" />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-2.5">
                {['Color Correction', 'Motion Graphics', 'Reels Editing', 'YouTube Editing', 'Event Highlights'].map((skill, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-xl bg-[#050b17] border border-blue-900/50 text-xs font-semibold text-slate-300 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Languages */}
          <div className="mt-10 p-8 rounded-3xl bg-[#0a1329] border border-blue-900/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-md">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-white text-base">Spoken Languages</h5>
                <p className="text-slate-300 text-xs">Fluent communication for local & international collaborations</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2.5 rounded-xl bg-[#050b17] border border-blue-900/60 text-sm font-semibold text-slate-200 shadow-sm">
                🇳🇵 Nepali <span className="text-xs text-blue-400 ml-1 font-bold">(Native)</span>
              </span>
              <span className="px-4 py-2.5 rounded-xl bg-[#050b17] border border-blue-900/60 text-sm font-semibold text-slate-200 shadow-sm">
                🇬🇧 English <span className="text-xs text-blue-400 ml-1 font-bold">(Good)</span>
              </span>
              <span className="px-4 py-2.5 rounded-xl bg-[#050b17] border border-blue-900/60 text-sm font-semibold text-slate-200 shadow-sm">
                🇮🇳 Hindi <span className="text-xs text-blue-400 ml-1 font-bold">(Good)</span>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Portfolio / Projects Section */}
      <section id="portfolio" className="py-28 border-t border-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-blue-400 font-extrabold px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50">Featured Portfolio</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Sample Project Cards</h2>
              <p className="text-slate-300 text-base max-w-xl">
                Explore a showcase of recent graphic design branding, flex poster campaigns, and dynamic video edits.
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#0a1329] border border-blue-950 shadow-lg">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'all' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-300 hover:text-white'}`}
              >
                All Works
              </button>
              <button 
                onClick={() => setActiveTab('design')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'design' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-300 hover:text-white'}`}
              >
                Design & Branding
              </button>
              <button 
                onClick={() => setActiveTab('video')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'video' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-300 hover:text-white'}`}
              >
                Video Editing
              </button>
            </div>
          </div>

          {/* 3 Sample Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group rounded-3xl bg-[#0a1329] border border-blue-900/50 overflow-hidden shadow-2xl hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#050b17]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-xl bg-[#050b17]/90 backdrop-blur-md border border-blue-900/60 text-blue-300 text-xs font-bold shadow-md">
                      {project.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b17] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate-300 text-sm line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-blue-950">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((t: string, idx: number) => (
                        <span key={idx} className="px-3 py-1 rounded-lg bg-[#050b17] border border-blue-900/40 text-xs font-medium text-slate-300 shadow-sm">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-blue-400 font-bold pt-1">
                      <span>View Details & Specs</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-xs text-slate-300 font-medium">
              Looking for Behance, Instagram, or Google Drive folder links? Check the <button onClick={() => setCvModalOpen(true)} className="text-blue-400 underline font-bold hover:text-blue-300">CV / Resume modal</button> for direct portfolio links.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience & Education */}
      <section id="experience" className="py-28 bg-[#050b17] border-t border-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-extrabold px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50">Career & Background</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Experience & Education</h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Professional journey and creative training background from Mahendranagar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Experience Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 shadow-md">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-white">Work Experience</h4>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-[#0a1329] border border-blue-900/60 shadow-2xl space-y-6 relative before:absolute before:left-8 before:top-24 before:bottom-10 before:w-0.5 before:bg-blue-600/30">
                
                <div className="relative pl-8">
                  <div className="absolute left-[-29px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#0a1329] shadow-md shadow-blue-600" />
                  <span className="text-xs font-extrabold text-blue-400 uppercase tracking-wider">Freelance • Present</span>
                  <h5 className="text-xl font-bold text-white mt-1.5">Graphic Designer & Video Editor</h5>
                  <p className="text-xs text-slate-300 mb-4 font-medium">Mahendranagar, Kanchanpur</p>
                  
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-1" />
                      <span>Designed professional posters, flex banners, and social media posts for local clients.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-1" />
                      <span>Edited promotional videos, dynamic reels, and regional event coverage videos.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-1" />
                      <span>Delivered consistent creative branding solutions with fast turnaround times.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Education & Training Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 flex items-center justify-center text-cyan-400 shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-white">Education & Training</h4>
              </div>

              <div className="space-y-6">
                <div className="p-8 sm:p-9 rounded-3xl bg-[#0a1329] border border-blue-900/60 shadow-2xl space-y-3">
                  <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider">Professional Training</span>
                  <h5 className="text-xl font-bold text-white">Graphic Design & Video Editing Training</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">Specialized institute certification in professional design software and non-linear video editing workflows.</p>
                </div>

                <div className="p-8 sm:p-9 rounded-3xl bg-[#0a1329] border border-blue-900/60 shadow-2xl space-y-3">
                  <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider">Academic Background</span>
                  <h5 className="text-xl font-bold text-white">SEE / +2 / Bachelor Studies</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">Mahendranagar, Kanchanpur, Sudurpashchim Province, Nepal.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 border-t border-blue-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-extrabold px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Let's Work Together</h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Have a project in mind or looking for a skilled designer and editor? Drop me a message below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Contact info cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0a1329] border border-blue-900/60 space-y-8 shadow-2xl">
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-white">Contact Information</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Feel free to reach out via phone, email, or social links. I'm always open to discussing new design projects and creative collaborations.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 shadow-md">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase">Email Address</div>
                      <div className="font-bold text-white text-base mt-0.5">surendrask2083@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-600/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-md">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase">Phone Number</div>
                      <div className="font-bold text-white text-base mt-0.5">9763835839</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0 shadow-md">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase">Location</div>
                      <div className="font-bold text-white text-base mt-0.5">Mahendranagar, Kanchanpur, Nepal</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-blue-950">
                  <button 
                    onClick={() => setCvModalOpen(true)}
                    className="w-full py-4 rounded-2xl bg-[#050b17] border border-blue-900/60 hover:bg-blue-950 text-blue-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md transition-all"
                  >
                    <FileText className="w-4 h-4" /> View Official CV
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#0a1329] border border-blue-900/60 shadow-2xl relative">
                {contactSubmitted ? (
                  <div className="py-20 text-center space-y-5 animate-in fade-in duration-300">
                    <div className="w-20 h-20 rounded-full bg-[#22c55e]/20 border border-[#22c55e]/30 flex items-center justify-center text-[#22c55e] mx-auto shadow-xl">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, {formData.name}. I have received your inquiry regarding <span className="text-white font-semibold">{formData.service}</span> and will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <h4 className="text-2xl font-bold text-white mb-2">Send Me a Message</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2.5">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Your Name *</label>
                        <input 
                          type="text"
                          required
                          placeholder="e.g. Ram Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-5 py-4 rounded-2xl bg-[#050b17] border border-blue-900/60 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
                        />
                      </div>

                      <div className="space-y-2.5">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Email Address *</label>
                        <input 
                          type="email"
                          required
                          placeholder="e.g. ram@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-4 rounded-2xl bg-[#050b17] border border-blue-900/60 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
                        />
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Service Required</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl bg-[#050b17] border border-blue-900/60 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
                      >
                        <option value="Graphic Design">Graphic Design & Brand Identity</option>
                        <option value="Poster & Flex Design">Poster, Banner & Flex Design</option>
                        <option value="Video Editing">Video Editing & Reels / YouTube</option>
                        <option value="Other Creative Project">Other Creative Project</option>
                      </select>
                    </div>

                    <div className="space-y-2.5">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Project Details & Message *</label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="Describe your project, timeline, and requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl bg-[#050b17] border border-blue-900/60 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none shadow-inner"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2.5"
                    >
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050b17] border-t border-blue-950 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-blue-500/50 bg-slate-900 shadow-md">
              <img 
                src="/assets/aistudio/image_7171112c.png" 
                alt="Surendra SK"
                className="w-full h-full object-cover object-center scale-125"
              />
            </div>
            <span className="font-bold text-slate-200 text-sm">Surendra SK</span>
          </div>

          <p className="text-xs text-slate-400 flex items-center gap-1.5 justify-center">
            © {new Date().getFullYear()} Surendra SK. Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in Mahendranagar, Nepal.
          </p>

          <div className="flex items-center gap-5 text-xs font-semibold text-slate-400">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#050b17]/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-[#0a1329] border border-blue-900/60 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="relative aspect-[16/9] bg-[#050b17]">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover object-center"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-[#050b17]/80 border border-blue-900 text-slate-300 hover:text-white transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#050b17]/90 backdrop-blur-md border border-blue-900 text-blue-300 text-xs font-bold shadow-md">
                  {selectedProject.tag}
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-10 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">{selectedProject.title}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-5 border-y border-blue-950">
                <div className="p-3.5 rounded-2xl bg-[#050b17] border border-blue-900/40">
                  <div className="text-xs text-slate-400 uppercase font-semibold">Client / Context</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-1">{selectedProject.client}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#050b17] border border-blue-900/40">
                  <div className="text-xs text-slate-400 uppercase font-semibold">Impact & Results</div>
                  <div className="text-sm sm:text-base font-bold text-[#22c55e] mt-1">{selectedProject.metrics}</div>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="text-xs uppercase tracking-wider text-slate-400 font-bold">Tools & Software Used</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool: string, idx: number) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-[#050b17] border border-blue-900/60 text-xs font-semibold text-slate-300 shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3.5">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-xl bg-blue-950 hover:bg-blue-900 text-slate-200 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Close
                </button>
                <a 
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-blue-600/30"
                >
                  Inquire Similar Work
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CV / Resume Modal */}
      {cvModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#050b17]/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-[#0a1329] border border-blue-900/60 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200 p-8 sm:p-10 space-y-6">
            <div className="flex items-center justify-between pb-5 border-b border-blue-950">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 shadow-md">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Surendra SK - Official CV</h3>
                  <p className="text-xs text-slate-300 font-medium">Graphic Designer & Video Editor</p>
                </div>
              </div>
              <button 
                onClick={() => setCvModalOpen(false)}
                className="p-2.5 rounded-full bg-blue-950 text-slate-300 hover:text-white transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* CV Summary Box */}
            <div className="space-y-6 text-sm text-slate-300">
              <div className="p-5 rounded-2xl bg-[#050b17] border border-blue-900/60 space-y-3 shadow-inner">
                <div className="font-bold text-white text-base">Contact Information</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div>📍 Mahendranagar, Kanchanpur, Nepal</div>
                  <div>📅 Born: 2059 BS</div>
                  <div>📞 9763835839</div>
                  <div>✉️ surendrask2083@gmail.com</div>
                </div>
              </div>

              <div className="space-y-2.5">
                <h5 className="font-bold text-white text-base">Profile Summary</h5>
                <p className="text-slate-300 leading-relaxed">
                  Creative and detail-oriented Graphic Designer and Video Editor born in 2059 BS in Mahendranagar, Kanchanpur. Skilled in creating logos, posters, social media graphics and professionally edited videos. Eager to deliver clean, eye-catching work on time and grow with a dynamic team.
                </p>
              </div>

              <div className="space-y-2.5">
                <h5 className="font-bold text-white text-base">Skills Breakdown</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#050b17] border border-blue-900/60 shadow-sm">
                    <span className="text-blue-400 font-bold text-xs block mb-1.5 uppercase tracking-wider">Design Skills</span>
                    <p className="text-xs text-slate-300 leading-relaxed">Adobe Photoshop, Adobe Illustrator, Canva, Logo & Brand Design, Poster/Banner/Flex Design</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#050b17] border border-blue-900/60 shadow-sm">
                    <span className="text-cyan-400 font-bold text-xs block mb-1.5 uppercase tracking-wider">Video Editing</span>
                    <p className="text-xs text-slate-300 leading-relaxed">Adobe Premiere Pro, After Effects (basic), CapCut, Color Correction, Motion Graphics, Reels/YouTube Editing</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <h5 className="font-bold text-white text-base">Work Experience</h5>
                <div className="p-5 rounded-2xl bg-[#050b17] border border-blue-900/60 space-y-3 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white text-base">Graphic Designer & Video Editor</span>
                    <span className="text-xs font-bold text-blue-400 px-2.5 py-1 rounded-lg bg-blue-950">Freelance</span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">Mahendranagar, Kanchanpur</p>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                    <li>Designed posters, banners, and social media posts for local clients</li>
                    <li>Edited promotional videos, reels, and event videos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-blue-950 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a 
                href="/public/assets/aistudio/Surendra_SK_CV__1__fe5b9786.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-blue-600/30 transition-all"
              >
                <Download className="w-4 h-4" /> Download PDF CV
              </a>
              <button 
                onClick={() => setCvModalOpen(false)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-blue-950 hover:bg-blue-900 text-slate-200 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
