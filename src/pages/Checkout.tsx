import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Calendar,
  ShieldCheck,
  Lock,
} from "lucide-react";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, useSearchParams } from "react-router";
import { getCourseById } from "@/data/courses";

export default function Checkout() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("course") ?? "";
  const slotId = searchParams.get("slot") ?? "";

  const course = getCourseById(courseId);
  const slot = course?.schedule.find((s) => s.id === slotId);

  const [step, setStep] = useState<"details" | "confirmation">("details");
  const [form, setForm] = useState({
    name: "",
    email: "",
    institution: "",
  });

  const isValid = form.name.trim() && form.email.trim();

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

  if (step === "confirmation") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center px-6 bg-background"
      >
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-emerald-600/8 blur-[130px]" />
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl p-10 md:p-14 text-center max-w-lg shadow-2xl shadow-emerald-500/5">
          <div className="mx-auto mb-6 size-16 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
            <CheckCircle2 className="size-8 text-emerald-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            ¡Inscripción confirmada!
          </h1>
          <p className="text-zinc-400 mb-6">
            Te enviamos un correo de confirmación a{" "}
            <strong className="text-white">{form.email}</strong>. Encuentra los detalles de tu curso y
            el enlace para unirte a la sesión.
          </p>
          {slot && (
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.04] px-5 py-4 mb-6 text-left">
              <p className="text-sm font-semibold text-white">
                {course.title}
              </p>
              <p className="text-xs text-zinc-500 mt-1 flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                {new Date(slot.date + "T12:00:00").toLocaleDateString("es-PE", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {slot.time}
              </p>
              <p className="text-xs text-zinc-500 mt-0.5">
                Instructor: {slot.instructor}
              </p>
            </div>
          )}
          <div className="flex flex-col gap-3">
            <Button
              onClick={() => navigate("/")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-lg shadow-primary/30"
            >
              Ir al inicio
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/courses")}
              className="cursor-pointer border-white/10 bg-white/5 hover:bg-white/10 text-white"
            >
              Explorar más cursos
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen relative bg-background"
    >
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-600/6 blur-[130px]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/[0.06]">
        <div className="mx-auto max-w-5xl flex items-center justify-between px-6 lg:px-12 py-4">
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
          <span className="text-xs text-zinc-500 flex items-center gap-1.5">
            <Lock className="size-3.5" />
            Pago seguro
          </span>
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-6 lg:px-12 py-10">
        <button
          onClick={() => navigate(`/courses/${course.id}`)}
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-primary transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="size-4" />
          Volver al curso
        </button>

        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-8">
          Completar inscripción
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 space-y-6">
            {/* Personal info */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.04] backdrop-blur-xl p-7">
              <h2 className="text-base font-bold text-white mb-5">
                Información personal
              </h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-zinc-300">
                    Nombre completo
                  </Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="mt-1.5 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-zinc-500 focus:border-primary/40 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-zinc-300">
                    Correo electrónico
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="mt-1.5 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-zinc-500 focus:border-primary/40 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <Label htmlFor="institution" className="text-sm font-medium text-zinc-300">
                    Institución{" "}
                    <span className="text-zinc-500 font-normal">
                      (opcional)
                    </span>
                  </Label>
                  <Input
                    id="institution"
                    placeholder="Nombre de tu escuela o institución"
                    value={form.institution}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, institution: e.target.value }))
                    }
                    className="mt-1.5 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-zinc-500 focus:border-primary/40 focus:ring-primary/20"
                  />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.04] backdrop-blur-xl p-7">
              <h2 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                <CreditCard className="size-4.5 text-primary" />
                Método de pago
              </h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="card" className="text-sm font-medium text-zinc-300">
                    Número de tarjeta
                  </Label>
                  <Input
                    id="card"
                    placeholder="4242 4242 4242 4242"
                    className="mt-1.5 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-zinc-500 font-mono focus:border-primary/40 focus:ring-primary/20"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry" className="text-sm font-medium text-zinc-300">
                      Vencimiento
                    </Label>
                    <Input
                      id="expiry"
                      placeholder="MM / AA"
                      className="mt-1.5 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-zinc-500 focus:border-primary/40 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvc" className="text-sm font-medium text-zinc-300">
                      CVC
                    </Label>
                    <Input
                      id="cvc"
                      placeholder="123"
                      className="mt-1.5 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-zinc-500 focus:border-primary/40 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.04] backdrop-blur-xl p-7 shadow-xl shadow-black/30">
                <h2 className="text-base font-bold text-white mb-5">
                  Resumen del pedido
                </h2>

                <div className="flex gap-4 pb-5 border-b border-white/[0.06]">
                  <div
                    className={`size-14 rounded-xl bg-gradient-to-br ${course.gradient} flex items-center justify-center text-2xl shrink-0`}
                  >
                    {course.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-white">
                      {course.title}
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      {course.category} · {course.level}
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      {course.duration} · {course.lessons} clases
                    </p>
                  </div>
                </div>

                {slot && (
                  <div className="py-4 border-b border-white/[0.06]">
                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-2">
                      Horario seleccionado
                    </p>
                    <div className="flex items-start gap-2">
                      <Calendar className="size-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-white">
                          {new Date(
                            slot.date + "T12:00:00"
                          ).toLocaleDateString("es-PE", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-xs text-zinc-500">
                          {slot.time} · {slot.instructor}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="py-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Curso</span>
                    <span className="text-white">
                      S/ {course.price.toLocaleString("es-PE")}
                    </span>
                  </div>
                  {course.originalPrice && (
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Descuento</span>
                      <span className="text-emerald-400">
                        -S/{" "}
                        {(
                          course.originalPrice - course.price
                        ).toLocaleString("es-PE")}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between font-bold text-lg border-t border-white/[0.06] pt-4 mb-6">
                  <span className="text-white">Total</span>
                  <span className="text-primary">
                    S/ {course.price.toLocaleString("es-PE")}
                  </span>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-lg shadow-primary/30"
                  disabled={!isValid}
                  onClick={() => setStep("confirmation")}
                >
                  Confirmar pago
                  <ArrowRight className="ml-2 size-4" />
                </Button>

                <div className="mt-5 space-y-2.5 text-xs text-zinc-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-3.5 text-primary" />
                    <span>Garantía de satisfacción de 30 días</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="size-3.5 text-primary" />
                    <span>Transacción cifrada y segura</span>
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
