import React from 'react';
import { useState, useEffect} from 'react';
import ItemList from '../components/ItemList';
import { useNavigate } from 'react-router-dom';


function HomePage({setItemToEdit}) {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
	
    const deletion = async id => {
        const response = await fetch(`/item/${id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/item');
            const items = await getResponse.json();
            setItems(items);
        } else {
            console.error(`Failed to delete movie with id = ${id}, status code = ${response.status}`)
        }
    }	

    const toEdit = item => {
        setItemToEdit(item);
        navigate("/make-bid");
    };

    const loadItems = async () => {
        const response = await fetch('/item');
        const data = await response.json();
        setItems(data);
    }
        
    useEffect(() => {
        loadItems();
    }, []);

    return (
        <div>
            <h2>Hello! Welcome to your Inventory Manager.</h2>
            <p>
            You can add items, remove items, and edit your items!
            </p>
            <ItemList items={items} deletion={deletion} toEdit={toEdit}></ItemList>
        </div>
    );
}

export default HomePage;