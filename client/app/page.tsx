
import React from 'react';
import Overall from './overall';
import SubjectWise from './subjectWise';

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
