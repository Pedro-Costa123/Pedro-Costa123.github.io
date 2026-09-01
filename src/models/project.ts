import ProjectUrls from "./projects-urls";
import CaseStudy from "./case-study";

class Project {
  name: string;
  caseStudy: CaseStudy;
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;
  urls: ProjectUrls[];

  constructor(
    name: string,
    caseStudy: CaseStudy,
    startMonth: string,
    startYear: number,
    endMonth: string,
    endYear: number,
    urls: ProjectUrls[]
  ) {
    this.name = name;
    this.caseStudy = caseStudy;
    this.startMonth = startMonth;
    this.startYear = startYear;
    this.endMonth = endMonth;
    this.endYear = endYear;
    this.urls = urls;
  }
}

export default Project;
