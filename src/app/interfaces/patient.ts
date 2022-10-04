export interface Patient {
    id: string;
    projectName: string;
    projectReferenceNumber: string;
    organizationName: string;
    state: string;
    fundingAuthority:string;
    fundingAmount:string;
    projectDomain?: "Healthcare" | "Aerospace" | "Engineering" | "Other",
    projectCriticality?: "High" | "Medium",
    projectStartDate:string;
    projectNextReviewDate: string;
    projectLead: string,
    roleTrlAssessment?: "Project Lead" | "Project Team Member" | "Assigned Reviewer",
    zipCode: string;
    mobileNumber: string;
    emailId: string;
    trlAssessmentDate: string;
    firstName: string;
    lastName: string;
    city: string;
    patientLocation: string;
    age: number;
    sex: string;
    //password: string;
    fullName: string;
    relation:string;
    familyMobileNumber:string;
    familyMemberAge:string;
    
    surveyData?: any;
    userType : string;
    category?: "Pending" | "Healthy" | "Virtual Ward" | "ICU";
    healthPercent ?: number;
    location?: any;
}
