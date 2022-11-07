import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className='bg-neutral-700 flex justify-between py-4 px-5'>
      <Link className='text-white font-bold' to="/">
      <h1 >React MYSQL</h1>
      </Link>
        <ul className='flex gap-x-2'>
            <li>
                <Link className='bg-slate-200 px-2 py-1 rounded-md' to="/" >Home</Link>
            </li>
            <li>
                <Link className='bg-slate-200 px-2 py-1 rounded-md' to="/new" >Create Task</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar