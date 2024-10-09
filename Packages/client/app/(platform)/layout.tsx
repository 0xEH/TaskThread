import { Navbar } from '../(marketing)/_components/navbar';

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='min-h-screen max-w-screen-3xl bg-zinc-950'>
        <Navbar />
        <main className=' pt-12 pb-20'>{children}</main>
      </div>
    </>
  );
};

export default PlatformLayout;
