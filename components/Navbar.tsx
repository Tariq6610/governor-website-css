"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import './navbar.css'; 

function Navbar() {
  const [showCources, setShowCources] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <div className={`logo `}>
        <Image
          fill
          src="/logo.png"
          alt="logo"
          sizes="(max-width: 768px) 60px, 90px"
          className="mt-5 object-contain"
        />
      </div>
      <div className="header-text">
        <h1 className="header-lg-visible">
          Tuition Free Education Program on Latest Technologies
        </h1>
        <h1 className="header-lg-hidden">Tuition Free Program</h1>
      </div>
      <div>
        <div onClick={() => setShowMenu(!showMenu)} className="menu-button">
          <CiMenuBurger />
        </div>
        <ul className={`menu-items`}>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/apply"}>
            <li>Apply</li>
          </Link>
          <Link href={"/jobs"}>
            <li>Jobs</li>
          </Link>
          <Link href={"/result"}>
            <li>Result</li>
          </Link>
          <li>
            <div className="relative">
              <button onClick={() => setShowCources(!showCources)}>
                Cources
              </button>
              <div className={`dropdown ${showCources ? "show" : "hide"}`}>
                <h1 className="text-xl font-bold mb-3">Core Cources</h1>
                <ul className="mb-4">
                  <li className="dropdown-item">
                    <Link href="#">Programming Fundamentals</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="#">Web2 using NextJs</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="#">Earn as You Learn</Link>
                  </li>
                </ul>
                <h1 className="text-xl font-bold mb-3">Advanced Cources</h1>
                <ul>
                  <li className="dropdown-item">
                    <Link href="#">Web 3 and Metaverse</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="#">Cloud-Native Computing</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="#">AI and Deep Learning</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="#">Ambient Computing and IoT</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="#">Genomics and Bioinformatics</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="#">Network Programmability</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile screen Navbar */}
      <div className={`mobile-menu ${showMenu ? "show" : "hidden"}`}>
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="mobile-menu-item"
        >
          <Link href="/">Home</Link>
        </div>
        <hr />
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="mobile-menu-item"
        >
          <Link href="/apply">Apply</Link>
        </div>
        <hr />
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="mobile-menu-item"
        >
          <Link href="/jobs">Jobs</Link>
        </div>
        <hr />
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="mobile-menu-item"
        >
          <Link href="/result">Result</Link>
        </div>
        <hr />
        <div
          onClick={() => setShowCources(!showCources)}
          className="mobile-menu-item relative"
        >
          <Link href="#">Cources</Link>
        
        <div 
         className={`${
          showCources ? "block" : "hidden"
        }`}
          style={{
            position: "absolute",
            top: "2rem", 
            right: "0.5rem", 
            padding: "0.5rem", // p-2
            color: "black", // text-black
            width: "300px", // w-[300px]
            backgroundColor: "white", // bg-white
            boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)", // shadow-2xl
          }}
        >
          <h1 className="text-xl font-bold mb-3">Core Cources</h1>
          <ul className="mb-4">
            <li className="dropdown-item">
              <Link href="#">Programming Fundamentals</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Web2 using NextJs</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Earn as You Learn</Link>
            </li>
          </ul>
          <h1 className="text-xl font-bold mb-3">Advanced Cources</h1>
          <ul>
            <li className="dropdown-item">
              <Link href="#">Web 3 and Metaverse</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Cloud-Native Computing</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">AI and Deep Learning</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Ambient Computing and IoT</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Genomics and Bioinformatics</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Network Programmability</Link>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
