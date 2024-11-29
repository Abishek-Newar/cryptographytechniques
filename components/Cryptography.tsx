import React, { useState } from 'react'
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';


const Cryptography = () => {
  const [output, setOutput] = useState("output here");
    const [input, setInput] = useState("");
    const [encodingType, setEncodingType] = useState("");
    const [key,setKey] = useState("")
  function caesarCipherEncrypt(text:string, shift:number) {
    let encryptedText = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        // Check if character is a letter
        if (/[a-zA-Z]/.test(char)) {
            // Determine if the character is uppercase or lowercase
            let base = (char === char.toUpperCase()) ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            // Encrypt the character with the shift and wrap around using modulo
            let encryptedChar = String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base);
            encryptedText += encryptedChar;
        } else {
            // Non-alphabetic characters remain unchanged
            encryptedText += char;
        }
    }

    return encryptedText;
}

function handleCipher(){
  if(encodingType === "encode"){
    setOutput(caesarCipherEncrypt(input,parseInt(key)))
  }else{
    setOutput(caesarCipherDecrypt(input,parseInt(key)))
  }
}

// Caesar Cipher Decryption Function
function caesarCipherDecrypt(text: string, shift:number) {
    return caesarCipherEncrypt(text, -shift);  // Decrypt by reversing the shift
}
  return (
    <div className="w-full">
    <h1 className="uppercase text-center text-3xl font-bold p-10 mb-10">Ceasar Cipher</h1>
    <div className="grid grid-cols-2 w-full ">

        <div className="w-[17rem] p-6 flex flex-col gap-3 ">
            <Button onClick={handleCipher} className="w-full">ENCODE / DECODE</Button>
            <Select onValueChange={(e) => setEncodingType(e)}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Encoding type" />
                </SelectTrigger>
                <SelectContent >
                    <SelectItem value="encode">ENCODE</SelectItem>
                    <SelectItem value="decode">DECODE</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="p-10 flex flex-col gap-3">
            <Input onChange={(e) => setInput(e.target.value)} placeholder='text' />
            <Input type='number' onChange={(e) => setKey(e.target.value)} placeholder='key' />
            <div className="border h-56 p-10">
                <h1 className="w-32">{output}</h1>
            </div>
        </div>
    </div>
</div>
  )
}

export default Cryptography