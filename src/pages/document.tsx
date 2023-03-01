import { Html, Head, Main, NextScript } from 'next/document'

const document = () => {
  return (
    <Html lang="en">
    <Head>
      <meta name="application-name" content="template"/>
      <meta name="description"/>
      <link rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossOrigin="anonymous"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
  )
};

export default document
