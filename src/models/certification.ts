class Certification {
  name: string;
  month: string;
  year: number;
  url: string;

  constructor(name: string, month: string, year: number, url: string) {
    this.name = name;
    this.month = month;
    this.year = year;
    this.url = url;
  }
}

export default Certification;
