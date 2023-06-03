import Image from 'next/image'
import Hero from 'public/hero.png'
import Button from '@/components/button/button'

export default function Home() {
  return (
    <div className='flex items-center gap-28'>
      <div className='flex flex-1 flex-col gap-12'>
        <h1 className='pb-1.5 text-7xl font-bold bg-gradient-to-b from-emerald-900 to-zinc-400 bg-clip-text text-transparent'>Better design for your digital products.</h1>
        <p className='text-2xl font-light'>Turning your Idea into Reality. We bring together the teams from the global tech industry.</p>
        <Button url='/portfolio' text='See Our Works'/>
      </div>
      <div className='flex-1'>
        <Image className='w-full h-125 object-contain animate-hover' src={Hero} alt='Hero Img' />
      </div>
    </div>
  )
}
