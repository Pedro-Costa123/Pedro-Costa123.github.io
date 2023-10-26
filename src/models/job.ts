class Job {
  title: string;
  company: string;
  type: string;
  location: string;
  description: string;
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;

  constructor(
    title: string,
    company: string,
    type: string,
    location: string,
    description: string,
    startMonth: string,
    startYear: number,
    endMonth: string,
    endYear: number
  ) {
    this.title = title;
    this.company = company;
    this.type = type;
    this.location = location;
    this.description = description;
    this.startMonth = startMonth;
    this.startYear = startYear;
    this.endMonth = endMonth;
    this.endYear = endYear;
  }
}

export default Job;
