import {DalTools} from '../lib/dalTools';
import {SessionDal} from '../dal/sessionDal';

export class Session{

    private _uuid:string;
    private _useruuid:string;
    private _token:string;
    private _incomingDate:number;
    private _deleted:boolean;

    //GETTERS
    public get Uuid(){
        return this._uuid;
    }

    public get Useruuid(){
        return this._useruuid;
    }

    public get Token(){
        return this._token;
    }

    public get IncomingDate(){
        return this._incomingDate;
    }

    public get Deleted(){
        return this._deleted;
    }
    //--------getters

    //SETTERS
    public set Uuid(value:string){
        this._uuid = value;
    }

    public set Useruuid(value:string){
        this._useruuid = value;
    }

    public set Token(value:string){
        this._token = value;
    }

    public set IncomingDate(value:number){
        this._incomingDate = value;
    }

    public set Deleted(value:boolean){
        this._deleted = value;
    }
    //-------setters



    private constructor(userid:string, userName:string, userAdmin:boolean){
        this.Uuid = DalTools.UUIDGenerator();
        this.Useruuid = userid;
        this.IncomingDate = Date.now();
        this.Token = SessionDal.TokenGenerator(userName,this.IncomingDate,userAdmin);
        this.Deleted = false;
    }

    public DeleteSession():void{
        this.Deleted = true;
    }



    public static CreateSession(userName:string, password:string):Session{
//        let validUser:string //= UserDal.getByCredentials(userName,password);

//--------- //HARDCODEO DATOS NECESARIOS DE UN USUARIO VALIDO PARA SEGUIR   
        let validUser = {
            uuid : "identificador",
            admin : true
        }
//-----------

        if(validUser !== null){
            return new Session(validUser.uuid,userName,validUser.admin);
        }
        else{
            return null;
        }
    }
}

