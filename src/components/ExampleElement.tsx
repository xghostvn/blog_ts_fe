import { useEffect } from "react"
import React from "react"


const ExampleComponent : React.FC<{name : string}> = ({name}) => {

    useEffect(() => {
        console.log("ExampleComponent Render")
    })

    return (
       <div>
            {name}
       </div>
    )
}


export default React.memo(ExampleComponent)