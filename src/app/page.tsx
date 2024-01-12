import { Home } from '@/screens/home'
import GlobalStyles from '../styles/global'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
})
  
export default function App() {
    return (
      <main className={poppins.className}>
        <>          
          <GlobalStyles />
          <Home />
        </>

      </main>
    )
  }


