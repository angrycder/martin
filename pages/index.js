import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.screen}>
      <Head>
        <title>Karyamsetty Martin</title>
        <meta name="description" content="Portfolio site for Karyamsetty Martin"></meta>
        <meta name="keywords" content="Karyamsetty Martin, ksnmartin"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content="https://martin.vercel.app/me.jpeg"/>
      </Head>
      <h4>Hi there 👋 I am Karyamsetty Martin</h4>
      <Image src="/me.jpeg" width={250} height={250} alt="Logo" className={styles.me}/>
      <h1>
        I am working as a Software Engineer at Mailmodo .I Formerly worked as a Software Engineer at gojek on the GoFood team
      </h1>
      <p>
        I am learning Rust,GoLang and Android and to know more about my skill set you can check the skills section of the website
      </p>
      <p>
        If you want to work together contact me through my social media. The links are provided below
      </p>
    </div>
  )
}
