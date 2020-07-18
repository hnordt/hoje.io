import React from "react"
import { useRouter } from "next/router"
// import { GoogleSpreadsheet } from "google-spreadsheet"
import Layout from "components/Layout"

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_SHEET_ID)

  // await doc.useServiceAccountAuth({
  //   client_email: "vercel@hoje-io-1594941865874.iam.gserviceaccount.com",
  //   private_key:
  //     "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDGufRH3iOXUcZi\nZCb4mz5m7RxKgXqywEJPT5CV+ihFJI9mzO+Rty9EEO7Zf5McoIKy2aRXKeLIc7vy\na0JPywS+bl4bn7tNf/RXC3//cdEQY7PEPPeAOQ7jb56NEP+6X9/eHy6Sivp0T9is\nqfJ0ozaVd99l8HKc+e043W7uwJisGHx/aK3jGyAexwgsDhD6MNJ1pjmXT6/GC2gT\n2EQ0Ld+P/qE2pDe57GWxKCU2qp8RR+OTUok6fV19p5qiWBefiT4JOhWgljzN/4Ic\nCcP1Vj9jjqKFyF/RgaJPK3dUWc0qFsQADyURPO1rZ5nXhjsa/YJhzsXa8zDGw+tm\nQ1NZyNhTAgMBAAECggEAGp7QTUxBgkSvCYEXA1hwbIM4tfZQRF+iwlMLMDv5ZwG1\nv/SV5vQd/cUy6anAQCZ0O5cR/6cZvPZb5+ZcVKoCcawBKTwlcAVC6uIcfFB3y/U/\nIHt2QBPknazXFViAmSu8plmQ+IprcGc9xCtj0iIG7tDG+TXTdJm6IFLxSEQ+b1b/\nqAjpZb3Y3JVJJZeZy9BbLw2XrX4ynaoCJr62sNw7dV+iap9A1TS6dGm/Oli+HmgD\n116ndDEdKpj0kZX0vGbXzAxR1ai0nIJlweWU1OFUP9jhp0ycsg/prBxKw3P7pvFo\nA+abpq8iD2wngYB9AYeMMkIT8l1V6c7ofjuVUgAoIQKBgQD4fk1aCTZPd3DKN2X8\nygP0EZp6FLnkpC+6GN/sbgEtZBupxtQGPRl6ndn7mWuciEYT3v5o4o8VnFYdzm0n\n7xbMAgXv3onWo0DPRmWPKS5xC7/bzqMKGpbhD2MA3xLBKtUhiSXjX+b4DagG5QV/\nnaxcY5PV6814FCBPIBHjFjEYMQKBgQDMusjC9nbGYGoMw/dEd0OdLQ5DhGWPEM9o\njnBL45mK9klxUfZo0iGS8sGekwL76VH+2ICZ6wdoHGTYZ7eLzdpllGyxb/mcoexx\nkJRZ0V7bdcforp+L7vIcbu/GVg3UtgDmSGlBThvg0i4QsoZf7M+CQzdJRN74UmKw\nvaHdgupbwwKBgQDZAevpUhw039kHL8QINB+puOnP7WO+EciAW5LKNfMfQcqKxNGK\ntTcYBtxDxeLda4DPf7FrxVcxhzsJgql+82RUOvwWU6DKaf2CRjcRA+TD4n/lpJpr\ni3byCu7p5uXI/e/s/omw/KKHQ93WT5Eytm68rFWBvxDL6b+heh9E0q+DMQKBgCpV\ntY4bSRRce5GINGmEAAdQedKcXiPnZfxI+A+5UNbbdvRn7nxed3LboA4aeFN/O+Vm\n/7DUWQO+W1wkll/igXbf6loGvacWFL6nFwY7tVHMWTpUYcmd75LRneN1iAakXCtC\nbgGDFWC4Fa5+PCs53O8i1xvfkfvnjWDe1cnoeG3hAoGBAPMieUM1ctFk/lpeiBgD\nNTEaVLO9kDE+HOHoDOnuzVtrZp2LPUFmX3EZKrGPydKHr8Vk2L0DDhI4t64ntv/X\nPz+WvVImxUrJ4rKxm0GsbnJkr7a+tHdrnpnLgsPKVy3OXd8JUp9Hbr/o+WKtxHC3\neow8uBdXJNpNkYasrccJdMmU\n-----END PRIVATE KEY-----\n",
  // })

  // await doc.loadInfo()

  // const sheet = doc.sheetsByIndex[0]
  // const rows = await sheet.getRows()

  // let row = rows.find((row) => row._rawData[0] === context.params.id)

  // if (!row) {
  //   row = await sheet.addRow([
  //     context.params.id,
  //     `=GOOGLEFINANCE("${context.params.id}")`,
  //   ])
  // }

  // const value = Number(row._rawData[1])

  return {
    props: {
      value: 10,
    },
    unstable_revalidate: 1,
  }
}

function formatCurrency(currency, value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
  }).format(value)
}

export default function Home(props) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Layout
      title="Dólar Hoje"
      description="Veja a cotação do dólar americano hoje. Preço do dólar sempre atualizado!"
    >
      <div className="bg-white shadow rounded-lg w-full max-w-xs sm:max-w-xl">
        <p className="py-8 px-8 flex flex-col items-center sm:flex-row sm:justify-center">
          <span className="font-medium text-cool-gray-500 text-2xl leading-10 sm:pr-4">
            Hoje
          </span>
          <span className="font-semibold text-cool-gray-900 text-3xl">
            <span role="img" aria-label="Bandeira dos Estados Unidos">
              🇺🇸
            </span>{" "}
            {formatCurrency("USD", 1)}
          </span>
          <span className="font-medium text-cool-gray-500 text-2xl leading-10 sm:px-4">
            vale
          </span>
          <span className="font-semibold text-cool-gray-900 text-3xl">
            <span role="img" aria-label="Bandeira do Brasil">
              🇧🇷
            </span>{" "}
            {formatCurrency("BRL", props.value)}
          </span>
        </p>
      </div>
    </Layout>
  )
}
