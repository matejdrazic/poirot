"use client"
import React,{useState} from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"


const FormContainer = styled.div`
  .-z-1 {
    z-index: -1;
  }

  .origin-0 {
    transform-origin: 0%;
  }

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label,
  textarea:focus ~ label,
  textarea:not(:placeholder-shown) ~ label,
  select:focus ~ label,
  select:not([value='']):valid ~ label {
    transform: translateX(0) translateY(-2rem) rotate(0) skewX(0) skewY(0) scaleX(0.75) scaleY(0.75);
    color: rgba(0, 0, 0, 1);
    left: 0px;
  }
`;


const ReportBugModal = () => {
  const [selectedSeverity, setSelectedSeverity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    severity: '',
    links:'',
    high: '',
    medium: '',
    findings:'',
    additionalFindings: [''], 

  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSeverityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeverity(e.target.value);
};
const handleAddField = () => {
  setFormData({ ...formData, additionalFindings: [...formData.additionalFindings, ''] });
};

const handleAdditionalFindingChange = (index:number, value:string) => {
  const updatedAdditionalFindings = [...formData.additionalFindings];
  updatedAdditionalFindings[index] = value;
  setFormData({ ...formData, additionalFindings: updatedAdditionalFindings });
};

const handleRemoveField = (index:number) => {
  if (index !== 0) { 
    const updatedAdditionalFindings= [...formData.additionalFindings];
    updatedAdditionalFindings.splice(index, 1);
    setFormData({ ...formData, additionalFindings: updatedAdditionalFindings});
  }
};

const handleSubmit = () => {
  setIsLoading(true);
  setTimeout(() => {
    setIsLoading(false);
    setSelectedSeverity('');
    setFormData({
      title: '',
      severity: '',
      links:'',
      high: '',
      medium: '',
      findings:'',
      additionalFindings: [''], 
    });

    toast.success('Issue submitted successfully!', {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 2500
    });

  }, 3500); 
};


  return (
    <>
      <button
        className="btn mt-8 text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement)?.showModal()}
      >
        Report an Issue
      </button>

      
      <dialog id="my_modal_2" className="modal w-7/12">
        <div className="modal-box">
          <div className='flex items-start justify-between'>
            <h1 className="font-bold text-2xl ml-4">Report an issue</h1>
            <button className="btn" onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement)?.close()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </button>
          </div>
          <div className="modal-action">
          <FormContainer className="min-h-screen  p-0 sm:p-12">

          <form method="dialog">
            <div className="relative z-0 w-full my-12">
            <input
              type="text"
              name="title"
              placeholder=" "
              value={formData.title}
              onChange={handleChange}

              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label htmlFor="title" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 font-bold">Title</label>
          </div>
            <div className="relative z-0 w-full my-12">
              <label htmlFor="severity"  className="absolute duration-300 origin-0 text-gray-500 font-bold ">Severity</label>
              <div className='flex flex-row'>
                <select name="communication-channel" id="communication-channel" className="pt-3 pb-2 block w-full px-0 mt-8 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" 
                  onChange={handleSeverityChange}
                  value={selectedSeverity}>
                  <option value="">Select:</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                </select>
              </div>
            </div>

          
          

            <div className="relative z-0 w-full my-24">
              <textarea
                name="findings"
                placeholder="Describe vulnerabilites and security impacts"
                value={formData.findings}
                onChange={handleChange}
                className="pt-3 pb-2 block w-full px-0 mt-8 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                style={{ minHeight: '100px' }} 
              />
              <label htmlFor="findings" className="absolute duration-300 top-[-1.5rem] -z-1 origin-0 text-gray-500 font-bold">Findings</label>
            </div>

           
            <div className="relative z-0 w-full my-12">
              {formData.additionalFindings.map((additionalFinding, index) => (
              <div key={index} className="flex items-center">
                <textarea
                  name={`githubLinks[${index}]`}
                  placeholder="Enter GitHub link"
                  value={additionalFinding}
                  onChange={(e) => handleAdditionalFindingChange(index, e.target.value)}
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  style={{ minHeight: '100px' }}
                />
                {index !== 0 && ( 
                  <button
                    type="button"
                    onClick={() => handleRemoveField(index)}
                    className="btn text-white bg-indigo-800 ml-6 mt-4 p-2 rounded-xl"
                  >
                    Remove
                  </button>
                )}
                {index === 0 && ( 
                  <label htmlFor="additionalFindings" className="absolute duration-300 top-[-1.5rem] -z-1 origin-0 text-gray-500 font-bold">Relevant GitHub links</label>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddField}
              className="btn mt-4 text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Another Link
            </button>
        </div>

            </form>
            {isLoading?(
              <div className='flex items-center justify-center'>
                <Button disabled>
                <Loader2 className="h-6 w-16 mx-auto animate-spin" />
                  Submitting issue...
                </Button>
              </div>

            ):(
            <button
            id="button"
            type="button"
            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-indigo-700 hover:bg-indigo-800 hover:shadow-lg focus:outline-none"
            onClick={handleSubmit}
            disabled={isLoading}
          >
              Submit
          </button>
            )}

            </FormContainer>

          </div>
        </div>
      </dialog>
    </>
  );
};

export default ReportBugModal;
