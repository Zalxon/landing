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
