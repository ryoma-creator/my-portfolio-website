import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

export default function HomePage() {
  return (
    <>
      <section className='h-full'>
        {/* no need mx-auto since you use container */}
        <div className='container h-full'>
          <div className='flex flex-col xl:flex-row items-center justify-between
          xl:pt-8 xl:pb-24'>
            <div>text</div>
            <div>photo</div>
          </div>
        </div>
      </section>
    </>
  );
}