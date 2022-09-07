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
            summary={
              'Consolidate all the features for agents, points of sale, out-of-sale channels on Shop CTV apps, SMCS apps, VNPTPay Merchant apps and VNPTPay Agent apps into the new sales super-app (Super-App)'
            }
            name={'GMall'}
            teamSize={10}
            position={'Member'}
            flag={<Flag country={'VN'} size={20} />}
            listTechs={[
              'ok',
              'asd',
              'asdasdasd,',
              'asdasjdhqiwuh iuash iuahsiuah iahds'
            ]}
          />
          <ProjectGridItem
            summary={
              'Consolidate all the features for agents, points of sale, out-of-sale channels on Shop CTV apps, SMCS apps, VNPTPay Merchant apps and VNPTPay Agent apps into the new sales super-app (Super-App)'
            }
            name={'GMall'}
            teamSize={10}
            position={'Member'}
            flag={<Flag country={'VN'} size={20} />}
            listTechs={[
              'ok',
              'asd',
              'asdasdasd,',
              'asdasjdhqiwuh iuash iuahsiuah iahds'
            ]}
          />
          <ProjectGridItem
            summary={
              'Consolidate all the features for agents, points of sale, out-of-sale channels on Shop CTV apps, SMCS apps, VNPTPay Merchant apps and VNPTPay Agent apps into the new sales super-app (Super-App)'
            }
            name={'GMall'}
            teamSize={10}
            position={'Member'}
            flag={<Flag country={'VN'} size={20} />}
            listTechs={[
              'ok',
              'asd',
              'asdasdasd,',
              'asdasjdhqiwuh iuash iuahsiuah iahds'
            ]}
          />
          <ProjectGridItem
            summary={
              'Consolidate all the features for agents, points of sale, out-of-sale channels on Shop CTV apps, SMCS apps, VNPTPay Merchant apps and VNPTPay Agent apps into the new sales super-app (Super-App)'
            }
            name={'GMall'}
            teamSize={10}
            position={'Member'}
            flag={<Flag country={'VN'} size={20} />}
            listTechs={[
              'ok',
              'asd',
              'asdasdasd,',
              'asdasjdhqiwuh iuash iuahsiuah iahds'
            ]}
          />
          <ProjectGridItem
            summary={
              'Consolidate all the features for agents, points of sale, out-of-sale channels on Shop CTV apps, SMCS apps, VNPTPay Merchant apps and VNPTPay Agent apps into the new sales super-app (Super-App)'
            }
            name={'GMall'}
            teamSize={10}
            position={'Member'}
            flag={<Flag country={'VN'} size={20} />}
            listTechs={[
              'ok',
              'asd',
              'asdasdasd,',
              'asdasjdhqiwuh iuash iuahsiuah iahds'
            ]}
          />
        </Section>
        <Section delay={0.1}>
          <Heading as={'h4'} id={'fsoft'}>
            FPT
          </Heading>
          <Divider variant={'dashed'} />
          <ProjectGridItem
            summary={
              'Consolidate all the features for agents, points of sale, out-of-sale channels on Shop CTV apps, SMCS apps, VNPTPay Merchant apps and VNPTPay Agent apps into the new sales super-app (Super-App)'
            }
            name={'GMall'}
            teamSize={10}
            position={'Member'}
            flag={<Flag country={'VN'} size={20} />}
            listTechs={[
              'ok',
              'asd',
              'asdasdasd,',
              'asdasjdhqiwuh iuash iuahsiuah iahds'
            ]}
          />
          <ProjectGridItem
            summary={
              'Consolidate all the features for agents, points of sale, out-of-sale channels on Shop CTV apps, SMCS apps, VNPTPay Merchant apps and VNPTPay Agent apps into the new sales super-app (Super-App)'
            }
            name={'GMall'}
            teamSize={10}
            position={'Member'}
            flag={<Flag country={'VN'} size={20} />}
            listTechs={[
              'ok',
              'asd',
              'asdasdasd,',
              'asdasjdhqiwuh iuash iuahsiuah iahds'
            ]}
          />
          <ProjectGridItem
            summary={
              'Consolidate all the features for agents, points of sale, out-of-sale channels on Shop CTV apps, SMCS apps, VNPTPay Merchant apps and VNPTPay Agent apps into the new sales super-app (Super-App)'
            }
            name={'GMall'}
            teamSize={10}
            position={'Member'}
            flag={<Flag country={'VN'} size={20} />}
            listTechs={[
              'ok',
              'asd',
              'asdasdasd,',
              'asdasjdhqiwuh iuash iuahsiuah iahds'
            ]}
          />
        </Section>
        <Section delay={0.1}>
          <Heading as={'h4'} id={'ok'}>
            FPT
          </Heading>
          <Divider variant={'dashed'} />
          <ProjectGridItem
            summary={
              'Consolidate all the features for agents, points of sale, out-of-sale channels on Shop CTV apps, SMCS apps, VNPTPay Merchant apps and VNPTPay Agent apps into the new sales super-app (Super-App)'
            }
            name={'GMall'}
            teamSize={10}
            position={'Member'}
            flag={<Flag country={'VN'} size={20} />}
            listTechs={[
              'ok',
              'asd',
              'asdasdasd,',
              'asdasjdhqiwuh iuash iuahsiuah iahds'
            ]}
          />
        </Section>
      </Container>
    </Layout>
  );
};

export default Projects;
