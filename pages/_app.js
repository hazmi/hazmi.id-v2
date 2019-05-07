import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Hazmi.ID</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
        <style jsx global>{`
          html,
          body {
            margin: 0;
            padding: 0;
          }
          body {
            font: 300 18px/1.4 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #fefefe;
            background: #f5f5f5;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
      `}</style>
      </Container>
    );
  }
}

export default MyApp;
