'use client';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useLocalization } from '@/app/lib/LocalizationContextProvider';

import Link from 'next/link';

const MarketingPage = () => {
  const { dictionaries } = useLocalization();

  if (!dictionaries) {
    return (
      <div className='flex items-center justify-center h-screen text-xl text-gray-700'>
        Loading...
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center flex-col'>
        <h1 className='text-4xl font-bold inline-flex bg-gradient-to-r from-neutral-100 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400'>
          {dictionaries.home.description}
        </h1>
      </div>
      <div className='text-sm md:text-xl text-neutral-400 mt-2 max-w-xs md:max-wd-2xl text-center mx-auto'></div>
      <Button
        className='mt-6 font-semibold bg-white text-black hover:bg-zinc-300 hover:text-black'
        size={'lg'}
        asChild
      >
        <Link href={'/sign-up'}>{dictionaries.home.title}</Link>
        {/* <Link href={'/sign-up'}>Get TaskThread</Link> */}
      </Button>
      <div className='text-sm md:text-xl text-neutral-400 mt-5 max-w-xs md:max-wd-2xl text-center mx-auto'></div>
      <LanguageSwitcher />
    </div>
  );
};

export default MarketingPage;
