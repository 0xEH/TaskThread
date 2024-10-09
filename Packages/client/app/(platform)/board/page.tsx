'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import KanbanBoard from '@/components/kanban';
import NewTodoModal from '@/components/create-todo-modal';

export default function Board() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/sign-in');
    }
  }, [router]);

  return (
    <div className='min-h-screen p-4 pt-6'>
      <div className='pr-6 pl-6 flex items-center justify-start gap-x-2'>
        <NewTodoModal />
      </div>
      <KanbanBoard />
    </div>
  );
}
