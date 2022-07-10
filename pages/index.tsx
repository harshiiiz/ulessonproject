import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Topbar from '../components/topbar'
import Frame2 from '../components/frame2'
import Frame3 from '../components/frame3'
import Frame4 from '../components/frame4'
import Frame5 from '../components/frame5'
import Faq3 from '../components/faq3'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Countdown from '../components/countdown'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ulesson</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
        
      </Head>
       
      <div className={styles.tabcontainer}>
        <Topbar/>
        <Frame2/>
        <Countdown/>
        <Frame3/>
        <Frame4/>
        <Frame5/>
        <Faq3/>
        <Contact/>
        <Footer/>
         

        
      </div>
      

      </>
    
  )
}

export default Home
