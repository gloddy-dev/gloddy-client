import { ErrorBoundary } from 'react-error-boundary';

import CommunityHeader from './components/CommunityHeader';
import ContentSection from './components/ContentSection';
import CreateArticleButton from './components/CreateArticleButton';

import { ErrorFallback } from '@/components/ErrorBoundary';
import { Spacing } from '@/components/Spacing';

interface CommunityPageProps {
  params: {
    lng: string;
  };
}

export default function CommunityPage({ params: { lng } }: CommunityPageProps) {
  return (
    <>
      <CommunityHeader lng={lng} />
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <ContentSection />
      </ErrorBoundary>
      <CreateArticleButton />
      <Spacing size={60} />
    </>
  );
}
