import dynamic from 'next/dynamic';

const FormDevtools: React.ElementType = dynamic(
  () => import('@hookform/devtools').then((module) => module.DevTool),
  {
    ssr: false,
  }
);

export default FormDevtools;
