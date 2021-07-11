import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
const Header = () => {
    return (
    <header className={styles.header}>
        <Image src="/logo.png" width={100} height={100} alt="Logo"/>
        <nav className={styles.nav}>
            <Link href="/">
                <h4>Home</h4>
            </Link>
            <Link href="/projects">
                <h4>Projects</h4>
            </Link>
            <Link href="/skills">
                <h4>Skills</h4>
            </Link>
            <Link href="/resume.pdf">
                <h4>Resume</h4>
            </Link>
        </nav>
    </header> );
}
 
export default Header;