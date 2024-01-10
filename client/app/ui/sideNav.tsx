' use client ';

import React from 'react';
import { arrayOfSideNavElements } from '../lib/data'

export default function SideNav() {
    return (
        <main className='text-navText flex gap-2 flex-col h-screen'>
            <div className='h-[132px] bg-navGreen flex items-end p-2 text-3xl font-bold rounded-br-xl'>
                Optimize-me
            </div>
            <ul className='flex gap-2 flex-col'>
                {
                    arrayOfSideNavElements.map((element) => {
                        return (
                            <li key={element.name}
                                className='bg-navGreen py-6 text-xl font-semibold rounded-r-xl'
                            >
                                    {element.name}
                            </li>
                        )
                    })
                }               
            </ul>
            
            <div className='bg-navGreen flex-grow'>
            </div>
        </main>
    )
}