import React from "react"
import { GoogleSpreadsheet } from "google-spreadsheet"
import Layout from "components/Layout"

export async function getStaticProps() {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_SHEET_ID)

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

function formatCurrency(currency, value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
  }).format(value)
}

export default function Home(props) {
  return (
    <Layout
      title="Dólar Hoje"
      description="Veja a cotação do dólar americano hoje. Preço do dólar sempre atualizado!"
    >
      <div className="bg-white shadow rounded-lg w-full max-w-xs sm:max-w-xl">
        <p className="py-8 px-8 flex flex-col items-center sm:flex-row sm:justify-center">
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
            {formatCurrency("BRL", props.usdbrl)}
          </span>
        </p>
        <p className="border-t border-cool-gray-100 text-cool-gray-500 text-sm text-center leading-5 py-6 px-8 flex flex-col sm:flex-row sm:justify-center">
          <span>Última atualização</span>
          <span className="hidden sm:block">&nbsp;</span>
          <span>
            {new Date().toLocaleDateString("pt-BR")}{" "}
            {new Date().toLocaleTimeString("pt-BR")}
          </span>
        </p>
      </div>
    </Layout>
  )
}
