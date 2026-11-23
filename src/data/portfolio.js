export const PROFILE = {
  name: 'Fatoni Murfid Syaafii',
  shortName: 'Fatoni M. Syaafii',
  role: 'AI / ML Engineer',
  location: 'Malang, Indonesia',
  email: 'fatonimurfids@gmail.com',
  github: 'https://github.com/tonimurfid',
  linkedin: 'https://www.linkedin.com/in/fatoni-murfid-syaafii/',
  cvUrl: '/cv.pdf',
  photoUrl: '/profile.jpeg',
  photoCaption: 'Universitas Brawijaya · Informatics ’23 · GPA 3.97',
  headlineLead: 'Designing production AI systems—',
  headlineItalic: 'from research prototypes to scalable deployment.',
  summary:
    'AI Engineer combining machine learning, software engineering, and product thinking. Focused on agentic LLM pipelines, RAG architectures, and computer vision models that hold up in production.',
}

export const HERO_METRICS = [
  {
    value: '1 wk → 5 min',
    label: 'FSD document automation',
    context: 'PT. DOT Indonesia · 100+ pages',
  },
  {
    value: '−25%',
    label: 'LLM API cost reduction',
    context: 'Context filtering & hash caching',
  },
  {
    value: '3×',
    label: 'GEMASTIK Finalist',
    context: 'Data Mining · XVII · XVIII · XIX',
  },
  {
    value: 'IEEE',
    label: 'Accepted ML research',
    context: '2026 IEEE 12th ITIS · WGAN-GP',
  },
]

export const SELECTED_WORK = [
  {
    index: '01',
    title: 'Agentic FSD Generation Pipeline',
    organization: 'PT. DOT Indonesia',
    year: '2026',
    metric: '1 wk → 5 min',
    metricNote: '−25% LLM API cost',
    description:
      'Built an agentic LLM workflow that automates 100+ page Functional Specification Documents across 16 modules and 3 production knowledge bases. Engineered context filtering, prompt optimization, and hash-based module caching for instant incremental regeneration.',
    stack: ['Agentic LLM', 'RAG', 'Hash Caching', 'Python'],
    links: [],
    status: 'Internal · Production',
  },
  {
    index: '02',
    title: 'Kulkita — Food Spoilage Prediction & MLOps',
    organization: 'Co-Founder · UB Coffee Pilot',
    year: '2025',
    metric: 'MAE 3.1',
    metricNote: 'Azure Container Apps',
    description:
      'Designed and deployed a food spoilage prediction model into a live production pilot at UB Coffee as part of a 6-person team. Owned production AI infrastructure monitoring for availability and stability; awarded 1st Place at Hackathon elevAIte and Top 3 AI-Based Social Innovations.',
    stack: ['Regression', 'Azure Container Apps', 'FastAPI', 'Docker'],
    links: [],
    status: 'Production Pilot · SaaS',
  },
  {
    index: '03',
    title: 'WGAN-GP Mpox Skin-Lesion Synthesis',
    organization: '2026 IEEE 12th ITIS Research',
    year: '2026',
    metric: 'Multi-Seed Eval',
    metricNote: 'Low-sample medical AI',
    description:
      'Investigated generative data augmentation for scarce monkeypox skin-lesion datasets using WGAN-GP, systematically evaluating multi-seed stability and fidelity under limited training data.',
    stack: ['PyTorch', 'WGAN-GP', 'Medical Imaging'],
    links: [
      {
        label: 'Letter of Acceptance',
        href: 'https://drive.google.com/file/d/1LiVbCUpvtg3zurouUYihznV3sgwojrvY/view?usp=sharing',
      },
    ],
    status: 'Accepted · IEEE ITIS 2026',
  },
  {
    index: '04',
    title: 'Krowten Academic RAG Chatbot',
    organization: 'Academic Learning System',
    year: '2025',
    metric: 'RAG + Rerank',
    metricNote: 'Networking & Cybersecurity',
    description:
      'Engineered an academic question-answering chatbot for computer networking and cybersecurity coursework, pairing retrieval-augmented generation with a reranking stage to improve citation precision for student learning.',
    stack: ['RAG', 'Reranking', 'ChromaDB', 'FastAPI'],
    links: [
      {
        label: 'Live / Project',
        href: 'https://bit.ly/krowten',
      },
      {
        label: 'GitHub Repo',
        href: 'https://github.com/tonimurfid/chatbot_matkul_network',
      },
    ],
    status: null,
  },
  {
    index: '05',
    title: 'Noventis — AI Pipeline Architecture',
    organization: 'PM AI · Technical Specification',
    year: '2025',
    metric: 'System Blueprint',
    metricNote: 'Requirements & flow',
    description:
      'Led technical requirement definition as PM AI, translating product objectives into an end-to-end AI pipeline architecture and execution flow ready for engineering implementation.',
    stack: ['AI Product Spec', 'Pipeline Design', 'LLM Systems'],
    links: [
      {
        label: 'Live App',
        href: 'https://noventis-fe.vercel.app/',
      },
    ],
    status: 'Architecture & PM Spec',
  },
]

