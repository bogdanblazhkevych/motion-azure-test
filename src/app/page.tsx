import Landing from './homepagesections/landing/firstpage'
import Slider from './components/slider/page'
import SecondPage from './homepagesections/secondpage/secondpage'
import SeventhPage from './homepagesections/seventhpage/seventhpage'
import Gradient from './homepagesections/gradient/Gradient'
import NinthPage from './homepagesections/ninthpage/ninthpage'
import FifthPage from './homepagesections/fifthpage/fifthpage'

export default function Home() {

  return (
    <main>
      <Gradient />
      <Landing />
      <NinthPage />
      <FifthPage />
      <SeventhPage />
      <Slider />
      <SecondPage />
    </main>
  )
}
