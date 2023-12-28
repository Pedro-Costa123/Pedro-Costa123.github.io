import Job from "./job";

class Company {
  name: string;
  logo: string;
  positions: Job[];

  constructor(name: string, logo: string, positions: Job[]) {
    this.name = name;
    this.logo = logo;
    this.positions = positions;
  }
}

export default Company;
