import { forwardRef } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export const MacSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const MacContainer = forwardRef(({ children }: any, ref: any) => (
  <Box
    ref={ref}
    m="auto"
    mt={['-40px', '-60px', '-80px']}
    mb={['-40px', '-140px', '-80px']}
    alignSelf={'center'}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
));

const Loader = () => {
  return (
    <MacContainer>
      <MacSpinner />
    </MacContainer>
  );
};

export default Loader;
