import type { NextPage } from 'next';
import Layout from '../components/Layout/article';
import {
  Box,
  chakra,
  Container,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';
import Image from 'next/image';
import Section from '../components/section';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (props: any) =>
    ['width', 'height', 'src', 'alt'].includes(props)
});

const Home: NextPage = () => {
  return (
    <Layout title={'HomePage'}>
      <Container>
        <Box
          borderRadius={'lg'}
          mb={6}
          p={3}
          textAlign={'center'}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Helloooo! Wellcome to my homepage..
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as={'h2'} variant={'page-title'}>
              Nguyen Vo Trai
            </Heading>
            <p>{`I'm a developer ( React / React Native / ... )`}</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign={'center'}
          >
            <Box
              borderColor={'whiteAlpha.800'}
              borderWidth={2}
              borderStyle={'solid'}
              w={'100px'}
              h={'100px'}
              display={'inline-block'}
              borderRadius={'full'}
              overflow={'hidden'}
            >
              <ProfileImage
                src={
                  'w_100,h_100,c_scale/v1661404843/homepage/IMG_0991_iuf91p.jpg'
                }
                alt={'Profile image'}
                borderRadius={'full'}
                width={'100%'}
                height={'100%'}
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as={'h3'} variant={'section-title'}>
            Work
          </Heading>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
