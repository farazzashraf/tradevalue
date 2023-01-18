// import '../styles/globals.css'
import '../styles/variables.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}
