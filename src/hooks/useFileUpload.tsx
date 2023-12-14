import { usePostFiles } from '@/apis/common';
import { useCallback, useState } from 'react';
import { ControllerRenderProps, Field } from 'react-hook-form';

interface UseImageUploadProps {
  /**
   * 파일 업로드가 완료되었을 때 실행할 함수를 지정합니다.
   */
  handleFileChange: (fileUrlList: string[]) => void;
  previewImageField: ControllerRenderProps<any, any>;
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
  previewImageField?: UseImageUploadProps['previewImageField'],
  options?: UseImageUploadProps['options']
) {
  const { mutate, isLoading } = usePostFiles();
  const [previewImageList, setPreviewImageList] = useState<string[]>([]);

  const handleFileUploadClick = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = options?.accept || 'image/*';
    input.multiple = options?.multiple || false;
    input.onchange = (event) => {
      const { files } = event.target as HTMLInputElement;
      if (!files) return;
      const reader = new FileReader();
      reader.onload = () => {
        previewImageField &&
          previewImageField.onChange((prev: any) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(files[0]);

      mutate(
        { fileList: Array.from(files) },
        {
          onSuccess: (data) => {
            handleFileChange(data.fileUrlList);
          },
        }
      );
    };
    input.click();
  }, [handleFileChange, mutate, options?.accept, options?.multiple]);

  return {
    handleFileUploadClick,
    isLoading,
  };
}
