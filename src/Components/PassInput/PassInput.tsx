import React, {useContext} from 'react';
import {IoIosCopy} from "react-icons/io";
import { AppContext } from '../../Context/AppContext';
import './PassInput.css';
type Props = {

}

export default function PassInput(props:Props) {

    const {generatedPassword} = useContext(AppContext)

    return (
       <div className={"pass-input"}>
           <input type="text" defaultValue={generatedPassword}/>
           <IoIosCopy className={"img"} />
       </div>
   );
};