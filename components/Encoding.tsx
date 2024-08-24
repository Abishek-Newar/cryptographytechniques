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
import { useRecoilState } from "recoil";
import { pageState } from "./Provider";
import { sha1 } from "js-sha1";
import { sha256 } from "js-sha256";
import { Base64 } from "js-base64";
import keccak256 from "keccak256";
import * as base32 from 'hi-base32';
const Encoding = () => {
    const [output, setOutput] = useState("output here");
    const [input, setInput] = useState("");
    const [encodingType, setEncodingType] = useState("");
    const [page, setPage] = useRecoilState(pageState)

    function MD5() {
        if (page === "hex") {
            let hex = input.split('').map(char => char.charCodeAt(0).toString(16)).join('');
            setOutput(hex)
        }else if(page === "base32") {
            setOutput(base32.encode(input))
        }else if (page === "base64"){
            setOutput(Base64.encode(input))
        }else{
            let hash = keccak256(input).toString('hex')
            if (encodingType === "hex") {
                setOutput(hash)
            } else if (encodingType === "base64") {
                setOutput(Base64.encode(hash))
            }
        }

    }
    return (
        <div className="w-full">
            <h1 className="uppercase text-center text-3xl font-bold">{page}</h1>
            <div className="grid grid-cols-2 w-full ">
            
            <div className="w-[17rem] p-6 flex flex-col gap-3">
                <Button onClick={MD5} className="w-full">Hash</Button>
                <Select onValueChange={(e) => setEncodingType(e)}>
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
                <Input onChange={(e) => setInput(e.target.value)} />
                <div className="border h-56 p-10">
                    <h1 className="w-32">{output}</h1>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Encoding