import ProjectUrls from "./projects-urls";

class Project {
  name: string;
  description: string;
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;
  urls: ProjectUrls[];

  constructor(
    name: string,
    description: string,
    startMonth: string,
    startYear: number,
    endMonth: string,
    endYear: number,
    urls: ProjectUrls[]
  ) {
    this.name = name;
    this.description = description;
    this.startMonth = startMonth;
    this.startYear = startYear;
    this.endMonth = endMonth;
    this.endYear = endYear;
    this.urls = urls;
  }
}

export default Project;
