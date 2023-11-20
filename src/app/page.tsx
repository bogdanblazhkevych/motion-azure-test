import FirstPage from './homepagesections/firstpage/firstpage'
import Navbar from './components/navbar/navbar'
import styles from './page.module.css'
import Slider from './components/slider/page'
import SecondPage from './homepagesections/secondpage/secondpage'

export default function Home() {

  return (
    <main className={styles.main}>
      {/* <Navbar /> */}
      {/* <FirstPage />
      <Slider /> */}
      <SecondPage />
    </main>
  )
}
