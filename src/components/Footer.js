// import libraries
import { Box, Text, HStack, Flex } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <Flex minHeight="16vh" flexDirection="column">
      <Box bg="gray.800" py={4} px={6} mt="auto">
        <HStack spacing={1} justify="center">
          <Text color="white" fontSize="medium" letterSpacing="wide">Made with</Text>
          <Text color="red" fontSize="medium" letterSpacing="wide"><FaHeart style={{ verticalAlign: 'middle' }} /></Text>
          <Text color="white" fontSize="medium" letterSpacing="wide">by Ong Di Sheng</Text>
        </HStack>
      </Box>
    </Flex>
  )
}

export default Footer