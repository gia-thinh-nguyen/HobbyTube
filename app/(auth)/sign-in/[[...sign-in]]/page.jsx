
import { SignIn } from "@clerk/nextjs";
import Image from 'next/image';
export default function Page() {
  return (
<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="/assets/playground.png"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <a className="block text-white" href="#">
          <span className="sr-only">Home</span>
          
        </a>

        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl flex">
          <p className="flex justify-end items-end">Welcome to HobbyTube</p>
          
        </h2>

        <p class="mt-4 leading-relaxed text-white/90">
        Help kids discover their INTEREST and give them a HEADSTART
        </p>
        <p className="leading-relaxed text-white/90">"It's not what you do, but HOW well you do it"-Caio Terra</p>
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8  lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative block lg:hidden pb-1 mt-[-100px]">
        

          <div className="mt-0 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl flex">
          <p className="flex justify-end items-end">Welcome to</p> <Image src='/assets/logo.png' alt=''width={180} height={10} className='relative bottom-[-74px] mr-[5px]'/> 
          
          </div>

          <p className="mt-4 leading-relaxed text-gray-500">
            A platform dedicated to inspire and entertain you with the best videos related to your favorite hobbies.
          </p>
        </div>
        <div className="flex justify-center items-center">
        <SignIn path="/sign-in" />
        </div>
      </div>
    </main>
  </div>
</section>
  )
}
