import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  Star,
  BookOpen,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Award,
  Play,
} from "lucide-react";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router";
import { getCourseById } from "@/data/courses";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = getCourseById(id ?? "");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-lg font-semibold text-white">
            Curso no encontrado
          </p>
          <Button
            variant="outline"
            className="mt-4 cursor-pointer border-white/10 bg-white/5 hover:bg-white/10 text-white"
            onClick={() => navigate("/courses")}
          >
            <ArrowLeft className="mr-2 size-4" />
            Volver al catálogo
          </Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen relative bg-background"
    >
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-600/6 blur-[130px]" />
        <div className="absolute bottom-0 -right-32 h-[500px] w-[500px] rounded-full bg-cyan-600/5 blur-[110px]" />
      </div>

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

      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-10">
        <button
          onClick={() => navigate("/courses")}
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-primary transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="size-4" />
          Volver al catálogo
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Hero area */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`text-xs font-semibold tracking-wide rounded-md px-2.5 py-0.5 border ${course.categoryColor}`}
                >
                  {course.category}
                </span>
                <span className="text-xs text-zinc-500">
                  {course.level}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
                {course.title}
              </h1>
              <p className="text-lg text-zinc-400 italic">
                {course.tagline}
              </p>

              {/* Instructor */}
              <div className="flex items-center gap-3 mt-5 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <div
                  className={`size-11 rounded-full bg-gradient-to-br ${course.instructor.color} flex items-center justify-center text-white text-xs font-bold shadow-md`}
                >
                  {course.instructor.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    {course.instructor.name}
                  </p>
                  <p className="text-xs text-zinc-500">Instructor del curso</p>
                </div>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-5 mt-6 text-sm text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Star className="size-4 fill-amber-400 text-amber-400" />
                  <strong className="text-white">{course.rating}</strong>
                  ({course.reviews} reseñas)
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="size-4" />
                  {course.students.toLocaleString("es-PE")} estudiantes
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="size-4" />
                  {course.lessons} clases
                </span>
              </div>
            </div>

            {/* Code preview */}
            {course.previewCode && (
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.04] backdrop-blur-sm overflow-hidden shadow-lg shadow-black/20">
                <div className="flex items-center gap-2 px-5 py-3 bg-white/[0.04] border-b border-white/[0.06]">
                  <div className="flex gap-1.5">
                    <div className="size-3 rounded-full bg-red-500/60" />
                    <div className="size-3 rounded-full bg-amber-500/60" />
                    <div className="size-3 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-xs text-zinc-500 ml-2 flex items-center gap-1">
                    <Play className="size-3" />
                    Vista previa del curso
                  </span>
                </div>
                <pre className="p-6 text-sm leading-relaxed text-emerald-400/80 font-mono bg-gradient-to-br from-emerald-950/20 to-transparent">
                  {course.previewCode}
                </pre>
              </div>
            )}

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                Sobre este curso
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                {course.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                ¿Qué incluye?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.04] px-4 py-3"
                  >
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="size-5 text-primary" />
                Horarios disponibles
              </h2>
              <div className="space-y-3">
                {course.schedule.map((slot) => (
                  <button
                    key={slot.id}
                    disabled={!slot.available}
                    onClick={() =>
                      setSelectedSlot(selectedSlot === slot.id ? null : slot.id)
                    }
                    className={`w-full text-left rounded-xl border px-5 py-4 transition-all cursor-pointer ${
                      !slot.available
                        ? "bg-white/[0.02] border-white/[0.04] opacity-40 cursor-not-allowed"
                        : selectedSlot === slot.id
                          ? "bg-primary/10 border-primary/30 shadow-md shadow-primary/10"
                          : "bg-white/[0.04] border-white/[0.06] hover:border-primary/20 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white text-sm">
                          {new Date(slot.date + "T12:00:00").toLocaleDateString(
                            "es-PE",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                        <p className="text-xs text-zinc-500 mt-0.5">
                          {slot.time} · {slot.instructor}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-medium rounded-full px-2.5 py-1 ${
                          slot.available
                            ? selectedSlot === slot.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-white/[0.04] text-zinc-500 border border-white/[0.06]"
                        }`}
                      >
                        {slot.available
                          ? selectedSlot === slot.id
                            ? "Seleccionado"
                            : "Disponible"
                          : "Agotado"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.04] backdrop-blur-xl p-7 shadow-xl shadow-black/30">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-extrabold text-primary">
                    S/ {course.price.toLocaleString("es-PE")}
                  </span>
                  {course.originalPrice && (
                    <span className="text-sm text-zinc-500 line-through ml-auto">
                      S/ {course.originalPrice.toLocaleString("es-PE")}
                    </span>
                  )}
                </div>
                {course.originalPrice && (
                  <p className="text-xs text-emerald-400 font-medium mb-5">
                    Ahorra{" "}
                    {(
                      ((course.originalPrice - course.price) /
                        course.originalPrice) *
                      100
                    ).toFixed(0)}
                    % — precio de lanzamiento
                  </p>
                )}
                {!course.originalPrice && <div className="mb-5" />}

                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-lg shadow-primary/30"
                  onClick={() =>
                    navigate(
                      `/checkout?course=${course.id}${selectedSlot ? `&slot=${selectedSlot}` : ""}`
                    )
                  }
                >
                  Inscribirme ahora
                  <ArrowRight className="ml-2 size-4" />
                </Button>

                <div className="mt-6 space-y-3 text-sm text-zinc-400">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="size-4 text-primary" />
                    <span>Garantía de satisfacción de 30 días</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Award className="size-4 text-primary" />
                    <span>Certificado al completar</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="size-4 text-primary" />
                    <span>Acceso de por vida al contenido</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
