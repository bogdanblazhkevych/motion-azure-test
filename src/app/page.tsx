import FirstPage from './homepagesections/firstpage/firstpage'
import styles from './page.module.css'
import Slider from './components/slider/page'
import SecondPage from './homepagesections/secondpage/secondpage'
import ThirdPage from './homepagesections/thirdpage/thirdpage'

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
      <ThirdPage />
      {/* <SecondPage />
      <SecondPage /> */}
    </main>
  )
}
