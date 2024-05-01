const express = require('express');
const router = express.Router();
let fruits = [
    {id:1,name:"fraise"},
    {id:2,name:"manga"},
    {id:3,name:"banane"}
];
//post/all return un array of object 
router.get('/all', (req, res) => {
                                 res.json(fruits);
});
//post/:id return the object with the id in the url 
router.get('/:id', (req, res) => {
    const Id = parseInt(req.params.id);
    const fruit = fruits.find(f => f.id === Id);
    if (fruit) {
         res.json(fruit);
    } else {
         res.status(404).send("not found!");
    }
});
module.exports=router;