import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const port=process.env.PORT || 8000;

const app=express();

app.use(cors());

app.get("/",function(req,res){
    try{
        return res.status(200).json({ok:true,message:"Healthy Server"});
    }
    catch(err:any){
        return res.status(500).json({ok:true,message:err.message});
    }
});

app.use(function(err:any,req:Request,res:Response,next:any){
    return res.status(500).json({ok:true,message:err.message});
});

app.listen(port,function(){
    console.log(`Server running on port ${port}`);
})