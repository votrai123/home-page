import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Logo from '../logo';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IoLogoGithub } from 'react-icons/io5';
import ThemeToggleButton from '../themeToggleButton';

const LinkItem = ({ href, path, target, children, ...props }: any) => {
  const active = href === path;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        color={active ? '#202023' : inactiveColor}
        bg={active ? 'grassTeal' : undefined}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props: any) => {
  const { path } = props;

  return (
    <Box
      position={'fixed'}
      as={'nav'}
      w={'100%'}
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display={'flex'}
        p={2}
        maxW={'container.md'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Flex align={'center'} mr={5}>
          <Heading as={'h1'} size={'lg'} letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/skills" path={path}>
            Skills
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/votrai123/dotfiles-privated"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box alignSelf={'flex-end'} verticalAlign="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                {...props}
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem {...props} as={Link}>
                    About
                  </MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem {...props} as={Link}>
                    Works
                  </MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem {...props} as={Link}>
                    Projects
                  </MenuItem>
                </NextLink>
                <NextLink href="/skills" passHref>
                  <MenuItem {...props} as={Link}>
                    Skills
                  </MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/craftzdog/craftzdog-homepage"
                  {...props}
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
