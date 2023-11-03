import Company from "../models/company";
import Job from "../models/job";

export const workTime = (
  startMonth: string,
  startYear: string,
  endMonth: string,
  endYear: string
) => {
  const date1 = new Date(`${startMonth} 1, ${startYear}`);
  let date2;
  if (endMonth === "" && endYear === "0") {
    date2 = new Date();
  } else {
    date2 = new Date(`${endMonth} 1, ${endYear}`);
  }

  const timeDifference = date2.getTime() - date1.getTime();

  const monthsPassed = Math.floor(
    timeDifference / (1000 * 60 * 60 * 24 * 30) + 1
  );

  const yearsPassed = Math.floor(monthsPassed / 12);

  if (yearsPassed === 0) {
    return `${monthsPassed % 12} months`;
  } else if (monthsPassed === 1) {
    return `${monthsPassed % 12} month`;
  } else {
    return `${yearsPassed} years and ${monthsPassed % 12} months`;
  }
};

export const loadCompanies = (data: any): Company[] => {
  const loadedCompanies = [] as Company[];
  for (let company of data.jobs) {
    const companyJobs = [] as Job[];
    for (let job of company.positions) {
      const newJob = new Job(
        job.title,
        job.company,
        job.type,
        job.location,
        job.description,
        job.startMonth,
        job.startYear,
        job.endMonth,
        job.endYear
      );
      companyJobs.push(newJob);
    }
    const newCompany = new Company(company.name, companyJobs);
    loadedCompanies.push(newCompany);
  }
  return loadedCompanies;
};
