import {insertregisteredquery} from "../model/loginregistermode.js"

export const registerdlogic = async (Email, hashedpassword , username  , created_at ) => {
    const insertvalue = await insertregisteredquery(Email, hashedpassword , username  , created_at )
      console.log(insertvalue , "insertvalue")
     return insertvalue;
}

