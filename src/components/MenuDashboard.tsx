import {
  Cards,
  Gauge,
  List,
  Megaphone,
  SignOut,
  UserCirclePlus,
} from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'
import DarkModeSwitch from '@components/DarkModeSwitch'
import { AuthContext } from '@contexts/AuthContext'
import { useCallback, useContext, useState } from 'react'
export function MenuDashboard() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState)
  }, [])

  const { user, signOut } = useContext(AuthContext)

  function handleSignOut() {
    signOut()
  }

  const location = useLocation()

  return (
    <div>
      <div className="bg-neutral-800 text-gray-100 flex justify-between md:hidden">
        <a href="#" className="block p-4 text-white font-bold">
          {user?.name}
          {/* {company?.logo} */}
        </a>
        <button
          aria-label="Toggle Menu"
          role="button"
          className="p-4 focus:outline-none focus:bg-gray-700"
          onClick={toggleIsOpen}
        >
          <List size={20} />
        </button>
      </div>
      <aside
        className={`fixed z-50 top-0 left-0 bg-neutral-800  text-white w-max h-screen space-y-6 py-5 px-2 md:flex md:flex-col md:min-h-screen transform transition-transform duration-300 ease-in-out 
    ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="px-2 transition duration-200">
          <DarkModeSwitch />
        </div>
        <Link
          className={`gap-4 py-2.5 px-4 flex items-center space-x-2 rounded transition duration-200 ${
            location.pathname === '/company/dashboard'
              ? 'bg-blue-500 text-white'
              : 'hover:bg-blue-500 hover:text-white'
          }`}
          to={'/company/dashboard'}
        >
          <Gauge size={24} />
        </Link>
        <Link
          className={`gap-4 py-2.5 px-4 flex items-center space-x-2 rounded transition duration-200 ${
            location.pathname === '/company/ads'
              ? 'bg-blue-500 text-white'
              : 'hover:bg-blue-500 hover:text-white'
          }`}
          to="/company/ads"
        >
          <Megaphone size={24} />
        </Link>
        <Link
          className={`gap-4 py-2.5 px-4 flex items-center space-x-2 rounded transition duration-200 ${
            location.pathname === '/company/cards'
              ? 'bg-blue-500 text-white'
              : 'hover:bg-blue-500 hover:text-white'
          }`}
          to="/company/cards"
        >
          <Cards size={24} />
        </Link>
        <Link
          className={`gap-4 py-2.5 px-4 flex items-center space-x-2 rounded transition duration-200 ${
            location.pathname === '/company/employee'
              ? 'bg-blue-500 text-white'
              : 'hover:bg-blue-500 hover:text-white'
          }`}
          to="/company/employee"
        >
          <UserCirclePlus size={24} />
        </Link>
        <Link
          className={`gap-4 py-2.5 px-4 flex items-center space-x-2 rounded transition duration-200 ${
            location.pathname === '/company/perfil'
              ? 'bg-blue-500 text-white'
              : 'hover:bg-blue-500 hover:text-white'
          }`}
          to="/company/perfil"
        >
          <img
            className="rounded-full"
            src={`http://localhost:3333/${user?.logo}`}
            alt="imagem da empresa"
            width={24}
            height={24}
          />
        </Link>
        <button
          className="gap-4 py-2.5 px-4 flex items-center space-x-2 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
          onClick={handleSignOut}
        >
          <SignOut size={24} />
        </button>
      </aside>
    </div>
  )
}
