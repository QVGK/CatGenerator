// Dependencies
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {v4 as uuidv4} from 'uuid'
import {useEffect, useState} from 'react'
import {BarLoader} from 'react-spinners'
import styles from '../styles/Home.module.css'

// Components
import BuyMeACoffee from '../components/buymeacoffee'

export default function Home() {
  const [catImage, setCatImage] = useState('blob:')
  const [loading, setLoading] = useState(true)
  const [showCat, setShowCat] = useState('none')

  useEffect(() => {
    fetch(`https://cataas.com/cat?key=${uuidv4()}`).then(res => {
      res.blob().then(blob => {
        setCatImage(URL.createObjectURL(blob))
        setLoading(false)
        setShowCat('')
      })
    })
  }, [])

  return (
    <div className={`main`}>
      <Head>
        <title>Generate a Cat</title>
        
        <style>
          {`
            body {
              background-color: rgb(255, 72, 0);
            }
          `}
        </style>
      </Head>

      <div className={`container-fluid ${styles.topContainer}`}>
        <h1 className={`${styles.appTitle}`}>Generate a Cat</h1>

        <BuyMeACoffee /> 
        <a href="https://github.com/qvgk/CatGenerator" target="_blank">
          <img style={{cursor: 'pointer', marginLeft: '40px'}} alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/qvgk/CatGenerator?style=flat-square" />
        </a>
      </div>


      <div className={`${styles.imageLoaderContainer}`}>
        <BarLoader loading={loading} />
      </div>

      <div className={`${styles.mainContainer}`} style={{display: `${showCat}`}}>
        <img src={`${catImage}`} alt="cat" style={{ maxWidth: '90vw', maxHeight: '60vh'}} />

        <br/>
        <a href="https://cataas.com/#/" target="__blank" className={`${styles.apiText}`}>This application was built using the CATAAS API.</a>
      </div>
    </div>
  )
}
