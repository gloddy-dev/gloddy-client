import { useCallback } from 'react';

interface UseImageUploadProps {
  /**
   * 파일 업로드가 완료되었을 때 실행할 함수를 지정합니다.
   */
  handleFileChange: (files: File[]) => void;
  options?: {
    /**
     * 업로드할 파일의 타입을 지정합니다. (default: image/*)
     */
    accept?: string;
    /**
     * 다중 업로드를 허용할지 여부를 지정합니다. (default: false)
     */
    multiple?: boolean;
  };
}

export function useFileUpload(
  handleFileChange: UseImageUploadProps['handleFileChange'],
  options?: UseImageUploadProps['options']
) {
  const handleFileUpload = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = options?.accept || 'image/*';
    input.multiple = options?.multiple || false;
    input.click();
    input.onchange = (event) => {
      const { files } = event.target as HTMLInputElement;
      if (!files) return;

      handleFileChange(Array.from(files));
    };
  }, []);

  return {
    handleFileUpload,
  };
}
