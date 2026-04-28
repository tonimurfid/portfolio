import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'

const STORAGE_KEY = 'portfolio_admin_data'

const DEFAULT_BLOGS = [
  { id: '1', title: 'Building RAG Pipelines That Scale', content: 'Full article coming soon...', date: 'Coming Soon', tags: ['RAG', 'LLM', 'FastAPI'], slug: 'building-rag-pipelines' },
  { id: '2', title: 'Domain Adaptation for CV in the Wild', content: 'Full article coming soon...', date: 'Coming Soon', tags: ['CV', 'YOLO', 'PyTorch'], slug: 'domain-adaptation-cv' },
  { id: '3', title: 'From Notebook to Production: MLOps at Speed', content: 'Full article coming soon...', date: 'Coming Soon', tags: ['MLOps', 'Azure', 'Docker'], slug: 'notebook-to-production' },
]

const DEFAULT_PROJECTS = [
  { id: '1', name: 'Noventis', desc: 'PM AI focusing on preparing technical requirements. Created the pipeline concept and flow to be implemented by the engineering team.', tags: ['RAG', 'LLM', 'FastAPI', 'Docker'], link: '#' },
  { id: '2', name: 'Krowten Chatbot', desc: 'Chatbot answering academic questions on computer networking and cybersecurity using RAG technique and reranking system designed for student learning.', tags: ['RAG', 'LLM', 'ChromaDB', 'FastAPI'], link: '#' },
  { id: '3', name: 'GEMASTIK Pothole Detection', desc: 'Pothole detection system using YOLOv8 with domain adaptation, achieving mAP@50 0.80. Selected as national finalist at GEMASTIK XVII.', tags: ['YOLOv8', 'PyTorch', 'CV', 'Domain Adaptation'], link: '#' },
  { id: '4', name: 'License Plate Recognition', desc: 'High-accuracy ALPR system with mAP@50 of 0.9 and ~85% sequence-level accuracy on Indonesian license plates.', tags: ['YOLO', 'OCR', 'PyTorch', 'CV'], link: '#' },
  { id: '5', name: 'Monkeypox Image Generation', desc: 'Image generation research on low-sample monkeypox datasets using GANs and Diffusion Models for medical data augmentation.', tags: ['GAN', 'Diffusion', 'PyTorch', 'Medical AI'], link: '#' },
  { id: '6', name: 'Food Spoilage Prediction', desc: 'Food spoilage prediction model achieving MAE 3.1. Successfully ran production pilot at UB Coffee on Azure Container Apps.', tags: ['Azure', 'Regression', 'MLOps', 'FastAPI'], link: '#' },
]

