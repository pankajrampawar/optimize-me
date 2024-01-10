'use client';

import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { arrayOfSideNavElements } from '../lib/data'

export default function SideNav() {

    const pathname = usePathname();

    return (
        <main className='text-navText flex gap-2 flex-col h-screen'>
            <div className='h-[132px] bg-navGreen flex items-end p-2 text-3xl font-bold rounded-br-xl'>
                Optimize-me
            </div>
            <ul className='flex gap-2 flex-col'>
                {
                    arrayOfSideNavElements.map((element) => {
                        return (
                            <Link href={`/${element.href}`}>
                                <li key={element.name}
                                className={clsx('bg-navGreen py-6 text-xl font-semibold rounded-r-xl px-2',
                                    {
                                        'underline underline-offset-4' : pathname === element.href
                                    }
                                )}
                                >
                                    {element.name}
                                </li>
                            </Link>
                        )
                    })
                }               
            </ul>
            
            <div className='bg-navGreen flex-grow'>
            </div>
        </main>
    )
}