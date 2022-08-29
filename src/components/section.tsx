import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { AnimationOptions, motion } from 'framer-motion';
import { ReactNode } from 'react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp(prop) {
    return shouldForwardProp(prop) || prop === 'transition';
  }
});

type Props = {
  delay: AnimationOptions<any> | any;
  children: ReactNode;
};

const Section = ({ children, delay = 0 }: Props) => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transitionDelay={delay}
      transitionDuration={'0.8'}
      mb={6}
    >
      {children}
    </StyledDiv>
  );
};

export default Section;
