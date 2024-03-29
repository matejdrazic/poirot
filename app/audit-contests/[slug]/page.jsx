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
          <p>{audit?.rewards}</p>
          <p>{audit?.started}</p>
          <p>{audit?.ends}</p>
          <div>      
            {dummyQs?.map((q, index) => (
              <div key={index}>
                <p>{q.question}</p>
                <p>{q.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <p>Status: {audit?.status}</p>
          </div>
          <div>
            <p>Total rewards: {audit?.rewards}</p>
          </div>
          <div>
            <p>Lead captain Hastings: 1337K1NG</p>
            <p>Lead judge: dr.Machun</p>
          </div>
          <div>
            <p>Started: <br/> {audit?.started}</p>
            <p>{audit?.status === "active" ? "Ends: " : "Ended: " } <br/> {audit?.ends}</p>
          </div>
          <div>
            <p>Connect your wallet to join this contest</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditDetails;
