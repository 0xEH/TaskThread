'use client';

import { Logo } from '@/components/logo';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useLocalization } from '@/app/lib/LocalizationContextProvider';
import { LanguageSwitcher } from '@/components/language-switcher';

export const Navbar = () => {
  const { dictionaries } = useLocalization();
  const router = useRouter();

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`https://taskthread-backend.vercel.app/api/auth/logout`);
      localStorage.removeItem('token');
      router.push('/sign-in');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className='fixed top-0 w-full h-14 px-4  bg-zinc-950 shadow-sm flex items-center'>
      {/* <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'> */}
      <div className='pr-6 pl-6 flex justify-between gap-x-2 flex items-center w-full'>
        <Logo />

        <div className='space-x-4  md:w-auto flex items-center justify-between w-full'>
          <Button
            size={'sm'}
            variant={'outline'}
            className='ml-2 bg-red-700 border-2 border-zinc-200 text-white hover:bg-red-900 hover:text-white'
            onClick={handleLogout}
          >
            {dictionaries.header.logout}
          </Button>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};
