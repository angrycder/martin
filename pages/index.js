import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.screen}>
      <h4>Hi there nice to meet you</h4>
      <Image src="/me.jpeg" width={250} height={250} alt="Logo" className={styles.me}/>
      <p>
        I am Karyamsetty Martin a Mechanical engineering undergradute at IIT (BHU), varanasi .
        I am a creative software developer
      </p>
      <p>
        I have experience in building full-stack web applications,mobile applications,REST APIs, . I love working with new tech and have worked with multiple technologies and languages.
      </p>
      <p>
        If you want to work together contact me through my social media. The links are provided below
      </p>
    </div>
  )
}
