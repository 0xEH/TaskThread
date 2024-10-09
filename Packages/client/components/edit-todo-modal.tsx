'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { Edit2 } from 'lucide-react';
import EditTodoForm from './form/edit-form';
import { useLocalization } from '@/app/lib/LocalizationContextProvider';
import { localeLang } from '@/app/state/atom';
import { useRecoilValue } from 'recoil';

const EditTodoModal = ({ id }: { id: string }) => {
  const { dictionaries } = useLocalization();
  const currentLocale = useRecoilValue(localeLang);

  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Edit2 className='text-neutral-500 h-4 w-4 hover:cursor-pointer' />
      </DialogTrigger>

      <DialogContent className='bg-zinc-950 text-white'>
        <DialogHeader
          className={`${
            currentLocale === 'ar' ? 'sm:text-right' : 'sm:text-left'
          }`}
        >
          <DialogTitle>{dictionaries.task.EditDetailsBelow}</DialogTitle>
        </DialogHeader>
        <EditTodoForm setOpen={setOpen} id={id} />
      </DialogContent>
    </Dialog>
  );
};

export default EditTodoModal;
