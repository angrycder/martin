import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import { teal} from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: teal,
    },
  });
const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
     }

    const handleClose = () => {
    setAnchorEl(null);
     }

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
        <nav className={styles.nav2}>
                <ThemeProvider theme={theme}>
                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            color="primary"
                        >
                            <MenuIcon />
                        </IconButton>
                    </ThemeProvider>    
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="/projects">
                        <p>Projects</p>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="/skills">
                        <p>Skills</p>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="/resume.pdf">
                        <p>Resume</p>
                    </Link>
                </MenuItem>
            </Menu>
        </nav>
    </header> );
}
 
export default Header;