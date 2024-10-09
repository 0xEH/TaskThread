'use client';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';

import { LocalizationProvider } from '@/app/lib/LocalizationContextProvider';
import useUpdateLang from '@/app/hooks/useUpdateLang';

import { localeLang } from '@/app/state/atom';
import { getDictionaries } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const currentLocale = useRecoilValue(localeLang);
  const [dictionaries, setDictionaries] = useState<unknown>(null);

  useUpdateLang();

  useEffect(() => {
    async function fetchDictionaries() {
      const _dictionaries = await getDictionaries(currentLocale);
      setDictionaries(_dictionaries);
    }
    fetchDictionaries();
  }, [currentLocale]);

  if (!dictionaries) {
    return null;
  }

  return (
    <LocalizationProvider dictionaries={dictionaries} locale={currentLocale}>
      {children}
    </LocalizationProvider>
  );
}
