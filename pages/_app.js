import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { Main } from '../components/main/index.tsx'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Hazmi.ID</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Main>
          <Component {...pageProps} />
        </Main>
        <style jsx global>{`
          html,
          body {
            margin: 0;
            padding: 0;
            height: 100%;
          }
          body {
            font: 400 16px/1.4 'Open Sans','Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #333;
            background: #f3f3f3;
            display: flex;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          #__next {
            display: flex;
            flex: 1;
            justify-content: center;
          }
      `}</style>
      </Container>
    );
  }
}

export default MyApp
