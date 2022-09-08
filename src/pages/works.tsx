import { Container, Heading } from '@chakra-ui/react';
import { WorkGridItem } from '../components/gridItem';
import Layout from '../components/Layout/article';
import Section from '../components/section';

const Works = () => {
  return (
    <Layout title={'Works'}>
      <Container>
        <Heading as={'h3'} fontSize={28} mb={4}>
          Works
        </Heading>

        <Section delay={0.1}>
          <WorkGridItem
            title={'FPT Software'}
            id={'fsoft'}
            position={'React Native'}
            startTime={'Nov 2021'}
            endTime={'Now'}
            listItems={[
              'Developing outsource projects for the company.',
              'Participate in training the freshers.',
              'Working with Scrum sprint',
              'Split task for team working',
              'Working with corporate clients',
              'Work with native modules',
              'Integrate miniapp with superapp (React Native With Native)'
            ]}
          />
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            title={'MWG'}
            id={'mwg'}
            position={'React Native'}
            startTime={'Aug 2021'}
            endTime={'Nov 2021'}
            listItems={[
              `Participate in the company's manage land product development`,
              'Assist with building estimates',
              'Participate in develop solution'
            ]}
          />
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            title={'SUMVIET Technology Company Limited'}
            id={'sumviet'}
            position={'React Native'}
            startTime={'Nov 2020'}
            endTime={'Aug 2021'}
            listItems={[
              `Participate in the company's e-commerce product development`,
              'Architect, build and maintain React Native applocations with clean code',
              'Implement pixel UI&UX that match designs',
              'Implement clean, modern, smooth animations and trainsitions and trainsitions that provide an user experience',
              'Know a little about Typescript'
            ]}
          />
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
            title={'ITGIS Company Limited'}
            id={'itgis'}
            position={'React Native'}
            startTime={'Aug 2020'}
            endTime={'Otc 2020'}
            listItems={[
              'Learn React Native',
              'Build UI for Login page and logic',
              'Fix one some Bugs of project company'
            ]}
          />
        </Section>
      </Container>
    </Layout>
  );
};

export default Works;
