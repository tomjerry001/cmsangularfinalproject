
import { Staff } from "./staff";


export class Login {
    LoginId: number = 0;
    Username: string = '';
    Password: string = '';
    StaffId: number = 0;



    // Relationship
    Staff: Staff = new Staff();

    constructor(
        loginId?: number,
        username?: string,
        password?: string,
        staffId?: number
    ) {
        if (loginId) this.LoginId = loginId;
        if (username) this.Username = username;
        if (password) this.Password = password;
        if (staffId) this.StaffId = staffId;
    }

}
