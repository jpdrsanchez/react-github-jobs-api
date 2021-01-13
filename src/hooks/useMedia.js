import { useEffect, useState } from 'react';

const useMedia = () => {
  const [mobile, setMobile] = useState(null);
  const [tablet, setTablet] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 43.6875em)').matches) {
        setMobile(true);
        setTablet(false);
      } else if (
        window.matchMedia('(min-width: 43.75em) and (max-width: 62.4375em)')
          .matches
      ) {
        setMobile(false);
        setTablet(true);
      } else {
        setMobile(false);
        setTablet(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
  }, []);

  return { mobile, tablet };
};

export default useMedia;
