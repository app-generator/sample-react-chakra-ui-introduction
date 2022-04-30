import {
    Flex,
    Spacer,
    Text,
    Wrap,
    WrapItem,
    Avatar,
    Box,
    useMediaQuery,
  } from '@chakra-ui/react';
  import React from 'react';
  
  const Testimonials = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  
    return (
      <Flex
        maxWidth={isLargerThanLG ? '1400px' : 'full'}
        minHeight="70vh"
        justifyContent="center"
        alignItems="center"
        py="16"
        px={isLargerThanLG ? '16' : '6'}
        mx="auto"
        flexDirection={isLargerThanLG ? 'row' : 'column'}
      >
        <Flex
          width={isLargerThanLG ? '380px' : 'full'}
          shadow="md"
          minHeight="250px"
          flexDirection="column"
          p="8"
          m="4"
          border="1px solid #C4DDFF"
          borderRadius="md"
          justifyContent="center"
        >
          <Text mb="5">
            "The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the platform
            eight months faster than planned."
          </Text>
          <Wrap>
            <WrapItem>
              <Avatar
                name="Karl Brighton"
                src="https://sweta-myteam-website-fm.netlify.app/static/media/avatar-kady.78fc482c.jpg"
              />
            </WrapItem>
  
            <WrapItem>
              <Box>
                <Text fontSize="sm">Karl Brighton</Text>
                <Text fontSize="sm" opacity="0.7">
                  Software Engineer at Kadex
                </Text>
              </Box>
            </WrapItem>
          </Wrap>
        </Flex>
  
        <Spacer />
        <Flex
          width={isLargerThanLG ? '380px' : 'full'}
          shadow="md"
          minHeight="250px"
          flexDirection="column"
          p="8"
          m="4"
          border="1px solid #C4DDFF"
          borderRadius="md"
          justifyContent="center"
        >
          <Text mb="5">
            "We needed to automate our entire onboarding process. The team came in
            and built out the whole journey. Since going live, user retention has
            gone through the roof!"
          </Text>
  
          <Wrap>
            <WrapItem>
              <Avatar
                name="Karl Brighton"
                src="https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg"
              />
            </WrapItem>
  
            <WrapItem>
              <Box>
                <Text fontSize="sm">Krishna Bells</Text>
                <Text fontSize="sm" opacity="0.7">
                  Product Manager at Google
                </Text>
              </Box>
            </WrapItem>
          </Wrap>
        </Flex>
        <Spacer />
  
        <Flex
          width={isLargerThanLG ? '380px' : 'full'}
          shadow="md"
          minHeight="250px"
          flexDirection="column"
          p="8"
          m="4"
          border="1px solid #C4DDFF"
          borderRadius="md"
          justifyContent="center"
        >
          <Text mb="5">
            "Amazing. Our team helped us build an app that delivered a new
            experience for hiring a physio. The launch was an instant success with
            100k downloads in the first month."
          </Text>
          <Wrap>
            <WrapItem>
              <Avatar
                name="Ben Spiff"
                src="https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg"
              />
            </WrapItem>
  
            <WrapItem>
              <Box>
                <Text fontSize="sm">Ben Spiff</Text>
                <Text fontSize="sm" opacity="0.7">
                  Founder of Crypto Inc.
                </Text>
              </Box>
            </WrapItem>
          </Wrap>
        </Flex>
      </Flex>
    );
  };
export default Testimonials