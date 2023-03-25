import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'uikit/dist/css/uikit.min.css';

import { useCallback, useEffect } from 'react';
import Icons from 'uikit/dist/js/uikit-icons';

export default function App({ Component, pageProps }: AppProps) {
  const importUIkit = useCallback(async () => {
    const UIkit = (await import('uikit')).default;
    UIkit.use(Icons);
  }, []);

  useEffect(() => {
    importUIkit();
  },[]);

/*useEffect(() => {
    UIkit.use(Icons)}, []
  );*/

  return <Component {...pageProps} />
}
