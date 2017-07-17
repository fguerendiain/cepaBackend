import {DalTools} from '../dal/dalTools';

class Session{

    uuid:string;
    useruuid:string;
    token:string;
    incomingDate:number;
    deleted:boolean;

    private constructor(userid:string, userName:string){
        this.uuid = DalTools.UUIDGenerator();
        this.useruuid = userid;
        this.incomingDate = Date.now();
        this.token = DalTools.TokenGenerator(userName,this.incomingDate);
        this.deleted = false;
    }

    public static CreateSession(userName:string, password:string):Session{
//        let validUser:string //= UserResource.getByCredentials(userName,password);
        let validUser {
            username:string = "",
            admin : true
        }

        if(validUser){
            return new Session(validUser.username,userName,validUser.admin);
        }
        else{
            return null;
        }
    }
}

