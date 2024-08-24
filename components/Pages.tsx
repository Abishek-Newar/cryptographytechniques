"use client"
import React from 'react'
import { useRecoilState } from 'recoil'
import { pageState } from './Provider'
import Hashing from './Hashing'
import Cryptography from './Cryptography'
import Encoding from './Encoding'

const Pages = () => {
    const [page,setPage] = useRecoilState(pageState)
  return (
    <div className='w-full'>
        {(page === "md5" || page === "sha1" || page === "sha-256" || page==="keccak256") && <Hashing />}
        {(page === "caesar") && <Cryptography />}
        {(page === "hex" || page === "base32" || page === "base64" || page === "base58") && <Encoding />}
    </div>
  )
}

export default Pages