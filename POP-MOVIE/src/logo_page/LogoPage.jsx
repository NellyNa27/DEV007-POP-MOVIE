//import React from 'react'
import logoPop from './../images/logoPop.png';
import cuadroR from './../images/cuadroR.png';
import styles from './LogoPage.module.css'
function LogoPage() {

return (

    <div className={styles.prueba}>
        <div className="cuadroR">
        <img src={cuadroR} alt= "fondoRojo"/>
        </div>
        <div className="imgPop">
        <img src={logoPop} alt="logoPOP"/>
        </div>
    </div>
    );
}
export default LogoPage;