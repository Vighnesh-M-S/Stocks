import React from "react";
import styles from "./Header.module.css"
import { ReactComponent as Logo } from "/Users/vighneshms/Downloads/Stocks/stocks/src/assets/icons/chart-line.svg";

const Header = () =>{
    return <header className={styles.header}> 
    <div className={styles.logoContainer}>
        <Logo className={styles.logo}/>
        <span>Stocks</span>
    </div>
    <div className={styles.userContainer}>
        <div className={styles.user}>V</div>
        <span>Vig</span>
    </div>


    </header>;
    
}

export default Header;