import FirstPage from './homepagesections/firstpage/firstpage'
import Navbar from './components/navbar/navbar'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      {/* <Navbar /> */}
      <FirstPage />
      <FirstPage />
    </main>
  )
}
