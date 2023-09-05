'use client';

import WriteModal from './WriteModal';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Flex } from '@/components/Layout';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function WriteHeader() {
  const router = useRouter();
  const { open, exit } = useModal();

  return (
    <Header className="px-4">
      <Header.Left>
        <Flex align="center">
          <IconButton
            size="large"
            onClick={() =>
              open(() => (
                <WriteModal
                  type="cancel"
                  onCancelClick={exit}
                  onOkClick={() => {
                    exit();
                    router.back();
                  }}
                />
              ))
            }
          >
            <Image src="/icons/24/arrow_back.svg" alt="arrow_back" width={24} height={24} />
          </IconButton>
          <p className="text-subtitle-1">게시글 작성</p>
        </Flex>
      </Header.Left>
    </Header>
  );
}
