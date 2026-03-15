// 推薦人資料 — 可依實際情況更新聯絡方式與內容
const referees = [
  {
    id: 1,
    name: '指導教授',
    nameNote: '（詳細姓名可提供給有興趣的雇主）',
    title: '教授',
    org: '國立清華大學 工業工程與工程管理學系',
    relation: '碩士論文指導教授',
    contact: '可依需求提供',
    description: '在清大碩士期間，於電腦視覺、資料分析與先進製程控制研究上給予指導與支持，並提供論文研究的方向建議。',
    color: 'blue',
  },
  {
    id: 2,
    name: '業界主管',
    nameNote: '（詳細姓名可提供給有興趣的雇主）',
    title: '專案主管',
    org: 'Wholetech System Hitech Co., Ltd.',
    relation: '直屬主管（2021–2022）',
    contact: '可依需求提供',
    description: '在 Wholetech 任職期間直屬主管，可就本人在半導體設備專案管理、跨部門協調與現場工程能力提供具體評價。',
    color: 'green',
  },
  {
    id: 3,
    name: 'AI 課程講師',
    nameNote: '（詳細資訊可依需求提供）',
    title: 'AI 架構師課程講師',
    org: '國立陽明交通大學 (NYCU) AI 架構師課程',
    relation: '修課學生關係',
    contact: '可依需求提供',
    description: '目前修習 NYCU AI 架構師課程，可就本人在 AI 系統設計、LLM 應用及架構規劃上的學習表現與能力發展提供參考。',
    color: 'blue',
  },
]

export default function Referees() {
  return (
    <div className="page-wrapper">
      <div className="section-container">
        <div className="section-title-line" />
        <h1 className="section-title">推薦人</h1>
        <p className="section-subtitle">可提供具體工作與學術表現評鑑的推薦人</p>

        {/* Privacy notice */}
        <div className="card" style={{
          marginBottom: '2rem', padding: '1rem 1.5rem',
          background: '#FFFBEB', borderColor: '#FDE68A',
        }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/>
            </svg>
            <p style={{ fontSize: '0.83rem', color: '#92400E', lineHeight: '1.7' }}>
              基於隱私保護，本頁僅顯示推薦人的職稱與機構資訊。如您有意進一步了解，請透過 Email 聯絡，
              我將於確認後提供完整聯絡資訊。
            </p>
          </div>
        </div>

        {/* Referee Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '2.5rem' }}>
          {referees.map(ref => (
            <div key={ref.id} className="card" style={{ padding: '1.75rem 2rem' }}>
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                {/* Avatar */}
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0,
                  background: ref.color === 'green' ? '#F0FDF4' : '#EFF6FF',
                  border: `1.5px solid ${ref.color === 'green' ? '#BBF7D0' : '#BFDBFE'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ref.color === 'green' ? '#16A34A' : '#2563EB'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>

                <div style={{ flex: 1, minWidth: '200px' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px' }}>
                    <h2 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1A1A2E' }}>{ref.name}</h2>
                    <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{ref.nameNote}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', color: ref.color === 'green' ? '#16A34A' : '#2563EB', marginBottom: '2px' }}>{ref.title}</p>
                  <p style={{ fontSize: '0.83rem', color: '#6B7280', marginBottom: '0.75rem' }}>{ref.org}</p>

                  <p style={{ fontSize: '0.875rem', color: '#374151', lineHeight: '1.75', marginBottom: '1rem' }}>{ref.description}</p>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span className={`badge ${ref.color === 'green' ? 'badge-green' : 'badge-blue'}`}>
                      {ref.relation}
                    </span>
                    <span className="badge badge-gray">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                      聯絡方式：{ref.contact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact prompt */}
        <div className="card" style={{ padding: '1.5rem 2rem', background: '#F8FAFF', borderColor: '#BFDBFE' }}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#2563EB', marginBottom: '0.5rem' }}>
            索取推薦人詳細資訊
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: '1.8', marginBottom: '1rem' }}>
            若您正在評估本人的求職申請並需要推薦人完整聯絡資訊，歡迎來信，我將在確認後儘快回覆。
          </p>
          <a href="mailto:gary860818@gmail.com?subject=推薦人聯絡資訊索取" className="btn-primary" style={{ width: 'fit-content' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            gary860818@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
