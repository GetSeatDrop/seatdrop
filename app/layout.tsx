import './globals.css'
import SiteHeader from '../components/site-header'
import SiteFooter from '../components/site-footer'

export const metadata = {
  title: 'GetSeatDrop — Track ticket prices and get alerts',
  description: 'GetSeatDrop helps fans monitor live event ticket prices and get notified when prices drop so they can buy at the right time.',
  metadataBase: new URL('https://www.getseatdrop.com')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
