import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  ArrowLeft,
  Users,
  BookOpen,
  Clock,
  Play,
  X,
} from "lucide-react";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router";
import {
  courses,
  categories,
  levels,
  type Course,
} from "@/data/courses";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

function CourseCard({ course }: { course: Course }) {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeUp}
      layout
      className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.04] backdrop-blur-sm overflow-hidden shadow-lg shadow-black/20 hover:border-white/[0.12] hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/courses/${course.id}`)}
    >
      {/* Thumbnail */}
      <div
        className={`relative h-44 bg-gradient-to-br ${course.gradient} flex items-center justify-center overflow-hidden`}
      >
        <span className="text-5xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
          {course.icon}
        </span>
        {course.previewCode && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-5">
            <pre className="text-[11px] leading-relaxed text-emerald-400/80 font-mono whitespace-pre-wrap text-left">
              {course.previewCode}
            </pre>
            <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[10px] font-medium text-white/40">
              <Play className="size-2.5" />
              Vista previa
            </div>
          </div>
        )}
        <span className="absolute top-3 left-3 text-[11px] font-bold tracking-wide uppercase bg-white/10 backdrop-blur-md text-white/80 rounded-md px-2 py-0.5 border border-white/10">
          {course.tag}
        </span>
      </div>

      <div className="p-5">
        <span
          className={`inline-block text-[11px] font-semibold tracking-wide rounded-md px-2 py-0.5 border mb-3 ${course.categoryColor}`}
        >
          {course.category}
        </span>

        <h3 className="text-[15px] font-bold text-white mb-1.5 group-hover:text-primary transition-colors leading-snug">
          {course.title}
        </h3>
        <p className="text-[13px] text-zinc-400 leading-relaxed mb-4 line-clamp-2">
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
            <p className="text-xs font-semibold text-zinc-300">
              {course.instructor.name}
            </p>
            <p className="text-[11px] text-zinc-500">Instructor</p>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 text-[12px] text-zinc-500 border-t border-white/[0.06] pt-3">
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
            {course.students.toLocaleString("es-PE")}
          </span>
          <span className="flex items-center gap-1 ml-auto">
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            {course.rating}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold text-white">
              S/ {course.price.toLocaleString("es-PE")}
            </span>
            {course.originalPrice && (
              <span className="text-xs text-zinc-500 line-through">
                S/ {course.originalPrice.toLocaleString("es-PE")}
              </span>
            )}
          </div>
          {course.originalPrice && (
            <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-md px-2 py-0.5">
              -{((course.originalPrice - course.price) / course.originalPrice * 100).toFixed(0)}%
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Catalog() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedLevel, setSelectedLevel] = useState("Todos");

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchesSearch =
        search === "" ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase()) ||
        c.instructor.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "Todos" || c.category === selectedCategory;
      const matchesLevel =
        selectedLevel === "Todos" || c.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [search, selectedCategory, selectedLevel]);

  const hasFilters =
    search !== "" || selectedCategory !== "Todos" || selectedLevel !== "Todos";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-background"
    >
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-12 py-4">
          <a href="/" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="EduCode"
              className="h-9 w-9 rounded-lg group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-bold tracking-tight text-white">
              Edu<span className="text-primary">Code</span>
            </span>
          </a>
          <Button
            size="sm"
            onClick={() => navigate("/auth")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-md shadow-primary/25"
          >
            Iniciar sesión
          </Button>
        </div>
      </nav>

      {/* Hero banner */}
      <div className="bg-gradient-to-br from-primary/5 via-blue-950/20 to-cyan-950/10 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-primary transition-colors mb-5 cursor-pointer"
          >
            <ArrowLeft className="size-4" />
            Volver al inicio
          </button>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Catálogo de cursos
          </h1>
          <p className="mt-2 text-zinc-400 max-w-lg text-[15px]">
            Explora todos los cursos disponibles. Encuentra el curso ideal para
            ti o tu institución educativa.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-8">
        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-zinc-500" />
          <Input
            placeholder="Buscar cursos, categorías o instructores…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12 h-12 bg-white/[0.04] border-white/[0.08] rounded-xl text-[15px] text-white placeholder:text-zinc-500 focus:border-primary/40 focus:ring-primary/20"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white cursor-pointer"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap text-sm font-semibold rounded-full px-5 py-2.5 border transition-all cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25"
                  : "bg-white/[0.04] text-zinc-400 border-white/[0.08] hover:border-white/[0.15] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Level filter */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
            Nivel
          </span>
          <div className="flex gap-1.5">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`text-xs font-semibold rounded-lg px-3 py-1.5 border transition-all cursor-pointer ${
                  selectedLevel === lvl
                    ? "bg-white text-black border-white"
                    : "bg-white/[0.04] text-zinc-400 border-white/[0.08] hover:border-white/[0.15] hover:text-white"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {hasFilters && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("Todos");
                setSelectedLevel("Todos");
              }}
              className="text-xs font-medium text-primary hover:text-primary/80 ml-2 cursor-pointer"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-zinc-400">
            <strong className="text-white">{filtered.length}</strong>{" "}
            {filtered.length === 1 ? "curso encontrado" : "cursos encontrados"}
          </p>
        </div>

        {/* Course grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-24"
            >
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-white font-semibold text-lg">
                No se encontraron cursos
              </p>
              <p className="text-sm text-zinc-500 mt-1">
                Intenta ajustar los filtros o buscar algo diferente.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={`${selectedCategory}-${selectedLevel}-${search}`}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
