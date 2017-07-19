import {uuid as uuidMod} from 'uuid/v4';

export class DalTools{

    public static UUIDGenerator():string{
        return uuidMod();
    }

}

