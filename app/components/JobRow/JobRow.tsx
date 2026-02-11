import Image from "next/image";
import type { Job } from "@/data/mockJobs";
import styles from "./JobRow.module.scss";

interface JobRowProps {
  job: Job;
}

export function JobRow({ job }: JobRowProps) {
  return (
    <div className={styles.row}>
      <div className={styles.content}>
        <div className={styles.jobInfo}>
          <span className={styles.jobTitle}>{job.title}</span>
          <span className={styles.jobTeam}>{job.team}</span>
        </div>

        <div className={styles.logoContainer}>
          <Image
            src={job.logoUrl}
            alt={job.brand}
            width={126}
            height={30}
            className={styles.brandLogo}
          />
        </div>

        <div className={styles.location}>
          <span className={styles.locationText}>{job.location}</span>
        </div>

        <div className={styles.ctas}>
          <a href={job.link} className={styles.viewJobButton}>
            <span className={styles.viewJobText}>View job</span>
          </a>
        </div>
      </div>

      <div
        className={styles.accentLine}
        style={{ backgroundColor: job.accentColor }}
      />
    </div>
  );
}
