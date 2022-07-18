// Dependencies
import React from 'react'
import {motion} from 'framer-motion'
import styles from '../styles/Home.module.css'

// Components
import BuyMeACoffee from './buymeacoffee'

export default function title() {
    return (
        <div className={`container ${styles.topContainer}`}>
            <h1 className={`${styles.appTitle}`}>
                Generate a Cat
            </h1>

            <div>
                <motion.a style={{opacity: 0.8}} transition={{ease: 'easeOut'}} whileHover={{opacity: 1, textDecoration: 'underline'}}>
                    <BuyMeACoffee />
                </motion.a>

                <motion.a style={{opacity: 0.8}} whileHover={{opacity: 1, textDecoration: 'underline'}} href="https://github.com/qvgk/CatGenerator" target="_blank" rel="noreferrer">
                    <img style={{cursor: 'pointer', marginLeft: '40px'}} alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/qvgk/CatGenerator?style=flat-square" />
                </motion.a>
            </div>

        </div>
    )
}
