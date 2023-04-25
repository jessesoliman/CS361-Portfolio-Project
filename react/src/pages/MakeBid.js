import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MakeBid = ({itemToEdit}) => {
    const [name, setName] = useState(itemToEdit.name);
    const [startprice, setStart] = useState(itemToEdit.startprice);
    const [auctionTime, setTime] = useState(itemToEdit.auctionTime);
    const [attack, setAttack] = useState(itemToEdit.attack);
    const [strength, setStr] = useState(itemToEdit.strength);
    const [dexterity, setDex] = useState(itemToEdit.dexterity);
    const [intelligence, setInt] = useState(itemToEdit.intelligence);
    const [itemDescription, setDes] = useState(itemToEdit.itemDescription);
    const navigate = useNavigate();

    const EditItem = async () => {
        const editedItem = {name, startprice, auctionTime, attack, strength, dexterity, intelligence, itemDescription};
        const response = await fetch(`/item/${itemToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedItem),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(response.status === 200) {
            alert("Successfuly edited the item");
        } else{
            alert(`Failed to edit item, status code = ${response.status}`);
        } 
        navigate("/");
    };

    return (
        <div>
            <h1>Make a bid</h1>
            <input
                className='input-schema'
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                className='input-schema'
                type="number"
                value={startprice}
                onChange={e => setStart(parseInt(e.target.value))} />
            <input
                className='input-schema'
                type="number"
                value={auctionTime}
                onChange={e => setTime(parseInt(e.target.value))} />
            <input
                className='input-schema'
                type="number"
                value={attack}
                onChange={e => setAttack(e.target.value)} />
            <input
                className='input-schema'
                type="number"
                value={strength}
                onChange={e => setStr(e.target.value)} />
            <input
                className='input-schema'
                type="number"
                value={dexterity}
                onChange={e => setDex(e.target.value)} />
            <input
                className='input-schema'
                type="number"
                value={intelligence}
                onChange={e => setInt(e.target.value)} />
            <input
                className='input-schema'
                type="text"
                value={itemDescription}
                onChange={e => setDes(e.target.value)} />
            <button
                onClick={EditItem}
            ><span className='input-schema'>Save</span></button>
        </div>
    );
}

export default MakeBid;