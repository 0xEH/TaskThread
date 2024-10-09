import { localeLang } from '@/app/state/atom';
import { Menu } from '@headlessui/react';
import { SA, US } from 'country-flag-icons/react/3x2';
import { useRecoilState } from 'recoil';

export const LanguageSwitcher = () => {
  const [locale, setLocale] = useRecoilState(localeLang);

  const switchLanguage = (newLocale: string) => {
    setLocale(newLocale);
  };

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-1 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
        {locale === 'en' ? (
          <US className='w-5 h-5 mr-2' />
        ) : (
          <SA className='w-5 h-5 ml-2' />
        )}
        {locale === 'en' ? 'English' : 'عربي'}
      </Menu.Button>
      <Menu.Items className='origin-top-right absolute right-0 mt-1 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
        <div className='py-2'>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => switchLanguage('en')}
                disabled={locale === 'en'}
                className={`${
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                } group flex items-center px-4 py-2 text-sm w-full`}
              >
                <US
                  className={`${locale === 'ar' ? 'ml-2' : 'mr-2'} w-5 h-5`}
                />
                English
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => switchLanguage('ar')}
                disabled={locale === 'ar'}
                className={`${
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                } group flex items-center px-4 py-2 text-sm w-full`}
              >
                <SA
                  className={`${locale === 'ar' ? 'ml-2' : 'mr-2'} w-5 h-5`}
                />
                عربي
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};
