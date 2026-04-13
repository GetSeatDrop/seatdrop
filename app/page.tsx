import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Track concert ticket prices and get alerts when prices drop.</h1>
            <p className="lead">GetSeatDrop helps fans monitor live event ticket prices so they can buy at a better time and avoid overpaying.</p>
            <p className="lead">When you're ready, we connect you directly to ticket marketplaces to complete your purchase.</p>
            <div className="hero-ctas">
              <Link className="primary-button" href="#search">Track Ticket Prices</Link>
              <Link className="secondary-button" href="#how-it-works">How It Works</Link>
            </div>
          </div>
          <div className="hero-card card" id="search">
            <form className="search-form">
              <label className="label">Event</label>
              <input className="input" type="text" placeholder="Search for an artist, venue, or event" aria-label="Search for an artist, venue, or event" />
              <label className="label">Target price</label>
              <input className="input" type="text" placeholder="Example: Under $120" aria-label="Target price" />
              <div style={{display: 'flex', gap: 12, marginTop: 12}}>
                <button className="primary-button" type="button">Create Price Alert</button>
                <Link className="secondary-button" href="#how-it-works">How It Works</Link>
              </div>
              <p className="disclaimer">Ticket availability and pricing may change at any time.</p>
            </form>
            <p className="disclaimer" style={{ marginTop: 12 }}>Built for concert fans looking to buy tickets at the right time.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <h2>How it works</h2>
          <div className="steps">
            <div className="step card">
              <div className="step-number">1</div>
              <h3>Search for an event</h3>
              <p>Find the artist, venue, or specific show you care about.</p>
            </div>
            <div className="step card">
              <div className="step-number">2</div>
              <h3>Set your target price</h3>
              <p>Choose a price you're willing to pay so we can watch listings for you.</p>
            </div>
            <div className="step card">
              <div className="step-number">3</div>
              <h3>Get notified</h3>
              <p>Receive an alert when listings meet your criteria so you can buy with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2>Why GetSeatDrop</h2>
          <div className="benefit-grid">
            <div className="benefit card">
              <h4>Track ticket prices over time</h4>
              <p>See price trends so you can decide when to buy.</p>
            </div>
            <div className="benefit card">
              <h4>Watch events in one place</h4>
              <p>Manage the shows you care about across venues and sellers.</p>
            </div>
            <div className="benefit card">
              <h4>Get notified when prices move</h4>
              <p>Timely alerts so you don't miss a good deal.</p>
            </div>
            <div className="benefit card">
              <h4>Built for high-intent buyers</h4>
              <p>Designed for fans who want to buy at the right moment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <div className="container">
          <h2>Use cases</h2>
          <div className="benefit-grid">
            <div className="benefit card">
              <h4>Concerts</h4>
              <p>Track prices for your favorite artists and venues.</p>
            </div>
            <div className="benefit card">
              <h4>Festivals</h4>
              <p>Monitor multi-day events and get alerts for deals.</p>
            </div>
            <div className="benefit card">
              <h4>Sports</h4>
              <p>Stay updated on game ticket pricing trends.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
