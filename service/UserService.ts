
//@ts-ignore
import UserModel from "../model/User";

class UserService {

    constructor() {
        
    }

    async list() {
        return UserModel.list();
    }

    create(payload: any) {
        console.log("payload: 111 ", payload)
        return UserModel.create(payload);
    }

    update() {}


    delete() {

    }
}

export default new UserService();
