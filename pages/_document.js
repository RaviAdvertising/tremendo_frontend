import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open Sans:wght@400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
