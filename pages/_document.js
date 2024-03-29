import Document, { Html, Main, NextScript, Head } from 'next/document'
import { Tracking } from '@zalxon/components'
import { InitializeColorMode } from 'theme-ui'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='no-focus-outline'>
        <Head>
          <Tracking id={process.env.GA_TRACKING_ID} />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <link href="/css/app.css" rel="stylesheet" />
        <script src="/js/app.js" />
        <script src="/js/prototype.js" />
    
      </Html>
    )
  }
}

export default MyDocument
