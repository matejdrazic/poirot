"use client"
import { useEffect, useState } from "react";
import audits from "../audits.js";
import dummyQs from "../qna.js";
import Style from "./auditDetails.module.css"
import JoinContestButton from "@/components/AuditConestsComponents/JoinContestButton.tsx";

const AuditDetails = ({ params }) => {
  const [audit, setAudit] = useState(null);

  useEffect(() => {
    const slugNum = parseInt(params.slug);
    setAudit(audits.find((audit) => audit.id === slugNum));
  }, []);

  return (
    <>
    <h1 className="text-center text-3xl mb-16 font-semibold">{audit?.contest}</h1>
      <div className={Style.AuditDetailsContainer}>
        <div>
          <img src={audit?.icon} alt=""/>
          <p className="font-bold text-2xl">Context Q&A</p>
          <div className={Style.QuestionsContainer}>      
            {dummyQs?.map((q, index) => (
              <div className={Style.Question} key={index}>
                <p className={Style.ImportantInfo}>{q.question}</p>
                <p>{q.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={Style.RightCard}>
          <div>
            <p>Status: <span className={Style.ImportantInfo}>{audit?.status}</span></p>
          </div>
          <div>
            <p>Total rewards: <span className={Style.ImportantInfo}>{audit?.rewards}</span></p>
          </div>
          <div>
            <p>Lead captain Hastings: 1337K1NG</p>
            <p>Lead judge: dr.Machun</p>
          </div>
          <div>
            <p>Started: <br/> <span className={Style.ImportantInfo}>{audit?.started}</span></p>
            <p>{audit?.status === "active" ? "Ends: " : "Ended: " } <br/> <span className={Style.ImportantInfo}>{audit?.ends}</span></p>
          </div>
          <div className="flex items-center justify-center">
            <JoinContestButton/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditDetails;
