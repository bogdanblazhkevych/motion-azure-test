import FirstPage from './homepagesections/firstpage/firstpage'
import styles from './page.module.css'
import Slider from './components/slider/page'
import SecondPage from './homepagesections/secondpage/secondpage'
import ThirdPage from './homepagesections/thirdpage/thirdpage'
import FourthPage from './homepagesections/fourthpage/fourthpage'
import FifthPage from './homepagesections/fifthpage/fifthpage'

export default function Home() {

  return (
    <main>
      <FirstPage />
      <FourthPage />
      <FifthPage />
      <ThirdPage />
      <Slider />
      <SecondPage />
    </main>
  )
}
