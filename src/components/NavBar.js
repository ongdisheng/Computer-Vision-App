// import libraries
import { 
  Box, 
  Flex, 
  Link,
  Spacer,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  Center,
  useColorModeValue
} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex bg="purple.500" p={4} align="center">
      <Box>
        <Link
          px={4}
          py={1}
          rounded={'md'}
          color="white"
          fontWeight="bold"
          fontSize="x-large" 
          letterSpacing="wide"
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.400'),
          }}
          href={'#'}
        >
          📸 Real Time Object Detection
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}>
            <Avatar
              size={'md'}
              src={'https://bit.ly/ryan-florence'}
            />
          </MenuButton>
          <MenuList alignItems={'center'}>
            <br />
            <Center>
              <Avatar
                size={'2xl'}
                src={'https://bit.ly/ryan-florence'}
              />
            </Center>
            <br />
            <Center>
              <p>Ryan Florence</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem>Your Servers</MenuItem>
            <MenuItem>Account Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
}

export default Navbar