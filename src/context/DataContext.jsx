import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'

const STORAGE_KEY = 'portfolio_admin_data'

const DEFAULT_BLOGS = [
  { id: '1', title: 'Building RAG Pipelines That Scale', content: 'Full article coming soon...', date: 'Coming Soon', tags: ['RAG', 'LLM', 'FastAPI'], slug: 'building-rag-pipelines' },
  { id: '2', title: 'Domain Adaptation for CV in the Wild', content: 'Full article coming soon...', date: 'Coming Soon', tags: ['CV', 'YOLO', 'PyTorch'], slug: 'domain-adaptation-cv' },
  { id: '3', title: 'From Notebook to Production: MLOps at Speed', content: 'Full article coming soon...', date: 'Coming Soon', tags: ['MLOps', 'Azure', 'Docker'], slug: 'notebook-to-production' },
]

const DEFAULT_PROJECTS = [
  { id: '1', name: 'Noventis', desc: 'AI-powered project manager assistant with a sophisticated pipeline architecture for task automation and intelligent scheduling.', tags: ['RAG', 'LLM', 'FastAPI', 'Docker'], link: '#' },
  { id: '2', name: 'Krowten Chatbot', desc: 'RAG + reranking chatbot delivering precise answers for networking and cybersecurity Q&A with contextual retrieval.', tags: ['RAG', 'LLM', 'ChromaDB', 'FastAPI'], link: '#' },
  { id: '3', name: 'GEMASTIK Pothole Detection', desc: 'YOLOv8 with domain adaptation achieving mAP@50 of 0.80. Reached national finalist stage at GEMASTIK XVII.', tags: ['YOLOv8', 'PyTorch', 'CV', 'Domain Adaptation'], link: '#' },
  { id: '4', name: 'License Plate Recognition', desc: 'High-accuracy ALPR system with mAP@50 of 0.9 and ~85% sequence-level accuracy on Indonesian plates.', tags: ['YOLO', 'OCR', 'PyTorch', 'CV'], link: '#' },
  { id: '5', name: 'Monkeypox Image Generation', desc: 'GANs and Diffusion Models applied to low-sample medical datasets for synthetic image generation.', tags: ['GAN', 'Diffusion', 'PyTorch', 'Medical AI'], link: '#' },
  { id: '6', name: 'Food Spoilage Prediction', desc: 'Kulkita flagship model achieving MAE 3.1 on sensor data. Deployed on Azure Container Apps for real-time inference.', tags: ['Azure', 'Regression', 'MLOps', 'FastAPI'], link: '#' },
]

const DEFAULT_EXPERIENCES = [
  { id: '1', company: 'PT. DOT Indonesia', role: 'AI Engineer', date: 'March 2026 – Present', startDate: '2026-03', endDate: '', location: 'Malang, Indonesia', highlights: ['Developing AI-driven features for enterprise SaaS products', 'Building end-to-end ML pipelines with FastAPI and Docker', 'Implementing RAG systems for document intelligence'] },
  { id: '2', company: 'Intelligent Systems Lab, FILKOM UB', role: 'AI Research Assistant & RnD', date: 'Sept 2024 – Present', startDate: '2024-09', endDate: '', location: 'Malang, Indonesia', highlights: ['Conducting research on NLP and computer vision topics', 'Contributing to academic publications and grant proposals', 'Mentoring junior researchers in ML experimentation'] },
  { id: '3', company: 'Ramir Consulting', role: 'AI Engineer', date: 'Dec 2025 – Feb 2026', startDate: '2025-12', endDate: '2026-02', location: 'Remote', highlights: ['Built custom LLM-based analytics dashboards for clients', 'Optimized prompt engineering pipelines for business use cases', 'Delivered AI solutions under tight 2-month contract deadlines'] },
  { id: '4', company: 'Kulkita', role: 'ML Engineer & Co-Founder', date: 'Sept – Dec 2025', startDate: '2025-09', endDate: '2025-12', location: 'Malang, Indonesia', highlights: ['Co-founded AI startup for food spoilage prediction', 'Trained models achieving MAE of 3.1 on real-world sensor data', 'Deployed inference API on Azure Container Apps'] },
  { id: '5', company: 'Agroplus.id', role: 'AI/ML Engineer', date: 'Sept – Nov 2025', startDate: '2025-09', endDate: '2025-11', location: 'Remote', highlights: ['Developed computer vision models for agricultural applications', 'Built data preprocessing pipelines for satellite imagery'] },
  { id: '6', company: 'School of Internet (SOI) Asia', role: 'ML Researcher – CBR', date: 'Sept 2024 – Feb 2025', startDate: '2024-09', endDate: '2025-02', location: 'Remote (Japan-based)', highlights: ['Researched case-based reasoning (CBR) methods for ML applications', 'Published findings in collaboration with international researchers', 'Presented results at SOI Asia consortium meetings'] },
]

