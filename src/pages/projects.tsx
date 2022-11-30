import { Container, Divider, Heading } from '@chakra-ui/react';
import Flag from 'react-flagkit';
import { ProjectGridItem } from '../components/gridItem';
import Layout from '../components/Layout/article';
import Section from '../components/section';

const Projects = () => {
  return (
    <Layout title={'Projects'}>
      <Container>
        <Heading as={'h3'} fontSize={28} mb={4}>
          Projects
        </Heading>
        <Section delay={0.1}>
          <Heading as={'h4'} id={'fsoft'}>
            FPT
          </Heading>
          <Divider variant={'dashed'} />
          <ProjectGridItem
            mainLib={'React Native'}
            summary={`Management system project for Sun`}
            name={'SGR PAPERLESS'}
            teamSize={210}
            position={'Member'}
            flag={<Flag country={'VN'} size={20} />}
            listTechs={[
              'Redux, Redux Saga',
              'HTTP Request (Restful API)',
              'Animations',
              'Notifications',
              'Formik',
              'Multi-languages',
              'Integrate Multi-App React Native'
            ]}
          />
          <ProjectGridItem
            mainLib={'React Native'}
            summary={`FPT will perform a full-service software development firm to develop the Pantura mobile app which utilizes the Floow’s SDK, and the back-end system that is related to the mobile app, and the possible system integration that can happen with the Pantura back-end system.`}
            name={'Mucar'}
            teamSize={51}
            position={'Member'}
            flag={<Flag country={'DE'} size={20} />}
            listTechs={[
              'Redux, Redux Saga',
              'HTTP Request (Restful API)',
              'Animations',
              'Notifications',
              'Formik',
              'Multi-languages',
              'Native modules for Android/IOS'
            ]}
          />
          <ProjectGridItem
            mainLib={'React Native'}
            summary={`Develop a loyalty mobile application for Takashimaya's shopping malls in Singapore`}
            name={'G-MallApp'}
            teamSize={34}
            position={'Member'}
            flag={<Flag country={'ID'} size={20} />}
            listTechs={[
              'Redux, Redux Saga',
              'HTTP Request (Restful API)',
              'Animations',
              'Notifications',
              'Formik',
              'Multi-languages'
            ]}
          />
          <ProjectGridItem
            mainLib={'React Native'}
            summary={
              'Consolidate all the features for agents, points of sale, out-of-sale channels on Shop CTV apps, SMCS apps, VNPTPay Merchant apps and VNPTPay Agent apps into the new sales super-app (Super-App)'
            }
            name={'Digishop'}
            teamSize={75}
            position={'Leader'}
            flag={<Flag country={'VN'} size={20} />}
            listTechs={[
              'Integrate Multi-App',
              'Redux, Redux Saga',
              'HTTP Request (Restful API)',
              'Animations',
              'Integrate Devices Contacts',
              'Build with bundle'
            ]}
          />
          <ProjectGridItem
            mainLib={'React Native'}
            summary={'Development education platform for customer'}
            name={'Smart_EduPlatform'}
            teamSize={622}
            position={'Member'}
            flag={<Flag country={'KR'} size={20} />}
            listTechs={[
              'Redux, Redux Saga',
              'Notifications',
              'Animations',
              'HTTP Request (Restful API)',
              'QR/BarCode Scanner and generate',
              'Video Cache, Custom control video',
              'Multi-languages',
              'Typescript'
            ]}
          />
          <ProjectGridItem
            mainLib={'React Native'}
            summary={
              '3R application development project, serving furniture exchange on a miniature social network platform.'
            }
            name={'CTSG'}
            teamSize={9}
            position={'Member'}
            flag={<Flag country={'VN'} size={20} />}
            listTechs={[
              'Redux, Redux Saga',
              'Payment',
              'HTTP Request (Restful API)',
              'Animations',
              'Notifications',
              'Multi-languages',
              'Caching'
            ]}
          />
        </Section>
        <Section delay={0.2}>
          <Heading as={'h4'} id={'mwg'}>
            MWG
          </Heading>
          <Divider variant={'dashed'} />
          <ProjectGridItem
            mainLib={'React Native'}
            summary={'Xland application development to manage MWG land'}
            name={'XLand'}
            teamSize={10}
            position={'Member'}
            flag={<Flag country={'VN'} size={20} />}
            listTechs={[
              'Redux, Redux Thunk',
              'HTTP Request (Restful API)',
              'Code push',
              'Multi-languages',
              'Caching',
              'Animations'
            ]}
          />
        </Section>
        <Section delay={0.3}>
          <Heading as={'h4'} id={'sumviet'}>
            SUMVIET
          </Heading>
          <Divider variant={'dashed'} />
          <ProjectGridItem
            mainLib={'React Native'}
            summary={'Develop shopping and payment cashback applications'}
            name={'SumViet'}
            teamSize={5}
            position={'Member'}
            flag={<Flag country={'VN'} size={20} />}
            listTechs={[
              'Integrate Map',
              'Redux, Redux Thunk',
              'Record, manager Record state',
              'Integrate Devices Contacts',
              'Animations',
              'Integrate chart for mobile',
              ''
            ]}
          />
        </Section>
        <Section delay={0.4}>
          <Heading as={'h4'} id={'ok'}>
            My Projects
          </Heading>
          <Divider variant={'dashed'} />
          <ProjectGridItem
            mainLib={'React Native'}
            summary={
              'Build a mobile social app based on react native and graphql'
            }
            name={'Social App'}
            listTechs={[
              'Use library Apllo GraphQL Client to call, fetch, manage cache',
              'Message real-time',
              'Use design UI&UX from Figma',
              'One some hook React to manage state'
            ]}
          />
          <ProjectGridItem
            mainLib={'ASP .Net MVC'}
            summary={
              'Build a website sales based on ASP .Net MVC and ASP .Net Core'
            }
            name={'WebASP'}
            listTechs={[
              'Login Facebook with SDK',
              'Google map API',
              'Security with Captcha SDK',
              'Send Mail'
            ]}
          />
          <ProjectGridItem
            mainLib={'ReactJS'}
            summary={'One some project outsourcing'}
            name={'-'}
            listTechs={['', '', '', '', '', '', '', '', '']}
          />
        </Section>
      </Container>
    </Layout>
  );
};

export default Projects;
