import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/',            label: '主頁' },
  { to: '/education',   label: '教育' },
  { to: '/experience',  label: '工作經歷' },
  { to: '/projects',    label: '專案' },
  { to: '/referees',    label: '推薦人' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '64px',
      display: 'flex', alignItems: 'center',
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid #E5E7EB',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    }}>
      <nav style={{
        maxWidth: '960px', margin: '0 auto', padding: '0 1.5rem',
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: '34px', height: '34px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #2563EB, #16A34A)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.95rem', fontWeight: '800', color: '#fff',
          }}>J</div>
          <span style={{ fontWeight: '700', fontSize: '1rem', color: '#1A1A2E', letterSpacing: '-0.01em' }}>
            Jacob Yang
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <ul className="desktop-nav" style={{ display: 'flex', gap: '2px', listStyle: 'none', margin: 0, padding: 0 }}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                style={({ isActive }) => ({
                  display: 'inline-block',
                  padding: '6px 14px',
                  borderRadius: '7px',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? '600' : '400',
                  color: isActive ? '#2563EB' : '#6B7280',
                  background: isActive ? '#EFF6FF' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease',
                  cursor: 'pointer',
                })}
              >{label}</NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="開啟選單"
          className="mobile-menu-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1A1A2E', padding: '8px', display: 'none', flexDirection: 'column', gap: '5px' }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1.5px', borderRadius: '2px', background: '#1A1A2E',
              transition: 'all 0.25s ease',
              transform: open ? (i === 0 ? 'translateY(6.5px) rotate(45deg)' : i === 1 ? 'scaleX(0)' : 'translateY(-6.5px) rotate(-45deg)') : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: '#fff', borderBottom: '1px solid #E5E7EB',
          padding: '0.75rem 1.5rem 1rem',
          display: 'flex', flexDirection: 'column', gap: '2px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}>
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                display: 'block', padding: '10px 14px', borderRadius: '7px',
                fontSize: '0.95rem', fontWeight: isActive ? '600' : '400',
                color: isActive ? '#2563EB' : '#374151',
                background: isActive ? '#EFF6FF' : 'transparent',
                textDecoration: 'none',
              })}>
              {label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
