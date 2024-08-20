"use client"
import Cryptography from "@/components/Cryptography";
import Encoding from "@/components/Encoding";
import Hashing from "@/components/Hashing";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/Navbar";
import Image from "next/image";
import { createContext, useState } from "react";
export const Context = createContext("")
export default function Home() {

  const [page,setPage] = useState("hash")
  return (
    <Context.Provider value={{page,setPage}} >
      <main className="" >
      <Navbar />
      
     <div className="flex">
     <Sidebar />
     {page === "hash"? <Hashing />:null}
     {page === "cryptography"? <Cryptography />:null}
     {page === "encoding"? <Encoding />:null}
     </div>
    </main>
    </Context.Provider>
  );
}
