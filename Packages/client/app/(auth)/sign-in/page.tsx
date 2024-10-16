'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useLocalization } from '@/app/lib/LocalizationContextProvider';

const SignIn = () => {
  const { dictionaries } = useLocalization();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://taskthread-backend.vercel.app/api/auth/signin`,
        {
          email,
          password,
        }
      );
      localStorage.setItem('token', response.data.token);
      router.push('/board');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className='min-h-screen bg-zinc-950'>
      <div className='grid grid-cols-2'>
        <div className='col-span-1 h-screen justify-center items-center hidden md:flex'>
          <div className='flex items-center justify-center'>
            <h1 className='text-4xl text-white font-bold'>TaskThread</h1>
          </div>
        </div>

        <div className='col-span-2 md:col-span-1 h-screen flex items-center justify-center bg-neutral-200'>
          <Card className='min-w-[400px]'>
            <CardHeader>
              <CardTitle className='flex items-center justify-center'>
                {dictionaries.signIn.title}
              </CardTitle>
              <CardDescription className='flex items-center justify-center'>
                {dictionaries.signIn.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <Label className='text-black font-semibold'>
                    {dictionaries.signUp.email}
                  </Label>
                  <Input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={dictionaries.signUp.email}
                  />
                </div>
                <div>
                  <Label className='text-black font-semibold'>
                    {dictionaries.signUp.password}
                  </Label>
                  <Input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={dictionaries.signUp.password}
                  />
                </div>
                <Button type='submit' className='w-full mt-4'>
                  {dictionaries.signIn.submit}
                </Button>
              </form>
            </CardContent>
            <CardFooter className='flex items-center justify-center'>
              <CardDescription className=''>
                {dictionaries.signIn.doNotHaveAccount}
                <Link href={'/sign-up'}>
                  <span className='text-blue-500'>
                    {' '}
                    {dictionaries.signIn.signUp}
                  </span>
                </Link>
              </CardDescription>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
