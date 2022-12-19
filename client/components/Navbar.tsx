import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
      <nav
        className="relative flex h-12 items-center px-4 justify-between shadow-md dark:shadow-gray-700"
        style={{ height: "70px" }}
      >
        <img
          src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670936284/1_rdfnhm.png"
          className="logo"
          style={{ width: "200px", height: "170px" }}
          alt=""
        />

        <div>
          <Link href="/home" className="p-2 text-dark no-underline hover:underline">
            Home
          </Link>
          <Link href="/collection" className="p-2 text-dark no-underline hover:underline">
            Collection
          </Link>

          <Link href="/store" className="p-2 text-dark no-underline hover:underline">
            Store
          </Link>
          <Link href="/cart" className="p-2 text-dark no-underline hover:underline">
            cart
          </Link>
          <Link href="/aboutus" className="p-2 text-dark no-underline hover:underline">
            About us
          </Link>
          <Link href="/" className="p-2 text-dark no-underline hover:underline">
            Login
          </Link>
          <Link href="/signup" className="p-2 text-dark no-underline hover:underline">
          Signup
          </Link>
          {/* <Link href="/signup" className="p-2 text-dark no-underline hover:underline">
          logout
          </Link> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
