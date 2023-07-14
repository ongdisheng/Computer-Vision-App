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
  HStack,
  IconButton,
  VStack,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

import {
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'

import { NavLink } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Navbar = ({ user, handleLogout }) => {
  // light and dark mode
  const { colorMode, toggleColorMode } = useColorMode()
  const menuBackgroundColor = useColorModeValue('white', 'gray.700')
  const menuBorderColor = useColorModeValue('gray.200', 'gray.900')

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
            bg: useColorModeValue('gray.400', 'gray.400'),
          }}
          as={NavLink}
          to={'/'}
        >
          📸 Computer Vision
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          {
            user &&
            <>
              <HStack spacing={{ base: '0', md: '2' }}>
                <IconButton
                  onClick={toggleColorMode}
                  size="lg"
                  bg={'purple.500'}
                  icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                />
                <IconButton
                  size="lg"
                  variant="ghost"
                  aria-label="open menu"
                  icon={<FiBell />}
                />
                <Flex alignItems={'center'}>
                  <Menu>
                    <MenuButton
                      py={2}
                      transition="all 0.3s"
                      _focus={{ boxShadow: 'none' }}>
                      <HStack>
                        <Avatar
                          size={'sm'}
                          src={
                            'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                          }
                        />
                        <VStack
                          display={{ base: 'none', md: 'flex' }}
                          alignItems="flex-start"
                          spacing="1px"
                          ml="2">
                          <Text fontSize="sm" color="white" fontWeight={"bold"}>{user.username}</Text>
                          <Text fontSize="xs" color="white">
                            Admin
                          </Text>
                        </VStack>
                        <Box display={{ base: 'none', md: 'flex' }}>
                          <FiChevronDown />
                        </Box>
                      </HStack>
                    </MenuButton>
                    <MenuList
                      zIndex={999}
                      bg={menuBackgroundColor}
                      borderColor={menuBorderColor}>
                      <MenuItem>Profile</MenuItem>
                      <MenuItem>Settings</MenuItem>
                      <MenuItem>Billing</MenuItem>
                      <MenuDivider />
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              </HStack>
            </>
          }
          {
            !user &&
            <>
              <IconButton
                onClick={toggleColorMode}
                size="lg"
                bg={'purple.500'}
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              />
              <Button
                as={NavLink}
                to={'/login'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'blue.400'}
                padding={'20px'}
                margin={'8px'}
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