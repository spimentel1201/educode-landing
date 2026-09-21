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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground">
            Curso no encontrado
          </p>
          <Button
            variant="outline"
            className="mt-4 cursor-pointer"
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
        {/* Back link */}
        <button
          onClick={() => navigate("/courses")}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 cursor-pointer"
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
                <span className="text-xs font-semibold uppercase tracking-wide text-primary bg-primary/8 rounded-full px-2.5 py-0.5">
                  {course.tag}
                </span>
                <span className="text-xs text-muted-foreground">
                  {course.category} · {course.level}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-3">
                {course.title}
              </h1>
              <p className="text-lg text-muted-foreground italic">
                {course.tagline}
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-5 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Star className="size-4 fill-amber-400 text-amber-400" />
                  <strong className="text-foreground">{course.rating}</strong>
                  ({course.reviews} reseñas)
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="size-4" />
                  {course.students.toLocaleString("es-MX")} estudiantes
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
              <div className="rounded-2xl border border-white/50 bg-white/50 backdrop-blur-xl overflow-hidden shadow-lg shadow-black/5">
                <div className="flex items-center gap-2 px-5 py-3 bg-white/40 border-b border-white/40">
                  <div className="flex gap-1.5">
                    <div className="size-3 rounded-full bg-red-400/60" />
                    <div className="size-3 rounded-full bg-amber-400/60" />
                    <div className="size-3 rounded-full bg-emerald-400/60" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2 flex items-center gap-1">
                    <Play className="size-3" />
                    Vista previa del curso
                  </span>
                </div>
                <pre className="p-6 text-sm leading-relaxed text-emerald-700 font-mono bg-gradient-to-br from-emerald-50/60 to-white/40">
                  {course.previewCode}
                </pre>
              </div>
            )}

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">
                Sobre este curso
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {course.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                ¿Qué incluye?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-3 rounded-xl border border-white/50 bg-white/50 backdrop-blur-sm px-4 py-3"
                  >
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Calendar className="size-5 text-primary" />
                Horarios disponibles
              </h2>
              <div className="space-y-3">
                {course.schedule.map((slot) => (
                  <button
                    key={slot.id}
                    disabled={!slot.available}
                    onClick={() =>
                      setSelectedSlot(
                        selectedSlot === slot.id ? null : slot.id
                      )
                    }
                    className={`w-full text-left rounded-xl border px-5 py-4 transition-all cursor-pointer ${
                      !slot.available
                        ? "bg-muted/50 border-border/50 opacity-50 cursor-not-allowed"
                        : selectedSlot === slot.id
                          ? "bg-primary/5 border-primary/40 shadow-md shadow-primary/10"
                          : "bg-white/50 border-white/50 hover:border-primary/30 hover:bg-white/70"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {new Date(slot.date + "T12:00:00").toLocaleDateString(
                            "es-MX",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {slot.time} · {slot.instructor}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-medium rounded-full px-2.5 py-1 ${
                          slot.available
                            ? selectedSlot === slot.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-emerald-50 text-emerald-700"
                            : "bg-muted text-muted-foreground"
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
              <div className="rounded-2xl border border-white/50 bg-white/50 backdrop-blur-xl p-7 shadow-xl shadow-black/5">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-extrabold text-primary">
                    ${course.price.toLocaleString("es-MX")}
                  </span>
                  <span className="text-sm text-muted-foreground">MXN</span>
                  {course.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through ml-auto">
                      ${course.originalPrice.toLocaleString("es-MX")}
                    </span>
                  )}
                </div>
                {course.originalPrice && (
                  <p className="text-xs text-emerald-600 font-medium mb-5">
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
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-lg shadow-primary/25"
                  onClick={() =>
                    navigate(`/checkout?course=${course.id}${selectedSlot ? `&slot=${selectedSlot}` : ""}`)
                  }
                >
                  Inscribirme ahora
                  <ArrowRight className="ml-2 size-4" />
                </Button>

                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
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
