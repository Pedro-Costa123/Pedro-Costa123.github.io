import CaseStudy from "./case-study";

class Job {
  title: string;
  company: string;
  type: string;
  location: string;
  caseStudy: CaseStudy;
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;

  constructor(
    title: string,
    company: string,
    type: string,
    location: string,
    caseStudy: CaseStudy,
    startMonth: string,
    startYear: number,
    endMonth: string,
    endYear: number
  ) {
    this.title = title;
    this.company = company;
    this.type = type;
    this.location = location;
    this.caseStudy = caseStudy;
    this.startMonth = startMonth;
    this.startYear = startYear;
    this.endMonth = endMonth;
    this.endYear = endYear;
  }
}

export default Job;
