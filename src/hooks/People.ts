import { useReducer } from "react";
type ArrayType = { name: string }
type FuncType = (state: ArrayType[], action: { type: string, name?: string }) => ArrayType[]

const initial: ArrayType[] = [{ name: 'Rafael' }]

const reducer: FuncType = (state, action) => {
    switch (action.type) {
        case 'ADD':
            if (action.name) state.push({ name: action.name })
            break
        case 'DEL':
            let i = state.findIndex((i) => i.name == action.name)
            state.splice(i, 1)
            break
        case 'ORDER':
            state.sort((a, b) => (a.name > b.name) ? 1 : -1)
            break
    }
    return [...state]
}

export const People = () => {
    return useReducer(reducer, initial)
}