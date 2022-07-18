import styles from '../styles/Footer.module.css';
import { grey } from '@material-ui/core/colors';
import Link from 'next/link'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
const Footer = () => {
    return (
    <footer className={styles.foot}>
        <h5>copyright © </h5>
        <div>
            <Link href="https://www.linkedin.com/in/ksnmartin/">
             <LinkedInIcon fontSize="small" style={{ color: grey[50],cursor:"pointer" }}/>
            </Link>
            <Link href="https://github.com/ksnmartin">
                <GitHubIcon fontSize="small" style={{ color: grey[50],cursor:"pointer" }}/>
            </Link>
            <Link href="https://instagram.com/ksnmartin">
                <InstagramIcon fontSize="small" style={{ color: grey[50],cursor:"pointer" }}/>
            </Link>
        </div>
    </footer>);
}
 
export default Footer;