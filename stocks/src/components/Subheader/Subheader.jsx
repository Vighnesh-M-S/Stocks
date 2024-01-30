import React from "react";
import styles from "./Subheader.module.css";


const Subheader = (props) => {
    return(
    <div class ={styles.Subheader}>
        <div class ={styles.container}>
            {props.children}
        </div>

    </div>
    );
};

export default Subheader;