import {
  Box,
  Button,
  Flex,
  Img,
  Spacer,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import chakraHero from '../assets/chakraHero.jpg';

const Hero = () => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  return (
    <Flex
      alignItems="center"
      w="full"
      px={isLargerThanLG ? '16' : '6'}
      py="16"
      minHeight="90vh"
      justifyContent="space-between"
      flexDirection={isLargerThanLG ? 'row' : 'column'}
    >
      <Box mr={isLargerThanLG ? '6' : '0'} w={isLargerThanLG ? '60%' : 'full'}>
        <Text
          fontSize={isLargerThanLG ? '5xl' : '4xl'}
          fontWeight="bold"
          mb="4"
        >
          {' '}
          Chakra UI Sample
        </Text>

        <Text mb="6" fontSize={isLargerThanLG ? 'lg' : 'base'} opacity={0.7}>
          Sample Code for the blog article React MUI Components - Learn by Coding. The article explains how to code from scratch all components: 
          navBar, hero section, app features, contact, and footer. 
        </Text>

        <Button
          w="200px"
          colorScheme="blue"
          variant="solid"
          h="50px"
          size={isLargerThanLG ? 'lg' : 'md'}
          mb={isLargerThanLG ? '0' : '10'}
          onClick={(e) => {
            e.preventDefault();
            window.location.href='https://blog.appseed.us/chakra-ui-react-coding-landing-page/';
            }}
        >
          Read More
        </Button>
      </Box>
      <Spacer />
      <Flex
        w={isLargerThanLG ? '40%' : 'full'}
        alignItems="center"
        justifyContent="center"
      >
        <Img src={chakraHero} alt="Chakra UI" />
      </Flex>
    </Flex>
  );
};

export default Hero;