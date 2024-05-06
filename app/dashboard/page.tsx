'use client';
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation'; // Fixed import path
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Image from 'next/image';
import styles from './page.module.css';

const Dashboard = () => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 30; // Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 30; // Adjust scroll distance as needed
    }
  };

  return (
    <div>
      <nav className="flex items-center justify-between bg-gray-900 text-white p-4">
        <div className="flex items-center">
          <span className={`${styles['lo']} text-xl font-bold`}>LO <span className={`${styles['lo']} bg-blue-500 text-white rounded px-1`}>GO</span></span>
        </div>
        <button onClick={handleSignOut} className=" color: text-blue-500 hover:text-white">Sign Out</button>
      </nav>

      <div className="relative py-8">
        <div className="absolute right-0 top-0 bottom-0 bg-gray-900 text-white p-4 flex items-center space-x-4">
          <button onClick={scrollLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={scrollRight}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="overflow-x-auto px-1" ref={scrollRef}>
          {/* Content to be scrolled */}
          <div className="flex gap-4">
            <div className="w-64 flex-none border border-gray-300 rounded">
              <div className="flex items-center justify-center mb-4">
                <Image src="/rocket.jpg" alt="Rocket" width={200} height={200} />
              </div>
              <h2 className="font-bold">Introduction to Rocket Science</h2>
              <p className="text-gray-700">Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and</p>
            </div>
            <div className="w-64 flex-none border border-gray-300 rounded">
              <div className="flex items-center justify-center mb-4">
                <Image src="/astro.jpeg" alt="Astro Physics" width={150} height={150} />
              </div>
              <h2 className="font-bold">Astro Physics</h2>
              <p className="text-gray-700">Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and</p>
            </div>
            {/* Add more topics */}
            <div className="w-64 flex-none border border-gray-300 rounded">
              <div className="flex items-center justify-center mb-4">
                <Image src="/ds.png" alt="" width={150} height={150} />
              </div>
              <h2 className="font-bold">Data Structure</h2>
              <p className="text-gray-700">Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and</p>
            </div>

            <div className="w-64 flex-none border border-gray-300 rounded">
              <div className="flex items-center justify-center mb-4">
                <Image src="/engineer.avif" alt="Astro Physics" width={150} height={150} />
              </div>
              <h2 className="font-bold">Engineer</h2>
              <p className="text-gray-700">Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and</p>
            </div>

            <div className="w-64 flex-none border border-gray-300 rounded">
              <div className="flex items-center justify-center mb-4">
                <Image src="/datas.webp" alt="Astro Physics" width={150} height={150} />
              </div>
              <h2 className="font-bold">Data Science</h2>
              <p className="text-gray-700">Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and</p>
            </div>

            <div className="w-64 flex-none border border-gray-300 rounded">
              <div className="flex items-center justify-center mb-4">
                <Image src="/ml.jpeg" alt="Astro Physics" width={150} height={150} />
              </div>
              <h2 className="font-bold">Machine Learning</h2>
              <p className="text-gray-700">Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and</p>
            </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;