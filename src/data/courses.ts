export interface Instructor {
  name: string;
  initials: string;
  color: string;
}

export interface Course {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  categoryColor: string;
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
  instructor: Instructor;
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
    categoryColor: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    level: "Básico",
    price: 199,
    originalPrice: 349,
    duration: "8 semanas",
    lessons: 24,
    students: 1247,
    rating: 4.9,
    reviews: 312,
    tag: "Popular",
    gradient: "from-blue-600/30 to-cyan-500/20",
    icon: "💻",
    instructor: {
      name: "Carlos Mendoza",
      initials: "CM",
      color: "from-blue-500 to-cyan-500",
    },
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
    categoryColor: "bg-violet-500/15 text-violet-400 border-violet-500/20",
    level: "Básico",
    price: 149,
    originalPrice: 249,
    duration: "6 semanas",
    lessons: 18,
    students: 892,
    rating: 4.8,
    reviews: 203,
    tag: "Nuevo",
    gradient: "from-violet-600/30 to-purple-500/20",
    icon: "🧠",
    instructor: {
      name: "María Fernández",
      initials: "MF",
      color: "from-violet-500 to-purple-500",
    },
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
    categoryColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    level: "Intermedio",
    price: 299,
    originalPrice: 499,
    duration: "10 semanas",
    lessons: 30,
    students: 634,
    rating: 4.9,
    reviews: 178,
    tag: "Próximamente",
    gradient: "from-emerald-600/30 to-teal-500/20",
    icon: "🤖",
    instructor: {
      name: "Ana Sofía Torres",
      initials: "AT",
      color: "from-emerald-500 to-teal-500",
    },
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
    categoryColor: "bg-amber-500/15 text-amber-400 border-amber-500/20",
    level: "Intermedio",
    price: 249,
    originalPrice: 399,
    duration: "8 semanas",
    lessons: 22,
    students: 518,
    rating: 4.7,
    reviews: 145,
    tag: "Recomendado",
    gradient: "from-amber-600/30 to-orange-500/20",
    icon: "📊",
    instructor: {
      name: "Carlos Mendoza",
      initials: "CM",
      color: "from-amber-500 to-orange-500",
    },
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
  {
    id: "gestion-de-proyectos",
    title: "Gestión de Proyectos Tecnológicos",
    tagline: "Lidera equipos y entrega valor con metodologías ágiles.",
    description:
      "Domina Scrum, Kanban y herramientas de gestión para liderar proyectos de tecnología de principio a fin.",
    longDescription:
      "Aprende a planificar, ejecutar y entregar proyectos tecnológicos usando las metodologías que usan las empresas más innovadoras del mundo. Desde la definición del product backlog hasta la retrospectiva del equipo, este curso te da todas las herramientas para gestionar equipos de desarrollo y educación con agilidad y enfoque.",
    category: "Gestión",
    categoryColor: "bg-rose-500/15 text-rose-400 border-rose-500/20",
    level: "Intermedio",
    price: 279,
    originalPrice: 449,
    duration: "8 semanas",
    lessons: 20,
    students: 743,
    rating: 4.8,
    reviews: 189,
    tag: "Popular",
    gradient: "from-rose-600/30 to-pink-500/20",
    icon: "📋",
    instructor: {
      name: "Roberto Villegas",
      initials: "RV",
      color: "from-rose-500 to-pink-500",
    },
    previewCode: `// Sprint Planning
const sprint = {
  goal: "Entregar módulo de evaluaciones",
  stories: backlog.slice(0, 8),
  team: ["Ana", "Carlos", "María"],
  duration: "2 semanas"
};`,
    highlights: [
      "20 módulos con ejercicios prácticos de gestión",
      "Metodologías Scrum y Kanban aplicadas",
      "Simulación de proyecto real con equipo",
      "Herramientas: Jira, Trello, Notion",
      "Certificado de gestión de proyectos ágiles",
    ],
    schedule: [
      { id: "s12", date: "2026-10-09", time: "18:00 – 20:00", available: true, instructor: "Lic. Roberto Villegas" },
      { id: "s13", date: "2026-10-16", time: "10:00 – 12:00", available: true, instructor: "Lic. Roberto Villegas" },
      { id: "s14", date: "2026-10-23", time: "18:00 – 20:00", available: true, instructor: "Lic. Roberto Villegas" },
    ],
  },
  {
    id: "cloud-aws-azure",
    title: "Cloud Computing: AWS y Azure",
    tagline: "Domina la nube y lleva tus aplicaciones al siguiente nivel.",
    description:
      "Aprende a desplegar, gestionar y escalar aplicaciones en las dos plataformas de nube más utilizadas del mundo.",
    longDescription:
      "El cloud computing es el presente y el futuro de la infraestructura tecnológica. Este curso te enseña a trabajar con Amazon Web Services y Microsoft Azure: desde crear tu primera instancia virtual hasta configurar bases de datos, almacenamiento, redes y despliegues continuos. Ideal para educadores que quieren modernizar la infraestructura de su institución.",
    category: "Cloud & DevOps",
    categoryColor: "bg-sky-500/15 text-sky-400 border-sky-500/20",
    level: "Intermedio",
    price: 349,
    originalPrice: 549,
    duration: "10 semanas",
    lessons: 28,
    students: 412,
    rating: 4.9,
    reviews: 156,
    tag: "Nuevo",
    gradient: "from-sky-600/30 to-indigo-500/20",
    icon: "☁️",
    instructor: {
      name: "Diego Salazar",
      initials: "DS",
      color: "from-sky-500 to-indigo-500",
    },
    previewCode: `# Deploy en AWS
aws ec2 run-instances \\
  --image-id ami-0abcdef1234 \\
  --instance-type t3.micro \\
  --key-name my-key`,
    highlights: [
      "28 clases con laboratorios en AWS y Azure",
      "Cuenta gratuita configurada paso a paso",
      "Despliegue de aplicaciones reales en la nube",
      "Certificación clouds practitioner como meta",
      "Acceso a laboratorios por 6 meses",
    ],
    schedule: [
      { id: "s15", date: "2026-10-10", time: "09:00 – 11:30", available: true, instructor: "Ing. Diego Salazar" },
      { id: "s16", date: "2026-10-17", time: "09:00 – 11:30", available: true, instructor: "Ing. Diego Salazar" },
      { id: "s17", date: "2026-10-24", time: "17:00 – 19:30", available: true, instructor: "Ing. Diego Salazar" },
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
