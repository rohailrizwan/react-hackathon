import { type } from "os"

type def={
    myval?:string,
    change:any,
    label?:string,
    placeholder?:string,
    className?:string,
    head?:string,
    type?:string
}
function MYInput(props:def){
    return(
        <div>
            <h6 className="mb-2 ms-2">{props.head}</h6>
            <input type={props.type}   value={props.myval} onChange={props.change} placeholder={props.placeholder} className={`px-2 py-1 mb-3  ${props.className}`} ></input>
        </div>
    )
}

export default MYInput