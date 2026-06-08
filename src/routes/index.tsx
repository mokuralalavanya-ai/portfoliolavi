import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Mail, MapPin, Download, Github, Linkedin, Twitter, ArrowUpRight,
  Code2, Sparkles, GraduationCap, Award, Send, Cpu, Database, Palette,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import heroOrb from "@/assets/hero-orb.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M Lavanya — IT Student & Frontend Developer" },
      { name: "description", content: "Portfolio of M Lavanya — IT engineering student, frontend developer, and AI enthusiast based in Hyderabad." },
      { property: "og:title", content: "M Lavanya — IT Student & Frontend Developer" },
      { property: "og:description", content: "Portfolio of M Lavanya — IT engineering student, frontend developer, and AI enthusiast based in Hyderabad." },
    ],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const skills = [
  { name: "C", level: 85, group: "Languages" },
  { name: "Python", level: 80, group: "Languages" },
  { name: "Java", level: 55, group: "Languages" },
  { name: "HTML", level: 92, group: "Web" },
  { name: "CSS", level: 88, group: "Web" },
  { name: "JSP", level: 70, group: "Web" },
  { name: "SQL", level: 60, group: "Tools" },
  { name: "Power BI", level: 55, group: "Tools" },
];

const projects = [
  {
    title: "Campus Election Hub",
    tag: "Web App",
    desc: "A platform to manage and streamline campus election activities — candidate registration, secure voting, and real-time result tracking.",
    stack: ["HTML", "CSS", "JSP", "SQL"],
    accent: "from-fuchsia-500/40 to-purple-500/10",
  },
  {
    title: "College Website",
    tag: "Responsive Site",
    desc: "A fully responsive college website designed with clean structure, accessibility, and engaging visuals for students and faculty.",
    stack: ["HTML", "CSS", "JSP"],
    accent: "from-cyan-500/40 to-blue-500/10",
  },
];

const education = [
  { year: "2022 – Present", title: "B.Tech, Information Technology", place: "Bhoj Reddy Engineering College for Women", score: "CGPA 8.31" },
  { year: "2020 – 2022", title: "Intermediate (MPC)", place: "Board of Intermediate Education", score: "97%" },
  { year: "2019 – 2020", title: "SSC", score: "100%" },
];

const certs = [
  { title: "AI Azure Internship", by: "Edunet Foundation × AICTE" },
  { title: "Artificial Intelligence Fundamentals", by: "IBM SkillsBuild" },
  { title: "Blind Coding Participation", by: "JIJNASA Tech Event" },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[40rem] w-[40rem] rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40rem] w-[40rem] rounded-full bg-secondary/25 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/3 right-1/4 h-[25rem] w-[25rem] rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
      </div>

      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = ["About", "Skills", "Projects", "Education", "Contact"];
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(96%,1100px)]">
      <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight flex items-center gap-2">
          <span className="inline-block h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-secondary glow" />
          <span className="text-gradient">M. Lavanya</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-foreground transition">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="text-xs md:text-sm rounded-full px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:opacity-90 transition">
          Hire Me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="lg:col-span-7 space-y-6">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Available for internships & collaborations
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Lavanya</span> <br />
            crafting the web with <span className="text-gradient">code & curiosity</span>.
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            IT engineering student, frontend developer, and AI enthusiast based in Hyderabad — turning ideas into clean, responsive, intelligent experiences.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#projects" className="rounded-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:opacity-90 transition inline-flex items-center gap-2">
              View My Work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="/resume.pdf" download className="glass rounded-full px-6 py-3 font-medium hover:bg-white/10 transition inline-flex items-center gap-2">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
          <div className="flex gap-6 pt-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Hyderabad, Telangana</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /><span>lavanyamokurala@gmail.com</span></span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />
            <div className="glass relative rounded-[2rem] p-6 overflow-hidden animate-float">
              <img src={heroOrb} alt="" width={1024} height={1024} className="w-full h-full object-cover rounded-2xl mix-blend-screen opacity-90" />
              <div className="absolute top-6 left-6 glass rounded-xl px-3 py-2 text-xs">
                <div className="text-muted-foreground">Currently</div>
                <div className="font-semibold">B.Tech IT · 8.31 CGPA</div>
              </div>
              <div className="absolute bottom-6 right-6 glass rounded-xl px-3 py-2 text-xs">
                <div className="text-muted-foreground">Stack</div>
                <div className="font-semibold">React · Python · AI</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* stats */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="max-w-5xl mx-auto mt-20 glass rounded-3xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { k: "8.31", v: "B.Tech CGPA" },
          { k: "97%", v: "Intermediate" },
          { k: "100%", v: "SSC Score" },
          { k: "3+", v: "Certifications" },
        ].map((s) => (
          <div key={s.v} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient">{s.k}</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.v}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">{eyebrow}</div>
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
      {desc && <p className="text-muted-foreground mt-4">{desc}</p>}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="About Me" title="A curious builder, learning by shipping." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Code2, title: "Frontend Developer", body: "Crafting responsive, accessible interfaces with HTML, CSS and modern JavaScript frameworks." },
            { icon: Sparkles, title: "AI Enthusiast", body: "Exploring AI fundamentals through IBM SkillsBuild and Azure-based internship projects." },
            { icon: Cpu, title: "Problem Solver", body: "Strong base in C and Python with a focus on clean logic and structured thinking." },
          ].map((c, i) => (
            <motion.div key={c.title} initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { duration: 0.6, delay: i * 0.1 } } }}
              className="glass rounded-2xl p-6 hover:-translate-y-1 transition">
              <c.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.body}</p>
            </motion.div>
          ))}
        </div>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-12 leading-relaxed">
          "Seeking a position in a dynamic organization where I can learn, grow, and contribute using my technical and problem-solving skills."
        </motion.p>
      </div>
    </section>
  );
}

