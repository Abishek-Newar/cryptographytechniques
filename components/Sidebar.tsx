"use client"
import { useRecoilState } from "recoil"
import { pageState } from "./Provider"
import { Button } from "./ui/button"

const Sidebar = () => {
    const hashing = ["md5","sha1","sha-256","keccak256"]
    const crypotgraphy = ["caesar"]
    const encodings = ["hex","base32","base64","base58"]
    const [page,setPage] = useRecoilState(pageState)
  return (
    <aside className="w-[25%] min-h-screen border">
        <Container   text="HASH" array={hashing} />
        <Container  text="CRYPTOGRAPHY" array={crypotgraphy} />
        <Container  text="Encodings" array={encodings} />  
    </aside>
  )
}

function Container({text,array}: {text:string,array: string[]}){
    const [page,setPage] = useRecoilState(pageState)
    return  <div className="flex flex-col" style={{borderBottom: "1px solid #000"}}>
    <h1 className="text-center text-blue-400">{text}</h1>
    {
        array.map((item,index)=>(
            <Button onClick={()=>setPage(item)} key={index} className="uppercase" variant="ghost">{item}</Button>
        ))
    }
</div>
}

export default Sidebar