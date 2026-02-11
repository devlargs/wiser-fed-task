import { mockJobs } from "@/data/mockJobs";
import { JobRow } from "../JobRow/JobRow";
import styles from "./JobListing.module.scss";

export function JobListing() {
  return (
    <div className={styles.page}>
      <div className={styles.jobsContainer}>
        {mockJobs.map((job) => (
          <JobRow key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
