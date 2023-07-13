import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Button,
  Stack,
  Image,
  Flex,
} from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'

const images = [
  {category: 'Object Detection', url: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2114&q=80', available: true, path: '/obj'},
  {category: 'Hand Pose Detection', url: 'https://images.unsplash.com/photo-1602055069542-16b39d115bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80', available: true, path: '/hand'},
  {category: 'Landmark Detection', url: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80', available: false, path: '/landmark'}
]

const Product = ({ category, url, available, path }) => {
  return (
    <Center py={20} marginX={8} marginY={'8.5px'} flex={1}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${url})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={url}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {category}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Button
              mt={2}
              w={'full'}
              bg={available ? 'green.400' : 'blue.400'}
              color={'white'}
              rounded={'xl'}
              boxShadow={`0 5px 20px 0px ${available ? 'rgb(72 187 120 / 43%)' : 'rgb(72 120 187 / 43%)'}`}
              as={NavLink}
              to={available ? path : null}
              _hover={{
                bg: `${available ? 'green' : 'blue'}.500`,
              }}
              _focus={{
                bg: `${available ? 'green' : 'blue'}.500`,
              }}>
              {available ? 'Start Now' : 'Coming Soon'}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

const Products = () => {
  return (
    <>
      <Flex marginY={'80px'}>
        {images.map(image => 
          <Product
            key={image.category} 
            category={image.category}
            url={image.url} 
            available={image.available}
            path={image.path}
          />
        )}
      </Flex>
    </>
  )
}

export default Products