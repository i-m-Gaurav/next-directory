import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { auth, signIn, signOut } from '../app/auth'

const Navbar = async () => {

    const session = await auth();

    return (
        <div className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className = 'flex justify-between items-center'>
                {/* This is the logo */}
                <Link href="/" className='text-black'>
                 <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>

                <div className='flex items-center gap-5'>

                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            {/* This is the latest react 19 form , that support server action */}
                            {/* This is still new to me, even i don't understand it fully.*/}

                            <form action={async () => {
                                'use server'
                                await signOut({ redirectTo: '/' });
                            }}>
                                <button type='submit'>
                                    <span>Logout</span>
                                </button>

                            </form>



                            <Link href={`/user/${session?.user?.id}`}>
                            {/* later put the '/user/${session?.id}' */}

                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <>
                            <form action={async () => {
                                "use server"
                                await signIn('github');
                            }}>
                                <button type='submit'>
                                    <span>Login</span>
                                </button>

                            </form>
                        </>
                    )}

                </div>


            </nav>

        </div>
    )
}

export default Navbar