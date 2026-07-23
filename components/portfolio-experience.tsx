"use client";

import { motion } from "framer-motion";
import Lenis from "lenis";
import {
  ArrowUpRight,
  Check,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Send,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = ["Projects", "Services", "About", "Contact"];

const capabilities = [
  "Full-stack web apps",
  "Java backend systems",
  "Spring Boot APIs",
  "Hibernate ORM",
  "React interfaces",
  "Node.js APIs",
  "MongoDB systems",
  "MySQL databases",
  "Admin dashboards",
];

const projects = [
  {
    name: "Sports Turf Booking System",
    type: "SaaS / Booking",
    year: "2026",
    summary:
      "A turf booking product with customer scheduling, owner controls, slot availability, auth, and database-backed booking flows.",
    tags: ["React", "Node", "MongoDB", "Dashboard"],
  },
  {
    name: "Spring Boot Backend API",
    type: "Java / Backend",
    year: "2026",
    summary:
      "A practice backend service with layered architecture, REST endpoints, DTOs, validation, Hibernate mappings, and MySQL persistence.",
    tags: ["Java", "Spring Boot", "Hibernate", "MySQL"],
  },
  {
    name: "Local to Vocal",
    type: "Marketplace",
    year: "2025",
    summary:
      "A local-business discovery platform concept for vendor profiles, listings, search, and small-business onboarding.",
    tags: ["Product UI", "Firebase", "Search", "Maps"],
  },
  {
    name: "Netflix UI Clone",
    type: "Experience UI",
    year: "2025",
    summary:
      "A responsive streaming interface study focused on high-impact layout, hover behavior, content grids, and API data.",
    tags: ["React", "API", "Responsive", "Motion"],
  },
  {
    name: "Spotify UI Clone",
    type: "Dashboard",
    year: "2025",
    summary:
      "A music-product dashboard with sidebar navigation, player controls, playlist layouts, and reusable UI surfaces.",
    tags: ["JavaScript", "CSS", "Components", "UX"],
  },
  {
    name: "Personal Blog Website",
    type: "Content System",
    year: "2026",
    summary:
      "A clean technical writing space for learning notes, engineering breakdowns, and project documentation.",
    tags: ["Next.js", "Markdown", "SEO", "Writing"],
  },
];

const services = [
  {
    title: "Design-first frontend",
    text:
      "I build clean, responsive interfaces with clear hierarchy, strong spacing, sharp typography, and states that feel finished.",
  },
  {
    title: "Full-stack product builds",
    text:
      "I can connect React screens to Node APIs, MongoDB collections, auth flows, admin dashboards, and practical CRUD logic.",
  },
  {
    title: "Java backend foundations",
    text:
      "I am building backend depth with Java, Spring Boot, Hibernate, REST APIs, service layers, repositories, validation, and MySQL.",
  },
  {
    title: "Case-study polish",
    text:
      "I turn student projects into recruiter-readable stories with scope, stack, decisions, screenshots, outcomes, and next steps.",
  },
  {
    title: "Fast prototype cycles",
    text:
      "I prefer quick versions, honest feedback, and visible progress over vague perfection. Ship, learn, tighten, repeat.",
  },
];

const stats = [
  ["18+", "repositories"],
  ["5", "featured builds"],
  ["8", "core technologies"],
  ["48h", "prototype sprint"],
];

const stack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Spring",
  "Spring Boot",
  "Hibernate",
  "REST APIs",
  "MongoDB",
  "MySQL",
  "Python",
  "Java",
  "C++",
  "Tailwind",
];

const certs = [
  "NoSQL Ninjas MongoDB Edition - GDG VIT-AP",
  "NoSQL Ninjas MongoDB Edition - Microsoft Student Chapter MSIT",
  "AWS Cloud Practitioner - Currently Pursuing",
  "Responsive Web Design - Practice Track",
];

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-[0.28em] text-hobroPink">{children}</p>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="max-w-6xl text-5xl font-black uppercase leading-[0.86] tracking-tight text-white sm:text-7xl lg:text-8xl">
      {children}
    </h2>
  );
}

