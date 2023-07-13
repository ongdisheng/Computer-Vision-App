import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
  
const LoginForm = () => {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={151} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool 
            <Link color={'blue.400'} _hover={{ textDecoration: 'none' }}>
              <span> features</span>
            </Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={100}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                bg: 'blue.500',
              }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default LoginForm