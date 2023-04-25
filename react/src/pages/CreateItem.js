import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateItem = () => {
    const [name, setName] = useState('');
    const [startprice, setStart] = useState('');
    const [auctionTime, setTime] = useState('');
    const [attack, setAttack] = useState('');
    const [strength, setStr] = useState('');
    const [dexterity, setDex] = useState('');
    const [intelligence, setInt] = useState('');
    const [itemDescription, setDes] = useState('');
    const navigate = useNavigate();

    const addItem = async () => {
        const newItem = {name, startprice, auctionTime, attack, strength, dexterity, intelligence, itemDescription};
        console.log(newItem, typeof(newItem[attack]));
        const response = await fetch('/item', {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(response.status === 201) {
            alert("Successfuly added the item");
        } else{
            alert(`Failed to add item, status code = ${response.status}`);
        }
        console.log(newItem)
        navigate("/");
    };

    return (
        <div>
            <h1>List Auction Item</h1>
            <input
                className='input-schema'
                type="text"
                placeholder="Enter item name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                className='input-schema'
                type="number"
                value={startprice}
                placeholder="Enter start price here"
                onChange={e => setStart(parseInt(e.target.value))} />
            <input
                className='input-schema'
                type="number"
                value={auctionTime}
                placeholder="Enter auction length here"
                onChange={e => setTime(parseInt(e.target.value))} />
            <input
                className='input-schema'
                type="number"
                placeholder="Enter attack here"
                value={attack}
                onChange={e => setAttack(e.target.value)} />
            <input
                className='input-schema'
                type="number"
                placeholder="Enter strength here"
                value={strength}
                onChange={e => setStr(e.target.value)} />
            <input
                className='input-schema'
                type="number"
                placeholder="Enter dexterity here"
                value={dexterity}
                onChange={e => setDex(e.target.value)} />
            <input
                className='input-schema'
                type="number"
                placeholder="Enter intelligence here"
                value={intelligence}
                onChange={e => setInt(e.target.value)} />
            <input
                className='input-schema'
                type="text"
                placeholder="Enter item description here"
                value={itemDescription}
                onChange={e => setDes(e.target.value)} />
            <button
                onClick={addItem}
            ><span className='input-schema'>Add</span></button>
        </div>
    );
}

export default CreateItem;