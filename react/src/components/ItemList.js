import React from 'react';
import Item from './Item';
import '../App.css'

function ItemList({ items, deletion, toEdit }) {
    return (
        <table id="exercises" className="table-schema">
            <thead>
                <tr>
                    <th className='row-schema-2'>Name</th>
                    <th className='row-schema-2'>Current Price</th>
                    <th className='row-schema-2'>Auction Time</th>
                    <th className='row-schema-2'>Attack</th>
                    <th className='row-schema-2'>Strength</th>
                    <th className='row-schema-2'>Dexterity</th>
                    <th className='row-schema-2'>Intelligence</th>
                    <th className='row-schema-2'>Description</th>
                    <th className='row-schema-2'>Delete</th>
                    <th className='row-schema-2'>Edit</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) =>  <Item item={item}
                    deletion={deletion}
                    toEdit={toEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ItemList; 