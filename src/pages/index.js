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
      <div class="mx-auto max-w-screen-xl py-20 px-12">
        <div class="text-center">
          <span
            className="block text-4xl mb-3"
            role="img"
            aria-label="Bandeira dos Estados Unidos"
          >
            🇺🇸
          </span>
          <div className="block md:hidden" aria-hidden>
            <h2 class="text-5xl tracking-tight leading-none font-extrabold text-gray-900">
              Dólar hoje
              <br />
              <span class="text-indigo-600">
                {formatCurrency("BRL", props.usdbrl)}
              </span>
            </h2>
            <p class="text-xl text-gray-500 mx-auto max-w-2xl mt-5">
              O dólar americano é a moeda emitida pelos{" "}
              <a
                className="font-medium text-gray-700 underline"
                href="https://pt.wikipedia.org/wiki/Estados_Unidos"
                title="Artigo sobre os Estados Unidos na Wikipédia portuguesa"
              >
                Estados Unidos
              </a>
              .
            </p>
          </div>
          <div className="hidden md:block">
            <h2 class="text-6xl tracking-tight leading-none font-extrabold text-gray-900">
              Hoje o dólar vale
              <br />
              <span class="text-indigo-600">
                {formatCurrency("BRL", props.usdbrl)}
              </span>
            </h2>
            <p class="text-xl text-gray-500  mx-auto max-w-2xl mt-5">
              O dólar americano é a moeda emitida pelos{" "}
              <a
                className="font-medium text-gray-700 underline"
                href="https://pt.wikipedia.org/wiki/Estados_Unidos"
                title="Artigo sobre os Estados Unidos na Wikipédia portuguesa"
              >
                Estados Unidos
              </a>{" "}
              através da{" "}
              <a
                className="font-medium text-gray-700 underline"
                href="https://pt.wikipedia.org/wiki/Sistema_de_Reserva_Federal_dos_Estados_Unidos"
                title="Artigo sobre o Sistema de Reserva Federal dos Estados Unidos na Wikipédia portuguesa"
              >
                Reserva Federal dos Estados Unidos
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-cool-gray-200 bg-cool-gray-100 py-20 px-12 flex justify-center">
        <article className="prose">
          <h2>Valor do dólar hoje</h2>
          <table>
            <thead>
              <tr>
                <th>
                  <abbr title="Quantidade">Qtd.</abbr> de dólares
                </th>
                <th>Valor em reais</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 5, 10, 20, 50, 100, 500, 1000].map((v) => (
                <tr>
                  <td>{formatCurrency("USD", v)}</td>
                  <td>{formatCurrency("BRL", v * props.usdbrl)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Sobre o dólar americano</h2>
          <p>
            O dólar americano é a moeda emitida pelos{" "}
            <a
              className="font-medium"
              href="https://pt.wikipedia.org/wiki/Estados_Unidos"
              title="Artigo sobre os Estados Unidos na Wikipédia portuguesa"
            >
              Estados Unidos
            </a>{" "}
            através da{" "}
            <a
              className="font-medium"
              href="https://pt.wikipedia.org/wiki/Estados_Unidos"
              title="Artigo sobre o Sistema de Reserva Federal dos Estados Unidos na Wikipédia portuguesa"
            >
              Reserva Federal dos Estados Unidos
            </a>
            .
          </p>
          <p>
            Ele possui moedas de 1, 5, 10, 25, 50 centavos de dólar e 1 dólar.
            As notas que circulam são de 1, 5, 10, 20, 50 e 100 dólares.
          </p>
          <h2>Como o valor do dólar é influenciado?</h2>
          <p>
            A cotação do dólar é um reflexo da economia dos principais países do
            mundo e também é influenciada pela situação de cada país.
          </p>
          <h2>A influência do dólar na sua vida</h2>
          <p>
            Alterações no dólar podem tornar preços de produtos importados mais
            caros ou baratos tanto em lojas físicas como online. Essas
            alterações também influenciam o orçamento de viagens para o
            exterior.
          </p>
        </article>
      </div>
    </Layout>
  )
}
