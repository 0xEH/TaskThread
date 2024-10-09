'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { NewTodo, newTodoSchema } from '@/app/schema/index';
import axios from 'axios';
import { toast } from 'sonner';
import { useRecoilState } from 'recoil';
import { newTodoState } from '@/app/state/atom';
import { useLocalization } from '@/app/lib/LocalizationContextProvider';
import { localeLang } from '@/app/state/atom';
import { useRecoilValue } from 'recoil';

type NewTodoFormProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const addTodo = async (todo: NewTodo) => {
  try {
    await axios.post(`${process.env.BASE_URL}/todos`, todo, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    toast.success(`Todo "${todo.title}" created.`);
  } catch (error) {
    console.error('Error adding todo:', error);
    toast.error('Failed to add todo. Please try again.');
  }
};

const CreateTodoForm = ({ setOpen }: NewTodoFormProps) => {
  const { dictionaries } = useLocalization();
  const currentLocale = useRecoilValue(localeLang);

  const form = useForm<NewTodo>({
    resolver: zodResolver(newTodoSchema),
    defaultValues: {
      title: '',
      description: '',
      status: 'todo',
      priority: 'low',
    },
  });

  const [newTodo, setNewTodo] = useRecoilState(newTodoState);

  const onSubmit = async (values: NewTodo) => {
    try {
      await addTodo(values);
      setNewTodo(values);
      setOpen(false);
      console.log(newTodo);
    } catch (error) {
      console.error('Error adding todo:', error);
      toast.error('Failed to add todo. Please try again.');
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='h-fit flex flex-col gap-3 p-2 text-white'
      >
        <div className='flex flex-col gap-1'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-semibold text-white'>
                  {dictionaries.task.title}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className='w-full border-gray-400 text-white'
                    placeholder={dictionaries.task.enterTodoTitle}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-semibold text-white'>
                  {dictionaries.task.description}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className='w-full border-gray-400'
                    placeholder={dictionaries.task.enterDescriptionHere}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <FormField
            control={form.control}
            name='status'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-semibold text-white'>
                  {dictionaries.task.status}
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl
                    dir={`${currentLocale === 'ar' ? 'rtl' : 'ltr'}`}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Select status' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='todo'>
                      {dictionaries.task.todo}
                    </SelectItem>
                    <SelectItem value='inProgress'>
                      {dictionaries.task.inProgress}
                    </SelectItem>
                    <SelectItem value='done'>
                      {dictionaries.task.done}
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <FormField
            control={form.control}
            name='priority'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-semibold text-white'>
                  {dictionaries.task.priority}
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl
                    dir={`${currentLocale === 'ar' ? 'rtl' : 'ltr'}`}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Select priority' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='high'>
                      {dictionaries.task.high}
                    </SelectItem>
                    <SelectItem value='medium'>
                      {dictionaries.task.medium}
                    </SelectItem>
                    <SelectItem value='low'>{dictionaries.task.low}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='w-full flex justify-end items-center mt-4'>
          <Button type='submit'>{dictionaries.task.submit}</Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateTodoForm;
