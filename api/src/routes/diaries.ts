import express from 'express'
import * as diaryServices from '../services/diaryServices'
const router = express.Router()

router.get('/', (_req, res) =>{
    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) =>{
    const entry = diaryServices.findById(Number(req.params.id));
    if (entry) {
        res.send(entry);
    } else {
        res.status(404).send('Entry not found');
    }
})

router.post('/', (_req, res) =>{
    res.send('Saving a diary!')
})

export default router