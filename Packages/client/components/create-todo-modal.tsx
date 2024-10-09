'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import CreateTodoForm from '@/components/form/create-form';
import { useState } from 'react';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { useLocalization } from '@/app/lib/LocalizationContextProvider';
import { localeLang } from '@/app/state/atom';
import { useRecoilValue } from 'recoil';

const NewTodoModal = () => {
  const { dictionaries } = useLocalization();
  const currentLocale = useRecoilValue(localeLang);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={'outline'}
          className=' border-2 border-zinc-200 text-white hover:bg-zinc-900 hover:text-white '
        >
          {' '}
          <Plus className='h-4 w-4 text-white' /> {dictionaries.task.addTask}
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`${
          currentLocale === 'ar' ? 'sm:text-right' : 'sm:text-left'
        } bg-zinc-950 text-white`}
      >
        <DialogHeader
          className={`${
            currentLocale === 'ar' ? 'sm:text-right' : 'sm:text-left'
          }`}
        >
          <DialogTitle>{dictionaries.task.enterTheTodoBelow}</DialogTitle>
        </DialogHeader>
        <CreateTodoForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default NewTodoModal;
