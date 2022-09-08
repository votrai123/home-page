import NextLink from 'next/link';
import { IoIosTimer } from 'react-icons/io';
import Image from 'next/image';
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  UnorderedList,
  ListItem,
  chakra,
  shouldForwardProp,
  Grid,
  GridItem,
  Heading
} from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: prop => shouldForwardProp(prop) || prop === 'children'
});

export const GridItems = ({ children, href, title, thumbnail }: any) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

interface IPropWorks {
  children?: ReactNode;
  title: string;
  startTime: string;
  endTime: string;
  position: string;
  listItems: Array<string>;
  id: string;
}

export const WorkGridItem = ({
  children,
  title,
  startTime,
  endTime,
  position,
  listItems,
  id
}: IPropWorks) => (
  <ChakraBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} w="100%">
    <NextLink href={`/projects#${id}`} passHref scroll={false}>
      <LinkBox cursor={'pointer'}>
        <Box alignItems={'baseline'} display={'flex'}>
          <Text mt={2} fontSize={20} fontWeight={'bold'} flexDirection={'row'}>
            {title}
          </Text>
          <Box ps={2} pe={2}>
            <IoIosTimer />
          </Box>
          <Text fontStyle={'italic'} verticalAlign={'center'} fontSize={'18'}>
            {startTime} - {endTime}
          </Text>
        </Box>
        <Text fontWeight={'medium'} fontStyle={'oblique'} fontSize={20} mb={2}>
          {position}
        </Text>
        <UnorderedList>
          {listItems.map((item, index) => (
            <ListItem fontSize={16} key={index.toString()}>
              {item}
            </ListItem>
          ))}
        </UnorderedList>
        {children}
      </LinkBox>
    </NextLink>
  </ChakraBox>
);

interface IPropProject {
  teamSize?: number;
  summary: string;
  position?: string;
  listTechs: Array<string>;
  name: string;
  flag?: ReactNode;
  mainLib: string;
}

export const ProjectGridItem = ({
  name,
  teamSize,
  position,
  summary,
  listTechs,
  flag,
  mainLib
}: IPropProject) => {
  return (
    <Box w={'100%'} pt={4}>
      <Heading display={'flex'} as={'h5'} fontSize={20}>
        {name} {!!flag && flag}
      </Heading>
      <Grid my={4} templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          {!!teamSize && <Text fontStyle={'oblique'}>Team size</Text>}
          {!!teamSize && <Text fontStyle={'oblique'}>Position</Text>}
          <Text fontStyle={'oblique'}>Main Lib</Text>
        </GridItem>
        <GridItem colStart={4} colEnd={6}>
          {!!teamSize && <Text>{teamSize}</Text>}
          {!!teamSize && <Text>{position}</Text>}
          <Text>{mainLib}</Text>
        </GridItem>
      </Grid>
      <Text fontStyle={'italic'} fontSize={16}>
        {summary}
      </Text>
      <UnorderedList>
        {listTechs.map((tech, index) => (
          <ListItem fontSize={16} key={index.toString()}>
            {tech}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