export const EXPERIENCES = [
  {
    period: 'Mar 2026 – Jul 2026',
    location: 'Malang, Indonesia',
    company: 'PT. DOT Indonesia',
    role: 'AI Engineer Intern',
    distinction: 'Best Intern · Engineering Category',
    highlights: [
      'Built an agentic LLM pipeline automating 100+ page FSD document generation, cutting manual effort from 1 week to 5 minutes across 16 modules and 3 production knowledge bases.',
      'Reduced LLM API costs by ~25% via context filtering, prompt optimization, and hash-based module caching for instant incremental regeneration.',
      'Awarded Best Intern (Engineering Category) for achieving the highest final evaluation score across performance and discipline.',
    ],
  },
  {
    period: 'Dec 2025 – Feb 2026',
    location: 'Remote',
    company: 'Ramir Consulting',
    role: 'AI Engineer',
    distinction: null,
    highlights: [
      'Developed an AI-powered accounting system automating financial statement generation at 80% accuracy—covering journals, ledger postings, trial balances, and post-closing workflows.',
      'Designed validation mechanisms to enforce transaction classification accuracy, financial consistency, and accounting-standard compliance.',
    ],
  },
  {
    period: 'Sep 2025 – Dec 2025',
    location: 'Malang, Indonesia',
    company: 'Kulkita',
    role: 'ML Engineer & Co-Founder',
    distinction: null,
    highlights: [
      'Developed and deployed a food spoilage prediction model achieving MAE 3.1, executing a live production pilot at UB Coffee on Azure Container Apps in a 6-person team.',
      'Maintained and monitored production AI infrastructure for high availability and stable inference throughout the pilot phase.',
    ],
  },
  {
    period: 'Sep 2025 – Nov 2025',
    location: 'Remote',
    company: 'Agroplus.id',
    role: 'AI / ML Engineer',
    distinction: null,
    highlights: [
      'Built a MobileNet-based plant disease image classification model achieving 92% accuracy.',
      'Deployed production ML inference services to VPS infrastructure with FastAPI and custom networking for reliable access and scalability.',
    ],
  },
  {
    period: 'Sep 2024 – Feb 2025',
    location: 'Remote & Penang, Malaysia',
    company: 'School of Internet (SOI) Asia',
    role: 'ML Research Assistant · Community Based Research',
    distinction: null,
    highlights: [
      'Improved cybersecurity attack detection by +17% F1 score—reaching 0.85 final F1—through optimized cross-domain adaptation across heterogeneous datasets.',
      'Designed and ran comparative experiments evaluating domain adaptation strategies on real-world network threat traffic.',
    ],
  },
]

export const PUBLICATION = {
  venue: '2026 IEEE 12th Information Technology International Seminar (ITIS)',
  date: 'October 2026',
  title: 'Multi-Seed Evaluation of WGAN-GP for Mpox Skin-Lesion Synthesis Under Limited Data',
  summary:
    'Empirical evaluation of Wasserstein GAN with Gradient Penalty (WGAN-GP) stability across random seeds for synthesizing Mpox dermatological imagery in low-data regimes.',
  loaUrl: 'https://drive.google.com/file/d/1LiVbCUpvtg3zurouUYihznV3sgwojrvY/view?usp=sharing',
}

export const EDUCATION = {
  institution: 'Universitas Brawijaya',
  degree: 'B.Sc. in Informatics Engineering',
  period: '2023 – Present',
  location: 'Malang, Indonesia',
  gpa: '3.97 / 4.00',
  note: 'Faculty of Computer Science (FILKOM UB) · Focus on Artificial Intelligence, Machine Learning, and Competitive Data Science.',
}

export const CERTIFICATION = {
  title: 'Associate Data Scientist',
  issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
  date: 'July 2025',
  credentialUrl: 'https://drive.google.com/file/d/1VemOJFAB0nfFEZqtd1YzNkRwx34rH76G/view?usp=drive_link',
}

export const COMPETITIONS = [
  {
    date: '2024 – 2026',
    award: '3× National Finalist',
    event: 'Data Mining — GEMASTIK XVII, XVIII, XIX',
    scope: 'Domain adaptation, health consultation transcription, facial gesture recognition',
    organizer: 'KEMENDIKTI',
  },
  {
    date: 'Oct 2025',
    award: '2nd Winner',
    event: 'Samsung Solve for Tomorrow 2025',
    scope: 'AI/ML Engineer · IoT-based fruit freshness prediction system',
    organizer: 'Samsung Indonesia',
  },
  {
    date: 'Aug 2025',
    award: 'Top 3 Winner',
    event: 'AI-Based Social Innovations',
    scope: 'AI/ML Engineer · Production maintenance & pilot deployment for Kulkita',
    organizer: 'Yayasan BUMN & Microsoft IDN',
  },
  {
    date: 'Jun 2025',
    award: '1st Place',
    event: 'Hackathon elevAIte Indonesia Brawijaya Hub',
    scope: 'AI/ML Engineer · Food spoilage prediction system (Kulkita)',
    organizer: 'Microsoft IDN & Biji-biji Initiative',
  },
  {
    date: 'Jun 2025',
    award: '4th Place',
    event: 'Data Mining FIT Competition 2025',
    scope: 'R&D · Marine waste object detection built from scratch',
    organizer: 'UKSW',
  },
]

export const SKILL_GROUPS = [
  {
    category: 'Programming Languages',
    items: ['Python', 'SQL', 'Java'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face'],
  },
  {
    category: 'MLOps & Deployment',
    items: ['Docker', 'FastAPI', 'Azure Container Apps', 'MLflow', 'Weights & Biases', 'Git / GitHub'],
  },
  {
    category: 'Data & Vector Databases',
    items: ['PostgreSQL', 'MongoDB', 'Chroma (Vector DB)'],
  },
  {
    category: 'Environment & AI Tooling',
    items: ['Linux (Ubuntu)', 'VS Code', 'Google Colab', 'Claude Code', 'Codex CLI'],
  },
]
