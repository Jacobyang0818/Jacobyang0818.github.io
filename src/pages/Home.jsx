import { Link } from 'react-router-dom'

// ── 個人照片：替換成你的照片路徑，例如 "/photo.jpg"
const PHOTO_SRC = "/photo.png"   // null = 顯示佔位符; 有照片時改為 "/photo.jpg"

const skills = {
  '程式語言': ['Python', 'C++', 'SQL', 'JavaScript'],
  'AI / ML': ['PyTorch', 'TensorFlow', 'Transformers', 'Hugging Face', 'LangChain', 'LlamaIndex'],
  '工具 & 平台': ['Docker', 'FastAPI', 'MLflow', 'Power BI', 'Ollama', 'n8n', 'Git'],
  'AI 專業': ['RAG Pipeline', 'Prompt Engineering', 'LoRA Fine-tuning', 'Computer Vision', 'LLM 應用'],
}

const contactInfo = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.35 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: '+886-925-199-970',
    href: 'tel:+886925199970',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: 'gary860818@gmail.com',
    href: 'mailto:gary860818@gmail.com',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: '新竹縣竹北市',
    href: null,
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    label: 'Jacobyang0818',
    href: 'https://github.com/Jacobyang0818',
  },
]

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* ── Hero ── */}
      <section style={{ background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', padding: '4rem 1.5rem 3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2.5rem', flexWrap: 'wrap' }}>

            {/* Photo */}
            <div className="photo-placeholder photo-circle" style={{
              width: '130px', height: '130px', borderRadius: '50%',
              background: '#F3F4F6', border: '2px dashed #D1D5DB',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: '5px', color: '#9CA3AF', flexShrink: 0, overflow: 'hidden',
            }}>
              {PHOTO_SRC ? (
                <img src={PHOTO_SRC} alt="Jacob Yang" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                  <span style={{ fontSize: '0.7rem' }}>放置照片</span>
                </>
              )}
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: '220px' }}>
              {/* Active badge */}
              <div style={{ marginBottom: '0.75rem' }}>
                <span className="badge-active">NYCU AI 架構師課程 · 進行中</span>
              </div>

              <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.6rem)', fontWeight: '800', color: '#1A1A2E', marginBottom: '4px', letterSpacing: '-0.03em' }}>
                楊明勳 <span style={{ color: '#D1D5DB', fontWeight: '300' }}>·</span> Jacob Yang
              </h1>
              <p style={{ fontSize: '1.05rem', fontWeight: '600', color: '#2563EB', marginBottom: '1.25rem' }}>
                機器學習 / AI 工程師
              </p>

              {/* Contact Grid */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 24px', marginBottom: '1.5rem' }}>
                {contactInfo.map((c, i) => (
                  c.href ? (
                    <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#6B7280', textDecoration: 'none', transition: 'color 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#2563EB'}
                      onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}>
                      <span style={{ color: '#9CA3AF', flexShrink: 0 }}>{c.icon}</span>
                      {c.label}
                    </a>
                  ) : (
                    <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#6B7280' }}>
                      <span style={{ color: '#9CA3AF', flexShrink: 0 }}>{c.icon}</span>
                      {c.label}
                    </span>
                  )
                ))}
              </div>

              {/* CTA */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Link to="/projects" className="btn-primary">查看專案</Link>
                <a href="mailto:gary860818@gmail.com" className="btn-outline">聯絡我</a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div style={{
            marginTop: '2rem', padding: '1.25rem 1.5rem', borderRadius: '10px',
            background: '#F8FAFF', border: '1px solid #BFDBFE',
          }}>
            <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: '1.85' }}>
              國立清華大學工業工程碩士，專精於電腦視覺、大型語言模型（LLM）應用、RAG pipeline 設計與機器學習系統優化。
              目前就讀 NYCU AI 架構師課程，積極深耕 AI 系統架構設計，致力於建構可擴展的企業級 AI 解決方案。
            </p>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="section-container">
        <div className="section-title-line" />
        <h2 className="section-title">技術能力</h2>
        <p className="section-subtitle">涵蓋 AI/ML 全端開發所需技術棧</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '14px' }}>
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="card" style={{ padding: '1.25rem 1.5rem' }}>
              <h3 style={{ fontSize: '0.75rem', fontWeight: '700', color: '#2563EB', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
                {cat}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {items.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  )
}
