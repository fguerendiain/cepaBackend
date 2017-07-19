import {DalTools} from '../lib/dalTools';

export class Users{

    private _uuid:string;
    private _name:string;
    private _username:string;
    private _avatar:string;
    private _incomingDate:number;
    private _admin:boolean;
    private _active:boolean;
    private _deleted:boolean;


    //GETTERS
    public get Uuid(){
        return this._uuid;
    }
    public get Name(){
        return this._name;
    }
    public get Username(){
        return this._username;
    }
    public get Avatar(){
        return this._avatar;
    }
    public get IncomingDate(){
        return this._incomingDate;
    }
    public get Admin(){
        return this._admin;
    }
    public get Active(){
        return this._active;
    }
    public get Deleted(){
        return this._deleted;
    }
    //-------getters

    //SETTERS
    public set Uuid(value:string){
        this._uuid = value;
    }
    public set Name(value:string){
        this._name = value;
    }
    public set Username(value:string){
        this._username = value;
    }
    public set Avatar(value:string){
        this._avatar = value;
    }
    public set IncomingDate(value:number){
        this._incomingDate = value;
    }
    public set Admin(value:boolean){
        this._admin = value;
    }
    public set Active(value:boolean){
        this._active = value;
    }
    public set Deleted(value:boolean){
        this._deleted = value;
    }
    //-------setters

    //crear usuario
    public constructor(name:string, username:string, avatar:string = , admin:boolean, active:boolean, deleted:boolean){
        this.Uuid = DalTools.UUIDGenerator();
        this.Name = name;
        this.Username = username;
        this.Avatar = avatar;
        this.IncomingDate = Date.now();
        this.Admin = admin;
        this.Active = active;
        this.Deleted = deleted;
    }
    
    //modificar usuario
    

    //borrar usuario


}




