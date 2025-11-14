"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const [open, setOpen] = useState(false);

    useEffect(() => {
    AOS.init({
      duration: 600, 
      once: true,     
    });
  }, []);

  return (
    <>
      <header>
        <div data-aos="fade" className="custom_container d-flex justify-content-between align-items-center">

          {/* LOGO */}
          <div className="logo">
            <img src="/images/Logo.svg" alt="Logo" />
          </div>

          {/* Desktop Links */}
          <div className="links d-none d-md-block">
            <ul className="d-flex gap-4 list-unstyled">
              <li>
                <Link href="/" className="d-flex align-items-center gap-2">
                  <img src="/images/MagnifyingGlass.svg" alt="" />
                  Search
                </Link>
              </li>
              <li>
                <Link href="/" className="d-flex align-items-center gap-2">
                  <img src="/images/Books.svg" alt="" />
                  Library
                </Link>
              </li>
              <li>
                <Link href="/" className="d-flex align-items-center gap-2">
                  <img src="/images/BeerStein.svg" alt="" />
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Icons */}
          <div className="icons d-none d-md-flex gap-3">
            <img src="/images/Bell.svg" alt="" />
            <img src="/images/EnvelopeSimple.svg" alt="" />
            <img src="/images/SignIn.svg" alt="" />
          </div>

          {/* Mobile Menu Button */}
          <button className="btn d-md-none" onClick={() => setOpen(true)}>
            <img src="/images/menu.svg" width={26} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      {/* React Offcanvas */}
      <div className={`react-offcanvas ${open ? "show" : ""}`}>
        <div className="offcanvas-header d-flex justify-content-between align-items-center">
          <div className="logo">
            <img src="/images/Logo.svg" alt="Logo" style={{height: '35px'}}/>
          </div>
          <button className="btn-close" onClick={() => setOpen(false)}>
            <img src="/images/cross.svg" alt="" />
          </button>
        </div>

        <ul className="list-unstyled d-flex flex-column gap-3 mt-4">
          <li><Link href="/" onClick={() => setOpen(false)}>
            Search</Link></li>
          <li><Link href="/" onClick={() => setOpen(false)}>
            Library</Link></li>
          <li><Link href="/" onClick={() => setOpen(false)}> 
            Community</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Header;
