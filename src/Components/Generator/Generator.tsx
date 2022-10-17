import React, { useContext, useState } from "react"
import {IoIosArrowRoundForward} from "react-icons/io"
import './Generator.css'
import Length from '../Length/Length'
import ChoiceList from "../ChoiceList/ChoiceList";
import Strength from "../Strength/Strength";
import {AppContext} from '../../Context/AppContext'

type Props = {

}

const Generator = (props:Props) => {

    const { generatePassword, length } = useContext(AppContext)
    
    return (
      <article className={'generator'}>
        <Length />
        <ChoiceList />
        <Strength/>
      <button type="button" onClick={() => generatePassword(length)}>
          Generate <IoIosArrowRoundForward className={"img"}/>
      </button>
      </article>
    );
}

export default Generator