const DEFAULT_EXPERIENCES = [
  { id: '1', company: 'PT. DOT Indonesia', role: 'AI Engineer', date: 'March 2026 – Present', startDate: '2026-03', endDate: '', location: 'Malang, Indonesia', highlights: ['Developed LLM-based solutions, including RAG and agentic systems, and built production-ready AI applications through prompt and workflow optimization', 'Integrated AI solutions into existing systems, supporting data preparation, evaluation, and cross-domain projects such as Computer Vision'] },
  { id: '2', company: 'Intelligent Systems Lab, FILKOM UB', role: 'AI Research Assistant & RnD', date: 'September 2024 – Present', startDate: '2024-09', endDate: '', location: 'Malang, Indonesia', highlights: ['Conducted image generation research on low-sample monkeypox datasets using GANs and Diffusion Models', 'Developed automatic license plate recognition system achieving mAP@50 of 0.9 with ~85% sequence accuracy', 'Led R&D activities, including development of internal research tools and maintenance of laboratory server infrastructure'] },
  { id: '3', company: 'Ramir Consulting', role: 'AI Engineer', date: 'December 2025 – February 2026', startDate: '2025-12', endDate: '2026-02', location: 'Remote', highlights: ['Developed an AI-powered accounting system to mimic professional accountants in generating automated financial statements with 80% accuracy', 'Designed and implemented an end-to-end financial reporting pipeline, automatically generating general journals, ledger postings, trial balances, and post-closing trial balances', 'Built intelligent logic and validation mechanisms to ensure transaction classification accuracy and financial consistency'] },
  { id: '4', company: 'Kulkita', role: 'ML Engineer & Co-Founder', date: 'September – December 2025', startDate: '2025-09', endDate: '2025-12', location: 'Malang, Indonesia', highlights: ['Developed and deployed a food spoilage prediction model, achieving MAE 3.1, and successfully ran a production pilot at UB Coffee using Azure Container Apps as part of a 6-person team', 'Maintained and monitored production AI infrastructure, ensuring high availability, stable performance, and reliable system operation throughout the pilot phase'] },
  { id: '5', company: 'Agroplus.id', role: 'AI/ML Engineer', date: 'September – November 2025', startDate: '2025-09', endDate: '2025-11', location: 'Remote', highlights: ['Developed an image classification model for plant disease detection, achieving 92% accuracy using MobileNet', 'Deployed ML models to VPS environments using FastAPI, configuring custom networking for reliable access and scalability'] },
  { id: '6', company: 'School of Internet (SOI) Asia', role: 'ML Researcher – Community Based Research', date: 'September 2024 – February 2025', startDate: '2024-09', endDate: '2025-02', location: 'Remote & Penang, Malaysia', highlights: ['Improved model performance by 17% in F1 score, achieving a final F1 score of 0.85 through optimized cross-domain adaptation', 'Designed and conducted experiments to evaluate the effectiveness of cross-domain adaptation techniques on cybersecurity attack data'] },
]

const DEFAULT_COMPETITIONS = [
  { id: '1', rank: '🥈 2nd Place', competition: 'Samsung Solve for Tomorrow', date: 'October 2025', startDate: '2025-10', org: 'Samsung Indonesia', role: 'ML Engineer', color: 'text-yellow border-yellow/40 bg-yellow/10' },
  { id: '2', rank: '🏅 Finalist', competition: 'Data Mining GEMASTIK XVII', date: 'September 2025', startDate: '2025-09', org: 'KEMENDIKTI', role: 'ML Researcher', color: 'text-purple border-purple/40 bg-purple/10' },
  { id: '3', rank: '🏅 Finalist', competition: 'Data Mining GEMASTIK XVII', date: 'April 2024', startDate: '2024-04', org: 'KEMENDIKTI', role: 'ML Researcher', color: 'text-purple border-purple/40 bg-purple/10' },
  { id: '4', rank: '🏆 Top 3 Winner', competition: 'AI-Based Social Innovations', date: 'August 2025', startDate: '2025-08', org: 'Yayasan BUMN & Microsoft IDN', role: 'AI Engineer', color: 'text-yellow border-yellow/40 bg-yellow/10' },
  { id: '5', rank: '🥇 1st Place', competition: 'Hackathon elevAIte Indonesia Brawijaya Hub', date: 'June 2025', startDate: '2025-06', org: 'Microsoft IDN & Biji-biji Initiative', role: 'ML Engineer', color: 'text-green border-green/40 bg-green/10' },
  { id: '6', rank: '4th Place', competition: 'Data Mining FIT Competition', date: 'June 2025', startDate: '2025-06', org: 'UKSW', role: 'ML Engineer', color: 'text-cyan border-cyan/40 bg-cyan/10' },
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
const MONTHS_FULL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function formatDateRange(startDate, endDate) {
  if (!startDate) return ''
  const [sy, sm] = startDate.split('-')
  const startLabel = `${MONTHS_FULL[parseInt(sm) - 1]} ${sy}`
  if (!endDate) return `${startLabel} – Present`
  const [ey, em] = endDate.split('-')
  const endLabel = `${MONTHS_FULL[parseInt(em) - 1]} ${ey}`
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
