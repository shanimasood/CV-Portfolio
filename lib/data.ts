import type {
  Project,
  Experience,
  Skill,
  Service,
  NavLink,
  SocialLink,
} from '@/types';

export const PERSONAL = {
  name: 'Muhammad Zeeshan Masood',
  shortName: 'Zeeshan Masood',
  initials: 'MZ',
  role: 'Senior Software Design Engineer',
  title: 'Team Lead · Full-Stack · FinTech',
  location: 'Islamabad, Pakistan',
  email: 'mznhmbro@gmail.com',
  phone: '+92 316 5815560',
  bio: 'Senior engineer building full-stack systems that move money — front-ends, mobile apps, back-end services, and the workflows that connect them.',
  longBio:
    "Five years in FinTech, leading front-end and full-stack work for one of Pakistan's leading banks. I build Vue.js and React Native applications, Node.js and Java Quarkus services, design PostgreSQL schemas, and model business processes in Camunda BPMN — the kind of code that has to be both beautiful and audit-proof.",
  rotatingTitles: [
    'Full-Stack Engineer',
    'FinTech Architect',
    'Team Lead',
    'BPMN Designer',
    'Problem Solver',
  ],
  available: true,
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIALS: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-zeeshan-masood-abb6871b8/',
    handle: '/in/muhammad-zeeshan-masood',
  },
  {
    label: 'Email',
    href: 'mailto:mznhmbro@gmail.com',
    handle: 'mznhmbro@gmail.com',
  },
  {
    label: 'Phone',
    href: 'tel:+923165815560',
    handle: '+92 316 5815560',
  },
];

export const STATS = [
  { value: 5, suffix: '+', label: 'Years in FinTech' },
  { value: 6, suffix: '', label: 'Loan Categories Delivered' },
  { value: 3, suffix: '', label: 'Concurrent Product Tracks' },
  { value: 10, suffix: '+', label: 'Banking Modules Shipped' },
];

