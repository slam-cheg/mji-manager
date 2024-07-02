import React from "react";
import styles from "./button.module.css"

export const Button = ({props}) => {
    return (
        <input className={`${styles.button} ${styles.buttonForm}`} id={props.id} value={props.value} type={props.type} />
    )
}