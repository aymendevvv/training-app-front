interface Notification {
    // Define the structure of Notification here
  }
  
interface Alert {
    // Define the structure of Alert here
}
  
interface ApplicantProfile {
    // Define the structure of ApplicantProfile here
}
export class Applicant {
  username!: string | null;
  password!: string | null;
  email!: string | null;
  applicantFirstname!: string | null;
  applicantLastname!: string | null;
  userPhoneNumber!: string | null;
  userJoinDate!: Date | null;
  applicantBirthday!: Date | null ;
  notifications: Notification[] = [] ;
  alerts: Alert[] = [];
  applicantProfile: ApplicantProfile | null = null;
}
