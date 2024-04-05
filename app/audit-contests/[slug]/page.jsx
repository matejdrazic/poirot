"use client"
import React, { useState, useEffect } from 'react';
import audits from '../audits';
import dummyQs from '../qna';
import Style from './auditDetails.module.css';
import JoinContestModal from '@/components/AuditConestsComponents/JoinContestModal';
import ReportBugModal from '@/components/AuditConestsComponents/ReportBugModal';
import { button } from '@material-tailwind/react';

const AuditDetails = ({ params }) => {
  const [audit, setAudit] = useState(null);
  const [showReportBugModal, setShowReportBugModal] = useState(false);

  useEffect(() => {
    const slugNum = parseInt(params.slug);
    setAudit(audits.find((audit) => audit.id === slugNum));
  }, []);

  const handleJoinContestModalClose = () => {
    setShowReportBugModal(true); 
  };

  return (
    <>
      <h1 className="text-center text-3xl mb-16 font-semibold">{audit?.contest}</h1>
      <div className={Style.AuditDetailsContainer}>
        <div>
          <img src={audit?.icon} alt="" />
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
            <p className="font-medium">
              Status: <span className={Style.ImportantInfo}>{audit?.status}</span>
            </p>
          </div>
          <div>
            <p className="font-medium">
              Total rewards: <span className={Style.ImportantInfo}>{audit?.rewards}</span>
            </p>
          </div>
          <div>
            <p className="font-medium">Lead captain Hastings: 1337K1NG</p>
            <p className="font-medium">Lead judge: dr.Machun</p>
          </div>
          <div>
            <p className="font-medium">
              {audit?.status === 'active' || audit?.status === 'completed' ? 'Started' : 'Starts'}{' '}
              <br /> <span className={Style.ImportantInfo}>{audit?.started}</span>
            </p>
            <p className="font-medium">
              {audit?.status === 'active' || audit?.status === 'upcoming' ? 'Ends:' : 'Ended:'}{' '}
              <br /> <span className={Style.ImportantInfo}>{audit?.ends}</span>
            </p>
          </div>

          {audit?.status==="active" &&
           <div className="flex justify-evenly">
           <JoinContestModal onClose={handleJoinContestModalClose} icon = {audit?.icon} project = {audit?.contest}/>
           {showReportBugModal && <ReportBugModal />}
         </div>
          }    

          {audit?.status === "upcoming" && 

            <button  className="btn w-54 mx-auto mt-8 text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"            >
              Get notified on audit start
            </button>

          }

          {audit?.status == "completed" &&
            <button  className="btn w-54 mx-auto mt-8 text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"            >
            See contest details
          </button>
          
          }
         
        </div>
      </div>
    </>
  );
};

export default AuditDetails;
