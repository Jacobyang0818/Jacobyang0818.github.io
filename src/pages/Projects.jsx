import { useState } from 'react'

// ── 專案圖片路徑 (已放置臨時圖片，可替換成你想要的圖片)
// 替換方式：將圖片放到 /public/ 資料夾，然後更改路徑即可
const projects = [
  {
    id: 1,
    title: 'SSO-STGCN (碩士論文)',
    subtitle: 'Simplified Swarm Optimization for ST-GCN in Intoxicated Gait Recognition',
    period: '2024',
    image: '/project_sso_stgcn.png',
    imageAlt: 'SSO-STGCN 專案截圖',
    link: 'https://github.com/Jacobyang0818/SSO-STGCN',
    paperLink: 'https://nthu.primo.exlibrisgroup.com/permalink/886UST_NTHU/fslbfa/alma9957635823706774',
    badge: '碩士論文',
    description:
      '基於骨架的酒醉步態辨識研究，使用圖卷積神經網路（STGCN++ 等）結合啟發式演算法（SSO / GA / PSO）進行最佳化參數搜索。獨立撰寫驗證測試腳本，構建完整 ML pipeline，協助監控及評估模型性能，使用相關指標確保訓練流程具備可重現性與高效性。',
    tags: ['ST-GCN', 'ML Pipeline', 'PyTorch', 'Neural Architecture Search', 'Hyper Parameter Optimization', 'CUDA'],
    highlights: ['啟發式演算法最佳化', '姿態估計與動作識別', '獨立完成論文研究'],
    accentColor: '#2563EB',
  },
  {
    id: 2,
    title: 'Astrology Gemini Compass',
    subtitle: '開源星盤分析 AI 系統',
    period: '2024',
    image: '/project_astrology.png',
    imageAlt: 'Astrology Gemini Compass 系統截圖',
    link: 'https://github.com/Jacobyang0818/Astrology',
    badge: 'LLM 全端應用',
    description:
      '端對端整合精確天文計算與生成式 AI 模型（如 Gemini）的星盤系統。以預處理過的星曆資料作為基礎，構建 RAG 知識庫與 Qdrant 向量檢索。協助開發及調整生成式 AI，透過 React、FastAPI 和 Docker 實現具備擴展性的服務架構。',
    tags: ['LLM', 'RAG', 'RapidOCR', 'Qdrant', 'LangChain', 'Gemini', 'FastAPI', 'React(Vite)', 'Docker', 'Python'],
    highlights: ['RAG 領域知識庫問答', '全端微服務與容器化', '高精度天文曆算'],
    accentColor: '#8B5CF6',
  },
  {
    id: 3,
    title: 'Grand Challenge – AI4Life',
    subtitle: 'Calcium Imaging Denoising Challenge 2025',
    period: '2025',
    image: '/project_ai4life.png',
    imageAlt: 'AI4Life Challenge 專案',
    link: 'https://github.com/Jacobyang0818/grand-challenge-ai4life-cidc-2025/tree/master',
    presentationLink: 'https://docs.google.com/presentation/d/195icUD73Jas9jiSPeVpV9p4xOArwPccEfVC_uVx8whE/edit?usp=sharing',
    badge: '競賽',
    description:
      '參與醫學影像去噪挑戰賽，並建構完整的端到端 ML Pipeline（包含自動化資料前處理與影像擴增、Unet 自監督學習訓練與驗證流程、以及模型推論與跨領域評估）。系統性地排查訓練收斂情況，並透過對比實驗解決過擬合問題，有效提升模型在不同硬體環境下的泛化能力。',
    tags: ['自監督學習', 'Unet', '影像去躁', 'PyTorch', 'Linux', 'nmODE'],
    highlights: ['醫學影像去噪', '解決過擬合問題', 'ML Pipeline'],
    accentColor: '#16A34A',
  },
  {
    id: 4,
    title: '產學合作 - AOI 辨識系統',
    subtitle: '日昱精密工業有限公司 品質檢測研究',
    period: '2024.2-2024.10',
    image: '/project_aoi.png',
    imageAlt: 'AOI 系統截圖',
    link: 'https://ieem.site.nthu.edu.tw/p/404-1310-39344.php?Lang=zh-tw',
    linkText: 'Website',
    badge: '產學合作',
    description:
      '與日昱精密合作，建構高精確度自動光學檢測系統（AOI）。利用 OpenCV 和 YOLO 模型進行物件偵測，結合 Golden Sample 標準樣品比對算法。過程中撰寫開發與 Debug tool，與跨職能團隊合作，協助定義需求並協助工程師進行實驗。',
    tags: ['Opencv', 'pySide6', 'YOLO 物件偵測'],
    highlights: ['Golden Sample 比對', '開發測試與 Debug 工具', '跨職能場域落實'],
    accentColor: '#DC2626',
  },
  {
    id: 5,
    title: 'Kaggle — Impostor Hunt in Texts',
    subtitle: 'ESA / KP LABS · 文字入侵者偵測競賽',
    period: '2024',
    image: '/project_nlp.png',
    imageAlt: 'Kaggle 文字競賽截圖',
    link: 'https://www.kaggle.com/garyyang0818',
    linkText: 'Kaggle',
    badge: 'Kaggle 競賽',
    description:
      '參與低資源（< 100 訓練對）文字分類競賽，偵測混雜文字中 AI 生成與人類撰寫的差異。整合了多項人工語言特徵工程，協助開發及調整大語言模型與分類器，支援領域專屬數據的標籤化，有效增強 Few-shot 情境下的模型表現及 AI/NAND 產業應用。',
    tags: ['Transformers', 'LLM', 'Pytorch'],
    highlights: ['語言特徵工程', '少樣本學習', 'AI 文本偵測模型'],
    accentColor: '#2563EB',
  },
  {
    id: 6,
    title: 'Kaggle — X-Ray Chest Classification',
    subtitle: 'AI Labs · 醫療影像多標籤分類競賽',
    period: '2024',
    image: '/project_xray.png',
    imageAlt: 'Kaggle X-Ray 競賽截圖',
    link: 'https://www.kaggle.com/garyyang0818',
    linkText: 'Kaggle',
    badge: 'Kaggle 競賽',
    description:
      '解決醫療胸部 X 光影像多標籤分類中極度類別不均衡的問題。設計並實現具有擴展性的訓練流程，透過偽標籤（Pseudo-labeling）和類別加權策略（Class Weighting），成功協助監控與提升模型 AUC 達 6%，並深化 AI 在醫療產業應用的 paper study。',
    tags: ['Medical Imaging', 'PyTorch', 'Pseudo-labeling', 'imbalanced data'],
    highlights: ['解決類別不均衡', '偽標籤自擴增策略', 'AUC 提升 6%'],
    accentColor: '#0ea5e9',
  },
  {
    id: 7,
    title: 'InsightX',
    subtitle: 'AI Customer Feedback Intelligence',
    period: '2024',
    image: '/project_insightx.png',
    imageAlt: 'InsightX 專案截圖',
    link: 'https://github.com/Jacobyang0818/InsightX',
    presentationLink: 'https://drive.google.com/file/d/19jHTsqZHNBRQnu-Da4r4mvrWw-TUfRMl/view?usp=sharing',
    badge: 'Vibe Coding',
    description:
      '這是一個 Vibe coding 實踐專案，利用 AI 將零散的客戶評論轉化為清晰的商業洞見。協助開發及串接生成式 AI 模型 API，透過 Docker 快速部署前後端分離架構，實現高效能的用戶意見回饋分析系統。',
    tags: ['React(Vite)', 'Docker', 'Gemini', 'FastAPI'],
    highlights: ['Vibe Coding 實踐', '前後端分離架構', '商業洞見自動化提取'],
    accentColor: '#4f46e5',
  },
  {
    id: 8,
    title: 'Report Automation System',
    subtitle: '工作流程與報告自動化系統',
    period: '2024',
    image: '/project_ras.png',
    imageAlt: 'Report Automation System 截圖',
    link: 'https://github.com/Jacobyang0818/RAS',
    presentationLink: 'https://drive.google.com/file/d/1pcaEbY5Zjef8fj5ExnTfaamdr32VraR4/view?usp=sharing',
    badge: 'Vibe Coding',
    description:
      '此專案透過 Vibe coding 實作，專注於解決日常重複性工作的自動化問題。撰寫快速整合與轉換腳本，開發對應的排程任務機制，以高效的 Python 開發縮短報表匯總時間與人工作業。',
    tags: ['Python', 'Automation', 'Scripting'],
    highlights: ['工作流程自動化', '快速開發'],
    accentColor: '#f59e0b',
  },
  {
    id: 9,
    title: 'OSS-guardian',
    subtitle: '開源軟體安全與盡職調查系統',
    period: '2024',
    image: '/project_oss_guardian.png',
    imageAlt: 'OSS-guardian 截圖',
    link: 'https://github.com/Jacobyang0818/OSS-guardian',
    presentationLink: 'https://drive.google.com/file/d/1pcaEbY5Zjef8fj5ExnTfaamdr32VraR4/view?usp=sharing',
    badge: 'Vibe Coding',
    description:
      '以 Vibe coding 方式建構的 AI 驅動開源軟體盡職調查系統。透過 LLM 與 Multi-agent 架構，自動提取 GitHub 專案資訊並評估其在企業軟體堆疊中的合規性與安全性。',
    tags: ['Multi-Agent System', 'LLM', 'Python'],
    highlights: ['多代理人系統', 'AI 安全性評估', '開源授權合規審查'],
    accentColor: '#10b981',
  },
  {
    id: 10,
    title: 'N8n-方圓法理',
    subtitle: '法律社群經營 & 諮詢助手',
    period: '2024',
    image: '/project_law_assistant.jpg',
    imageAlt: 'N8n 法律助手截圖',
    link: 'https://github.com/jinwei-chang/rag-law-assistant/tree/master',
    presentationLink: 'https://www.canva.com/design/DAG6WNZSv2U/qj5CuxA1n0r2t5LoFfFViA/edit?utm_content=DAG6WNZSv2U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    badge: '自動化專案',
    description:
      '基於 N8n 與 RAG 架構開發的法律諮詢問答機器人。支援領域專屬數據的整合，將龐雜的法律文獻預處理為向量庫索引。協助開發生成式 AI 模型回答精準的法律問題，大幅降低社群營運之客服勞力成本。',
    tags: ['N8n', 'RAG', 'VectorDB', 'LLM'],
    highlights: ['N8n 工作流自動化', '法律領域 RAG 知識庫', '自動化社群運營'],
    accentColor: '#3b82f6',
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="page-wrapper">
      <div className="section-container">
        <div className="section-title-line" />
        <h1 className="section-title">專案內容</h1>
        <p className="section-subtitle">實戰專案與競賽成果展示</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {projects.map((proj, index) => (
            <div
              key={proj.id}
              className="card card-hover-blue"
              style={{
                overflow: 'hidden',
                transform: hovered === proj.id ? 'translateY(-2px)' : 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={() => setHovered(proj.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* ── Project Image ── */}
              <div style={{
                width: '100%', height: '220px', overflow: 'hidden',
                background: '#F3F4F6', position: 'relative',
                borderBottom: '1px solid #E5E7EB',
              }}>
                <img
                  src={proj.image}
                  alt={proj.imageAlt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={e => {
                    // Fallback if image not found
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Image placeholder fallback */}
                <div style={{
                  display: 'none', position: 'absolute', inset: 0,
                  alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                  gap: '8px', color: '#9CA3AF', background: '#F9FAFB',
                }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  <span style={{ fontSize: '0.78rem' }}>替換圖片路徑以顯示圖片</span>
                </div>

                {/* Number badge on image */}
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)',
                  border: '1px solid #E5E7EB',
                  padding: '3px 10px', borderRadius: '6px',
                  fontSize: '0.72rem', fontWeight: '700', color: proj.accentColor,
                }}>
                  {String(proj.id).padStart(2, '0')}
                </div>

                {/* Badge overlay */}
                {proj.badge && (
                  <div style={{
                    position: 'absolute', top: '12px', right: '12px',
                    background: proj.accentColor === '#16A34A' ? 'rgba(22,163,74,0.9)' : 'rgba(37,99,235,0.9)',
                    color: '#fff', padding: '3px 10px', borderRadius: '6px',
                    fontSize: '0.72rem', fontWeight: '700',
                    backdropFilter: 'blur(4px)',
                  }}>
                    {proj.badge}
                  </div>
                )}
              </div>

              {/* ── Content ── */}
              <div style={{ padding: '1.5rem 1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '0.75rem' }}>
                  <div>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1A1A2E', marginBottom: '3px' }}>{proj.title}</h2>
                    <p style={{ fontSize: '0.83rem', color: '#6B7280' }}>{proj.subtitle}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>{proj.period}</span>
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer"
                        className="btn-outline"
                        style={{ padding: '5px 12px', fontSize: '0.78rem', borderRadius: '6px' }}>
                        {(!proj.linkText || proj.linkText === 'GitHub') && (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        )}
                        {proj.linkText === 'Kaggle' && (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.351.354-.351h2.431c.234 0 .351.118.351.351v15.342l7.105-7.105c.14-.14.304-.211.492-.211h3.467c.186 0 .269.059.245.176l-.082.071-5.143 4.908 4.956 9.873c.094.164.094.304 0 .421l-5.18 5.768Z" />
                          </svg>
                        )}
                        {proj.linkText === 'Website' && (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                        )}
                        {proj.linkText || 'GitHub'}
                      </a>
                    )}
                    {proj.paperLink && (
                      <a href={proj.paperLink} target="_blank" rel="noopener noreferrer"
                        className="btn-outline"
                        style={{ padding: '5px 12px', fontSize: '0.78rem', borderRadius: '6px' }}>
                        Paper
                      </a>
                    )}
                    {proj.presentationLink && (
                      <a href={proj.presentationLink} target="_blank" rel="noopener noreferrer"
                        className="btn-outline"
                        style={{ padding: '5px 12px', fontSize: '0.78rem', borderRadius: '6px' }}>
                        Slide
                      </a>
                    )}
                  </div>
                </div>

                <p style={{ fontSize: '0.875rem', color: '#374151', lineHeight: '1.8', marginBottom: '1rem' }}>{proj.description}</p>

                {/* Highlights */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  {proj.highlights.map((h, i) => (
                    <span key={i} className={proj.accentColor === '#16A34A' ? 'badge badge-green' : 'badge badge-blue'}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {h}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '1rem', borderTop: '1px solid #F3F4F6' }}>
                  {proj.tags.map(tag => <span key={tag} className="skill-tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image replacement guide */}
        {/*
        <div className="card" style={{ marginTop: '2.5rem', padding: '1.25rem 1.75rem', background: '#F8FAFF', borderColor: '#BFDBFE' }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#2563EB', marginBottom: '0.5rem' }}>
            替換專案圖片說明
          </h3>
          <p style={{ fontSize: '0.82rem', color: '#6B7280', lineHeight: '1.8' }}>
            將圖片放入 <code style={{ background: '#EFF6FF', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem', color: '#1D4ED8' }}>/public/</code> 資料夾後，
            編輯 <code style={{ background: '#EFF6FF', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem', color: '#1D4ED8' }}>src/pages/Projects.jsx</code>，
            修改每個 <code style={{ background: '#EFF6FF', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem', color: '#1D4ED8' }}>image:</code> 欄位的路徑即可。
          </p>
        </div>
        */}
      </div>
    </div>
  )
}
