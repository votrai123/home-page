import { Box, Container, Heading } from '@chakra-ui/react';
import Layout from '../components/Layout/article';
import Section from '../components/section';
import { SkillSection, SkillYear } from '../components/skill';

const Skills = () => {
  return (
    <Layout title={'Skills'}>
      <Container>
        <Heading as={'h3'} fontSize={28}>
          Skills & Expertise
        </Heading>
        <Section delay={0.1}>
          <Box borderStyle={'dashed'} mt={8} borderWidth={1} p={8}>
            <SkillSection>
              <SkillYear>Version control</SkillYear>
              Git
            </SkillSection>
            <SkillSection>
              <SkillYear>Languages</SkillYear>
              Javascript, Php, C#, HTML5&CSS3, Typescript.,...
            </SkillSection>
            <SkillSection>
              <SkillYear>Framwork/Lib</SkillYear>
              React, React Native, Asp .Net MVC (Core), Tailwindcss, Redux,
              Redux Thunk, Redux Saga, Redux Toolkit,NextJS,.....
            </SkillSection>
            <SkillSection>
              <SkillYear>DevOp</SkillYear>
              Docker, GitLab, Azure......
            </SkillSection>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Skills;
