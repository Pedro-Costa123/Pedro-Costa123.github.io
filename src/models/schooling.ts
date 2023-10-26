class Schooling {
  institution: string;
  degree: string;
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;
  grade: string;
  scale: string;

  constructor(
    institution: string,
    degree: string,
    startMonth: string,
    startYear: number,
    endMonth: string,
    endYear: number,
    grade: string,
    scale: string
  ) {
    this.institution = institution;
    this.degree = degree;
    this.startMonth = startMonth;
    this.startYear = startYear;
    this.endMonth = endMonth;
    this.endYear = endYear;
    this.grade = grade;
    this.scale = scale;
  }
}

export default Schooling;
