import Recertification from "./recertification";

class Certification {
  name: string;
  month: string;
  year: number;
  monthExpiration: string;
  yearExpiration: number;
  recertification?: Recertification[];
  url: string;

  constructor(
    name: string,
    month: string,
    year: number,
    monthExpiration: string,
    yearExpiration: number,
    recertification: Recertification[],
    url: string
  ) {
    this.name = name;
    this.month = month;
    this.year = year;
    this.monthExpiration = monthExpiration;
    this.yearExpiration = yearExpiration;
    this.recertification = recertification;
    this.url = url;
  }
}

export default Certification;
