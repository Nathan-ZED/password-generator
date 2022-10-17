import React, { useContext, useEffect, useState, useRef } from 'react'
import { AppContext } from '../../Context/AppContext'
import './Strength.css'

export default function Strength() {
    const [state, setState] = useState<string>('Low')
    const [color, setColor] = useState<string>('red')

    const {length, parameters} = useContext(AppContext)

    const parent:any = useRef()

    useEffect(() => {
    if(parameters.length > 1) {
        if(length > 10) {
            setState('Medium')
        }
    }
    if(parameters.length > 2) {
        if(length > 14) {
            setState('Strong')
        }
    }
    if(parameters.length < 1) {
        setState('Low')
    }
    if(length < 7) {
        if(parameters.length < 3) setState('Low')
        else setState('Medium')
    }
    }, [length, parameters])

    useEffect(() => {
        if(state === 'Low') setColor('red')
        if(state === 'Medium') setColor('orange')
        if(state === 'Strong') setColor('#A4FFB0')
    }, [state])

  return (
    <article className={"strength-block"}>
        <span>Strength</span>
        <div ref={parent}>
            <span>{state}</span>
            <div className={'empty-block'} style={{borderStyle: 'solid', borderWidth: 2, borderColor: color, background: color}}></div>  
            <div className={'empty-block'} style={{borderStyle: 'solid', borderWidth: 2, borderColor: color, background: color}}></div>  
            <div className={'empty-block'} style={{borderStyle: 'solid', borderWidth: 2, borderColor: color, background: color}}></div>  
            <div className={'empty-block'} style={{borderStyle: 'solid', borderWidth: 2, borderColor: color, background: color}}></div>  
        </div>
    </article>
  )
}
