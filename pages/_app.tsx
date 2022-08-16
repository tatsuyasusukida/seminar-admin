import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand navbar-light bg-light" aria-label="ヘッダー">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">講習管理システム</a>
            </Link>
          </div>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