function Skills() {
  const groups = ["Languages", "Web", "Tools"];
  return (
    <section id="skills" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="Skills" title="Tools I work with" desc="Languages, web technologies and productivity tools I use to bring ideas to life." />
        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                {g === "Languages" && <Code2 className="h-5 w-5 text-primary" />}
                {g === "Web" && <Palette className="h-5 w-5 text-secondary" />}
                {g === "Tools" && <Database className="h-5 w-5 text-accent" />}
                <h3 className="font-semibold">{g}</h3>
              </div>
              <div className="space-y-4">
                {skills.filter((s) => s.group === g).map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span>{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="Projects" title="Selected work" desc="A look at the things I've designed and built so far." />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article key={p.title} initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { duration: 0.6, delay: i * 0.1 } } }}
              className="glass group rounded-3xl overflow-hidden hover:-translate-y-1 transition relative">
              <div className={`h-44 bg-gradient-to-br ${p.accent} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
                <div className="absolute bottom-4 left-5 text-xs uppercase tracking-widest glass rounded-full px-3 py-1">{p.tag}</div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                  <span className="rounded-full bg-white/10 p-2 group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-3">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs rounded-full glass px-3 py-1 text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <SectionTitle eyebrow="Education" title="Academic journey" />
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
          {education.map((e, i) => (
            <motion.div key={e.title} initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { duration: 0.6, delay: i * 0.1 } } }}
              className="relative mb-8 glass rounded-2xl p-6">
              <span className="absolute -left-[26px] md:-left-[34px] top-7 h-3 w-3 rounded-full bg-gradient-to-br from-primary to-secondary glow" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold text-lg">{e.title}</h3>
                <span className="text-xs text-muted-foreground">{e.year}</span>
              </div>
              {e.place && <p className="text-sm text-muted-foreground mt-1">{e.place}</p>}
              <p className="mt-2 text-sm text-gradient font-semibold">{e.score}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="Certifications" title="Learning never stops" />
        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.div key={c.title} initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { duration: 0.6, delay: i * 0.1 } } }}
              className="glass rounded-2xl p-6 hover:-translate-y-1 transition">
              <Award className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{c.by}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setSending(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-5xl mx-auto glass rounded-3xl p-8 md:p-14 relative overflow-hidden">
        <div className="relative grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="Let's build something."
            />

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                lavanyamokurala@gmail.com
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                Hyderabad, Telangana
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-4"
          >
            <input
              name="user_name"
              required
              placeholder="Your name"
              className="w-full glass rounded-xl px-4 py-3"
            />

            <input
              name="user_email"
              type="email"
              required
              placeholder="Your email"
              className="w-full glass rounded-xl px-4 py-3"
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message"
              className="w-full glass rounded-xl px-4 py-3"
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-xl px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center text-sm">
                {status}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-10 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} M. Lavanya — Designed & built with care.
    </footer>
  );
}
