import { useState } from 'react'

// ── 專案圖片路徑 (已放置臨時圖片，可替換成你想要的圖片)
// 替換方式：將圖片放到 /public/ 資料夾，然後更改路徑即可
const projects = [
  {
    id: 1,
    title: 'Astrology Gemini Compass',
    subtitle: '開源星盤分析 AI 系統',
    period: '2024',
    image: '/project_astrology.png',     // ← 替換此路徑放置你的圖片
    imageAlt: 'Astrology Gemini Compass 星盤分析系統截圖',
    link: 'https://github.com/Jacobyang0818/Astrology',
    badge: null,
    description:
      '端對端整合精確天文計算與生成式 AI 的星座分析系統。以 FastAPI 建構後端服務，' +
      '串接 Swiss Ephemeris 進行高精度星曆資料計算，並透過 Google Gemini API 提供個人化 AI 洞見。' +
      '完整 Docker 化部署，展示 AI 全端開發與 API 整合能力。',
    tags: ['FastAPI', 'Python', 'Docker', 'Gemini API', 'Swiss Ephemeris', 'AstroChart.js'],
    highlights: ['RAG-like 知識整合設計', 'Docker Compose 容器化部署', '開源 GitHub'],
    accentColor: '#2563EB',
  },
  {
    id: 2,
    title: 'Kaggle — Impostor Hunt in Texts',
    subtitle: 'ESA / KP LABS · 文字入侵者偵測競賽',
    period: '2024',
    image: '/project_nlp.png',           // ← 替換此路徑放置你的圖片
    imageAlt: 'NLP 文字分類競賽截圖',
    link: null,
    badge: 'Top 20% · 1,000 隊以上',
    description:
      '低資源（< 100 訓練對）文字分類任務，目標在混雜文字中偵測 AI 生成與人類撰寫的差異。' +
      '建構整合 17 個人工設計語言特徵的 ensemble 模型，充分發揮 few-shot 泛化能力。',
    tags: ['DeBERTa', 'TabPFN', 'Few-shot Learning', 'Ensemble', 'NLP', 'scikit-learn'],
    highlights: ['17 項人工語言特徵工程', 'DeBERTa + TabPFN 集成', '低資源泛化'],
    accentColor: '#16A34A',
  },
  {
    id: 3,
    title: 'Kaggle — X-Ray Chest Classification',
    subtitle: 'AI Labs · 醫療影像分類競賽',
    period: '2024',
    image: '/project_xray.png',          // ← 替換此路徑放置你的圖片
    imageAlt: '胸部 X 光影像分類競賽截圖',
    link: null,
    badge: 'AUC +6%',
    description:
      '醫療胸部 X 光影像多標籤分類，主要挑戰為極度類別不均衡。以 ConvNeXt-V2 為主幹，' +
      '搭配偽標籤（Pseudo-labeling）自擴增與類別加權策略，有效提升 AUC 6 個百分點。',
    tags: ['ConvNeXt-V2', 'TabPFN', 'Pseudo-labeling', 'PyTorch', 'Class Weighting', 'Medical Imaging'],
    highlights: ['ConvNeXt-V2 骨幹網路', '偽標籤自擴增', 'AUC 提升 6%'],
    accentColor: '#2563EB',
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
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
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
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                        GitHub
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
                        <polyline points="20 6 9 17 4 12"/>
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
      </div>
    </div>
  )
}
