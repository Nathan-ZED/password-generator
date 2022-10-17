import React, { ReactNode, useState, createContext, useEffect } from 'react';
const password = require('secure-random-password')

interface IAppContext {
    generatedPassword: string,
    generatePassword: Function
    setLength: Function,
    length: number,
    manageParameters: Function,
    parameters: string[]
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

interface IProps {
    children: ReactNode;
}

export function AppContextProvider({ children }: IProps): JSX.Element {
    
    const [generatedPassword, setGeneratedPassword] = useState('')
    const [length, setLength] = useState(20)
    const [parameters, setParameters] = useState<any>([])
    const digit = password.digits
    const upper = password.upper
    const lower = password.lower
    const symbols = "@#&(\'§)-_%£$*^+"
    const characters: any[] = [];

    const manageParameters = (el:any) => {
        if(el.checked) {
            const newVal = [...parameters, el.value]
            setParameters(newVal)
        }

        if(!el.checked) {
            setParameters([...parameters].filter((item:any) => item !== el.value))
        }
    }
    
    const generatePassword = (lght: number ) => {
        if(parameters.length < 1) setGeneratedPassword(password.randomPassword({length: lght}))
        else {
            if(parameters.find((e: string) => e === 'uppercase')) characters.push(upper)
            if(parameters.find((e: string) => e === 'lowercase')) characters.push(lower)
            if(parameters.find((e: string) => e === 'numbers')) characters.push(digit)
            if(parameters.find((e: string) => e === 'symbols')) characters.push(symbols)
            setGeneratedPassword(password.randomPassword({length: lght, characters: characters}))
        }
    }


    return (
        <AppContext.Provider 
            value={{
                generatedPassword,
                generatePassword,
                setLength,
                length,
                manageParameters,
                parameters,
            }}>
            {children}
        </AppContext.Provider>
        );
}

