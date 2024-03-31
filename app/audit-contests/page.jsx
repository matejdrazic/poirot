// AuditContest.js

import Link from "next/link";
import Audit from "../components/Audit";
import Styles from "./auditContest.module.css";
import dummyAudits from "./audits";
import React from 'react';
import AuditsHero from "@/components/AuditConestsComponents/AuditsHero";
import AuditHeaders from '../components/AuditHeaders'
import HeaderStyles from '../components/AuditHeaders.module.css'


const AuditContest = () => {
  return (
    <>
      <AuditsHero/>
      <div className={Styles.AuditContestWrapper}>
        <div className={Styles.sectionWrapper}>
          <h1>Active</h1>
          <AuditHeaders
            contest={<strong className={HeaderStyles.header}>Contest</strong>}
            rewards={<strong className={HeaderStyles.header}>Rewards</strong>}
            started={<strong className={HeaderStyles.header}>Started</strong>}
            ends={<strong className={HeaderStyles.header}>Ends</strong>}
          />
          {dummyAudits.map((audit, index) => (
            audit.status === "active" && (
              <React.Fragment key={index}>
                <Link href={"/audit-contests/" + audit.id}>
                  <div className={Styles.individualAudit}>
                    <aside><img src={audit.icon} alt=""/></aside>
                    <Audit
                      className={Styles.audit}
                      contest={audit.contest}
                      description={audit.description}
                      rewards={audit.rewards}
                      started={audit.started}
                      ends={audit.ends}
                      icon={audit.icon}
                    />
                  </div>
                </Link>
                {index !== dummyAudits.length - 1 && <div className={Styles.divider}></div>}
              </React.Fragment>
            )
          ))}
          {dummyAudits.filter(audit => audit.status === "active").length === 0 && <p>No audits yet</p>}
        </div>
        
        <div className={Styles.sectionWrapper}>
          <h1>Completed</h1>
          <AuditHeaders
            contest={<strong className={HeaderStyles.header}>Contest</strong>}
            rewards={<strong className={HeaderStyles.header}>Rewards</strong>}
            started={<strong className={HeaderStyles.header}>Started</strong>}
            ends={<strong className={HeaderStyles.header}>Ended</strong>}
          />
          {dummyAudits.map((audit, index) => (
            audit.status === "completed" && (
              <React.Fragment key={index}>
                <Link href={"/audit-contests/" + audit.id}>
                  <div className={Styles.individualAudit}>
                  <aside><img src={audit.icon} alt="" /></aside>
                    <Audit
                      className={Styles.audit}
                      contest={audit.contest}
                      description={audit.description}
                      rewards={audit.rewards}
                      started={audit.started}
                      ends={audit.ends}
                      icon={audit.icon}
                    />
                  </div>
                </Link>
                {index !== dummyAudits.length - 1 && <div className={Styles.divider}></div>}
              </React.Fragment>
            )
          ))}
          {dummyAudits.filter(audit => audit.status === "completed").length === 0 && <p>No audits yet</p>}
        </div>
        
        <div className={Styles.sectionWrapper} id={Styles.upcoming}>
          <h1>Upcoming</h1>
          <AuditHeaders
            contest={<strong className={HeaderStyles.header}>Contest</strong>}
            rewards={<strong className={HeaderStyles.header}>Rewards</strong>}
            started={<strong className={HeaderStyles.header}>Starts</strong>}
            ends={<strong className={HeaderStyles.header}>Ends</strong>}
          />
          {dummyAudits.map((audit, index) => (
            audit.status === "upcoming" && (
              <React.Fragment key={index}>
                <Link href={"/audit-contests/" + audit.id}>
                  <div className={Styles.individualAudit}>
                  <aside><img src={audit.icon} alt="" /></aside>

                    <Audit
                      className={Styles.audit}
                      contest={audit.contest}
                      description={audit.description}
                      rewards={audit.rewards}
                      started={audit.started}
                      ends={audit.ends}
                      icon = {audit.icon}
                    />
                  </div>
                </Link>
                {index !== dummyAudits.length - 1 && <div className={Styles.divider}></div>}
              </React.Fragment>
            )
          ))}
          {dummyAudits.filter(audit => audit.status === "upcoming").length === 0 && <p>No audits yet</p>}
        </div>
      </div>
    </>
  );
};

export default AuditContest;
