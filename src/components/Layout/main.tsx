import { Box, Container } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Footer from '../footer';
import Navbar from '../Navbar';
import Loader from '../voxelMacLoader';

const LazyVoxelMac = dynamic(() => import('../voxelMac'), {
  ssr: false,
  loading: () => <Loader />
});

const Main = ({ children, router }: any) => {
  return (
    <Box as={'main'} pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="TraiNV's Homepage" />
        <meta name="author" content="Nguyen Vo Trai" />
        <meta name="author" content="TraiNV" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />

        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Nguyen Vo Trai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@trainv" />
        <meta name="twitter:creator" content="@trainv" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dktnzckto/image/upload/v1661405113/homepage/IMG_2538_oucmof.jpg"
        />
        <meta property="og:site_name" content="Nguyen Vo Trai" />
        <meta name="og:title" content="Nguyen Vo Trai" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dktnzckto/image/upload/v1661405113/homepage/IMG_2538_oucmof.jpg"
        />
      </Head>
      <Navbar path={router?.path} />
      <Container maxW={'container.md'} pt={14}>
        <LazyVoxelMac />

        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
