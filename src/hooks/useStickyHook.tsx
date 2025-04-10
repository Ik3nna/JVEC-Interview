import { useEffect, useRef, useState } from 'react';

interface UseStickyProps {
  stickyRef: React.RefObject<HTMLElement | null>;
  sticky: boolean;
}

const useSticky = (): UseStickyProps => {
  const stickyRef = useRef<HTMLElement | null>(null);
  const [sticky, setSticky] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    if (!stickyRef.current) {
      return;
    }
    setOffset(stickyRef.current.offsetTop);
  }, [stickyRef, setOffset]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) {
        return;
      }

      setSticky(window.scrollY > offset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setSticky, stickyRef, offset]);

  return { stickyRef, sticky };
};

export default useSticky;