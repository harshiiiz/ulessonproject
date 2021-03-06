import React,{FC} from 'react'
import styles from '../stages/Stages.module.scss'
import Image from 'next/image'
interface proptype
{
    date:string;
    text1:string;
    text2:string;
    icon:string;
    stage:string;
    stageno:number;
    imgsrc:string;
    
}

const index:FC<proptype> = (props) => {
  return (
    <div className={styles.stagecontainer}>
    <div className={styles.frame19715}>
        <div className={styles.frame19713}>
            <div className={styles.ellipse1}></div>
            <div className={styles.text1}>{props.text1}</div>
        </div>
        <div className={styles.frame19714}>
            <div className={styles.ellipse2}></div>
           <div className={styles.text2}> {props.text2}</div>
        </div>
    </div>
    <div className={styles.frame36524}>
        <div className={styles.date}>
            
            <div className='icon'>
                <Image src={props.imgsrc} width={20} height={22}></Image>
            </div>
            

            <div className={styles.day}>{props.date}</div>
        </div>
        <div className={styles.stage}>
        <div className={`stageno${props.stageno}` }>{props.stage}</div>
        
        </div>
    </div>

    </div>
  )
}

export default index