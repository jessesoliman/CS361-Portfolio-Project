import React from 'react';
import {  MdClear, MdEditNote } from 'react-icons/md';

function Item({ item, deletion, toEdit }) {
    return (
        <tr>
            <td className='row-schema'>{item.name}</td>
            <td className='row-schema'>{item.startprice}</td>
            <td className='row-schema'>{item.auctionTime}</td>
            <td className='row-schema'>{item.attack}</td>
            <td className='row-schema'>{item.strength}</td>
            <td className='row-schema'>{item.dexterity}</td>
            <td className='row-schema'>{item.intelligence}</td>
            <td className='row-schema'>{item.itemDescription}</td>
            <td className='row-schema'>< MdClear onClick={ () => deletion(item._id)}/></td>
            <td className='row-schema'>< MdEditNote onClick={ () => toEdit(item)}/></td>
        </tr>
    )
}

export default Item;