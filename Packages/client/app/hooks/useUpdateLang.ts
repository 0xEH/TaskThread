import { localeLang } from '@/app/state/atom';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

const useUpdateHtmlLang = () => {
  const currentLocale = useRecoilValue(localeLang);

  useEffect(() => {
    document.documentElement.lang = currentLocale;
    document.documentElement.dir = currentLocale === 'ar' ? 'rtl' : 'ltr';
  }, [currentLocale]);
};

export default useUpdateHtmlLang;
