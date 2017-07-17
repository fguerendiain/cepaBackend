import {DalTools} from '../dal/dalTools';

class Session{

    uuid:string;
    useruuid:string;
    token:string;
    incomingDate:number;
    deleted:boolean;

    private constructor(userid:string, userName:string, userAdmin:boolean){
        this.uuid = DalTools.UUIDGenerator();
        this.useruuid = userid;
        this.incomingDate = Date.now();
        this.token = DalTools.TokenGenerator(userName,this.incomingDate,userAdmin);
        this.deleted = false;
    }

    public static CreateSession(userName:string, password:string):Session{
//        let validUser:string //= UserResource.getByCredentials(userName,password);
     
        let validUser = {   //HARDCODEO DATOS NECESARIOS DE UN USUARIO VALIDO PARA SEGUIR
            username : "",
            admin : true
        }

        if(validUser !== null){
            return new Session(validUser.username,userName,validUser.admin);
        }
        else{
            return null;
        }
    }
}

