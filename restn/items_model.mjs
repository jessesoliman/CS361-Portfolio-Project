import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);


// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */
const itemSchema = mongoose.Schema({
    name: { type: String, required: true },
    startprice: { type: Number, required: true },
    auctionTime: { type: Number, required: true },
    attack: { type: Number, required: true },
    strength: { type: Number, required: true },
    dexterity: { type: Number, required: true },
    intelligence: { type: Number, required: true },
    itemDescription: { type: String, required: true }
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Item = mongoose.model("Item", itemSchema);

const createItem = async (name, startprice, auctionTime, attack, strength, 
    dexterity, intelligence, itemDescription) => {
    const item = new Item({ name: name, startprice: startprice, 
        auctionTime: auctionTime, attack: attack, strength: strength, 
        dexterity: dexterity, intelligence: intelligence,
        itemDescription, itemDescription });
    return item.save();
}

const findItem = async () => {
    const query = Item.find()
    return query.exec();
}

const findItemById = async (_id) => {
    const existsOrNot = await Item.findById(_id)
    return existsOrNot
}

const updateItem = async (_id, name, startprice, auctionTime, attack, 
    strength, dexterity, intelligence, itemDescription) => {
    const updateItem = await Item.replaceOne({ _id: _id },
        { name: name, startprice: startprice, 
            auctionTime: auctionTime, attack: attack, strength: strength, 
            dexterity: dexterity, intelligence: intelligence,
            itemDescription, itemDescription });
    return updateItem.modifiedCount;
}

const deleteById = async (_id) => {
    console.log(_id)
    const deletedOrNot = await Item.deleteOne({_id: _id});
    return deletedOrNot.deletedCount
}

/**
*
* @param {string} date
* Return true if the date format is MM-DD-YY where MM, DD and YY are 2 digit integers
*/
function isDateValid(date) {
    // Test using a regular expression. 
    // To learn about regular expressions see Chapter 6 of the text book
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
}

function validateParams(name, reps, weight, unit) {
    let validName = true;
    let validRepsOrWeight = true;
    let validUnit = true;
    let validParams = true;
    let validUnitParams = ['kgs', 'lbs']
    if (name.length <= 0) {
        validName = false;
    }
    if (!Number.isInteger(reps) || !Number.isInteger(weight)) {
        validRepsOrWeight = false;
        if (validRepsOrWeight === false){
            console.log(reps, weight, name)
        }
    }
    if (reps <= 0 || weight <= 0) {
        validRepsOrWeight = false;
    }
    if (!validUnitParams.includes(unit)) {
        validUnit = false;
    }
    if (validName === false || validRepsOrWeight === false || validUnit === false) {
        validParams = false;
    }
    return validParams;
}

export { createItem, findItem, findItemById, updateItem, 
    deleteById, isDateValid, validateParams };

