
import { Button } from "antd"
import ExampleComponent from "../../components/ExampleElement"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { getExampleState, addExample } from "../../reducers/example"
const ExamplePage = () => {

    const dispatch = useAppDispatch()
    const exampleState = useAppSelector(getExampleState)
    console.log(exampleState)
    const AddExample = () => {
        dispatch(addExample())
    }
    return (
        <div>
            {exampleState.map(item => (<ExampleComponent   name={item.name}/>))}
            <Button onClick={AddExample}>Add Example</Button>
        </div>
    )
}

export default ExamplePage