function DeckVisual() {
  return (
    <div className="relative min-h-[520px] overflow-hidden border border-white/12 bg-[#111] p-5">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-hobroPink blur-[90px]" />
      <div className="absolute -bottom-20 left-8 h-64 w-64 rounded-full bg-[#f7b500]/60 blur-[100px]" />
      <div className="relative grid h-full gap-4">
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="ml-auto w-[78%] border border-white/15 bg-black/80 p-5"
        >
          <p className="font-mono text-xs uppercase text-white/45">Capability card 01</p>
          <h3 className="mt-8 text-5xl font-black uppercase leading-none text-white">Design systems</h3>
        </motion.div>
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[82%] border border-white/15 bg-hobroPink p-5 text-black"
        >
          <p className="font-mono text-xs uppercase">Capability card 02</p>
          <h3 className="mt-8 text-5xl font-black uppercase leading-none">Full-stack apps</h3>
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="ml-10 border border-white/15 bg-white p-5 text-black"
        >
          <p className="font-mono text-xs uppercase text-black/45">Capability card 03</p>
          <h3 className="mt-8 text-5xl font-black uppercase leading-none">Recruiter-ready</h3>
        </motion.div>
      </div>
    </div>
  );
}

function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      dotRef.current?.style.setProperty("--cursor-x", `${x}px`);
      dotRef.current?.style.setProperty("--cursor-y", `${y}px`);
      ringRef.current?.style.setProperty("--cursor-x", `${x}px`);
      ringRef.current?.style.setProperty("--cursor-y", `${y}px`);
      glowRef.current?.style.setProperty("--cursor-x", `${x}px`);
      glowRef.current?.style.setProperty("--cursor-y", `${y}px`);
    };

    const updateActive = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest("a, button, input, textarea, [data-cursor='active']")));
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", updateActive);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", updateActive);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div ref={ringRef} className={active ? "cursor-ring cursor-ring-active" : "cursor-ring"} />
      <div ref={dotRef} className={active ? "cursor-dot cursor-dot-active" : "cursor-dot"} />
    </>
  );
}

