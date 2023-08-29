import { useEffect, useRef, useState } from 'react';

interface UseShowMoreProps {
  maxLines: number;
}

export function useShowMore({ maxLines }: UseShowMoreProps) {
  const [showFullText, setShowFullText] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [shouldShowButton, setShouldShowButton] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.clientHeight;
      const lineHeight = parseInt(getComputedStyle(contentRef.current).lineHeight, 10);
      const numVisibleLines = contentHeight / lineHeight;

      setShouldShowButton(numVisibleLines > maxLines);
    }
  }, [maxLines]);

  useEffect(() => {
    if (contentRef.current) {
      const lineHeight = parseInt(getComputedStyle(contentRef.current).lineHeight, 10);
      contentRef.current.style.maxHeight = showFullText ? 'none' : `${lineHeight * maxLines}px`;
      contentRef.current.style.overflow = showFullText ? 'visible' : 'hidden';
    }
  }, [showFullText, maxLines]);

  return {
    contentRef,
    showFullText,
    shouldShowButton,
    setShowFullText,
  };
}
