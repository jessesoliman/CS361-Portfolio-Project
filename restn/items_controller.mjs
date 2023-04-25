import 'dotenv/config';
import * as items from './items_model.mjs';
import express from 'express';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.post('/item', (req, res) => {
    /*let errors = exercises.isDateValid(req.body.date);
    if (exercises.validateParams(req.body.name, req.body.reps, req.body.weight, req.body.unit) === false) {
        return res.status(400).json({ Error: 'Invalid request'})
    }
    if (errors === false) {
        return res.status(400).json({ Error: 'Invalid request' });
    } */
    items.createItem(req.body.name, req.body.startprice, req.body.auctionTime, 
        req.body.attack, req.body.strength, req.body.dexterity, req.body.intelligence, 
        req.body.itemDescription)
        .then(item => {
            res.status(201).json(item);
        }) 
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Invalid request' });
        });
});

app.get('/item', (req, res) => {
    items.findItem()
    .then(item => {
        if (item !== null) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ Error: 'Resource not found' });
        }
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ Error: 'Request failed' });
    });
});

app.get('/item/:_id', (req, res) => {
    const itemId = req.params._id;
    items.findItemById(itemId)
        .then(item => { 
            if (item !== null) {
                res.status(200).json(item);
            } else {
                res.status(404).json({ Error: 'Not found' });
            }         
         })
        .catch(error => {
            res.status(500).json({ Error: 'Request failed' });
        });

});

app.put('/item/:_id', (req, res) => {
    /*let errors = exercises.isDateValid(req.body.date)
    if (exercises.validateParams(req.body.name, req.body.reps, req.body.weight, req.body.unit) === false) {
        return res.status(400).json({ Error: 'Invalid request'})
    }
    if (errors === false) {
        return res.status(400).json({ Error: 'Invalid request' });
    }*/
    items.updateItem(req.params._id, req.body.name, req.body.startprice, req.body.auctionTime, 
        req.body.attack, req.body.strength, req.body.dexterity, req.body.intelligence, 
        req.body.itemDescription)
        .then(updateItem => {
            if (updateItem === 1) {
                res.status(200).json({ _id: req.params._id, name: req.body.name, startprice: req.body.startprice, 
                    auctionTime: req.body.auctionTime, attack: req.body.attack, strength: req.body.strength, 
                    dexterity: req.body.dexterity, intelligence: req.body.intelligence, 
                    itemDescription: req.body.itemDescription })
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        })
});

app.delete('/item/:_id', (req, res) => {
    const delete_id = req.params._id
    items.deleteById(delete_id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        })
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});