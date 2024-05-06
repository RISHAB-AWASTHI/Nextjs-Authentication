'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react'; // Import useState hook
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import createUserWithEmailAndPassword from Firebase auth
import { auth } from '../firebase'; // Import auth object from firebase.tsx
import Image from 'next/image';

const Page = () => {
    const router = useRouter(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const home = () => {
      router.push('/');
    }

    const handleSignup = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            router.push('/dashboard');
            // Redirect or do something else after successful signup
        } catch (error) {
            alert("Enter valid email and password");
            console.error(error);
        }
    };

    return (
      <div>
        <main>
          <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
  
                <div className="max-w-md mx-auto">
                  <div>
                    <h1 className="text-2xl font-semibold">Signup</h1>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="relative">
                        <input 
                            autoComplete="off" 
                            id="email" 
                            name="email" 
                            type="text" 
                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                            placeholder="Email address"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} // Set email state on change
                        />
                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                      </div>
                      <div className="relative">
                        <input 
                            autoComplete="off" 
                            id="password" 
                            name="password" 
                            type="password" 
                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                            placeholder="Password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} // Set password state on change
                        />
                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                      </div>
                      <div className="relative">
                        <button onClick={handleSignup} className="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
                <a onClick={home} href="#" className="text-blue-500">Back</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default Page;