const DEFAULT_COMPETITIONS = [
  { id: '1', rank: '🥈 2nd Place', competition: 'Samsung Solve for Tomorrow', date: '2025', startDate: '2025-01', org: 'Samsung', role: 'Team Lead', color: 'text-yellow border-yellow/40 bg-yellow/10' },
  { id: '2', rank: '🏅 Finalist', competition: 'Data Mining GEMASTIK XVII', date: '2025', startDate: '2025-01', org: 'Kemendikbud', role: 'ML Engineer', color: 'text-purple border-purple/40 bg-purple/10' },
  { id: '3', rank: '🏅 Finalist', competition: 'Data Mining GEMASTIK XVII', date: '2024', startDate: '2024-01', org: 'Kemendikbud', role: 'ML Engineer', color: 'text-purple border-purple/40 bg-purple/10' },
  { id: '4', rank: '🏆 Top 3 Winner', competition: 'AI-Based Social Innovations', date: '2024', startDate: '2024-01', org: 'Yayasan BUMN & Microsoft IDN', role: 'AI Engineer', color: 'text-yellow border-yellow/40 bg-yellow/10' },
  { id: '5', rank: '🥇 1st Place', competition: 'Hackathon elevAIte Indonesia Brawijaya Hub', date: '2024', startDate: '2024-01', org: 'elevAIte', role: 'Team Lead', color: 'text-green border-green/40 bg-green/10' },
  { id: '6', rank: '4th Place', competition: 'Data Mining FIT Competition', date: '2025', startDate: '2025-01', org: 'FILKOM UB', role: 'ML Engineer', color: 'text-cyan border-cyan/40 bg-cyan/10' },
]

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return { blogs: DEFAULT_BLOGS, projects: DEFAULT_PROJECTS, experiences: DEFAULT_EXPERIENCES, competitions: DEFAULT_COMPETITIONS }
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function formatDateRange(startDate, endDate) {
  if (!startDate) return ''
  const [sy, sm] = startDate.split('-')
  const startLabel = `${MONTHS[parseInt(sm) - 1]} ${sy}`
  if (!endDate) return `${startLabel} – Present`
  const [ey, em] = endDate.split('-')
  const endLabel = `${MONTHS[parseInt(em) - 1]} ${ey}`
  if (startDate === endDate) return startLabel
  return `${startLabel} – ${endLabel}`
}

function sortByDateDesc(list) {
  return [...list].sort((a, b) => {
    const aDate = a.startDate || a.date || ''
    const bDate = b.startDate || b.date || ''
    return bDate.localeCompare(aDate)
  })
}

let nextId = 100
function genId() { return String(++nextId) }

const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [data, setData] = useState(load)

  useEffect(() => { save(data) }, [data])

  const reset = useCallback((key) => {
    setData((prev) => {
      const defaults = {
        blogs: DEFAULT_BLOGS,
        projects: DEFAULT_PROJECTS,
        experiences: DEFAULT_EXPERIENCES,
        competitions: DEFAULT_COMPETITIONS,
      }
      return { ...prev, [key]: defaults[key] || prev[key] }
    })
  }, [])

  const crud = (key, sort = false) => {
    const raw = data[key] || []
    return {
      list: sort ? sortByDateDesc(raw) : raw,
      raw: raw,
      add: (item) => {
        const autoDate = item.startDate && ['experiences'].includes(key)
          ? { date: formatDateRange(item.startDate, item.endDate) }
          : {}
        setData((prev) => ({ ...prev, [key]: [...(prev[key] || []), { ...item, id: genId(), ...autoDate }] }))
      },
      update: (id, item) => {
        const autoDate = item.startDate && ['experiences'].includes(key)
          ? { date: formatDateRange(item.startDate, item.endDate) }
          : {}
        setData((prev) => ({
          ...prev,
          [key]: (prev[key] || []).map((x) =>
            x.id === id ? { ...item, id, ...autoDate } : x
          ),
        }))
      },
      remove: (id) => setData((prev) => ({ ...prev, [key]: (prev[key] || []).filter((x) => x.id !== id) })),
      reset: () => reset(key),
    }
  }

  const value = {
    blogs: crud('blogs'),
    projects: crud('projects'),
    experiences: crud('experiences', true),
    competitions: crud('competitions', true),
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useData() {
  return useContext(DataContext)
}
