const experienceData = [
  {
    id: 1,
    period: '2021/02 — 2022/10',
    company: 'Wholetech System Hitech Co., Ltd.',
    title: '現場監工工程師 / 專案工程師',
    industry: '半導體設備與系統整合',
    achievements: [
      '統籌多項大型設備安裝專案，透過排程優化與資源調度，有效縮短專案時程約 10%',
      '管理設備供應商、工程分包商及客戶三方溝通，確保零工安事故紀錄',
      '建立標準化施工程序（SOP），提升現場作業效率與安全性',
      '主導設備驗收流程（FAT/SAT），確保設備符合規格與時程要求',
    ],
  },
  {
    id: 2,
    period: '2020/07 — 2021/01',
    company: 'Cica-Huntek Chemical Technology Taiwan Co., Ltd.',
    title: '現場監工工程師 / 專案工程師',
    industry: '化學製程設備',
    achievements: [
      '執行化學製程設備現場安裝與系統調試作業',
      '協調供應商與客廠端工程人員，確保施工進度與品質',
      '輔助制定設備操作規範及安全管理文件',
    ],
  },
  {
    id: 3,
    period: '2018/10 — 2020/06',
    company: 'Han Ming Technology, LLC.',
    title: '助理工程師',
    industry: '工程技術服務',
    achievements: [
      '協助資深工程師執行現場設備維護與技術支援',
      '參與工程文件整理，建立設備維護履歷紀錄',
      '熟悉工廠環境安全操作規範',
    ],
  },
]

export default function Experience() {
  return (
    <div className="page-wrapper">
      <div className="section-container">
        <div className="section-title-line" />
        <h1 className="section-title">工作經歷</h1>
        <p className="section-subtitle">從工程管理到 AI 技術，跨域整合的職涯歷程</p>

        <div className="timeline">
          {experienceData.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot" />
              <div className="card" style={{ padding: '1.75rem 2rem' }}>
                <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: '500' }}>{exp.period}</span>

                <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1A1A2E', marginTop: '0.5rem', marginBottom: '3px' }}>{exp.company}</h2>
                <p style={{ fontSize: '0.925rem', fontWeight: '600', color: '#2563EB', marginBottom: '3px' }}>{exp.title}</p>
                <p style={{ fontSize: '0.8rem', color: '#9CA3AF', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  {exp.industry}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.achievements.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.875rem', color: '#374151', lineHeight: '1.7' }}>
                      <span style={{ marginTop: '7px', width: '5px', height: '5px', borderRadius: '50%', background: '#2563EB', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: '2.5rem', padding: '1.25rem 1.75rem', background: '#F8FAFF', borderColor: '#BFDBFE' }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#2563EB', marginBottom: '0.5rem' }}>職涯轉型</h3>
          <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: '1.8' }}>
            在半導體與化工業累積紮實的工程專案管理能力後，於 2023 年進入清華大學攻讀工業工程碩士，
            以系統化思維結合電腦視覺與機器學習技術，完成職涯從工程管理到 AI 技術的跨域轉型。
          </p>
        </div>
      </div>
    </div>
  )
}
