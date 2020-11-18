import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {

  setGoogleTags() {
    if (publicRuntimeConfig.PRODUCTION) {
      return {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-7R13CXHY88');
        `
      };
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-G-7R13CXHY88"></script>
          <link rel="stylesheet" href="/static/css/styles.css" />
          <script dangerouslySetInnerHTML={this.setGoogleTags()}></script>
        </Head>
          <body>
            <Main />
            <NextScript />
          </body>
      </Html>
    )
  }
}

export default MyDocument
