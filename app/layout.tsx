/* Components */
import { Providers } from '@/lib/providers'

/* Instruments */
import './styles/layout.scss'
import './styles/globals.css'
import { HeaderTop } from './components/Header'
import { H1Title } from './components/Layout'
import { FooterBottom } from './components/Footer'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body className='w-full'>
          <section className="flex flex-col bg-slate-900 text-white max-w-auto">
              <HeaderTop />

              <header className='flex items-center justify-center mt-8 text-center'>
                <H1Title BoldTitle='Get The Application You Want For Growth' H1class='font-semibold text-5xl max-w-xl' />
              </header>

              <main className='container flex flex-col justify-center items-center mx-auto'>{props.children}</main>

              <footer className=''>
                <FooterBottom />
              </footer>
          </section>
        </body>
      </html>
    </Providers>
  )
}
