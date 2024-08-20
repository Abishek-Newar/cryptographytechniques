"use client"
import { useState } from "react"
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button";
import { md5 } from "js-md5";

const Hashing = () => {
    const [output, setOutput] = useState("output here");
    const [input, setInput] = useState("");
    const [encodingType,setEncodingType] = useState("");


    function MD5(){
        var hash = md5.create();
        hash.update(input);
        if(encodingType === "hex"){
            setOutput(hash.hex())
        } else if(encodingType === "base64"){
            setOutput(hash.base64())
        }
    }
    return (
        <div className="grid grid-cols-2 w-full ">
            <div className="w-[17rem] p-6 flex flex-col gap-3">
          <Button onClick={MD5} className="w-full">Hash</Button>
            <Select onValueChange={(e)=>setEncodingType(e)}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Encoding" />
                </SelectTrigger>
                <SelectContent >
                    <SelectItem value="hex">HEX</SelectItem>
                    <SelectItem value="base64">Base64</SelectItem>
                </SelectContent>
            </Select>
            </div>
            <div>
            <Input onChange={(e)=>setInput(e.target.value)}/>
            <div className="border h-56">
                <h1>{output}</h1>
            </div>
            </div>
        </div>
    )
}

export default Hashing