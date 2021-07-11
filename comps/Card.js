import styles from '../styles/Card.module.css';
import Image from "next/image";
import React from 'react';
import Link from 'next/link'

import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import { teal} from '@material-ui/core/colors';
import LanguageTwoToneIcon from '@material-ui/icons/LanguageTwoTone';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
});
const Card = ({title,imgref,altimg,cont,contributions,git,link}) => {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return ( 
    <div style={{padding:10,width:"fit-content"}}>
        <div className={styles.card}>
          <div>
          <Image src={imgref} width={300} height={300} alt={altimg}/>
            <div className={styles.heading}>
                <h2>{title}</h2>
            </div>
            <div className={styles.content}>
            {cont}
            </div>
          </div>
            <ThemeProvider theme={theme}>
              <div className={styles.but}>
                <Link href={link}>
                    <LanguageTwoToneIcon
                    color="primary"
                    className={styles.notice}
                    />
                </Link>
                <Link href={git}>
                    <GitHubIcon
                    color="primary"
                    className={styles.notice}
                    />
                </Link>
              <WorkTwoToneIcon
              color="primary" 
              onClick={handleClickOpen}
              className={styles.notice}
              />
              </div>
            </ThemeProvider>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"FMC Weekend"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {contributions.map((val)=>{
              return (<li>
                {val}
              </li>)
            })}
          </DialogContentText>
        </DialogContent>
      </Dialog>
        </div>
     </div>
     );
}
 
export default Card;