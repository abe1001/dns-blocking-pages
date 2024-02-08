import './globals.css'
import './TeliaSans.css'
import '@teliads/components/dist/telia-component-library/telia-component-library.css';


export const metadata = {
  title: 'Telia Trygg Surfing®',
  description: 'DNS filter delivered by Telia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
