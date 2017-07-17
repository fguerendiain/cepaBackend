import {uuidMod} from 'uuid';
import {jwtMod} from 'jwt-simple';

export class DalTools{

    public static UUIDGenerator():string{
        return uuidMod();
    }
    
    public static TokenGenerator(userName:string,incomingDate:number,adminUser:boolean):string{

        let payload = {
            "iss":"cepaSessionLogin",
            "iat": incomingDate,
            "username" : userName,
            "admin" : adminUser
        }

        let secret = "k@d34SDd&-";

        return jwtMod.encode(payload,secret);


    }
}

