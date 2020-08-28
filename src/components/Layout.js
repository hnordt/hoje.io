import React from "react"
import Head from "next/head"

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href={`/${props.favicon}.ico`} />
      </Head>
      <main>{props.children}</main>
    </>
  )
}
