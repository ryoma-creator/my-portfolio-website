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
            {/* text */}
            <div className='text-center xl:text-left'>
              <span className='text-xl'>Front End Developer</span>
              <h1 className='h1 mb-6'>
                Hello I'm <br /> <span className='text-accent'>Ryoma Taguchi</span>
              </h1>
              <p className='max-w-[500px] mb-9 text-white/80'>
                Aspiring full-stack developer with a legal background, passionate about crafting innovative web solutions.
                Eager to blend analytical thinking with creative coding in impactful projects.
              </p>
              {/* btn and socials */}
              <div>
                <Button
                  variant='outline'
                  size='lg'
                  className=''
                >
                  <span>Donwload CV</span>
                  <FiDownload className='text-xl'/>
                </Button>
              </div>
            </div>
            {/* photo */}
            <div>photo</div>
          </div>
        </div>
      </section>
    </>
  );
}