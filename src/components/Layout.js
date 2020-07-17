import React from "react"
import Head from "next/head"

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title} | hoje.io</title>
        <meta name="description" content={props.description} />
      </Head>
      <main className="pt-32 px-6 flex flex-col items-center">
        {props.children}
      </main>
    </>
  )
}
