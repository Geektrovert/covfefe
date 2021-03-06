import Link from "next/link";
import { motion } from "framer-motion";
import { Box, Center, Flex, Icon, VisuallyHidden } from "@chakra-ui/react";
import { FiFacebook, FiInstagram } from "react-icons/fi";

export default function Home() {
  return (
    <Flex
      direction="column"
      minHeight={{ base: "calc(100vh - 4rem)", lg: "calc(100vh - 6rem)" }}
      bg="brand.100"
      justify="center"
      align="center"
    >
      <Box
        color="brand.700"
        fontFamily="FormulaCondensed, Jost, sans-serif"
        fontSize={{ base: "0.8rem", lg: "1rem" }}
        fontWeight="bold"
        borderTopWidth={1}
        borderLeftWidth={1}
        borderRightWidth={1}
        borderColor="brand.700"
        px={6}
        py={3}
        mt={6}
        style={{
          fontFeatureSettings: `"aalt"`,
          letterSpacing: 1,
        }}
        transform={{
          sm: "",
          md: "",
          lg: "translateX(60%)",
          xl: "translateX(100%)",
          overflow: "hidden",
        }}
      >
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ easing: "easeInOut", duration: 0.5 }}
        >
          REFRESH YOURSELF WITH COFFEE
        </motion.p>
      </Box>
      <Box
        color="brand.700"
        fontFamily="FormulaCondensed, Jost, sans-serif"
        fontWeight="bold"
        fontSize={{
          base: "calc(2rem + 3vw)",
          lg: "calc(3rem + 3vw)",
          xl: "calc(3rem + 5vw)",
        }}
        lineHeight={1.2}
        borderWidth={1}
        borderColor="brand.700"
        px={{ base: 4, md: 8, lg: 20, xl: 24 }}
        py={4}
        mx={3}
        textAlign="left"
        overflow="hidden"
      >
        <motion.h1
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ easing: "easeInOut", duration: 1 }}
        >
          C<span style={{ fontFeatureSettings: `"aalt"` }}>R</span>AFT{" "}
          <span style={{ fontFeatureSettings: `"aalt"` }}>G</span>REAT C
          <span style={{ fontFeatureSettings: `"aalt"` }}>O</span>FF
          <span style={{ fontFeatureSettings: `"aalt"` }}>E</span>E {" ??? "}
          <br />
          CREAT<span style={{ fontFeatureSettings: `"aalt"` }}>E</span> G
          <span style={{ fontFeatureSettings: `"aalt"` }}>R</span>EAT CO
          <span style={{ fontFeatureSettings: `"aalt"` }}>M</span>MUN
          <span style={{ fontFeatureSettings: `"aalt"` }}>I</span>TY
        </motion.h1>
      </Box>
      <Flex
        wrap="wrap"
        maxWidth={{ base: "20rem", md: "30rem", lg: "55rem", xl: "60rem" }}
        transform={{
          base: "",
          xl: "translateX(-1vw)",
          xl: "translateX(clamp(-20rem, -4vw, -1.5vw))",
        }}
      >
        <Box
          color="brand.700"
          fontSize={{ base: "1.2rem", lg: "1.3rem" }}
          w={{ sm: "100%", md: "100", lg: "40%", xl: "40%" }}
          maxHeight="min-content"
        >
          <Box
            borderBottomWidth={{ base: 0, md: 0, lg: 1, xl: 1 }}
            borderLeftWidth={1}
            borderRightWidth={{ base: 1, md: 1, lg: 0, xl: 0 }}
            borderColor="brand.700"
            px={6}
            py={3}
            overflow="hidden"
          >
            <motion.p
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ easing: "easeInOut", duration: 0.7 }}
            >
              North End Coffee Roasters is your single source for fresh-roasted
              coffee in Bangladesh.
            </motion.p>
          </Box>
        </Box>
        <Box
          color="brand.700"
          fontSize={{ base: "1.2rem", lg: "1.3rem" }}
          w={{ sm: "100%", md: "100", lg: "40%", xl: "40%" }}
        >
          <Box
            borderBottomWidth={1}
            borderLeftWidth={1}
            borderRightWidth={1}
            borderColor="brand.700"
            px={6}
            py={3}
            overflow="hidden"
          >
            <motion.p
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ easing: "easeInOut", duration: 0.7 }}
            >
              North End Coffee Roasters brings you the highest quality 100%
              arabica coffees from around the world, roasted locally for maximum
              freshness.
            </motion.p>
          </Box>
        </Box>
        <Box
          w={{ lg: "20%", xl: "20%" }}
          display={{ base: "none", lg: "block" }}
        >
          <Box
            as="button"
            bg="success.300"
            color="brand.700"
            fontWeight="600"
            _hover={{ color: "white", bg: "success.700" }}
            _focus={{ color: "white", bg: "success.700" }}
            _active={{ color: "white", bg: "success.700" }}
            m={6}
            p={3}
          >
            Browse Coffee
          </Box>
        </Box>
      </Flex>

      <Box w="100%" fontSize="1.8rem" mt={8} mb={{ base: 0, lg: 8 }}>
        <Center>
          <Link href="https://www.facebook.com/NORTHENDcoffee/" passHref>
            <Box
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              mx={2}
              color="brand.700"
              _hover={{ color: "danger.500" }}
            >
              <VisuallyHidden>Go to Facebook page</VisuallyHidden>
              <Icon as={FiFacebook} />
            </Box>
          </Link>

          <Link
            href="https://www.instagram.com/northendcoffeeroasters/"
            passHref
          >
            <Box
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              mx={2}
              color="brand.700"
              _hover={{ color: "danger.500" }}
            >
              <VisuallyHidden>Go to Instagram page</VisuallyHidden>
              <Icon as={FiInstagram} />
            </Box>
          </Link>
        </Center>
      </Box>
      <Box w="100%" display={{ base: "block", lg: "none" }} mt="auto">
        <Box
          as="button"
          w="calc(100% - 2 * 1rem)"
          bg="success.500"
          color="brand.100"
          fontWeight="600"
          _hover={{ bg: "success.600" }}
          _focus={{ bg: "success.600" }}
          _active={{ bg: "success.600" }}
          p={3}
          m="1rem"
        >
          Browse Coffee
        </Box>
      </Box>
    </Flex>
  );
}
