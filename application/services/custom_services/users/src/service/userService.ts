import { Request, Response } from 'express';
import {userDao} from '../dao/userDao';
import { CustomLogger } from '../config/Logger'
let user = new userDao();

export class userService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into userService.ts: GpGetAllValues')
     
     user.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from userService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into userService.ts: GpCreate')
     const  userData = req.body;
     user.GpCreate(userData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from userService.ts: GpCreate')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into userService.ts: GpDelete')
     const  userId = req.params.id;
     user.GpDelete(userId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from userService.ts: GpDelete')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into userService.ts: GpUpdate')
     const  userData = req.body;
     user.GpUpdate(userData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from userService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into userService.ts: GpGetNounById')
     const  userId = req.params.id;
     user.GpGetNounById(userId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from userService.ts: GpGetNounById')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into userService.ts: GpSearch')
     const  userData = req.query;
     user.GpSearch(userData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from userService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into userService.ts: GpSearchForUpdate')
     const  userData = req.body;
     user.GpSearchForUpdate(userData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from userService.ts: GpSearchForUpdate')
         callback(response);
         });
    }


}