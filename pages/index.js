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
        <meta name="image" property="og:image" content="https://martin.vercel.app/me.jpeg"/>
      </Head>
      <h4>Hi there nice to meet you</h4>
      <Image src="/me.jpeg" width={250} height={250} alt="Logo" className={styles.me}/>
      <h1>
        I am Karyamsetty Martin a senior undergradute at the mechanical engineering department of IIT (BHU), varanasi  .
      </h1>
      <p>
        I have experience in building full-stack web applications,mobile applications,REST APIs, . I love working with new tech and have worked with multiple technologies and languages.
      </p>
      <p>
        If you want to work together contact me through my social media. The links are provided below
      </p>
    </div>
  )
}
