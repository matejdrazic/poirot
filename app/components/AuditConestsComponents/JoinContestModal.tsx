"use client"
import { button } from '@material-tailwind/react';
import Image from 'next/image';
import React, {use, useState} from 'react';
import Link from 'next/link';
import { Loader2 } from "lucide-react"
 
import { Button } from "@/components/ui/button"


const JoinContestModal = ({ onClose, icon, project }: { onClose: () => void; icon: string; project:string; }) => {
  
  const [activeButton, setActiveButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [joinAlert, setJoinAlert] = useState(false);

  const handleCloseModal = () => {
    onClose(); 
    setJoinAlert(true);
    setActiveButton(true);
  };

  const handleJoinClick = () => {
    setLoading(true); 
  
    setTimeout(() => {
      (document.getElementById('my_modal_1') as HTMLDialogElement)?.showModal(); 
      setLoading(false)
    }, 1800);
  };

  const handleCancel = ()=>{
    return;
  }
  
  return (
    <>
       {activeButton ? (
        <Link href={"https://github.com/matejdrazic/poirot"} target='_blank'>
          <button
            className="btn mt-8 text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View GitHub repository
          </button>
        </Link>
      ) : (
        loading ? (
          <Button disabled className='mt-8'>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating join info...
          </Button>
        ) : (
          <button
            className="btn mt-8 text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleJoinClick}
          >
            Join Audit Contest
          </button>
        )
      )}



      <dialog id="my_modal_1" className="modal w-7/12">
        <div className="modal-box">
        <div className='flex flex-col gap-8 items-center justify-center'>
          <Image
                  src={icon}
                  alt='project-icon'
                  width={450}
                  height={150}
            />
            <h1 className="font-bold text-2xl mb-4">Congrats!</h1>
            <p className='text-xl  font-medium'>You just joined <span className='italic text-xl'>"{project}"</span> contest!</p>
            <p className='text-xl '>A private repo was created for you to start submitting issues!</p>
            <Link href={"https://github.com/matejdrazic/poirot"} target='_blank'>
              <div className='flex flex-row items-center justify-center p-4 gap-4 mt-8 border-2 border-indigo-400 rounded-xl w-64 hover:bg-indigo-100'>
                <svg fill='indigo' className='mt-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <p className='text-lg font-bold text-indigo-400'>View repo</p>
              </div>
            </Link>
        </div>
          <div className="modal-action mt-12">
            <form method="dialog">
              <div className='flex flex-row gap-8 items-center justify-center'>
                <button className='btn rounded-lg bg-indigo-400 hover:bg-indigo-500  p-2 w-32' onClick={handleCloseModal}><span className='text-lg font-medium hover:font-extrabold'>Done</span></button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
   
    </>
  );
};

export default JoinContestModal;