export const PROJECTS: Project[] = [
  {
    id: 'cms',
    title: 'Credit Management System',
    subtitle: "Teresol's flagship lending platform",
    description:
      'Enterprise lending product covering origination, approval, disbursement, recovery, and securities for a major Pakistani bank — 60+ pre-wired routes across five modules, with every screen traceable to a Camunda BPMN process. Vue 3 front-end on a Java Quarkus / PostgreSQL backend.',
    category: 'product',
    status: 'shipping',
    tags: ['Vue 3', 'Pinia', 'Java Quarkus', 'PostgreSQL', 'Camunda', 'BPMN', 'FinTech'],
    highlights: [
      '18-step origination wizard wired to Camunda process keys',
      '8 verification flows (telephonic, physical, asset/EAMU, eCIB, KYC) on one generic workstation component',
      'Live DBR gauge against SBP 50% policy ceiling; full EMI calculator with 5-year amortization',
      'NPL classification (substandard / doubtful / loss) and 8-stage workflow through write-off',
      '4-tier authorizer (BM → AM → ZM → CBD), CCC and CBD-CC committee routing',
    ],
    links: { case: '/projects/cms' },
    featured: true,
  },
  {
    id: 'digital-banking',
    title: 'Enterprise Digital Banking',
    subtitle: 'Core banking front-end for a leading Pakistani bank',
    description:
      'Front-end engineering across critical banking modules including OBS, Teller, CRM, Term Deposit, and Remittance. Focused on isolating core business logic, modular UI architecture, and scalable performance across high-traffic banking flows.',
    category: 'enterprise',
    status: 'live',
    tags: ['Vue 3', 'Vuex', 'Micro Front-end', 'REST APIs', 'Banking'],
    highlights: [
      'Modules: OBS, Teller, CRM, Term Deposit, Remittance',
      'Micro front-end architecture for independent module deployments',
      'High-traffic, audit-ready interfaces',
    ],
    featured: true,
  },
  {
    id: 'camunda-bpmn',
    title: 'Camunda BPMN Workflows',
    subtitle: 'Business process automation engine',
    description:
      'Designing and writing new business flows on Camunda — modeling activities, generating dynamic forms, and connecting BPMN diagrams to live banking operations. The orchestration layer behind every approval, escalation, and handoff.',
    category: 'workflow',
    status: 'live',
    tags: ['Camunda', 'BPMN', 'Form Generation', 'Java', 'Workflow'],
    highlights: [
      'Custom activity modeling and process design',
      'Dynamic form generation tied to BPMN tasks',
      'Integration with core banking APIs',
    ],
  },
  {
    id: 'trixma',
    title: 'Trixma',
    subtitle: 'Full-stack invoicing for freelancers',
    description:
      'A solo-built invoicing platform: Expo/React Native client, NestJS + Prisma + PostgreSQL backend. 34 screens, 14 Prisma models, 11 typed data hooks — biometric auth, recurring invoices, native PDF/CSV export, HMAC-signed webhooks, and a client portal with invite tokens. 100% TypeScript across both apps.',
    category: 'mobile',
    status: 'personal',
    tags: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'Zustand', 'TanStack Query'],
    highlights: [
      'Biometric login (Face ID / Fingerprint) via expo-local-authentication',
      'Recurring invoices with weekly / monthly / quarterly / yearly cadence',
      'Native PDF + CSV export via expo-file-system to the OS share sheet',
      'Refresh-token rotation per device; hash-only storage, single-use rotation',
      'Client portal — invoice viewing with invite tokens and audit-traceable events',
    ],
    links: { case: '/projects/trixma' },
    featured: true,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'teresol-senior',
    role: 'Senior Software Design Engineer · Team Lead',
    company: 'Teresol Pvt. Ltd.',
    location: 'Islamabad, Pakistan',
    start: 'Nov 2022',
    end: 'Present',
    current: true,
    description: [
      'Leading front-end engineering across three concurrent tracks: enterprise digital banking, business-process automation through Camunda BPMN, and the development of Teresol\'s flagship Credit Management System.',
      'Responsible for architecture decisions, modular system design, REST API integration, full-stack feature delivery, and mentoring engineers. Work spans Vue 3, React Native, Node.js, Java Quarkus, and PostgreSQL.',
      'Cross-functional collaboration with backend, QA, and product teams to ensure clean, scalable, audit-ready code.',
    ],
    tags: [
      'Vue 3', 'React Native', 'Node.js', 'Java Quarkus',
      'PostgreSQL', 'Camunda', 'BPMN', 'Micro Front-end',
      'Team Leadership', 'Architecture',
    ],
  },
  {
    id: 'teresol-engineer',
    role: 'Software Engineer',
    company: 'Teresol Pvt. Ltd.',
    location: 'Islamabad, Pakistan',
    start: 'Nov 2020',
    end: 'Nov 2022',
    description: [
      'Shipped production front-end features across the Vue ecosystem — responsive layouts, component architecture, and clean REST API integration.',
      'Built the foundation skills in OOP, responsive design, and scalable web patterns that paved the way for senior responsibilities.',
    ],
    tags: ['Vue.js', 'JavaScript', 'OOP', 'Responsive Design', 'REST APIs'],
  },
  {
    id: 'education',
    role: 'B.S. Computer Science',
    company: 'International Islamic University',
    location: 'Islamabad, Pakistan',
    start: '2016',
    end: '2020',
    description: [
      "Bachelor's degree in Computer Science with a foundation in algorithms, data structures, software engineering, databases, and systems design.",
    ],
    tags: ['Computer Science', 'Algorithms', 'Data Structures', 'Software Engineering'],
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'Frontend Web',
    icon: 'layout',
    items: ['Vue 3', 'Vuex', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
    proficiency: 95,
  },
  {
    category: 'Mobile',
    icon: 'smartphone',
    items: ['React Native', 'Cross-platform', 'Native APIs', 'Mobile UX'],
    proficiency: 80,
  },
  {
    category: 'Backend',
    icon: 'server',
    items: ['Node.js', 'Java', 'Quarkus', 'REST APIs', 'Microservices'],
    proficiency: 88,
  },
  {
    category: 'Database',
    icon: 'database',
    items: ['PostgreSQL', 'Schema Design', 'Query Optimization', 'Migrations'],
    proficiency: 85,
  },
  {
    category: 'Workflow Engineering',
    icon: 'workflow',
    items: ['Camunda', 'BPMN 2.0', 'Form Generation', 'Process Modeling'],
    proficiency: 82,
  },
  {
    category: 'Architecture',
    icon: 'box',
    items: ['MVVM', 'Micro Front-end', 'OOP', 'Modular Design', 'SPA'],
    proficiency: 90,
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Full-Stack Web Engineering',
    description: 'End-to-end web product delivery — from API to interface.',
    icon: 'code',
    bullets: ['Vue 3 / React', 'Node.js / Java', 'PostgreSQL', 'REST / GraphQL'],
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps built with React Native.',
    icon: 'smartphone',
    bullets: ['iOS & Android', 'Native bridges', 'Offline-first', 'App Store delivery'],
  },
  {
    title: 'FinTech Solutions',
    description: 'Banking-grade interfaces and workflows for financial products.',
    icon: 'banknote',
    bullets: ['Core banking UI', 'Loan systems', 'Audit-ready code', 'Compliance-aware'],
  },
  {
    title: 'BPMN & Process Design',
    description: 'Business process modeling and automation with Camunda.',
    icon: 'workflow',
    bullets: ['BPMN 2.0 modeling', 'Form generation', 'Activity orchestration', 'Approval flows'],
  },
  {
    title: 'Database Architecture',
    description: 'PostgreSQL schema design and query optimization.',
    icon: 'database',
    bullets: ['Schema design', 'Indexing strategy', 'Migrations', 'Performance tuning'],
  },
  {
    title: 'Technical Leadership',
    description: 'Team lead, code review, and architectural guidance.',
    icon: 'users',
    bullets: ['Code review', 'Mentorship', 'System architecture', 'Cross-functional liaison'],
  },
];

export const TECH_STACK = [
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Java', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Quarkus', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Camunda', category: 'Workflow' },
  { name: 'BPMN 2.0', category: 'Workflow' },
  { name: 'Vuex', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'Git', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
];
