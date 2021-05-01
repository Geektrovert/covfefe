import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      direction="column"
      h="100vh"
      bg="brand.100"
      justify="center"
      align="center"
    >
      <Box
        as="p"
        color="brand.700"
        fontWeight="500"
        fontSize={{ base: "1.2rem", lg: "1.3rem" }}
        borderTopWidth={1}
        borderLeftWidth={1}
        borderRightWidth={1}
        borderColor="brand.700"
        px={6}
        py={3}
        transform={{
          sm: "",
          md: "",
          lg: "translateX(60%)",
          xl: "translateX(100%)",
        }}
      >
        Refresh yourself with coffee
      </Box>
      <Box
        as="h1"
        color="brand.700"
        fontSize={{
          base: "calc(1rem + 1.5vw)",
          md: "calc(1rem + 2vw)",
          lg: "calc(0.8rem + 3vw)",
          xl: "calc(0.8rem + 4vw)",
        }}
        fontWeight="900"
        lineHeight={1.4}
        borderWidth={1}
        borderColor="brand.700"
        px={{ base: 4, md: 8, lg: 20, xl: 24 }}
        py={4}
        textAlign="left"
      >
        CRAFT GREAT COFFEE
        <br />
        CREATE GREAT COMMUNITY
      </Box>
      <Flex
        wrap="wrap"
        maxWidth={{ base: "20rem", md: "30rem", lg: "40rem", xl: "50rem" }}
        transform={{
          base: "",
          xl: "translateX(-1vw)",
          xl: "translateX(clamp(-20rem, -4vw, -1.5vw))",
        }}
      >
        <Box
          color="brand.700"
          fontSize={{ base: "1.2rem", lg: "1.3rem" }}
          w={{ sm: "100%", md: "100", lg: "50%", xl: "40%" }}
          maxHeight="min-content"
        >
          <Box
            as="p"
            borderBottomWidth={{ base: 0, md: 0, lg: 1, xl: 1 }}
            borderLeftWidth={1}
            borderRightWidth={{ base: 1, md: 1, lg: 0, xl: 0 }}
            borderColor="brand.700"
            px={6}
            py={3}
          >
            North End Coffee Roasters is your single source for fresh-roasted
            coffee in Bangladesh.
          </Box>
        </Box>
        <Box
          color="brand.700"
          fontSize={{ base: "1.2rem", lg: "1.3rem" }}
          w={{ sm: "100%", md: "100", lg: "50%", xl: "40%" }}
        >
          <Box
            as="p"
            borderBottomWidth={1}
            borderLeftWidth={1}
            borderRightWidth={1}
            borderColor="brand.700"
            px={6}
            py={3}
          >
            North End Coffee Roasters brings you the highest quality 100%
            arabica coffees from around the world, roasted locally for maximum
            freshness.
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
