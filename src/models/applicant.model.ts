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
  username!: string;
  password!: string;
  email!: string;
  applicantFirstname!: string;
  applicantLastname!: string;
  userPhoneNumber!: string;
  userJoinDate!: Date;
  applicantBirthday!: Date;
  notifications: Notification[] = [];
  alerts: Alert[] = [];
  applicantProfile: ApplicantProfile | null = null;
}
