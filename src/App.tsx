import useToggleDarkMode from "./hooks/useToggleDarkMode"
import useAnimateInView from "./hooks/useAnimateInView"
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./components/Icons"

function App() {
  const { darkMode, toggleDarkMode } = useToggleDarkMode()

  const headerAnimation = useAnimateInView<HTMLHeadingElement>()
  const aboutAnimation = useAnimateInView<HTMLDivElement>({ threshold: 0.2 })
  const skillsAnimation = useAnimateInView<HTMLDivElement>({ threshold: 0.2 })
  const experienceAnimation = useAnimateInView<HTMLDivElement>({
    threshold: 0.2,
  })
  const projectsAnimation = useAnimateInView<HTMLDivElement>({ threshold: 0.2 })
  const contactAnimation = useAnimateInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 relative transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-3xl">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            Arjun Narzary
          </h1>
          <button
            className="p-2 text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md transition-colors"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <SunIcon size={24} /> : <MoonIcon size={24} />}
          </button>
        </header>

        <main>
          <section className="mb-12">
            <h2
              ref={headerAnimation.ref}
              className={`text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 transition-opacity duration-700 ${
                headerAnimation.isInView ? "opacity-100" : "opacity-0"
              }`}
            >
              Developer, Explorer, Creator
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-lg">
              I build digital experiences with a focus on clean code,
              performance, and usability.
            </p>
          </section>

          <section className="mb-12">
            <div
              ref={aboutAnimation.ref}
              className={`transition-all duration-700 ${
                aboutAnimation.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                About
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                I'm a passionate developer with a love for building intuitive
                applications and exploring new technologies. Currently focused
                on web development with React, TypeScript, and modern frontend
                tools.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300">
                When I'm not coding, you can find me exploring nature, reading,
                or experimenting with new tech stacks.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div
              ref={skillsAnimation.ref}
              className={`transition-all duration-700 ${
                skillsAnimation.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <SkillCategory
                  title="Frontend"
                  skills={[
                    "React",
                    "TypeScript",
                    "Next.js",
                    "Tailwind CSS",
                    "HTML/CSS",
                  ]}
                />
                <SkillCategory
                  title="Backend"
                  skills={[
                    "Node.js",
                    "Express",
                    "RESTful APIs",
                    "GraphQL",
                    "MongoDB",
                  ]}
                />
                <SkillCategory
                  title="Tools"
                  skills={["Git", "Docker", "Webpack", "Vite", "Figma"]}
                />
                <SkillCategory
                  title="Languages"
                  skills={["JavaScript", "TypeScript", "Python", "CSS", "SQL"]}
                />
                <SkillCategory
                  title="Testing"
                  skills={[
                    "Jest",
                    "React Testing Library",
                    "Cypress",
                    "Vitest",
                  ]}
                />
                <SkillCategory
                  title="Other"
                  skills={[
                    "UI/UX",
                    "Responsive Design",
                    "Performance Optimization",
                    "SEO",
                  ]}
                />
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div
              ref={experienceAnimation.ref}
              className={`transition-all duration-700 ${
                experienceAnimation.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Experience
              </h3>
              <div className="space-y-6">
                <ExperienceItem
                  title="Senior Frontend Developer"
                  company="Tech Innovations Inc."
                  period="2021 - Present"
                  description="Leading frontend development for enterprise applications. Architected and implemented scalable React applications. Mentored junior developers and established coding standards."
                />
                <ExperienceItem
                  title="Frontend Developer"
                  company="Digital Solutions"
                  period="2018 - 2021"
                  description="Developed responsive web applications using React, TypeScript, and modern CSS frameworks. Collaborated with design and backend teams to deliver high-quality products."
                />
                <ExperienceItem
                  title="Web Developer"
                  company="Creative Web Studios"
                  period="2016 - 2018"
                  description="Built client websites and web applications. Worked with HTML, CSS, JavaScript, and various CMS platforms."
                />
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div
              ref={projectsAnimation.ref}
              className={`transition-all duration-700 ${
                projectsAnimation.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProjectCard
                  title="Project One"
                  description="A full-stack application with React and Node.js"
                  link="https://github.com"
                />
                <ProjectCard
                  title="Project Two"
                  description="Mobile app built with React Native"
                  link="https://github.com"
                />
                <ProjectCard
                  title="Project Three"
                  description="UI component library with TypeScript"
                  link="https://github.com"
                />
                <ProjectCard
                  title="Project Four"
                  description="Machine learning experiment with Python"
                  link="https://github.com"
                />
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div
              ref={contactAnimation.ref}
              className={`transition-all duration-700 ${
                contactAnimation.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Get in touch
              </h3>
              <div className="flex flex-wrap gap-4">
                <SocialLink
                  name="GitHub"
                  icon={<GitHubIcon size={18} />}
                  link="https://github.com"
                />
                <SocialLink
                  name="Twitter"
                  icon={<TwitterIcon size={18} />}
                  link="https://twitter.com"
                />
                <SocialLink
                  name="LinkedIn"
                  icon={<LinkedInIcon size={18} />}
                  link="https://linkedin.com"
                />
                <SocialLink
                  name="Email"
                  icon={<MailIcon size={18} />}
                  link="mailto:contact@example.com"
                />
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-sm">
          <p>
            © {new Date().getFullYear()} Arjun Narzary. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

interface SkillCategoryProps {
  title: string
  skills: string[]
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
      <h4 className="text-lg font-bold text-black dark:text-white mb-2">
        {title}
      </h4>
      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="text-neutral-700 dark:text-neutral-300 text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
}

function ExperienceItem({
  title,
  company,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4 py-1">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
        <h4 className="text-lg font-bold text-black dark:text-white">
          {title}
        </h4>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {period}
        </span>
      </div>
      <div className="mb-2 font-medium text-neutral-700 dark:text-neutral-300">
        {company}
      </div>
      <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  link: string
}

function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
    >
      <h4 className="text-lg font-bold text-black dark:text-white mb-2">
        {title}
      </h4>
      <p className="text-neutral-700 dark:text-neutral-300">{description}</p>
    </a>
  )
}

interface SocialLinkProps {
  name: string
  link: string
  icon: React.ReactNode
}

function SocialLink({ name, link, icon }: SocialLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
    >
      {icon}
      <span>{name}</span>
    </a>
  )
}

export default App
