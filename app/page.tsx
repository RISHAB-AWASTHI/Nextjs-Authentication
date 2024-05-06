// Import necessary modules from Next.js
'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { apps} from './firebase';


import styles from './main.module.css';


const auth = getAuth(apps);

const googleAuthProvider = new GoogleAuthProvider();

export default function Home() {

  const router = useRouter(); // Get router instance
  const signInWithEmail = () => {
    router.push('/signup');
  }
  const signInWithGoogle = async () => {

    try {
     const result = await signInWithPopup(auth, googleAuthProvider); // Sign in with Google using Firebase
      if (result.user) {
        router.push('/dashboard');
      }// Redirect to dashboard or any other route after successful sign in
    } catch (error) {
      console.error('Google Sign In Error:', error);
    }
  };

  return (
    <main className="p-4">
      <div className={styles['image-container']}>
        <Image src="/logo.jpg" alt="logo" width={551} height={100} />
      </div>
      <h1 className="text-4xl font-bold text-center mt-4">
        LO<span className="bg-blue-500 text-white rounded px-2">GO</span>
      </h1>
      <p className="text-1xl font text-center mt-8">
        Journey to a trillion miles starts from here!!
      </p>
      <div className={`${styles['signup-container']}  mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-2`}>
        <span className="text-lg font-semibold">Sign Up</span>
        <p className="text-sm text-gray-600 mt-2">Choose a signup method</p>
        <div className="flex flex-col gap-2 mt-4">
          
          <button
            onClick={signInWithGoogle} 
            className={`${styles.button} hover:bg-blue-700 text-white font-bold py-4 rounded`}
          >
            Sign up with Google
          </button>
          <button 
          onClick={signInWithEmail}className={`${styles.button} hover:bg-green-700 text-white font-bold py-4 rounded`}>
            Sign up with Email
          </button>
        </div>
        <p className="text-gray-600 mt-4">
          Already a user? <a onClick={signInWithGoogle} href="#" className="text-blue-500">Login</a>
        </p>
        
      </div>
    </main>
  );
}
