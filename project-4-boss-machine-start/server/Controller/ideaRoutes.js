import { getAllFromDatabase } from "../db.js"


export const getAllIdeas = (req, res) => {
    try {
        res.status(200).send(getAllFromDatabase('ideas'))
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

export const getIdeaById = (req, res) => {
    try {
        
    } catch (error) {
        res.status(404).send({message: error.message})
    }
}