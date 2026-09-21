export interface Course {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  level: "Básico" | "Intermedio" | "Avanzado";
  price: number;
  originalPrice?: number;
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  reviews: number;
  tag: string;
  gradient: string;
  icon: string;
  previewCode?: string;
  highlights: string[];
  schedule: ScheduleSlot[];
}

export interface ScheduleSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
  instructor: string;
}

export const courses: Course[] = [
  {
    id: "programacion-creativa",
    title: "Programación Creativa",
    tagline: "Convierte ideas en código que cobra vida.",
    description:
      "Domina JavaScript y Python con proyectos prácticos diseñados para el aula moderna.",
    longDescription:
      "Un recorrido completo por los fundamentos de la programación aplicados a la educación. Aprenderás a construir aplicaciones web interactivas, automatizar tareas del aula y crear herramientas personalizadas para tus estudiantes. Cada módulo incluye proyectos reales que puedes implementar inmediatamente en tu institución.",
    category: "Desarrollo Web",
    level: "Básico",
    price: 1999,
    originalPrice: 3499,
    duration: "8 semanas",
    lessons: 24,
    students: 1247,
    rating: 4.9,
    reviews: 312,
    tag: "Popular",
    gradient: "from-blue-500/20 to-cyan-400/20",
    icon: "💻",
    previewCode: `function greet(name) {
  return \`Hola, \${name}!\`;
}
console.log(greet("Mundo"));`,
    highlights: [
      "24 clases en video con ejercicios prácticos",
      "Proyectos reales para implementar en el aula",
      "Certificado de finalización",
      "Acceso a la comunidad de educadores",
      "Soporte por correo durante 6 meses",
    ],
    schedule: [
      { id: "s1", date: "2026-10-06", time: "10:00 – 12:00", available: true, instructor: "Prof. Carlos Mendoza" },
      { id: "s2", date: "2026-10-06", time: "18:00 – 20:00", available: true, instructor: "Prof. Carlos Mendoza" },
      { id: "s3", date: "2026-10-13", time: "10:00 – 12:00", available: false, instructor: "Prof. Carlos Mendoza" },
    ],
  },
  {
    id: "pensamiento-computacional",
    title: "Pensamiento Computacional",
    tagline: "Aprende a resolver problemas como un ingeniero.",
    description:
      "Desarrolla habilidades de lógica y resolución de problemas con ejercicios en tiempo real.",
    longDescription:
      "Pensamiento computacional no es solo programar: es una forma de abordar problemas complejos descomponiéndolos en partes manejables. Este curso te enseña algoritmos, patrones y abstracción con ejercicios interactivos que puedes replicar en cualquier materia, desde matemáticas hasta literatura.",
    category: "Fundamentos",
    level: "Básico",
    price: 1499,
    originalPrice: 2499,
    duration: "6 semanas",
    lessons: 18,
    students: 892,
    rating: 4.8,
    reviews: 203,
    tag: "Nuevo",
    gradient: "from-violet-500/20 to-purple-400/20",
    icon: "🧠",
    previewCode: `# Algoritmo de búsqueda
def buscar(lista, objetivo):
    for i, item in enumerate(lista):
        if item == objetivo:
            return i
    return -1`,
    highlights: [
      "18 módulos con ejercicios interactivos",
      "Enfoque transversal a cualquier materia",
      "Guía del profesor con planes de clase",
      "Evaluaciones automáticas de progreso",
      "Acceso de por vida al contenido",
    ],
    schedule: [
      { id: "s4", date: "2026-10-07", time: "09:00 – 11:00", available: true, instructor: "Dra. María Fernández" },
      { id: "s5", date: "2026-10-14", time: "17:00 – 19:00", available: true, instructor: "Dra. María Fernández" },
      { id: "s6", date: "2026-10-21", time: "09:00 – 11:00", available: true, instructor: "Dra. María Fernández" },
    ],
  },
  {
    id: "apps-educativas-ia",
    title: "Apps Educativas con IA",
    tagline: "Inteligencia artificial al servicio del aprendizaje.",
    description:
      "Crea herramientas inteligentes para el aula usando machine learning y APIs modernas.",
    longDescription:
      "Descubre cómo la inteligencia artificial puede personalizar el aprendizaje de cada estudiante. Desde chatbots educativos hasta sistemas de evaluación automática, aprenderás a integrar modelos de IA en aplicaciones web que realmente transformen la experiencia educativa.",
    category: "Inteligencia Artificial",
    level: "Intermedio",
    price: 2999,
    originalPrice: 4999,
    duration: "10 semanas",
    lessons: 30,
    students: 634,
    rating: 4.9,
    reviews: 178,
    tag: "Próximamente",
    gradient: "from-emerald-500/20 to-teal-400/20",
    icon: "🤖",
    previewCode: `const response = await ai.generate({
  prompt: "Explica la fotosíntesis",
  level: "secundaria",
  language: "es"
});`,
    highlights: [
      "30 clases con proyectos de IA aplicada",
      "Integración con APIs de OpenAI y más",
      "Casos de uso reales en educación",
      "Taller práctico final con mentoría",
      "Acceso anticipado a nuevas lecciones",
    ],
    schedule: [
      { id: "s7", date: "2026-11-03", time: "10:00 – 12:30", available: true, instructor: "Lic. Ana Sofía Torres" },
      { id: "s8", date: "2026-11-10", time: "10:00 – 12:30", available: true, instructor: "Lic. Ana Sofía Torres" },
    ],
  },
  {
    id: "datos-educadores",
    title: "Datos para Educadores",
    tagline: "Toma decisiones basadas en evidencia.",
    description:
      "Analiza el rendimiento estudiantil con dashboards, gráficas y métricas en tiempo real.",
    longDescription:
      "La educación basada en datos no es una tendencia: es una necesidad. Aprende a recopilar, visualizar e interpretar métricas del rendimiento de tus estudiantes para identificar patrones, anticipar dificultades y diseñar intervenciones personalizadas.",
    category: "Análisis de Datos",
    level: "Intermedio",
    price: 2499,
    originalPrice: 3999,
    duration: "8 semanas",
    lessons: 22,
    students: 518,
    rating: 4.7,
    reviews: 145,
    tag: "Recomendado",
    gradient: "from-amber-500/20 to-orange-400/20",
    icon: "📊",
    previewCode: `const metrics = await dashboard.query({
  metric: "completion_rate",
  period: "monthly",
  groupBy: "student"
});`,
    highlights: [
      "22 módulos con ejercicios de datos",
      "Plantillas de dashboards listas para usar",
      "Integración con Google Sheets y Excel",
      "Caso de estudio con datos reales",
      "Comunidad exclusiva de analistas educativos",
    ],
    schedule: [
      { id: "s9", date: "2026-10-08", time: "16:00 – 18:00", available: true, instructor: "Prof. Carlos Mendoza" },
      { id: "s10", date: "2026-10-15", time: "16:00 – 18:00", available: true, instructor: "Prof. Carlos Mendoza" },
      { id: "s11", date: "2026-10-22", time: "10:00 – 12:00", available: true, instructor: "Prof. Carlos Mendoza" },
    ],
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export const categories = [
  "Todos",
  ...Array.from(new Set(courses.map((c) => c.category))),
];

export const levels = ["Todos", "Básico", "Intermedio", "Avanzado"];
