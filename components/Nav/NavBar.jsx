import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

import NavItem from "./NavItem";

const links = [
  { title: "Store", link: "store" },
  { title: "Cafes", link: "cafes" },
  { title: "Services", link: "services" },
  { title: "About", link: "about" },
  { title: "Contact", link: "contact" },
];

export default function NavBar() {
  const imgSize = useBreakpointValue({ base: "48", lg: "64" });
  const menuDisclosure = useDisclosure();

  return (
    <Flex
      h={{ base: "4rem", lg: "6rem" }}
      bg="brand.100"
      align="center"
      px={{ base: 6, lg: 12, xl: 24 }}
    >
      <IconButton
        icon={<HiOutlineMenu />}
        variant="ghost"
        display={{ base: "flex", lg: "none" }}
        color="brand.700"
        bg="brand.200"
        fontSize="2rem"
        size="lg"
        mr={3}
        _hover={{ bg: "danger.200" }}
        _focus={{ bg: "danger.200" }}
        _active={{ bg: "danger.200" }}
        onClick={menuDisclosure.onOpen}
      />
      <Link href="/">
        <Box as="button" mr={{ base: 4, lg: 10, xl: 10 }} pt={2}>
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={imgSize || 64}
            height={imgSize || 64}
          />
        </Box>
      </Link>

      <Flex direction="row" display={{ base: "none", lg: "flex" }}>
        {links.map((link) => (
          <NavItem key={link.title} {...link} />
        ))}
      </Flex>

      <IconButton
        icon={
          <>
            <IoBagOutline />
            <Box ml={2} fontSize="1rem">
              {0}
            </Box>
          </>
        }
        variant="ghost"
        color="danger.700"
        bg="danger.200"
        fontSize="1.5rem"
        size="lg"
        ml="auto"
        p={3}
        _hover={{ bg: "brand.200" }}
        _active={{ bg: "brand.200" }}
      />

      {/* Menu Drawer */}
      <Drawer
        isOpen={menuDisclosure.isOpen}
        placement="right"
        onClose={menuDisclosure.onClose}
        placement="left"
      >
        <DrawerOverlay>
          <DrawerContent bg="brand.100" color="brand.700">
            <DrawerCloseButton />
            <DrawerHeader>
              <Box as="button" mr={{ base: 4, lg: 10, xl: 10 }} pt={2}>
                <Image
                  src="/logo.png"
                  alt="Picture of the author"
                  width={imgSize || 64}
                  height={imgSize || 64}
                />
              </Box>
            </DrawerHeader>

            <DrawerBody>
              <Flex direction="column">
                {links.map((link) => (
                  <NavItem key={link.title} {...link} />
                ))}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
}
