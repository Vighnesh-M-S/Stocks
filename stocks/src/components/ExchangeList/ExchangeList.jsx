import React from "react";
import styles from "/Users/vighneshms/Downloads/Stocks/stocks/src/components/ExchangeList/ExchangeList.module.css";

const ExchangeList = (props) => {
    const renderListItems = () =>{
        return props.exchange.map(exchange => {
            return <li className={styles.listItem}>
            <div className={styles.name}>{exchange.name}</div>
            <div className={styles.index}>{exchange.index}</div>
            <div className={styles.percentage}>{exchange.change}</div>
            </li>
        })
    }
    return (
    <div className={styles.container}>
    <h1 className={styles.header}>Exchanges</h1>
    <ul>
        {renderListItems()}
    </ul>

    </div>
    );

};

export default ExchangeList;