import { BiLoaderAlt } from 'react-icons/bi';

export default function FullScreenLoader() {
  return (
    <div className="h-screen z-50 w-full flex justify-center items-center">
      <BiLoaderAlt className="animate-spin w-14 h-14" />
    </div>
  );
}
