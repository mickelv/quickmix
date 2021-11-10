import { ServerStyleSheets } from '@mui/styles';
import Document, { Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const orginalRenderPage = ctx.renderPage;
  ctx.renderPage = () => {
    return orginalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  };
  const initalProps = await Document.getInitialProps(ctx);
  return {
    ...initalProps,
    styles: [
      ...React.Children.toArray(initalProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
