import React from 'react'
import styles from '../frame4/Frame4.module.scss'
import Stages from '../stages'

const index = () => {
  return (
    <div className={styles.fcont}>
    <div className={styles.frame4container}>
        <h2 className={styles.frame4title}>Challenge Stages</h2>
        <div className={styles.dottedline1}></div>
        <div className={styles.dottedline2}></div>
        <div className={styles.stage1}>
          
          <Stages imgsrc='/calendar.svg' stageno={1} date={'Saturday, July 2nd, 2022; 10:00am.'} text1={'VIRTUAL contest to be taken on the uLesson app - available on Android, iOS (phones and tablets) and web (laptops, desktop computers). '} text2={'Stage One is open to all registered candidates. '} icon={'../../public/'} stage={'Stage 1'}/>
          </div>
        
        <div className={styles.stage2}>
           <Stages imgsrc='/calendar2.svg' stageno={2} date={'Saturday, July 16th, 2022'} text1={' VIRTUAL contest to be taken on the uLesson app - available on Android, iOS (phones and tablets) and web (laptops, desktop computers). '} text2={'Stage One is open to all registered candidates. '} icon={'../../public/'} stage={'Stage 2'}/>
           </div>
        <div className={styles.stage3}>
        <Stages imgsrc='/calendar3.svg' stageno={3} date={'Saturday, July 30th, 2022.'} text1={'VIRTUAL contest to be taken on the uLesson app - available on Android, iOS (phones and tablets) and web (laptops, desktop computers). '} text2={'Stage One is open to all registered candidates.'} icon={'../../public/'} stage={'Final Stage'}/>
        </div>
    </div>
    </div>
  )
}

export default index