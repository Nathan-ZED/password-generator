import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import './ChoiceList.css'

export default function ChoiceList() {

    const {manageParameters, parameters} = useContext(AppContext)

    return (
            <ul className={"list-choice"}>
                <li>
                    <input type="checkbox" value="uppercase" onInput={(e) => manageParameters(e.target)} />
                    <label>Include Uppercase letters</label>
                </li>
                <li>
                    <input type="checkbox" value="lowercase" onInput={(e) => manageParameters(e.target)} />
                    <label>Include Lowercase letters</label>
                </li>
                <li>
                    <input type="checkbox" value="numbers" onInput={(e) => manageParameters(e.target)} />
                    <label>Include Numbers</label>
                </li>
                <li>
                    <input type="checkbox" value="symbols" onInput={(e) => manageParameters(e.target)} />
                    <label>Include Symbols</label>
                </li>
            </ul>
    )
}