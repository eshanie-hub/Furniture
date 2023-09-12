import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='p-4 bg-[#D98585] '>
      <div className="absolute right-0 space-x-16 pr-4">
      <Link to="/Shop">Shop </Link>
      <Link to="/Cart">
        Cart 
      </Link>
      </div>
      <div>Furniture</div>
    </div>
  )
}

export default Navbar