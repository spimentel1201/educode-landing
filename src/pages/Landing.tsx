import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  GraduationCap,
  MonitorPlay,
  Users,
  Star,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Play,
  ChevronRight,
  Search,
  Clock,
  BookOpen,
} from "lucide-react";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { courses } from "@/data/courses";

/* ─── Shared animation variants ─── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/* ─── Platzi/EdTeam-style course card ─── */
function CoursePreviewCard({
  course,
  index,
}: {
  course: (typeof courses)[0];
  index: number;
}) {
  const navigate = useNavigate();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-150, 150], [3, -3]);
  const rotateY = useTransform(mouseX, [-150, 150], [-3, 3]);

  return (
    <motion.div
      variants={fadeUp}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="group relative rounded-2xl border border-black/[0.06] bg-white overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/[0.06] transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/courses/${course.id}`)}
    >
      {/* Thumbnail area */}
      <div
        className={`relative h-44 bg-gradient-to-br ${course.gradient} flex items-center justify-center overflow-hidden`}
      >
        <span className="text-5xl drop-shadow-sm group-hover:scale-110 transition-transform duration-500">
          {course.icon}
        </span>
        {/* Code preview on hover */}
        {course.previewCode && (
          <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-5">
            <pre className="text-[11px] leading-relaxed text-emerald-300/90 font-mono whitespace-pre-wrap text-left">
              {course.previewCode}
            </pre>
            <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[10px] font-medium text-white/50">
              <Play className="size-2.5" />
              Vista previa
            </div>
          </div>
        )}
        {/* Tag badge */}
        <span className="absolute top-3 left-3 text-[11px] font-bold tracking-wide uppercase bg-white/90 backdrop-blur-sm text-foreground/80 rounded-md px-2 py-0.5 shadow-sm">
          {course.tag}
        </span>
      </div>

      <div className="p-5">
        {/* Category pill */}
        <span
          className={`inline-block text-[11px] font-semibold tracking-wide rounded-md px-2 py-0.5 border mb-3 ${course.categoryColor}`}
        >
          {course.category}
        </span>

        <h3 className="text-[15px] font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors leading-snug">
          {course.title}
        </h3>
        <p className="text-[13px] text-gray-500 leading-relaxed mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center gap-2.5 mb-4">
          <div
            className={`size-8 rounded-full bg-gradient-to-br ${course.instructor.color} flex items-center justify-center text-white text-[10px] font-bold shadow-sm`}
          >
            {course.instructor.initials}
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-700">
              {course.instructor.name}
            </p>
            <p className="text-[11px] text-gray-400">Instructor</p>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-3 text-[12px] text-gray-400 border-t border-gray-100 pt-3">
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="size-3.5" />
            {course.lessons} clases
          </span>
          <span className="flex items-center gap-1">
            <Users className="size-3.5" />
            {course.students.toLocaleString("es-MX")}
          </span>
          <span className="flex items-center gap-1 ml-auto">
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            {course.rating}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold text-gray-900">
              ${course.price.toLocaleString("es-MX")}
            </span>
            {course.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${course.originalPrice.toLocaleString("es-MX")}
              </span>
            )}
          </div>
          {course.originalPrice && (
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 rounded-md px-2 py-0.5">
              -
              {(
                ((course.originalPrice - course.price) /
                  course.originalPrice) *
                100
              ).toFixed(0)}
              %
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Testimonials ─── */
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
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full bg-blue-200/25 blur-[140px]" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-cyan-200/18 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-violet-200/15 blur-[120px]" />
      </div>

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/40">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-12 py-4">
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
            <a
              href="/courses"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              Catálogo
              <ChevronRight className="size-3.5" />
            </a>
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
      <section className="relative px-6 pt-24 pb-32 md:pt-36 md:pb-44">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary mb-8"
          >
            <Sparkles className="size-4" />
            Plataforma educativa del futuro
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground"
          >
            Aprende programación
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              en tiempo real.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            EduCode ofrece cursos interactivos diseñados para escuelas y
            profesores que quieren enseñar tecnología de forma vivida,
            colaborativa y medible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => navigate("/courses")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-lg shadow-primary/25 px-8 text-base"
            >
              <Search className="mr-2 size-5" />
              Explorar catálogo
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
            className="mt-16 flex flex-wrap items-center justify-center gap-4"
          >
            {features.map((f) => (
              <div
                key={f.text}
                className="flex items-center gap-2 rounded-xl border border-white/50 bg-white/50 backdrop-blur-md px-5 py-3 text-sm text-foreground/80 shadow-sm"
              >
                <span className="text-primary">{f.icon}</span>
                {f.text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Courses preview ── */}
      <section id="cursos" className="relative px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold tracking-widest uppercase text-primary mb-3"
            >
              Nuestros cursos
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900"
            >
              Aprende con los mejores instructores
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-gray-500 max-w-xl text-[15px]"
            >
              Cada curso combina teoría, práctica y proyectos listos para
              implementar en el aula. Pasa el cursor sobre una tarjeta para
              ver una vista previa del contenido.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {courses.map((course, i) => (
              <CoursePreviewCard key={course.id} course={course} index={i} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/courses")}
              className="backdrop-blur-sm bg-white/50 border-white/60 hover:bg-white/70 cursor-pointer"
            >
              Ver catálogo completo
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonios" className="relative px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold tracking-widest uppercase text-primary mb-3"
            >
              Testimonios
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
            >
              Lo que dicen los educadores
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-muted-foreground max-w-xl mx-auto"
            >
              Profesores y directores de toda Latinoamérica ya transforman sus
              aulas con EduCode.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.25 },
                }}
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
                    &ldquo;{t.quote}&rdquo;
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
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/50 backdrop-blur-2xl p-12 md:p-16 text-center shadow-2xl shadow-primary/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-blue-400/8 to-cyan-400/8 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-300/15 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-violet-300/10 blur-[80px] pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Transforma tu aula hoy
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
                Únete a cientos de escuelas que ya enseñan tecnología de forma
                interactiva y efectiva. Crea tu cuenta sin costo.
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
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="EduCode" className="h-7 w-7 rounded-md" />
            <span className="font-bold text-foreground">
              Edu<span className="text-primary">Code</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EduCode. Cursos interactivos para
            las aulas del futuro.
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
