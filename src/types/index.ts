export interface IBase<T> {
  status: string;
  request_id: string;
  parameters: Parameters;
  data: T;
}

export interface Parameters {
  query: string;
  page: number;
  num_pages: number;
}

export interface IDaum {
  employer_name: string;
  employer_logo?: string;
  employer_website?: string;
  employer_company_type: any;
  job_publisher: string;
  job_id: string;
  job_employment_type: string;
  job_title: string;
  job_apply_link: string;
  job_apply_is_direct: boolean;
  job_apply_quality_score: number;
  apply_options: ApplyOption[];
  job_description: string;
  job_is_remote: boolean;
  job_posted_at_timestamp: number;
  job_posted_at_datetime_utc: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_latitude: number;
  job_longitude: number;
  job_benefits?: string[];
  job_google_link: string;
  job_offer_expiration_datetime_utc?: string;
  job_offer_expiration_timestamp?: number;
  job_required_experience: JobRequiredExperience;
  job_required_skills?: string[];
  job_required_education: JobRequiredEducation;
  job_experience_in_place_of_education: boolean;
  job_min_salary?: number;
  job_max_salary?: number;
  job_salary_currency?: string;
  job_salary_period?: string;
  job_highlights: JobHighlights;
  job_job_title: any;
  job_posting_language: string;
  job_onet_soc: string;
  job_onet_job_zone: string;
  job_occupational_categories?: string[];
}

export interface ApplyOption {
  publisher: string;
  apply_link: string;
  is_direct: boolean;
}

export interface JobRequiredExperience {
  no_experience_required: boolean;
  required_experience_in_months?: number;
  experience_mentioned: boolean;
  experience_preferred: boolean;
}

export interface JobRequiredEducation {
  postgraduate_degree: boolean;
  professional_certification: boolean;
  high_school: boolean;
  associates_degree: boolean;
  bachelors_degree: boolean;
  degree_mentioned: boolean;
  degree_preferred: boolean;
  professional_certification_mentioned: boolean;
}

export interface JobHighlights {
  Qualifications: string[];
  Responsibilities?: string[];
  Benefits?: string[];
}
