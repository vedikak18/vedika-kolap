"use client"

import { useState } from "react"
import { Book, Code, PhoneIcon, Linkedin,Smartphone, Pen, Database } from "lucide-react"

function ProjectCard({ title, subtitle, image, link }) {
  const isExternal = link && link.startsWith("http");
  const Wrapper = ({ children }) =>
    link ? (
      <a
        href={link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block"
      >
        {children}
      </a>
    ) : (
      <div>{children}</div>
    );

  return (
    <Wrapper>
      <div className="group relative bg-zinc-900/30 rounded-3xl overflow-hidden cursor-pointer hover:bg-zinc-800/50 transition-all duration-300">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-base text-gray-300 mb-4">{subtitle}</p>
          <div className="flex items-center gap-2 text-purple-400">
            <span>View Project</span>
            <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" viewBox="0 0 16 16" fill="none">
              <path d="M1 8h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-zinc-900/30 rounded-xl p-6 hover:bg-zinc-800/50 transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
        <Icon className="text-purple-400" size={24} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-base text-gray-300 leading-relaxed">{description}</p>
    </div>
  )
}

function AboutSection() {
  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-8">About Me</h1>
          <div className="w-16 h-1 bg-purple-400 mb-8" />
        </div>
        
        <a
          href="/Resume_vedika.pdf" // Update this with the actual path to your resume
          download
          className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition"
        >
          Download Resume
        </a>
      </div>

      <div className="space-y-6">
        <p className="text-lg text-gray-300 leading-relaxed">
          A passionate and detail-oriented software developer with expertise in Java, SQL, and
          UI/UX design. Skilled in building efficient applications, working with databases, 
          and enhancing user experiences. Experienced in developing interactive applications,
          designing intuitive user interfaces, and implementing scalable solutions. 
          Adept at working with modern development tools and frameworks to create 
          high-quality software.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          If you're looking for a dedicated developer who can bring innovation and precision 
          to your project, I’m here to collaborate and deliver exceptional results. 
          Let’s build something remarkable together!
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-white mb-8">What I'm Doing</h2>
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
  )
}


