import React from "react";
import styles from "./button.module.css"

export const Button = ({props}) => {
    let style;
    props.disabled ? style = {background: "rgba(0, 0, 0, 0.5)", pointerEvents: "none"} : style = null
    return (
        <input className={`${styles.button} ${styles.buttonForm}`} style={style}id={props.id} value={props.value} type={props.type} />
    )
}