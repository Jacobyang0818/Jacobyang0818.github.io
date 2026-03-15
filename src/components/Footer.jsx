export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #E5E7EB',
      background: '#fff',
      padding: '1.75rem 1.5rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '880px', margin: '0 auto' }}>
        <p style={{ color: '#9CA3AF', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
          © 2025 楊明勳 Jacob Yang · Built with React &amp; Vite
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {[
            { label: 'gary860818@gmail.com', href: 'mailto:gary860818@gmail.com' },
            { label: 'GitHub / Jacobyang0818', href: 'https://github.com/Jacobyang0818' },
            { label: '+886-925-199-970', href: 'tel:+886925199970' },
          ].map(l => (
            <a key={l.href} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{ fontSize: '0.8rem', color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#2563EB'}
              onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
