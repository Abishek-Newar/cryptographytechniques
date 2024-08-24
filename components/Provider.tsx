"use client"
import React, { ReactNode } from 'react'
import { atom, RecoilRoot } from 'recoil'

const Provider = ({children}:{children:ReactNode}) => {
  return (
    <RecoilRoot>
        {children}
    </RecoilRoot>
  )
}


export const pageState = atom({
    key: 'pageState',
    default: 'md5'
})
export default Provider