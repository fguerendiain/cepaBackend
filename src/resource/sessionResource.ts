import {Session} from '../entities/session';

class SessionResource{

    public static Add(req, res){

        let userName:string = req.body.username;
        let password:string = req.body.password;

        if(userName != null && password != null)
        {
            let newSession:Session = Session.CreateSession(userName,password);
            if(newSession != null){
                return res = JSON.stringify(newSession);
            }
        }
        return res.status(400);
    }

    

}