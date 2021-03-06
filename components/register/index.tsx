
import React,{FC} from 'react'
import styles from '../register/Register.module.scss'
import Button from '../button';
import Image from 'next/image'


interface proptype{
    textreg:string;
    boxnum:number;
    btnlink:string;
    src:string;
}

const index :FC<proptype>= (props) => {
  return (
    
        <div className={`box${props.boxnum}`}>
        <div className={styles.grp36517}>
        <div className={styles.textreg}>{props.textreg}</div>
        <div className={styles.buttn}>
          
        <Button name={'REGISTER NOW'} btnlink={props.btnlink}/>
        
        </div>
        </div>
        
           <div className={`img${props.boxnum}`}>
              
              
              
            
            <Image src={props.src} width={220} height={240} ></Image>
            </div> 
        
        </div>
    
  )
}

export default index