function ProjectsSection() {
  const projects = [
    {
      title: "Electricity Billing System",
      subtitle: "Using Java, Mysql",
      image: "/project1.jpeg",
      link: "#",
    },
    {
      title: "Ebike Android App",
      subtitle: "Using Java, firebase, html, css",
      image: "/project2.jpg",
      link: "#",
    },
    {
      title: "Power Generation and Piezo Technology",
      subtitle: "Using IOT Components",
      image: "/project3.jpg",
      link: "#",
    },
    {
      title: "Personal Portfolio",
      subtitle: "Next.js and TypeScript, using Tailwind CSS for styling",
      image: "/project4.png",
      link: "https://vedika-kolap.vercel.app",
    },
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
      title: "Anvex Insight..",
      subtitle: "Working on website....",
      image: "",
      link: "Using React",
    },
 
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-8">Projects</h1>
      <div className="w-16 h-1 bg-purple-400 mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

const TimelineItem = ({ title, subtitle, date, last }) => (
  <div className="relative pl-8 pb-8">
    {!last && <div className="absolute left-[7px] top-3 bottom-0 w-[2px] bg-zinc-800" />}
    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-purple-400" />
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-lg text-gray-300 mb-1">{subtitle}</p>
    <p className="text-base text-purple-400">{date}</p>
  </div>
)

const ResumeSection = ({ title, items }) => {
  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center gap-3 mb-8">
        <Book className="text-purple-300" size={28} />
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
      </div>
      <div>
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            title={<span className="text-xl text-white-100">{item.title}</span>}
            subtitle={<span className="text-lg text-gray-400">{item.subtitle}</span>}
            date={<span className="text-base text-gray-500">{item.date}</span>}
            last={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="fixed left-8 top-32 w-72 bg-zinc-900/30 backdrop-blur-md border border-white/10 text-white rounded-3xl p-8 flex flex-col items-center">
      <div className="relative">
        <div className="w-30 h-30 bg-zinc-800 rounded-3xl flex items-center justify-center">
          <img src="/pp2.jpg" alt="Profile" className="w-32 h-32 rounded-2xl" />
        </div>
        <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-zinc-800" />
      </div>

      <h2 className="text-2xl font-semibold mt-4">Vedika Kolap</h2>
      <div className="bg-zinc-800/50 px-4 py-1.5 rounded-full text-base mt-2">Full Stack Developer</div>

      <div className="w-full mt-8 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
            <span className="text-purple-500">📧</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 uppercase">EMAIL</span>
            <span className="text-base text-gray-300">vedikak18@gmail.com</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
            <span className="text-purple-500">💼</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 uppercase">LINKEDIN</span>
            <a
              href="https://www.linkedin.com/in/vedikakolap/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-gray-300 hover:text-purple-400 transition-colors truncate"
            >
              linkedin.com/in/vedikakolap/
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
            <span className="text-purple-500">📍</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 uppercase">LOCATION</span>
            <span className="text-base text-gray-300">Mumbai, India</span>
          </div>
        </div>
      </div>
    </aside>
  )
}


function NavLink({ href, children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-base transition-colors ${active ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
    >
      {children}
    </button>
  )
}

function SkillsSection() {
  const skills = [
    {
      category: "Frontend Development",
      items: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend Development",
      items: ["Java", "PostgreSQL"],
    },
    {
      category: "Mobile Development",
      items: ["Android Studio Development"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "GitHub", "VS Code", "Figma", "Framer", "Wix", "Dora", "Canva"],
    },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-8">Skills</h1>
      <div className="w-16 h-1 bg-purple-400 mb-8" />

      <div className="grid grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-zinc-900/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-purple-400" size={20} />
              <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <span key={skillIndex} className="bg-purple-500/10 text-purple-400 px-4 py-1.5 rounded-full text-base">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  const experience = [
    {
      title: "Full Stack Developer",
      subtitle: "Vsure Consultancy Services",
      date: "November - Present",
    },
  ]

  const education = [
    {
      title: "Master's in Computer Application (MCA) | Pursuing",
      subtitle: "Bharati Vidyapeeth Institute of Management and Information Technology, Navi Mumbai",
      date: "2023 — 2025",
    },
    {
      title: " Bachelor’s of Computer Science (Bsc IT) | CGPA: 9.47/10",
      subtitle: "B.K Birla college of Arts, Science and Commerce, Kalyan",
      date: "2020 — 2023",
    },
    {
      title: "Higher Secondary Certificate (HSC) | Percent: 53.38% ",
      subtitle: "B.K Birla college of Arts, Science and Commerce, Kalyan",
      date: "2019 — 2020",
    },
    {
      title: "Secondary School Certificate (SSC) | Percent: 73% ",
      subtitle: "Lourdes High School, Kalyan ",
      date: "2017 — 2018",
    },
  ]

  const Certifications = [
    {
      title: "Certification in Programming in JAVA from NPTEL.",
    },
    {
      title: "Computer Graphics ‘A Grade” ",
    },
    {
      title: "Linux administration - Udemy ",
    },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "skills":
        return <SkillsSection />
      case "about":
        return <AboutSection />
      case "projects":
        return <ProjectsSection />
      default:
        return (
          <>
            <h1 className="text-3xl font-bold text-white mb-8">Resume</h1>
            <div className="w-16 h-1 bg-purple-400 mb-14" />
            <ResumeSection title="Experience" items={experience} />
            <ResumeSection title="Education" items={education} />
            <ResumeSection title="Certifications" items={Certifications} />
          </>
        )
    }
  }

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-br from-[#0d0d14] to-[#1a1428]" />

      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="mt-4 w-[80%] mx-auto rounded-full bg-zinc-900/30 backdrop-blur-md border border-white/10 px-2 h-15">
            <div className="flex items-center justify-between">
              <img src="/pp.png" alt="Profile" className="w-18 h-16 rounded-full" />

              <div className="flex-1 flex justify-center gap-8 text-2xl">
                <NavLink active={activeSection === "about"} onClick={() => setActiveSection("about")}>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    {`</ About me>`}
                  </span>
                </NavLink>
                <NavLink active={activeSection === "skills"} onClick={() => setActiveSection("skills")}>
                  {`</ Skills>`}
                </NavLink>
                <NavLink active={activeSection === "Resume"} onClick={() => setActiveSection("Resume")}>
                  {'</ Resume>'}
                </NavLink>
                <NavLink active={activeSection === "projects"} onClick={() => setActiveSection("projects")}>
                  {`</ Projects>`}
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <Sidebar />

      {/* Adjusted main container positioning */}
      <main className="relative z-10 pl-[300px] pt-32">
        <div className="max-w-[calc(100vw-380px)] mx-auto">
          <div className="rounded-3xl bg-zinc-900/30 backdrop-blur-lg border border-zinc-800 p-10">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  )
}
