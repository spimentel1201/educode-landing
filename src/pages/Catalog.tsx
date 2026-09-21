import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Star,
  ArrowLeft,
  Users,
  BookOpen,
  Play,
  SlidersHorizontal,
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
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

function CourseCard({ course }: { course: Course }) {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl border border-white/50 bg-white/50 backdrop-blur-xl overflow-hidden shadow-lg shadow-black/5 cursor-pointer"
      onClick={() => navigate(`/courses/${course.id}`)}
    >
      {/* Preview image area */}
      <div
        className={`h-36 bg-gradient-to-br ${course.gradient} relative flex items-center justify-center`}
      >
        <span className="text-4xl drop-shadow-sm">{course.icon}</span>
        {course.previewCode && (
          <div className="absolute inset-0 bg-gray-900/85 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
            <pre className="text-[10px] leading-relaxed text-emerald-300 font-mono whitespace-pre-wrap text-left">
              {course.previewCode}
            </pre>
          </div>
        )}
        {/* Level badge */}
        <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wide bg-white/70 backdrop-blur-sm text-foreground/80 rounded-full px-2 py-0.5 border border-white/50">
          {course.level}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-semibold tracking-wide uppercase text-primary/80 bg-primary/8 rounded-full px-2.5 py-0.5">
            {course.tag}
          </span>
          <span className="text-[11px] text-muted-foreground">
            {course.category}
          </span>
        </div>

        <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
              {course.rating}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="size-3.5" />
              {course.lessons} clases
            </span>
            <span className="flex items-center gap-1">
              <Users className="size-3.5" />
              {course.students.toLocaleString("es-MX")}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-primary">
              ${course.price.toLocaleString("es-MX")}
            </span>
            {course.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                ${course.originalPrice.toLocaleString("es-MX")}
              </span>
            )}
          </div>
          <span className="text-[11px] text-muted-foreground">
            {course.duration}
          </span>
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
        c.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "Todos" || c.category === selectedCategory;
      const matchesLevel =
        selectedLevel === "Todos" || c.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [search, selectedCategory, selectedLevel]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen relative"
    >
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-200/20 blur-[130px]" />
        <div className="absolute bottom-0 -right-32 h-[500px] w-[500px] rounded-full bg-cyan-200/15 blur-[110px]" />
      </div>

      {/* Navbar */}
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
          <Button
            size="sm"
            onClick={() => navigate("/auth")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-md shadow-primary/20"
          >
            Iniciar sesión
          </Button>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-10">
        {/* Back + heading */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-4 cursor-pointer"
          >
            <ArrowLeft className="size-4" />
            Volver al inicio
          </button>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Catálogo de cursos
          </h1>
          <p className="mt-2 text-muted-foreground max-w-lg">
            Explora todos los cursos disponibles. Encuentra el curso ideal para
            ti o tu institución educativa.
          </p>
        </div>

        {/* Search + filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nombre, categoría o palabra clave…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-white/50 backdrop-blur-sm border-white/50"
            />
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="size-4 text-muted-foreground" />

            {/* Category chips */}
            <div className="flex gap-1.5 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-medium rounded-full px-3 py-1.5 border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20"
                      : "bg-white/50 backdrop-blur-sm border-white/50 text-muted-foreground hover:text-foreground hover:bg-white/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Level chips */}
        <div className="flex gap-1.5 mb-8">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`text-xs font-medium rounded-full px-3 py-1.5 border transition-all cursor-pointer ${
                selectedLevel === lvl
                  ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20"
                  : "bg-white/50 backdrop-blur-sm border-white/50 text-muted-foreground hover:text-foreground hover:bg-white/70"
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg font-medium">
              No se encontraron cursos
            </p>
            <p className="text-sm text-muted-foreground/70 mt-1">
              Intenta ajustar los filtros o la búsqueda.
            </p>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            key={`${selectedCategory}-${selectedLevel}-${search}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
