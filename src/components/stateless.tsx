import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../hooks"
import MainLayout from "../layouts/Main"

const StateLess = () => {

    const increaseNumber = () => {
        console.log("increase Auth State")

    }


    return (
            <div>
               
                <Button onClick={() => {
                    increaseNumber()
                }}>Increase</Button>
            </div>
    )
}



export default StateLess