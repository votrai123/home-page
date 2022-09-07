import { Container, Heading } from '@chakra-ui/react';
import Layout from '../components/Layout/article';

const Skills = () => {
  return (
    <Layout title={'Skills'}>
      <Container>
        <Heading as={'h3'} fontSize={28}>
          Skills
        </Heading>
      </Container>
    </Layout>
  );
};

export default Skills;
