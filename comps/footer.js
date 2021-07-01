import styles from '../styles/Footer.module.css';
import { grey } from '@material-ui/core/colors';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/Github';
const Footer = () => {
    return (
    <footer className={styles.foot}>
        <h5>copyright © </h5>
        <div>
            <InstagramIcon fontSize="small" style={{ color: grey[50] }} />
            <FacebookIcon fontSize="small" style={{ color: grey[50] }}/>
            <TwitterIcon fontSize="small" style={{ color: grey[50] }}/>
            <GithubIcon fontSize="small" style={{ color: grey[50] }}/>
        </div>
    </footer>);
}
 
export default Footer;