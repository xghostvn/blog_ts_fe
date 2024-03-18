import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../hooks"
import MainLayout from "../layouts/Main"

const StateLess = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.auth.user)
    const [number, setNumber] = useState(state)

    const increaseNumber = () => {
        console.log("increase Auth State")

    }
    console.log(state, "auth State")

    return (
            <div>
                <p>State : {state}</p>
                <Button onClick={() => {
                    increaseNumber()
                }}>Increase</Button>
            </div>
    )
}



export default StateLess