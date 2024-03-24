import { Offer } from "./Offer";
import { Applicant } from "./Applicants";
export interface JobApplicants {
    id?: number;
    status: string;
    date: Date;
    jobOffer: Offer;
    applicant: Applicant;
  } 