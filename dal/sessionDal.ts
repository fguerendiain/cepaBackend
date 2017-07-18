import jwtMod from 'jwt-simple';

export class SessionDal{


    public static TokenGenerator(userName:string,incomingDate:number,adminUser:boolean):string{
        
        let payload = {
            "iss":"cepaSessionLogin",
            "iat": incomingDate,
            "username" : userName,
            "admin" : adminUser
        }
        let secret = "k@d34SDd&-";
        return jwtMod.encode(payload,secret,'HS256',0);
    }




}