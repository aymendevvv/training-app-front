export class User {

    constructor(){
        this.user_join_date = new Date();
    }

    user_id!: number;
    username!: string | null;
    user_password!: string | null;
    user_join_date!: Date ;
    user_status!: string | null;
    user_phone_number!: string | null;
    email!: string | null;
    notifications!: any[];
    alerts!: any[];
    
    // applicant properties 

    // applications!: any[];
    // applicantProfile!: any | null;
    // applicant_birthday!: Date | null;
    // applicant_firstname!: string | null;
    // applicant_lastname!: string | null;

}
