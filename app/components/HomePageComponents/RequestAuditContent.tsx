import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const RequestAuditContent = () => {

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-8 w-max h-72 bg-transparent rounded-xl'>
        <h1 className="mb-4 ml-4 bg-gradient-to-r from-indigo-800 to-purple-400 font-bold inline-block text-transparent bg-clip-text text-6xl text-center font-extrabold sm:text-4xl">Try the final exam audit</h1>
        <p className='font-bold text-2xl mx-8 text-center '>Mobilize Poirot&apos;s distributed network of auditors to protect your users from the most dangerous vulnerabilities</p>
        <Link href={"/request-audit"}>
        <Button className="rounded-2xl font-bold bg-indigo-50 border-2 border-indigo-600  animate-pulse" variant="secondary" style={{ width: '500px', height: '100px' }}>
          <span className='text-3xl text-indigo-400'>Request Audit</span>
        </Button>
        </Link>
      </div>
    </>
  );
};

export default RequestAuditContent;
