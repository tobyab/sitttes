import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Site</h1>
        <Image className={styles.wotw} src="/apple.png" alt="website of the week" width="100%" height="100%" layout="responsive" objectFit="contain" />
    </div>
  )
}