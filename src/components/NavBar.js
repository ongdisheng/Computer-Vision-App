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
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Navbar = ({ user }) => {
  // light and dark mode
  const { colorMode, toggleColorMode } = useColorMode()

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
            bg: useColorModeValue('gray.400', 'gray.500'),
          }}
          href={'/'}
        >
          📸 Real Time Object Detection
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          {
            user &&
            <>
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
            </>
          }
          {
            !user &&
            <>
              <Button
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'blue.400'}
                href={'/login'}
                _hover={{
                  bg: 'blue.300',
                }}>
                  Login
              </Button>
            </>
          }
        </Menu>
      </Box>
    </Flex>
  )
}

export default Navbar