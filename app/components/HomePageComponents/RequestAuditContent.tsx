import React from 'react';
import { Button } from "@/components/ui/button";

const RequestAuditContent = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-8 w-max h-72 bg-transparent rounded-xl'>
        <h1 className="mb-4 ml-4 bg-gradient-to-r from-indigo-800 to-purple-400 font-bold inline-block text-transparent bg-clip-text text-6xl text-center font-extrabold sm:text-4xl">Try the final exam audit</h1>
        <p className='font-bold text-xl mx-8 text-center sm:text-base'>Mobilize Poirot&apos;s distributed network of auditors to protect your users from the most dangerous vulnerabilities</p>
        <Button variant="secondary"><span className='text-lg'>Request Audit</span></Button>
      </div>
    </>
  );
};

export default RequestAuditContent;
