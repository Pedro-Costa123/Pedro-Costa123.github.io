import Company from "../models/company";
import Job from "../models/job";

/**
 * workTime Function
 *
 * This function calculates the duration between two dates in years and months.
 * It takes four parameters: startMonth, startYear, endMonth, and endYear.
 *
 * The function creates two Date objects, date1 and date2, representing the start and end dates.
 * If endMonth and endYear are not provided, the current date is used as the end date.
 *
 * The function calculates the time difference between date2 and date1 in milliseconds, then converts this to months.
 * It also calculates the number of years passed by dividing the total months by 12.
 *
 * The function returns a string representing the duration in years and months.
 * If only one month has passed, it returns '1 month'.
 * If less than a year has passed, it returns the number of months followed by 'months'.
 * If an exact number of years has passed, it returns the number of years followed by 'years'.
 * If a year or more has passed, it returns the number of years followed by 'years' and the remaining number of months followed by 'months'.
 *
 */
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

  if (monthsPassed === 1) {
    return `1 month`;
  } else if (yearsPassed === 0) {
    return `${monthsPassed} months`;
  } else if (monthsPassed % 12 === 0) {
    return `${yearsPassed} years`;
  } else {
    return `${yearsPassed} years and ${monthsPassed % 12} months`;
  }
};

/**
 * loadCompanies Function
 *
 * This function creates an array of Company objects from a data object.
 * It takes one parameter: data.
 *
 * The function initializes an empty array, loadedCompanies, to store the Company objects.
 * It loops over the 'jobs' array in the data object, creating a new Company object for each job.
 *
 * For each job, the function creates an array of Job objects from the 'positions' array in the job object.
 * It creates a new Job object for each position, using the properties of the position object.
 *
 * The function pushes the new Job objects to the companyJobs array, then creates a new Company object using the name and logo properties of the job object and the companyJobs array.
 * It pushes the new Company object to the loadedCompanies array.
 *
 * The function returns the loadedCompanies array.
 *
 */
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
        job.keyFeatures,
        job.startMonth,
        job.startYear,
        job.endMonth,
        job.endYear
      );
      companyJobs.push(newJob);
    }
    const newCompany = new Company(company.name, company.logo, companyJobs);
    loadedCompanies.push(newCompany);
  }
  return loadedCompanies;
};
