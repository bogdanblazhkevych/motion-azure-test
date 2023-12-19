import FirstPage from './homepagesections/firstpage/firstpage'
import styles from './page.module.css'
import Slider from './components/slider/page'
import SecondPage from './homepagesections/secondpage/secondpage'
import ThirdPage from './homepagesections/thirdpage/thirdpage'
import FourthPage from './homepagesections/fourthpage/fourthpage'
import FifthPage from './homepagesections/fifthpage/fifthpage'
import SixthPage from './homepagesections/sixthpage/sixthpage'
import SeventhPage from './homepagesections/seventhpage/seventhpage'
import GradientTest from './homepagesections/gradienttest/gradienttest'
import NinthPage from './homepagesections/ninthpage/ninthpage'

export default function Home() {

  return (
    <main>
      {/* <GradientTest /> */}
      <FirstPage />
      <NinthPage />
      <FifthPage />
      <SeventhPage />
      <Slider />
      <SecondPage />
    </main>
  )
}
