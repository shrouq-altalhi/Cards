import { Flex, Box, Image, useColorModeValue } from "@chakra-ui/react";
import Condition from "./Condition";
function ProductAddToCart(props) {
  return (
    <>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Image
            src={props.imageURL}
            alt={`Picture of ${props.name}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              
              {props.isNew && <Condition/>}
            </Box>

            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {props.name}
              </Box>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                color={useColorModeValue("gray.800", "white")}
              >
                <Box as="span" color={"gray.600"} fontSize="lg">
                  {props.disc}
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default ProductAddToCart;
