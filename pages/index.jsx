// Dependencies
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Dynamic from 'next/dynamic'
import {v4 as uuidv4} from 'uuid'
import {useEffect, useState} from 'react'
import {BarLoader} from 'react-spinners'
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'
import bg from '../img/Background.png'

// Components
const TopContainer = Dynamic(() => import('../components/topContainer'), {ssr: false})

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
      }).catch(err => {
        alert('Could not create image blob. Please try again later.')
      })
    }).catch(err => {
      alert('Could not connect to API. Please try again later.')
    })
  }, [])

  return (
    <div className={`main`}>
      <Head>
        <title>Generate a Cat</title>
        
        <style>
          {`
            body {
              background-image: url(${bg.src});
            }
          `}
        </style>
      </Head>

      <TopContainer />

      <div className={`${styles.imageLoaderContainer}`}>
        <BarLoader loading={loading} />
      </div>

      <div className={`${styles.mainContainer}`} style={{display: `${showCat}`}}>
        <img src={`${catImage}`} alt="cat" style={{ maxWidth: '90vw', maxHeight: '60vh'}} />

        <br/>
        <a href="https://cataas.com/#/" target="__blank" rel="noreferrer" className={`${styles.apiText}`}>This application was built using the CATAAS API.</a>
      </div>
    </div>
  )
}
