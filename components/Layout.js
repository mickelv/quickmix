import React from 'react';
import Head from 'next/head';
import { AppBar, Typography, Toolbar, Container } from '@mui/material';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Cock</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Cocktails!</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>all cocks reserved</Typography>
      </footer>
    </div>
  );
}
