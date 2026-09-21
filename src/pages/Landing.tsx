import { motion } from "framer-motion";
import {
  GraduationCap,
  MonitorPlay,
  Users,
  BookOpen,
  Code2,
  Brain,
  Star,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const courses = [
  {
    icon: <Code2 className="size-6" />,
    title: "Programación Creativa",
    description:
      "Aprende JavaScript, Python y desarrollo web con proyectos prácticos diseñados para el aula.",
    tag: "Popular",
    color: "from-blue-500/20 to-cyan-400/20",
    border: "border-blue-400/30",
  },
  {
    icon: <Brain className="size-6" />,
    title: "Pensamiento Computacional",
    description:
      "Desarrolla habilidades de resolución de problemas y lógica con ejercicios interactivos en tiempo real.",
    tag: "Nuevo",
    color: "from-violet-500/20 to-purple-400/20",
    border: "border-violet-400/30",
  },
  {
    icon: <MonitorPlay className="size-6" />,
    title: "Apps Educativas con IA",
    description:
      "Crea herramientas inteligentes para el aprendizaje usando inteligencia artificial y machine learning.",
    tag: "Próximamente",
    color: "from-emerald-500/20 to-teal-400/20",
    border: "border-emerald-400/30",
  },
  {
    icon: <BookOpen className="size-6" />,
    title: "Datos para Educadores",
    description:
      "Analiza el rendimiento de tus estudiantes con dashboards, gráficas y métricas en tiempo real.",
    tag: "Recomendado",
    color: "from-amber-500/20 to-orange-400/20",
    border: "border-amber-400/30",
  },
];

const testimonials = [
  {
    name: "Dra. María Fernández",
    role: "Directora Académica, Instituto Cumbres",
    quote:
      "EduCode transformó la forma en que nuestros estudiantes aprenden programación. Los cursos en tiempo real mantienen a los alumnos completamente enfocados y motivados.",
    rating: 5,
  },
  {
    name: "Prof. Carlos Mendoza",
    role: "Profesor de Tecnología, Colegio San Ignacio",
    quote:
      "La plataforma es increíblemente intuitiva. Mis alumnos de secundaria ya están creando sus propias aplicaciones después de solo tres semanas de uso.",
    rating: 5,
  },
  {
    name: "Lic. Ana Sofía Torres",
    role: "Coordinadora de Innovación, Red Educativa Futuro",
    quote:
      "Lo que más valoro es el seguimiento en tiempo real. Puedo ver exactamente dónde cada estudiante necesita ayuda y adaptar mis lecciones sobre la marcha.",
    rating: 5,
  },
];

const features = [
  {
    icon: <MonitorPlay className="size-5" />,
    text: "Cursos en tiempo real con contenido interactivo",
  },
  {
    icon: <Users className="size-5" />,
    text: "Diseñado para escuelas y profesores",
  },
  {
    icon: <CheckCircle2 className="size-5" />,
    text: "Seguimiento del progreso de cada estudiante",
  },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-300/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-cyan-300/15 blur-[100px]" />
        <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-violet-300/15 blur-[100px]" />
      </div>

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/40">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="EduCode"
              className="h-9 w-9 rounded-lg group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-bold tracking-tight text-foreground">
              Edu<span className="text-primary">Code</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#cursos" className="hover:text-primary transition-colors">
              Cursos
            </a>
            <a
              href="#testimonios"
              className="hover:text-primary transition-colors"
            >
              Testimonios
            </a>
          </div>

          <Button
            size="sm"
            onClick={() => navigate("/auth")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-md shadow-primary/20"
          >
            Comenzar
            <ArrowRight className="ml-1.5 size-4" />
          </Button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary mb-8"
          >
            <Sparkles className="size-4" />
            Plataforma educativa del futuro
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground"
          >
            Cursos interactivos en tiempo real
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              para las aulas de hoy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            EduCode ayuda a escuelas y profesores a enseñar tecnología con
            experiencias de aprendizaje vivas, colaborativas y medibles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-lg shadow-primary/25 px-8 text-base"
            >
              Explorar cursos
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/auth")}
              className="backdrop-blur-sm bg-white/50 border-white/60 hover:bg-white/70 cursor-pointer px-8 text-base"
            >
              <GraduationCap className="mr-2 size-5" />
              Soy profesor
            </Button>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-4"
          >
            {features.map((f) => (
              <div
                key={f.text}
                className="flex items-center gap-2 rounded-xl border border-white/50 bg-white/50 backdrop-blur-md px-4 py-2.5 text-sm text-foreground/80 shadow-sm"
              >
                <span className="text-primary">{f.icon}</span>
                {f.text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Courses ── */}
      <section id="cursos" className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-sm font-semibold tracking-widest uppercase text-primary mb-3"
            >
              Nuestros cursos
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
            >
              Aprende creando, enseña con tecnología
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-4 text-muted-foreground max-w-xl mx-auto"
            >
              Cada curso combina teoría y práctica con proyectos que los
              estudiantes pueden llevar al aula inmediatamente.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group relative rounded-2xl border ${course.border} bg-gradient-to-br ${course.color} backdrop-blur-xl p-6 shadow-lg shadow-black/5 cursor-default`}
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-white/60 backdrop-blur-sm text-primary shadow-sm border border-white/50">
                    {course.icon}
                  </div>
                  <span className="inline-block text-[11px] font-semibold tracking-wide uppercase text-primary/80 bg-white/50 backdrop-blur-sm rounded-full px-2.5 py-0.5 border border-white/40 mb-3">
                    {course.tag}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonios" className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-sm font-semibold tracking-widest uppercase text-primary mb-3"
            >
              Testimonios
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
            >
              Lo que dicen los educadores
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-4 text-muted-foreground max-w-xl mx-auto"
            >
              Profesores y directores de toda Latinoamérica ya están usando
              EduCode en sus aulas.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="relative rounded-2xl border border-white/50 bg-white/50 backdrop-blur-xl p-8 shadow-lg shadow-black/5"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 pointer-events-none" />
                <div className="relative">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="size-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-gradient-to-br from-primary/30 to-blue-400/30 backdrop-blur-sm border border-white/50 flex items-center justify-center text-primary font-bold text-sm">
                      {t.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/50 backdrop-blur-2xl p-12 md:p-16 text-center shadow-2xl shadow-primary/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-400/10 to-cyan-400/10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-300/20 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-violet-300/15 blur-[80px] pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Transforma tu aula hoy
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
                Únete a cientos de escuelas que ya están enseñando tecnología
                de forma interactiva y efectiva.
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/auth")}
                className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-lg shadow-primary/25 px-10 text-base"
              >
                Crear mi cuenta gratis
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/40 bg-white/40 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="EduCode" className="h-7 w-7 rounded-md" />
            <span className="font-bold text-foreground">
              Edu<span className="text-primary">Code</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EduCode. Plataforma educativa para las
            aulas del futuro.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacidad
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
