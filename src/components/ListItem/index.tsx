import React from 'react';
import { ItemType } from '../../services/types';
import { ListItemCss } from './style';

type Main = {
    data: ItemType,
    body: ItemType[],
    state: React.Dispatch<React.SetStateAction<ItemType[]>>
}

export const ListItem = ({ data, body, state }: Main) => {

    const handle = () => {
        let array = [...body]
        array[data.id].done = !array[data.id].done
        state(array)
        console.log(array)
    }

    return (
        <ListItemCss done={data.done}>
            <label>
                <input type="checkbox" checked={data.done} onChange={handle} />
                <span>{data.text}</span>
            </label>
        </ListItemCss>
    )
}