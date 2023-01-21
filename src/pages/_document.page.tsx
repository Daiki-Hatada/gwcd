import Document, { Head, Html, Main, NextScript } from 'next/document'

import { GOOGLE_ANALYTICS_ID } from '../libs/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          {GOOGLE_ANALYTICS_ID && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`} />
              <script
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag() {dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GOOGLE_ANALYTICS_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
          <meta name='color-scheme' content='light dark' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
