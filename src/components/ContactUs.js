import {
  Flex,
  FormControl,
  Text,
  Input,
  Textarea,
  Button,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';
import React from 'react';

const ContactUs = () => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  const toast = useToast();
  const submitForm = () => {
    return toast({
      title: 'Message sent!🚀',
      description: 'Thank you for contacting us!',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Flex
      w="full"
      minHeight="90vh"
      py="16"
      px={isLargerThanLG ? '16' : '6'}
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Text fontSize="3xl" mb="6">
        Contact Us
      </Text>

      <FormControl
        w={isLargerThanLG ? '60%' : 'full'}
        display="flex"
        flexDirection="column"
        alignItems="start"
      >
        <Input
          id="fullName"
          type="text"
          placeholder="Full Name"
          mb="5"
          h="14"
        />

        <Input id="email" type="email" placeholder="Email" mb="5" h="14" />

        <Input id="subject" type="text" placeholder="Subject" mb="5" h="14" />

        <Textarea placeholder="Enter a message" mb="5" rows={7} p="5" />

        <Button
          colorScheme="blue"
          size="lg"
          textAlign="left"
          width="200px"
          type="submit"
          onClick={submitForm}
        >
          SUBMIT
        </Button>
      </FormControl>
    </Flex>
  );
};

export default ContactUs;

