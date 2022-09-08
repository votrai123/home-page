import type { NextPage } from 'next';
import Layout from '../components/Layout/article';
import {
  Box,
  chakra,
  Container,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react';
import Image from 'next/image';
import { IoIosTimer } from 'react-icons/io';
import Section from '../components/section';
import Paragraph from '../components/paragraph';

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
          <Paragraph>
            I am a student at a University Of Information Technology and 2+
            Years of experience in programming with knowledge of {<br />}
            Object-oriented Programming, Information Systems, Development
            Mobile. I hope to be able to help the company develop software with
            the knowledge I already have. Willing to practice to learn and
            accumulate more work experience, improve their professional
            knowledge and capacity.
          </Paragraph>
          <UnorderedList>
            <ListItem fontSize={16}>
              2+ years of experience in programming with strong knowledge of
              JavaScript ( ReactNative, ReactJS).
            </ListItem>
            <ListItem fontSize={16}>
              2+ years of experience knowledge of React Hook
            </ListItem>
            <ListItem fontSize={16}>
              1+ years as a technical lead with deep understanding of Mobile UX
              and UI design paradigms, and ability to implement and design
              Mobile apps.
            </ListItem>
          </UnorderedList>
        </Section>

        <Section delay={0.2}>
          <Heading as={'h3'} variant={'section-title'}>
            Education
          </Heading>
          <Text mt={2} fontSize={20} fontWeight={'bold'} flexDirection={'row'}>
            University of information Technology – HCM city national University
          </Text>
          <Box alignItems={'baseline'} display={'flex'}>
            <Box ps={2} pe={2}>
              <IoIosTimer />
            </Box>
            <Text fontStyle={'italic'} verticalAlign={'center'} fontSize={'18'}>
              2017 - Now
            </Text>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
