"use client";
import { useEffect } from "react";
import audits from "../audits.js";

const AuditDetails = ({ params }) => {
  let audit = null;
  useEffect(() => {
    console.log("params.slug:", params.slug);
    console.log("audits.active:", audits.active);
    console.log("audits.upcoming:", audits.upcoming);
    console.log("audits.completed:", audits.completed);
  }, [params.slug]);

  useEffect(() => {
    if (params.slug > 0 && params.slug < 3) {
      audit = audits.active.find((audit) => audit.id === params.slug);
    } else if (params.slug > 2 && params.slug < 5) {
      audit = audits.upcoming.find((audit) => audit.id === params.slug);
    } else if (params.slug > 4 && params.slug < 7) {
      audit = audits.completed.find((audit) => audit.id === params.slug);
    }
    console.log("audit: " + audit);
    console.log("audits: " + audits);
  }, []);

  return (
    <>
      <div>
        <p>{audit?.contest}</p>
      </div>
    </>
  );
};

export default AuditDetails;
