
import { delay } from "lodash";
import React, {Component} from "react"



class StateFull extends Component
{
    constructor(props : any) {
        super(props);
         // Don't do this!
         this.state = { color: 'green' };

         console.log(this.state)
    }

    randomString = () => {
        return (Math.random() + 1).toString(36).substring(7) ;
    }
    test = () => {
        console.log("statefull teset")
    }

    async componentWillMount() {
      let result = await fetch("google.com")
      console.log(result);
    }

    componentDidMount(): void {
        alert(1);
        console.log("after render");
    }

   
    render() {
        console.log("Ham render da duoc chay");
        return (
           <div className={this.randomString()}>
              <button onClick={() =>  this.setState({color : (Math.random() + 1).toString(36).substring(7)})}>Submit</button>
                <p className={this.randomString()}>{(this.state as any)?.color}</p>
            </div> 

        )
    }

    componentWillUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void {
        console.log("componentWillUpdate");
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        alert("componentDidUpdate")
        console.log("componentDidUpdate")
    }

    componentWillUnmount(): void {
        console.log("componentWillUnmount")
    }

}

export default StateFull

