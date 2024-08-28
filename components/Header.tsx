
import Link from 'next/link'
import { Button } from './ui/button'

// MARK: Components
import Nav from './Nav'
const Header = () => {
  return (
    <header className='py-8 xl: py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href= "/">
        <h1 className='text-4xl font-semibold'>
          Mariak <span className='text-accent'>🎓</span> Achuoth
        </h1>
        </Link>
        {/* {desktop nav} */}
        <div className='hidden xl:flex items-center gap-8'>
        <Nav/>
        <Link href= "/contact">
        <Button>Hire Me</Button>
        </Link>
        </div>
        

      </div>
    </header>
  )
}

export default Header