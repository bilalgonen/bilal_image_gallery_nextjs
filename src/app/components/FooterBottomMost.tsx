import Link from 'next/link'
import Search from './Search'

export default function FooterBottomMost() {
  return (
    <footer className='bg-black sticky bottom-0 z-10'>
      <div className='items-center p-1 font-bold max-w-6xl mx-auto text-white'>
        deployed by Bilal Gonen
      </div>
    </footer>
  )
}
