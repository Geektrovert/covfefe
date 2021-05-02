import Link from "next/link";
import { Box } from "@chakra-ui/layout";

export default function NavItem({ title, link }) {
  return (
    <Link href={link}>
      <Box
        as="button"
        position="relative"
        cursor="pointer"
        color="brand.700"
        fontSize={{ base: "2rem", lg: "1rem" }}
        fontWeight={{ base: "800", lg: "400" }}
        borderTopWidth={{ base: 0, lg: 1, xl: 1 }}
        borderBottomWidth={{ base: 0, lg: 1, xl: 1 }}
        borderLeftWidth={{ base: 0, lg: 1, xl: 1 }}
        borderRightWidth={{ base: 0, lg: 1, xl: 1 }}
        borderColor="brand.700"
        px={{ base: 3, lg: 10, xl: 10 }}
        py={3}
        sx={{
          "&": { borderLeftWidth: { base: 0, lg: 1, xl: 1 } },
          "& + &": { borderLeftWidth: 0 },
        }}
        zIndex={0}
        _after={{
          content: `""`,
          position: "absolute",
          bottom: 0,
          left: 0,
          w: "100%",
          h: "0%",
          bg: "brand.700",
          transition: "height 0.16s linear",
          zIndex: -1,
        }}
        _hover={{
          color: "brand.100",
          _after: {
            content: `""`,
            position: "absolute",
            bottom: 0,
            left: 0,
            w: "100%",
            h: "100%",
            bg: "brand.700",
            transition: "height 0.16s linear",
            zIndex: -1,
          },
        }}
        _focus={{
          outline: "none",
          color: "brand.100",
          _after: {
            content: `""`,
            position: "absolute",
            bottom: 0,
            left: 0,
            w: "100%",
            h: "100%",
            bg: "brand.700",
            transition: "height 0.16s linear",
            zIndex: -1,
          },
        }}
      >
        {title}
      </Box>
    </Link>
  );
}
