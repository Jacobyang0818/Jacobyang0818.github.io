const educationData = [
  {
    id: 1,
    period: '2025 — 現在',
    school: '國立陽明交通大學 (NYCU)',
    degree: 'AI 架構師課程',
    field: '人工智慧系統設計與架構',
    status: 'active',
    color: 'green',
    description: '修習 AI 系統架構設計核心課程，涵蓋大規模 AI 系統部署、MLOps 實務、雲端 AI 架構設計，及企業級 LLM 應用規劃，以成為能主導端對端 AI 解決方案的架構師為目標。',
    highlights: ['AI 系統架構設計', 'MLOps 與模型部署', '企業級 LLM 應用', '雲端 AI 架構'],
  },
  {
    id: 2,
    period: '2023 — 2025',
    school: '國立清華大學 (NTHU)',
    degree: '工業工程碩士',
    field: '工業工程與工程管理學系',
    status: 'completed',
    color: 'blue',
    description: '研究聚焦於資料分析、電腦視覺（ST-GCN 動作識別）、以及先進製程控制（APC）。於系上 APC 論文報告發表競賽中獲得第一名佳績。',
    highlights: ['電腦視覺 & 動作識別 (ST-GCN)', '先進製程控制 (APC)', '數據分析與參數最佳化'],
    note: '第一名為系上論文報告發表競賽，非外部公開賽事',
  },
  {
    id: 3,
    period: '2015 — 2019',
    school: '南臺科技大學 (STUST)',
    degree: '化學工程學士',
    field: '化學工程與生物科技系',
    status: 'completed',
    color: 'blue',
    description: '扎實的理工基礎，培養系統性思維與量化分析能力，畢業後逐步轉型至工程管理與 AI 領域。',
    highlights: ['化學反應工程', '程序控制', '工廠設計'],
  },
]

export default function Education() {
  return (
    <div className="page-wrapper">
      <div className="section-container">
        <div className="section-title-line" />
        <h1 className="section-title">教育背景</h1>
        <p className="section-subtitle">學術歷程與持續精進的學習之路</p>

        <div className="timeline">
          {educationData.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className={`timeline-dot ${edu.color === 'green' ? 'timeline-dot-green' : ''}`} />
              <div className="card" style={{ padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: '500' }}>{edu.period}</span>
                  {edu.status === 'active'
                    ? <span className="badge-active">進行中</span>
                    : <span className="badge badge-gray">已畢業</span>
                  }
                </div>

                <h2 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#1A1A2E', marginBottom: '3px' }}>{edu.school}</h2>
                <p style={{ fontSize: '0.95rem', fontWeight: '600', color: edu.color === 'green' ? '#16A34A' : '#2563EB', marginBottom: '3px' }}>{edu.degree}</p>
                <p style={{ fontSize: '0.83rem', color: '#9CA3AF', marginBottom: '1rem' }}>{edu.field}</p>

                <p style={{ fontSize: '0.875rem', color: '#374151', lineHeight: '1.8', marginBottom: '1rem' }}>{edu.description}</p>

                {edu.note && (
                  <div style={{ marginBottom: '1rem', padding: '8px 14px', borderRadius: '8px', background: '#FFFBEB', border: '1px solid #FDE68A' }}>
                    <p style={{ fontSize: '0.78rem', color: '#92400E' }}>
                      <strong>備註：</strong>{edu.note}
                    </p>
                  </div>
                )}

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {edu.highlights.map(h => (
                    <span key={h} className={`badge ${edu.color === 'green' ? 'badge-green' : 'badge-blue'}`}>{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: '2.5rem', padding: '1.25rem 1.75rem', background: '#F8FAFF', borderColor: '#BFDBFE' }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#2563EB', marginBottom: '0.5rem' }}>自主學習</h3>
          <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: '1.8' }}>
            持續透過 Kaggle 競賽、Coursera、HuggingFace 線上課程及開源社群，強化 MLOps、雲端部署與前沿 LLM 技術的實戰能力。
          </p>
        </div>
      </div>
    </div>
  )
}
