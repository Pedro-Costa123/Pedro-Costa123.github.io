import Job from "./job";

class Company {
  name: string;
  positions: Job[];

  constructor(name: string, positions: Job[]) {
    this.name = name;
    this.positions = positions;
  }
}

export default Company;
