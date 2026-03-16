// ─────────────────────────────────────────────────────────────
//  CV.jsx  ·  編輯說明
//  修改下方 cvData 物件的內容即可更新頁面，不需要改其他地方。
// ─────────────────────────────────────────────────────────────

const cvData = {
  name: 'MING-HSUN YANG',
  nameChinese: '楊明勳',
  title: '機器學習 / AI 工程師',
  photo: '/photo.png',
  contact: {
    phone: '+886-925-199-970',
    email: 'gary860818@gmail.com',
    location: '新竹縣竹北市',
    github: 'github.com/Jacobyang0818',
    website: 'jacobyang0818.github.io',
  },

  profile:
    '畢業於國立清華大學工業工程研究所，專精於資料分析、電腦視覺與生成式 AI 應用。具備深度學習（YOLO、ST-GCN）、預測模型與系統整合實務經驗。近期聚焦於大型語言模型（LLM）、RAG Pipeline 設計與模型微調，並擁有 Prompt Engineering、Gemini API、FastAPI 與 Docker 的實作經驗。曾獲 APC 論文報告競賽第一名，Kaggle NLP 競賽 Top 20%，並擁有豐富的設備新建專案管理經驗。',

  skills: [
    { category: '程式語言', items: 'Python · C++ · SQL · JavaScript' },
    { category: 'AI / ML 框架', items: 'PyTorch · TensorFlow · Transformers · Hugging Face · LangChain · LlamaIndex' },
    { category: '生成式 AI', items: 'RAG Pipeline · Prompt Engineering · LoRA Fine-tuning · Gemini API · Ollama' },
    { category: '工具與平台', items: 'Docker · FastAPI · MLflow · Power BI · n8n · Git' },
  ],

  education: [
    {
      period: '2023 — 2025',
      degree: '工業工程碩士',
      school: '國立清華大學 (NTHU)',
      detail: '電腦視覺 · 啟發式最佳化 · 資料分析 · APC',
    },
    {
      period: '2015 — 2019',
      degree: '化學工程學士',
      school: '南臺科技大學 (STUST)',
      detail: '',
    },
  ],

  experience: [
    {
      period: '2021 — 2022',
      company: '矽科宏晟股份有限公司 (Wholetech System Hitech)',
      role: '現場監督工程師 / 專案工程師',
      bullets: [
        '負責專案排程、供應商管理與現場監督，確保施工順暢執行。',
        '協調物料管制，監督設備安裝與測試作業。',
        '落實嚴格安全標準，達成零工安事故目標，带領專案工期縮短約 10%。',
      ],
    },
    {
      period: '2020 — 2021',
      company: '漢科科技股份有限公司 (Cica-Huntek Chemical Technology)',
      role: '現場監督工程師 / 專案工程師',
      bullets: [
        '協調工程排程並監督現場施工作業。',
        '監督供應商與承包商，確保合規執行。',
        '維持嚴格安全規範，達成零工安事故目標。',
      ],
    },
    {
      period: '2018 — 2020',
      company: '瀚茗科技有限公司 (Han Ming Technology)',
      role: '助理工程師',
      bullets: [
        '協助排程、供應商協調與系統測試。',
        '撰寫技術文件與操作手冊。',
        '維持安全合規，達成零工安事故目標。',
      ],
    },
  ],

  projects: [
    {
      name: 'Astrology Gemini Compass',
      link: '',
      bullets: [
        '端對端 AI 全端系統：FastAPI 後端 + 自主渲染星圖前端，以 Docker 封裝部署。',
        '整合 Swiss Ephemeris 精準天文數據，為天象命盤系統提供高度準確的星盤資料。',
        '構建 RAG 系統，結合 Qdrant 向量索引 + LangChain + Gemini API，實現專業問答。',
      ],
    },
    {
      name: 'SSO-STGCN（碩士論文）',
      link: '',
      bullets: [
        '提出 Simplified Swarm Optimization（SSO）用於 ST-GCN 神經架構搜索。',
        '在酒醉步態辨識基準測試上達到最佳準確率。',
      ],
    },
    {
      name: '產學合作 — AOI 辨識系統',
      link: '',
      bullets: [
        '與日昱精密工業合作，利用 OpenCV + YOLO 物件偵測與 Golden Sample 樣品比對演算法，建構高精度自動光學檢測系統。',
        '撰寫開發與 Debug 工具，跨職能團隊協作協助定義需求、驗證專案成果。',
      ],
    },
    {
      name: 'Grand Challenge — 醫學影像去噪 (AI4Life 2025)',
      link: '',
      bullets: [
        '設計完整端對端 ML Pipeline，、Unet 自監督學習訓練流程及模型推論與評估。',
        '系統性排查訓練收斂情況，透過對比實驗解決過擬合問題，提升模型泛化能力。',
      ],
    },
    {
      name: 'Kaggle — Impostor Hunt in Texts（Top 20%）',
      link: '',
      bullets: [
        '以 DeBERTa + TabPFN 集成模型搭配 17 項手工語言特徵，在 1,000 支隊伍中進入前20%。',
      ],
    },
    {
      name: 'Kaggle — X-Ray Chest Classification',
      link: '',
      bullets: [
        '採用 ConvNeXt-V2 主幹網路 + 偽標簽策略 + 類別加權，成功提升 AUC 6%。',
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────
//  UI Components
// ─────────────────────────────────────────────────────────────
const SecTitle = ({ children, light = false }) => (
  <div style={{ marginBottom: '8px' }}>
    <h2 style={{
      fontSize: '0.82rem', fontWeight: '900', letterSpacing: '0.1em',
      textTransform: 'uppercase', color: light ? '#93C5FD' : '#111827',
      marginBottom: '5px',
    }}>
      {children}
    </h2>
    <div style={{ height: '1.5px', background: light ? 'rgba(147,197,253,0.35)' : '#D1D5DB' }} />
  </div>
)

const Bullets = ({ items }) => (
  <ul style={{ margin: '3px 0 0', paddingLeft: '1rem', listStyleType: 'disc' }}>
    {items.map((b, i) => (
      <li key={i} style={{ fontSize: '0.75rem', color: '#1f2937', lineHeight: '1.7', marginBottom: '1px' }}>{b}</li>
    ))}
  </ul>
)

export default function CV() {
  const handlePrint = () => window.print()
  const { name, nameChinese, title, photo, contact, profile, skills, education, experience, projects } = cvData

  return (
    <div className="page-wrapper">

      {/* ── Action Toolbar (hidden on print) ── */}
      <div className="cv-toolbar" style={{
        position: 'sticky', top: '64px', zIndex: 50,
        background: '#F8FAFF', borderBottom: '1px solid #DBEAFE',
        padding: '10px 1.5rem',
        display: 'flex', gap: '10px', justifyContent: 'flex-end',
        maxWidth: '960px', margin: '0 auto', width: '100%',
      }}>
        <button onClick={handlePrint} className="btn-primary"
          style={{ padding: '8px 20px', fontSize: '0.85rem', display: 'flex', gap: '7px', alignItems: 'center' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          下載 / 列印 PDF
        </button>
      </div>

      {/* ── A4 CV Sheet ── */}
      <div style={{ padding: '2rem 1.5rem 4rem', display: 'flex', justifyContent: 'center' }}>
        <div id="cv-sheet" style={{
          width: '210mm',
          minHeight: '297mm',
          background: '#fff',
          boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
          borderRadius: '4px',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '65mm 1fr',
          fontFamily: "'Noto Sans TC', 'Inter', system-ui, sans-serif",
        }}>

          {/* ═══ LEFT SIDEBAR ═══ */}
          <aside style={{
            background: '#1B3A5C',
            padding: '2rem 1.4rem',
            display: 'flex', flexDirection: 'column', gap: '1.4rem',
            color: '#fff',
          }}>

            {/* Photo + Name */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '82px', height: '82px',
                borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto 12px',
                border: '3px solid rgba(255,255,255,0.2)',
                background: '#1E3A5F',
              }}>
                <img src={photo} alt={name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <h1 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#fff', lineHeight: '1.3', marginBottom: '2px' }}>
                {name}
              </h1>
              <p style={{ fontSize: '0.8rem', color: '#BFD7F5', marginBottom: '3px' }}>{nameChinese}</p>
              <p style={{ fontSize: '0.72rem', color: '#90CAF9', fontWeight: '600', letterSpacing: '0.03em' }}>
                {title}
              </p>
            </div>

            {/* Contact */}
            <div>
              <SecTitle light>聯絡方式</SecTitle>
              {[
                { svg: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.35 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>, val: contact.phone },
                { svg: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>, val: contact.email },
                { svg: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>, val: contact.location },
                { svg: <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>, val: contact.github, href: `https://${contact.github}` },
                { svg: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>, val: contact.website, href: `https://${contact.website}` },
              ].map(({ svg, val, href }, i) => (
                <div key={i} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <span style={{ color: '#90CAF9', marginTop: '2px', flexShrink: 0 }}>{svg}</span>
                  {href
                    ? <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.74rem', color: '#90CAF9', lineHeight: '1.55', wordBreak: 'break-all', textDecoration: 'underline' }}>{val}</a>
                    : <span style={{ fontSize: '0.74rem', color: '#E2EEF9', lineHeight: '1.55', wordBreak: 'break-all' }}>{val}</span>
                  }
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <SecTitle light>技術能力</SecTitle>
              {skills.map(({ category, items }) => (
                <div key={category} style={{ marginBottom: '8px' }}>
                  <p style={{ fontSize: '0.68rem', fontWeight: '700', color: '#90CAF9', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '3px' }}>
                    {category}
                  </p>
                  <p style={{ fontSize: '0.74rem', color: '#D6E8F7', lineHeight: '1.6' }}>{items}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <SecTitle light>教育背景</SecTitle>
              {education.map((edu, i) => (
                <div key={i} style={{ marginBottom: '10px' }}>
                  <p style={{ fontSize: '0.78rem', fontWeight: '700', color: '#fff', lineHeight: '1.4' }}>{edu.degree}</p>
                  <p style={{ fontSize: '0.72rem', color: '#90CAF9', marginBottom: '1px' }}>{edu.school}</p>
                  {edu.detail && <p style={{ fontSize: '0.68rem', color: '#8BAFC4' }}>{edu.detail}</p>}
                  <p style={{ fontSize: '0.68rem', color: '#8BAFC4' }}>{edu.period}</p>
                </div>
              ))}
            </div>

          </aside>

          {/* ═══ RIGHT MAIN ═══ */}
          <main style={{ padding: '2rem 1.7rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Profile */}
            <section style={{ paddingTop: '0.25rem' }}>
              <SecTitle>個人簡介</SecTitle>
              <p style={{ fontSize: '0.77rem', color: '#1f2937', lineHeight: '1.85' }}>{profile}</p>
            </section>

            {/* Experience */}
            <section>
              <SecTitle>工作經歷</SecTitle>
              {experience.map((exp, i) => (
                <div key={i} style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                    <p style={{ fontSize: '0.84rem', fontWeight: '700', color: '#111827' }}>{exp.company}</p>
                    <span style={{ fontSize: '0.67rem', color: '#6B7280', flexShrink: 0 }}>{exp.period}</span>
                  </div>
                  <p style={{ fontSize: '0.76rem', fontWeight: '600', color: '#374151', marginBottom: '3px' }}>{exp.role}</p>
                  <Bullets items={exp.bullets} />
                </div>
              ))}
            </section>

            {/* Projects */}
            <section>
              <SecTitle>專案與競賽</SecTitle>
              {projects.map((proj, i) => (
                <div key={i} style={{ marginBottom: '10px' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '2px' }}>
                    <p style={{ fontSize: '0.84rem', fontWeight: '700', color: '#111827' }}>{proj.name}</p>
                    {proj.link && (
                      <span style={{ fontSize: '0.65rem', color: '#6B7280' }}>— {proj.link}</span>
                    )}
                  </div>
                  <Bullets items={proj.bullets} />
                </div>
              ))}
            </section>

          </main>
        </div>
      </div>

      {/* ── Print Styles ── */}
      <style>{`
        @page { size: A4; margin: 0; }

        @media print {
          header, footer { display: none !important; }
          main { padding-top: 0 !important; }
          .cv-toolbar { display: none !important; }

          .page-wrapper { padding: 0 !important; }
          .page-wrapper > div { padding: 0 !important; }

          /* Force background colors to print */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          #cv-sheet {
            width: 210mm !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            display: grid !important;
            grid-template-columns: 65mm 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
