type SetImageFunction = (imageData: string) => void;
const saveImage = (setImage: SetImageFunction, imgRef: React.RefObject<HTMLInputElement>) => {
  if (imgRef.current && imgRef.current.files && imgRef.current.files.length > 0) {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setImage(reader.result);
      } else {
        console.error('FileReader result is not a string');
      }
    };
  } else {
    console.error('No file selected');
  }
};

export default saveImage;
