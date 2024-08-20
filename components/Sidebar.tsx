import { useContext } from "react"
import { Button } from "./ui/button"
import { Context } from "@/app/page"

const Sidebar = () => {
    const {page,setPage}:any = useContext(Context)
    const hashing = ["MD5","SHA1","SHA-256","KECCAK256"]
    const crypotgraphy = ["CAESAR"]
    const encodings = ["HEX","BASE32","BASE64","BASE58"]
  return (
    <aside className="w-[25%] min-h-screen border">
        <Container onclick={()=>setPage("hash")}  text="HASH" array={hashing} />
        <Container onclick={()=>setPage("cryptography")} text="CRYPTOGRAPHY" array={crypotgraphy} />
        <Container onclick={()=>setPage("encoding")} text="Encodings" array={encodings} />  
    </aside>
  )
}

function Container({text,array,onclick}: {text:string,array: string[],onclick: ()=>void}){
    return  <div className="flex flex-col" style={{borderBottom: "1px solid #000"}}>
    <h1 className="text-center text-blue-400">{text}</h1>
    {
        array.map((item,index)=>(
            <Button onClick={onclick} key={index} variant="ghost">{item}</Button>
        ))
    }
</div>
}

export default Sidebar