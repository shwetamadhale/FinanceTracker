import express, { Request, Response } from "express";
import FinancialRecordModel from "../schema/financial-record";

const router = express.Router();

// ROyte 1 - Query list of expenses -> match userid 
router.get("/getAllByUserID/:userId", async (req: Request, res: Response) =>{
    try{
        const userId = req.params.userId;
        const records = await FinancialRecordModel.find({userId: })
        if(records.length == 0){
            return res.status(404).send("No records found for the user.")
        }
        res.status(200).send(records);
    } catch(err){
        res.status(500).send(err)
    }
});


// Rute 2: Add new record
router.post("/", async (req: Request, res: Response) =>{
    try{
       const newRecordBody = req.body
       const newRecord = new FinancialRecordModel(newRecordBody)
       const savedRecord = await newRecord.save();
        res.status(200).send(savedRecord);
    } catch(err){
        res.status(500).send(err)
    }
});

export default router;