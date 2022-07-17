// Dependencies
import React from "react";
import styles from '../styles/buymeacoffee.module.css'

export default function Coffee() {
    return (
    <a
        className={styles.buyButton}
        target="_blank"
        href="https://www.buymeacoffee.com/qvgk"
    >
        <img
            className={styles.coffeeImage}
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
        />
        <span className={styles.coffeeButtonText}>Buy me a coffee</span>
    </a>
        );
    }