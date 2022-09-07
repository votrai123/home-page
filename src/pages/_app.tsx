import type { AppProps } from 'next/app';
import Chakra from '../components/chakra';
import Layout from '../components/Layout/main';
import { AnimatePresence } from 'framer-motion';
import Fonts from '../components/fonts';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}
// The handler to smoothly scroll the element into view
const handExitComplete = (): void => {
  if (typeof window !== 'undefined') {
    // Get the hash from the url
    const hashId = window.location.hash;

    if (hashId) {
      // Use the hash to find the first element with that id
      setTimeout(() => {
        const element = document.querySelector(hashId);
        if (element) {
          // Smooth scroll to that elment
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 50);
    }
  }
};
function MyApp({ Component, pageProps, router }: AppProps) {
  // preloader
  // useEffect(() => {
  //   const preloader = document.querySelector('.site - preloader');

  //   if (!preloader) {
  //     return;
  //   }

  //   setTimeout(() => {
  //     const onTransitionEnd = (event: Event) => {
  //       if (
  //         event instanceof TransitionEvent &&
  //         event.propertyName === 'opacity' &&
  //         preloader.parentNode
  //       ) {
  //         preloader.parentNode.removeChild(preloader);
  //       }
  //     };

  //     preloader.addEventListener('transitionend', onTransitionEnd);

  //     preloader.classList.add('site - preloader__fade');
  //     if (getComputedStyle(preloader).opacity === '0' && preloader.parentNode) {
  //       preloader.parentNode.removeChild(preloader);
  //     }
  //   }, 500);
  // }, []);

  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
            handExitComplete();
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}

export default MyApp;
