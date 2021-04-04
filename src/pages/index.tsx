import React from 'react';
import Head from "next/head"
import Nav from './components/Nav';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Antonio Carlos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <div>Pagina</div>
    </div>
  )
}
