import {  getFromDatabaseById } from "../db.js"

const minionModel = 'minions'
export const validateMinion = (req, res, next) => {
    const minionId = req.params.minionId;
    console.log(minionId)
    const minion = getFromDatabaseById(minionModel, minionId);
    if(minion === undefined){
        throw new Error('Please enter a valid id')
    }else{
        req.minionId = minionId;
        req.minion = minion;
        req.minionModel = minionModel;
        next();    
    }
}