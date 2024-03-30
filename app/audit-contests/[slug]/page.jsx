"use client";
import { useEffect, useState } from "react";
import audits from "../audits.js";
import dummyQs from "../qna.js";
import Style from "./auditDetails.module.css"

const AuditDetails = ({ params }) => {
  const [audit, setAudit] = useState(null);

  useEffect(() => {
    const slugNum = parseInt(params.slug);
    setAudit(audits.find((audit) => audit.id === slugNum));
  }, []);

  return (
    <>
      <div className={Style.AuditDetailsContainer}>
        <div>
          <p>{audit?.contest}</p>
          <div>      
            {dummyQs?.map((q, index) => (
              <div key={index}>
                <hr className={Style.divider} />
                <p>{q.question}</p>
                <p>{q.answer}</p>
              </div>
            ))}
            <hr className={Style.divider} />
          </div>
        </div>
        <div>
          <div>
            <p>Status: {audit?.status}</p>
          </div>
          <hr className={Style.divider} />
          <div>
            <p>Total rewards: {audit?.rewards}</p>
          </div>
          <hr className={Style.divider} />
          <div>
            <p>Lead captain Hastings: 1337K1NG</p>
            <p>Lead judge: dr.Machun</p>
          </div>
          <hr className={Style.divider} />
          <div>
            <p>Started: <br/> {audit?.started}</p>
            <p>{audit?.status === "active" ? "Ends: " : "Ended: " } <br/> {audit?.ends}</p>
          </div>
          <hr className={Style.divider} />
          <div>
            <p>Connect your wallet to join this contest</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditDetails;
