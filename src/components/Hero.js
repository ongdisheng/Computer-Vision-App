import {
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  Box,
  Image,
} from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={'168'}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'pink.400',
                zIndex: -1,
              }}
            >
              Real Time
            </Text>
            <br />
            <Text as={'span'} color={'pink.400'}>
              AI Detection
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Embark on a Journey of Real-Time Computer Vision using AI. 
            Experience the remarkable capabilities of our cutting-edge AI technology, enabling you to analyze and understand the world in real-time. 
            Explore the realm of computer vision and unlock the potential for intelligent insights and automated decision-making.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'bold'}
              px={10}
              colorScheme={'pink'}
              bg={'pink.400'}
              as={NavLink}
              to={'/products'}
              _hover={{ bg: 'pink.500', textDecoration: 'none' }}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          > 
            <Image
              alt={'Sample Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}

export default Hero