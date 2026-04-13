import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/">GetSeatDrop</Link>
        <nav className="nav">
          <Link href="#how-it-works">How It Works</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </header>
  )
}
