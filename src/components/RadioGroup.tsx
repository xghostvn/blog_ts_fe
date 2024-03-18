import { Radio } from "antd"
import type { RadioChangeEvent } from "antd"
import { useEffect, useState } from "react"
import React from "react"
export type RadioData = {
    name: string,
    value: string | number
}


const AppRadio : React.FC<{data : RadioData[], initalValue? : number|string, callback? : (e : RadioChangeEvent) => any}> = ({data, initalValue, callback}) => {

    const [value , setValue] = useState(initalValue)
    useEffect(() => {
        console.log("AppRadio mounted")

        return () =>{
            console.log("AppRadio Umounted")
        }
    })
 
    return (
        <Radio.Group onChange={(e) => {
            setValue(e.target.value)
          
        }} >
            {
                data.map((item : RadioData, key) => {
                   return <Radio key={key} value={item.value}>{item.name}</Radio>
                })
            }
        </Radio.Group>
    )
}

export default React.memo(AppRadio)