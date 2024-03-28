import "./index.scss"
import { useEffect, useState } from "react"


const PraceticeBootstrap = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <nav>
                <ul className="list-group">
                    <li className="list-group-item" >
                        Handle
                        <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    (<ul className="list-group" onClick={() => {
                        
                    }}>
                        <li className="list-group-item">Sub Menu 1</li>
                        <li className="list-group-item">Sub Menu 1</li>
                        <li className="list-group-item">Sub Menu 1</li>
                    </ul>)
                    <li className="list-group-item">My</li>
                    <ul className="list-group" >
                        <li className="list-group-item">Sub Menu 2</li>
                        <li className="list-group-item">Sub Menu 2</li>
                        <li className="list-group-item">Sub Menu 2</li>
                    </ul>
                    <li className="list-group-item">Problem</li>
                    <li className="list-group-item">No</li>
                    <li className="list-group-item">Heistation</li>
                </ul>
            </nav>
        </div>
    )
}

export default PraceticeBootstrap