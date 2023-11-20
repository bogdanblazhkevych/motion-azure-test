import FirstPage from './homepagesections/firstpage/firstpage'
import styles from './page.module.css'
import Slider from './components/slider/page'
import SecondPage from './homepagesections/secondpage/secondpage'

export default function Home() {

  return (
    // <main className={styles.main}>
    //   <FirstPage />
    //   <Slider />
    //   <SecondPage />
    // </main>
    <main>
      <FirstPage />
      {/* <Slider /> */}
      <SecondPage />
      {/* <SecondPage />
      <SecondPage /> */}
    </main>
  )
}
