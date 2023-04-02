class Content {
  home: boolean;
  about: boolean;
  education: boolean;
  work: boolean;
  contact: boolean;

  constructor(
    home: boolean,
    about: boolean,
    education: boolean,
    work: boolean,
    contact: boolean
  ) {
    this.home = home;
    this.about = about;
    this.education = education;
    this.work = work;
    this.contact = contact;
  }
}

export default Content;
