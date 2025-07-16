"use client"

import { useState, useRef, useEffect } from "react"
import {
  Book, Code, Smartphone, Pen, Database,
  Mail, Linkedin, MapPin, ChevronDown
} from "lucide-react"


const sections = ["about", "skills", "resume", "projects"]

const NavLink = ({ href, children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`text-base transition-colors ${active ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
  >
    {children}
  </button>
)

const ScrollNav = ({ activeSection, setActiveSection }) => (
  <header className="fixed top-0 left-0 right-0 z-50">
    <div className="container mx-auto px-4">
      <nav className="mt-4 w-[80%] mx-auto rounded-full bg-zinc-900/30 backdrop-blur-md border border-white/10 px-2 h-15">
        <div className="flex items-center justify-between">
          <img src="/pp.png" alt="Profile" className="w-18 h-16 rounded-full" />
          <div className="flex-1 flex justify-center gap-8 text-2xl">
            {sections.map((sec) => (
              <NavLink key={sec} active={activeSection === sec} onClick={() => document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth' })}>
                {`</ ${sec.charAt(0).toUpperCase() + sec.slice(1)}>`}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  </header>
)

const Sidebar = () => (
  <aside className="fixed left-8 top-32 w-72 bg-zinc-900/30 backdrop-blur-md border border-white/10 text-white rounded-3xl p-8 flex flex-col items-center">
    <div className="relative">
      <img src="/pp2.jpg" alt="Profile" className="w-32 h-32 rounded-2xl" />
    </div>
    <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-400 mb-8">Vedika Kolap</h2>
    <div className="bg-zinc-800/50 px-4 py-1.5 rounded-full text-base mt-2">Full Stack Developer</div>
    <div className="w-full mt-8 space-y-6">
      <div className="flex items-center gap-4">
        <Mail className="text-purple-400" />
        <span className="text-base text-gray-300">vedikak18@gmail.com</span>
      </div>
      <div className="flex items-center gap-4">
        <Linkedin className="text-purple-400" />
        <a href="https://linkedin.com/in/vedikakolap" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 truncate">
          linkedin.com/in/vedikakolap
        </a>
      </div>
      <div className="flex items-center gap-4">
        <MapPin className="text-purple-400" />
        <span className="text-base text-gray-300">Mumbai, India</span>
      </div>
    </div>
  </aside>
)

const SectionWrapper = ({ id, children }) => (
  <section id={id} className="py-20 px-6 md:px-16">
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
)

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-zinc-900/30 rounded-xl p-6 hover:bg-zinc-800/50 transition-all duration-300">
    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
      <Icon className="text-purple-400" size={24} />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-base text-gray-300 leading-relaxed">{description}</p>
  </div>
)

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="space-y-12">
      <div className="flex justify-between items-start flex-col md:flex-row">
        <div className="md:w-3/4">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-400 mb-8">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m Vedika Kolap, an MCA graduate turned UI/UX designer with a strong passion for crafting intuitive, user-first digital experiences. My background in computer applications helps me bridge the gap between design and technology, ensuring every product I work on is both visually appealing and functionally sound.

With hands-on experience in creating responsive web designs, mobile interfaces, and end-to-end user flows, I focus on turning complex problems into elegant, accessible solutions.


          </p>

          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            📍 Based in India
            🌍 Open to remote roles worldwide


          </p>
        </div>

        <a
          href="/Vedika_Kolap_Resume.pdf"
          download
          className="bg-purple-500 text-white font-semibold px-3 py-2 rounded-xl mt-4 md:mt-0 hover:bg-purple-600 hover:scale-105 hover:shadow-lg transition-transform duration-300"
        >
          Download Resume
        </a>
      </div>

      <div>
      <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-400 mb-8">
          What I'm Doing
      </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            icon={Smartphone}
            title="Mobile Apps"
            description="Professional development of applications for Android and iOS."
          />
          <ServiceCard
            icon={Code}
            title="Web Development"
            description="High-quality development of sites at the professional level."
          />
          <ServiceCard
            icon={Pen}
            title="UI / UX"
            description="The most modern and high-quality design made at a professional level."
          />
          <ServiceCard
            icon={Database}
            title="Database Management"
            description="High-performance backend services designed for scalability and seamless user experience."
          />
        </div>
      </div>
    </div>
  </SectionWrapper>
)




const SkillsSection = () => {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "React", "Typescript", "Tailwind"] },
    { category: "Backend", items: ["Java", "PostgreSQL"] },
    { category: "Mobile", items: ["Android Studio (Java/Kotlin)"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman","Notion" ] },
    { category: "Design", items: ["Figma", "Wix", "Wireframing", "Prototyping","User Flows"] }
  ]

  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-400 mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((group, idx) => (
          <div key={idx} className="bg-zinc-900/30 p-4 rounded-xl">
            <h3 className="text-white text-xl mb-2">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <span key={i} className="text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full text-sm">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

const ResumeSection = () => {
  const experience = [
    { title: "Jr. Full Stack Developer", subtitle: "Vsure Consultancy", date: "May 2025 - Present" },

    { title: "Full Stack Developer Intern", subtitle: "Vsure Consultancy", date: "Nov 2024 - May 2025" },
    { title: "Freelance", subtitle: "For UI / UX", date: "Nov 2024 - May 2025" }

  ];

  const education = [
    { title: "Master's in Computer Application (MCA) | CGPA: 8.20 / 10", subtitle: "Bharati Vidyapeeth, Navi Mumbai", date: "2023 — 2025" },
    { title: "Bachelor’s of Computer Science (BSc IT) | CGPA: 9.47 / 10", subtitle: "BK Birla College, Kalyan", date: "2020 — 2023" },

  ];

  const TimelineItem = ({ title, subtitle, date, last }) => (
    <div className="relative pl-8 pb-8">
      {!last && <div className="absolute left-[7px] top-3 bottom-0 w-[2px] bg-zinc-700" />}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-purple-400" />
      <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-400">{subtitle}</p>
      <p className="text-sm text-purple-400 mt-1">{date}</p>
    </div>
  );

  const TimelineBlock = ({ title, items }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-white mb-6">{title}</h2>
      <div>
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} last={index === items.length - 1} />
        ))}
      </div>
    </div>
  );

  return (
    <SectionWrapper id="resume">
      <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-400 mb-8">Resume</h2>
      <TimelineBlock title="Experience" items={experience} />
      <TimelineBlock title="Education" items={education} />
    </SectionWrapper>
  );
};



function ProjectsSection() {
  const projects = [
    {
      title: "Kouriex",
      subtitle: "Built using wix",
      image: "/project7.png",
      link: "https://www.kourierx.com/",
    },
    {
      title: "Capitor Venture",
      subtitle: "Built using wix",
      image: "/project5.png",
      link: "https://www.capitorventures.com/",
    },
    {
      title: "Capitor Infra",
      subtitle: "Built using wix",
      image: "/project6.png",
      link: "https://www.capitorinfra.com/",
    },
    {
      title: "Personal Portfolio",
      subtitle: "Next.js and TypeScript, using Tailwind CSS for styling",
      image: "/project4.png",
      link: "https://vedika-kolap.vercel.app",
    },
    {
      title: "Anvex Insight..",
      subtitle: "Working on website....",
      image: "/progress.png",
      link: "",
    }
  ];

  return (
    <div id="projects" className="space-y-8">
      <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-400 mb-8">Projects</h2>
      <div className="w-16 h-1 bg-purple-400 mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target={project.link.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="bg-zinc-900/30 p-4 rounded-3xl hover:bg-zinc-800/50 transition flex flex-col justify-between"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <div className="bg-zinc-900/30 p-4 rounded-xl hover:bg-zinc-800 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <h3 className="text-white text-xl mb-1 group-hover:underline">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
            </div>
            <div className="flex items-center gap-2 text-purple-400 text-sm font-medium mt-auto">
              <span>View Project</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}



export default function OnePagePortfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const observer = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
 return (
  <div className="min-h-screen bg-gradient-to-br from-[#0d0d14] to-[#1a1428] text-white relative">
    <ScrollNav activeSection={activeSection} setActiveSection={setActiveSection} />
    <Sidebar />

    {/* Glass container wrapping main content */}
    <div className="ml-[300px] pt-32 pr-10 pl-10 pb-10">
      <div className="bg-zinc-900/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 space-y-20">
  
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        <ProjectsSection />
      </div>
    </div>
  </div>
)

}
