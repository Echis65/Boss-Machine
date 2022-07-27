import { getAllFromDatabase, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } from "../db.js"
export const getAllMinions = (req, res) => {
    try {
        res.status(200).send(getAllFromDatabase('minions'))
    } catch (error) {
        res.status(500).send('Something went wrong!')
    }
}

export const createMinion = (req, res) => {
  const minionInstance = req.body.instance;
  try {
    if(!(minionInstance.hasOwnProperty('name') && minionInstance.hasOwnProperty('weaknesses') && minionInstance.hasOwnProperty('title') && minionInstance.hasOwnProperty('salary'))){
        throw new Error('Enter valid property names')
      }
   const newMinion = addToDatabase(minionModel, minionInstance)
    res.status(201).send(newMinion)
  } catch (error) {
    res.status(400).send({message: error.message})
  }
}

export const getMinionById = (req, res) => {
  try {
      res.status(200).send(req.minion)
  } catch (error) {
    res.status(404).send({message: error.message})
  }
}

export const updateMinionById = (req, res) => {
  const minionInstance = req.body.instance;
  try {
    if(!(minionInstance.hasOwnProperty('name') && minionInstance.hasOwnProperty('weaknesses') && minionInstance.hasOwnProperty('title') && minionInstance.hasOwnProperty('salary'))){
      throw new Error('Enter valid property names')
    }
    const updatedMinion = updateInstanceInDatabase(req.minionModel, minionInstance)
    res.status(200).send(updatedMinion)
  } catch (error) {
    res.status(404).send({message: error.message})
  }
}


export const deleteMinionById = (req, res) => {
  try {
    deleteFromDatabasebyId(req.minionModel, req.minionId)
    res.status(204).send()
  } catch (error) {
    res.status(404).send({message: error.message})
  }
}

