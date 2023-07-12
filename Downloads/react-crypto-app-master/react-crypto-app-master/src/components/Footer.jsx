import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import avatarSrc from "../assets/profile-Anurag.jpg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About XCrypto</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Hello Visitors, developed this project to implement my best knowledge of React library.
             
          </Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Shows live data referring to different coins and exchanges.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>ANURAG</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
