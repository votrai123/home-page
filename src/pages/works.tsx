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
            title={'FPT'}
            id={'FPT'}
            position={'react native'}
            startTime={'now'}
            endTime={'on ok 213'}
            listItems={['hom nay laf thu 2', 'homen ya laf thu 3']}
          />
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            title={'FPT'}
            id={'FPT'}
            position={'react native'}
            startTime={'now'}
            endTime={'on ok 213'}
            listItems={['hom nay laf thu 2', 'homen ya laf thu 3']}
          />
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            title={'FPT'}
            id={'ok'}
            position={'react native'}
            startTime={'now'}
            endTime={'on ok 213'}
            listItems={['hom nay laf thu 2', 'homen ya laf thu 3']}
          />
        </Section>
      </Container>
    </Layout>
  );
};

export default Works;
