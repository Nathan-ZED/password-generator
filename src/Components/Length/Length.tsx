import React, {useContext, useState} from "react"
import { AppContext } from "../../Context/AppContext"
import './Length.css'


type Props = {

}

export default function Length(props:Props) {

    const { setLength, length } = useContext(AppContext)

    const handleChange = (el:any) => {
        setLength(parseInt(el))
    }
    
    return(
            <div className={"length-block"}>
                <div className={"length"}>
                    <h2>Character Length</h2>
                    <span>{length}</span>
                </div>
                    <input
                        type={"range"}
                        min={"0"}
                        max={"100"}
                        value={length}
                        onInput={(e:any) => handleChange(e.target.value)}
                    />
            </div>
    )
}