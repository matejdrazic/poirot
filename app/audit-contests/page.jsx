import Link from "next/link";
import Audit from "../components/Audit";
import Styles from "./auditContest.module.css";
import dummyAudits from "./audits";

const AuditContest = () => {
  return (
    <>
      <div>
        <div className={Styles.AuditContestWrapper}>
          <div>
            <div className={Styles.sectionWrapper}>
              <h1>Active</h1>
              <Audit
                contest="Contest"
                rewards="Rewards"
                started="Started"
                ends="Ends"
              />
              {dummyAudits.map((audit, index) => (
                audit.status === "active" && (
                  <Link href={"/audit-contests/" + audit.id}>
                    <Audit
                      className={Styles.audit}
                      key={index}
                      contest={audit.contest}
                      description={audit.description}
                      rewards={audit.rewards}
                      started={audit.started}
                      ends={audit.ends}
                    />
                  </Link>
                )
              ))}
            </div>
            <div className={Styles.sectionWrapper}>
              <h1>Completed</h1>
              <Audit
                contest="Contest"
                description
                rewards="Rewards"
                started="Started"
                ends="Ended"
              />
              {dummyAudits.map((audit, index) => (
                audit.status === "completed" && (
                  <Link href={"/audit-contests/" + audit.id}>
                    <Audit
                      className={Styles.audit}
                      key={index}
                      contest={audit.contest}
                      description={audit.description}
                      rewards={audit.rewards}
                      started={audit.started}
                      ends={audit.ends}
                    />
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className={Styles.sectionWrapper} id={Styles.upcoming}>
            <h1>Upcoming</h1>
            <Audit
              contest="Contest"
              description=""
              rewards="Rewards"
              started="Starts"
              ends="Ends"
            />
            {dummyAudits.map((audit, index) => (
              audit.status === "upcoming" && (
                <Link href={"/audit-contests/" + audit.id}>
                  <Audit
                    className={Styles.audit}
                    key={index}
                    contest={audit.contest}
                    description={audit.description}
                    rewards={audit.rewards}
                    started={audit.started}
                    ends={audit.ends}
                  />
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditContest;