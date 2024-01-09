 ' use client '
import React from 'react';
import Overall from './ui/overall';
import SubjectWise from './ui/subjectWise';

export default function Home() {
  return (
    <main className='min-w-screen min-h-screen text-white flex justify-center items-center'>
      <section className='flex w-[800px] bg-gray-600'>
        <div className='flex-1'>
          <Overall/>
        </div>

        <div className='flex-1'>
          <SubjectWise/>
        </div>
      </section>
    </main>
  )
}
