import NextLink from 'next/link';
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Container>
      <Heading as={'h1'}>Not Found</Heading>
      <Text>The page not found</Text>
      <Divider my={6} />
      <Box my={6} alignSelf={'center'}>
        <NextLink href={'/'} passHref>
          <Button colorScheme={'teal'}>Go to homepage</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
