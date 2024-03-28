import Link from "next/link";
import Audit from "../components/Audit";
import Styles from "./auditContest.module.css";
import dummyAudits from "./audits";

const AuditContest = () => {
  return (
    <>
      <div>
        <div className={Styles.AuditContestWrapper}>
          <h1>Active</h1>
          <Audit
            contest="Contest"
            rewards="Rewards"
            started="Started"
            ends="Ends"
          />
          {dummyAudits.active.map((audit, index) => (
            <Link href={"/audit-contests/" + audit.id}>
              <Audit
                key={index}
                contest={audit.contest}
                rewards={audit.rewards}
                started={audit.started}
                ends={audit.ends}
              />
            </Link>
          ))}
          <h1>Upcoming</h1>
          <Audit
            contest="Contest"
            rewards="Rewards"
            started="Starts"
            ends="Ends"
          />
          {dummyAudits.upcoming.map((audit, index) => (
            <Link href={"/audit-contests/" + audit.id}>
              <Audit
                key={index}
                contest={audit.contest}
                rewards={audit.rewards}
                started={audit.started}
                ends={audit.ends}
              />
            </Link>
          ))}
          <h1>Completed</h1>
          <Audit
            contest="Contest"
            rewards="Rewards"
            started="Started"
            ends="Ended"
          />
          {dummyAudits.completed.map((audit, index) => (
            <Link href={"/audit-contests/" + audit.id}>
              <Audit
                key={index}
                contest={audit.contest}
                rewards={audit.rewards}
                started={audit.started}
                ends={audit.ends}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AuditContest;
