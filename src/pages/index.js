import React from "react"
import { GoogleSpreadsheet } from "google-spreadsheet"
import Layout from "components/Layout"

export async function getStaticProps() {
  const doc = new GoogleSpreadsheet(process.send.GOOGLE_SHEETS_SHEET_ID)

  doc.useApiKey(process.env.GOOGLE_SHEETS_API_KEY)
  await doc.loadInfo()

  const sheet = doc.sheetsByIndex[0]

  await sheet.loadCells("B1:B5")

  const usdbrl = sheet.getCellByA1("B1").value

  return {
    props: {
      usdbrl,
    },
    unstable_revalidate: 1,
  }
}

export default function Home(props) {
  return (
    <Layout title="Home">
      <h1>{props.usdbrl}</h1>
    </Layout>
  )
}
