import React from 'react'
import Illustration from "../assets/shopping-bag.svg"
import { LogoAppLight } from "../icons";
import { Button } from '@/components/button';
import { Input } from '@/components/input';

export default function PageLogin() {
  return <Scaffold illustration={<img src={Illustration} />}>
    <Contents />
  </Scaffold>
}

function Scaffold({ children, illustration }: { children?: React.ReactNode, illustration?: React.ReactNode }) {
  return <main className='grid md:grid-cols-2 h-screen w-screen overflow-hidden'>
    <div className="hidden md:flex bg-blue-700">
      {illustration}
    </div>
    <main className="flex min-h-screen p-6 md:p-10 lg:p-14 flex-col gap-6 bg-white dark:bg-black overflow-y-scroll">
      {children}
    </main>
  </main>
}

function Contents() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  return <>
    <section className="flex gap-2 items-center">
      <LogoAppLight className="fill-blue-700 w-10 h-10" />
      <h1 className='text-3xl'>OneGate</h1>
    </section>

    <section className="flex-grow" />

    <section className="flex flex-col">
      <h2>Sign In</h2>
      <p>Continue To Your Secured Home</p>
    </section>

    <section className="flex flex-col gap-2">
      <label htmlFor="email">Email<span className="text-red-600">*</span></label>
      <Input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        name="email"
        placeholder="Enter your Email" />
    </section>

    <section className="flex flex-col gap-2">
      <label htmlFor="password">Password<span className="text-red-600">*</span></label>
      <Input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        name="password"
        placeholder="Enter your Password" />
    </section>

    <Button
      className="bg-blue-700 hover:bg-blue-800 shadow-lg shadow-blue-800/40 hover:shadow-xl transition-shadow hover:shadow-blue-800/30"
      disabled={email === "" || password === ""}>
      Continue
    </Button>

    <hr />

    <p className="text-sm">New User?</p>
    <Button variant="secondary">Create New Account</Button>

    <div className="flex-grow" />

    <p className='text-center text-slate-400'>By Continuing, You Agree to <a href="/tnc">Terms and Conditions</a> and <a href="">Privacy Policy</a></p>
  </>
}
