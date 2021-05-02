import Head from "next/head";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import NavBarContainer from "components/Nav/NavBarContainer";
import colors from "styles/colors";

const theme = extendTheme({
  colors,
  fonts: {
    body: "Jost, sans-serif",
    heading: "Jost, sans-serif",
    mono: "monospace",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NorthEnd Coffee Roasters</title>
        <meta
          name="description"
          content="Craft great coffee, creat great community"
        />
      </Head>
      <NavBarContainer>
        <Component {...pageProps} />
      </NavBarContainer>
    </ChakraProvider>
  );
}

export default MyApp;
