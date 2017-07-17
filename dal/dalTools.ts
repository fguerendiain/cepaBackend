import uuidMod = require('uuid');
import jwtMod = require('jwt-simple');

export class DalTools{

    public static UUIDGenerator():string{
        return uuidMod();
    }
    
    public static TokenGenerator(userName:string,incomingDate:number,adminUser:boolean){
        let header = {
            "typ":"JWT",
            "alg":"HS256"
        }
        
        let payload = {
            "iss":"cepaSessionLogin",
            "iat": incomingDate,
            "username" : userName,
            "admin" : adminUser


        }

        let signature = {

        }

    }
}

