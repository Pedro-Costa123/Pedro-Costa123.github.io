class Project {
  name: string;
  description: string;
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;

  constructor(
    name: string,
    description: string,
    startMonth: string,
    startYear: number,
    endMonth: string,
    endYear: number
  ) {
    this.name = name;
    this.description = description;
    this.startMonth = startMonth;
    this.startYear = startYear;
    this.endMonth = endMonth;
    this.endYear = endYear;
  }
}

export default Project;