export default function PortfolioExperience() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-hobroBlack text-white">
      <CustomCursor />
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-hobroBlack/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center bg-white text-xl font-black text-black">R</span>
            <span className="hidden font-mono text-xs uppercase tracking-[0.24em] text-white/55 sm:block">
              Ritesh Pawar
            </span>
          </a>
          <div className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.2em] text-white/55 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a href="/resume.pdf">
              <Button variant="ghost">
                Resume <Download size={15} />
              </Button>
            </a>
            <a href="#contact">
              <Button>Contact</Button>
            </a>
          </div>
          <button
            aria-label="Toggle navigation"
            className="grid h-11 w-11 place-items-center border border-white/15 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <div className="grid border-t border-white/10 bg-hobroBlack px-5 py-2 md:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-4 font-mono text-xs uppercase tracking-[0.24em]"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="px-5 pb-16 pt-32 sm:px-8 lg:pb-24 lg:pt-40">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Kicker>Design-first full-cycle developer</Kicker>
            <h1 className="mt-7 max-w-6xl text-[17vw] font-black uppercase leading-[0.78] tracking-[-0.075em] text-white sm:text-[118px] lg:text-[154px]">
              I build digital products with strategy, code and taste.
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-8"
          >
            <p className="max-w-xl text-xl leading-8 text-white/62">
              I am Ritesh Shantaram Pawar, a Computer Engineering student building polished web apps, Java backend services,
              Spring Boot APIs, dashboards, case studies, and recruiter-ready product experiences.
            </p>
            <div className="grid gap-px bg-white/12 sm:grid-cols-2">
              {stats.map(([value, label]) => (
                <div key={label} className="bg-hobroBlack p-5">
                  <p className="text-4xl font-black text-hobroPink">{value}</p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-white/45">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-[1500px]">
          <DeckVisual />
        </div>
      </section>

      <section className="border-y border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-[1500px] flex-wrap gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-[0.24em] text-white/52">
          {capabilities.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <SectionTitle>Selected projects with product-level framing.</SectionTitle>
            <p className="text-lg leading-8 text-white/58">
              I present work like a digital agency would: what it is, what it solves, what I handled, and why it matters.
            </p>
          </div>
          <div className="mt-16 grid gap-px bg-white/10">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href="https://github.com/Riteshpawar01"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.04 }}
                className="group grid gap-6 bg-hobroBlack p-5 transition hover:bg-white hover:text-black md:grid-cols-[1fr_160px_300px] md:p-8"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-hobroPink">{project.type}</p>
                  <h3 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">{project.name}</h3>
                  <p className="mt-5 max-w-3xl leading-7 text-white/58 group-hover:text-black/62">{project.summary}</p>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/42 group-hover:text-black/42">{project.year}</p>
                <div className="flex flex-wrap content-start gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-white/14 px-3 py-1 font-mono text-xs uppercase text-white/58 group-hover:border-black/18 group-hover:text-black/58">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-24 text-black sm:px-8">
        <div className="mx-auto max-w-[1500px]">
          <Kicker>Services</Kicker>
          <h2 className="mt-6 max-w-6xl text-5xl font-black uppercase leading-[0.86] tracking-tight sm:text-7xl lg:text-8xl">
            Full-cycle help for founders, students and small teams.
          </h2>
          <div className="mt-16 grid gap-px bg-black/10 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="bg-white p-6">
                <h3 className="text-3xl font-black uppercase leading-none">{service.title}</h3>
                <p className="mt-6 leading-7 text-black/58">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="agency" className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Kicker>About Ritesh</Kicker>
            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.86] tracking-tight sm:text-7xl">
              Small team energy. One builder ownership.
            </h2>
          </div>
          <div className="grid gap-8">
            <p className="text-2xl leading-9 text-white/72">
              I like projects where design and engineering meet. My goal is to become the developer who can understand the
              product, shape the UI, wire the backend, and explain the work clearly.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Location", "Maharashtra, India"],
                ["Education", "Computer Engineering"],
                ["Focus", "Java backend + MERN + product UI"],
                ["Open to", "Internships, junior roles, freelance prototypes"],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-white/12 pt-5">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-hobroPink">{label}</p>
                  <p className="mt-2 text-xl text-white/72">{value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="bg-white px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-black">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_520px]">
            <SectionTitle>Proof that the learning is active, not theoretical.</SectionTitle>
            <div className="grid gap-4">
              {certs.map((cert) => (
                <div key={cert} className="flex gap-3 border-t border-white/12 pt-5 text-white/68">
                  <Check className="mt-1 shrink-0 text-hobroPink" size={18} />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-hobroPink px-5 py-24 text-black sm:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1fr_520px]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-black/52">Download resume</p>
            <h2 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-tight sm:text-7xl lg:text-8xl">
              Need a developer who can make the work look alive?
            </h2>
            <div className="mt-10 grid gap-3 font-medium">
              <a className="flex items-center gap-3 hover:opacity-60" href="mailto:pawarritesh2612@gmail.com">
                <Mail size={18} /> pawarritesh2612@gmail.com
              </a>
              <a className="flex items-center gap-3 hover:opacity-60" href="https://github.com/Riteshpawar01" target="_blank" rel="noreferrer">
                <Github size={18} /> github.com/Riteshpawar01
              </a>
              <a className="flex items-center gap-3 hover:opacity-60" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
          <form
            action="https://formsubmit.co/pawarritesh2612@gmail.com"
            method="POST"
            className="bg-black p-6 text-white"
          >
            <input type="hidden" name="_subject" value="New portfolio contact request" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-4">
              <label className="grid gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/48">
                Your name
                <input name="name" required className="border border-white/16 bg-transparent px-4 py-4 text-base normal-case tracking-normal text-white outline-none focus:border-hobroPink" />
              </label>
              <label className="grid gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/48">
                Email
                <input name="email" type="email" required className="border border-white/16 bg-transparent px-4 py-4 text-base normal-case tracking-normal text-white outline-none focus:border-hobroPink" />
              </label>
              <label className="grid gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/48">
                Project message
                <textarea name="message" required rows={5} className="resize-none border border-white/16 bg-transparent px-4 py-4 text-base normal-case tracking-normal text-white outline-none focus:border-hobroPink" />
              </label>
              <Button type="submit" className="mt-2 w-full border-white bg-white text-black hover:bg-hobroPink">
                Submit request <Send size={16} />
              </Button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-4 font-mono text-xs uppercase tracking-[0.2em] text-white/42 sm:flex-row">
          <p>© 2026 Ritesh Shantaram Pawar</p>
          <p>Design-first full-stack developer</p>
        </div>
      </footer>
    </main>
  );
}
