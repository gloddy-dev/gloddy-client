import { useDidMount } from './common/useDidMount';
import { useEffect, useRef, useState } from 'react';

interface UseShowMoreProps {
  maxLines: number;
}

export function useShowMore({ maxLines }: UseShowMoreProps) {
  const [showFullText, setShowFullText] = useState(true);
  const [shouldShowButton, setShouldShowButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleShowFullText = () => {
    setShowFullText((prev) => !prev);
  };

  useDidMount(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.clientHeight;
      const lineHeight = parseInt(getComputedStyle(contentRef.current).lineHeight, 10);
      const numVisibleLines = contentHeight / lineHeight;

      setShouldShowButton(numVisibleLines > maxLines);
      setShowFullText(false);
    }
  });

  useEffect(() => {
    if (contentRef.current) {
      const lineHeight = parseInt(getComputedStyle(contentRef.current).lineHeight, 10);
      contentRef.current.style.maxHeight = showFullText ? 'none' : `${lineHeight * maxLines}px`;
      contentRef.current.style.overflow = showFullText ? 'visible' : 'hidden';
    }
  }, [showFullText, maxLines]);

  return {
    /**
     * content Box에 ref를 넘겨줍니다.
     */
    contentRef,
    /**
     * 텍스트 전체를 보여줄지 여부를 결정합니다.
     */
    showFullText,
    /**
     * 더보기 버튼을 보여줄지 여부를 결정합니다.
     */
    shouldShowButton,
    /**
     * 더보기 버튼을 클릭했을 때 실행되는 함수입니다.
     */
    toggleShowFullText,
  };
}
