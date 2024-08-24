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
import { Textarea } from "./ui/textarea";

const Hashing = () => {
    const [output, setOutput] = useState("output here");
    const [input, setInput] = useState("");
    const [encodingType, setEncodingType] = useState("");
    const [page, setPage] = useRecoilState(pageState)

    function MD5() {
        if (page === "md5") {
            let hash = md5.create();
            hash.update(input);
            if (encodingType === "hex") {
                setOutput(hash.hex())
            } else if (encodingType === "base64") {
                setOutput(hash.base64())
            }
        }else if(page === "sha1") {
            let hash = sha1.create();
            hash.update(input);
            let temp:string = hash.hex();
            if (encodingType === "hex") {
                setOutput(hash.hex())
            } else if (encodingType === "base64") {
                setOutput(Base64.encode(temp))
            }
        }else if (page === "sha-256"){
            let hash = sha256.create();
            hash.update(input);
            let temp:string = hash.hex()
            if (encodingType === "hex") {
                setOutput(hash.hex())
            } else if (encodingType === "base64") {
                setOutput(Base64.encode(temp))
            }
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
        <div className="p-10">
            <h1 className="uppercase text-center text-3xl font-bold mb-10">{page}</h1>
            <div className="grid grid-cols-2 ">
            
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
            <div className="w-full flex flex-col gap-3">
                <Textarea onChange={(e) => setInput(e.target.value)} placeholder="Enter text to hash/encrypt/encode" />
                <div className="border h-56 p-4">
                    <h1 className="overflow-x-auto w-[600px]">{output}</h1>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hashing