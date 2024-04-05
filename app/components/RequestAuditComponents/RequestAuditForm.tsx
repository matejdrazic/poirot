"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logoImage from '../../../public/poirot.jpg'
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

const RequestAuditForm = () => {
  const [selectedChannel, setSelectedChannel] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    websiteTwitter: '',
    contactPersonName: '',
    communicationChannel: '',
    phone: '',
    telegram: '',
    discord: '',
    email: '',
  });
  const [errorVisible, setErrorVisible] = useState(false);

  const toggleError = () => {
    setErrorVisible(!errorVisible);
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChannelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChannel(e.target.value);
};
  

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFormData({
        projectName: '',
        websiteTwitter: '',
        contactPersonName: '',
        communicationChannel: '"" ',
        phone: '',
        telegram: '',
        discord: '',
        email: '',
      });
      setSelectedChannel('');

      toast.success('Form submitted successfully!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500
      });
    }, 3500); 
   
  };

  

  return (
    <FormContainer className="min-h-screen  p-0 sm:p-12">
      <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
        <Image src={logoImage} alt='logo' width={60} height={50} className='m-auto'/>
        <h1 className="text-3xl font-bold my-8 text-center">Request an Audit</h1>
        <form id="form" noValidate className='mt-12'>
          <div className="relative z-0 w-full my-12">
            <input
              type="text"
              name="projectName"
              placeholder=" "
              required
              value={formData.projectName}
              onChange={handleChange}

              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label htmlFor="projectName" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Project name</label>
            <span className={`text-sm text-red-600 ${errorVisible ? '' : 'hidden'}`} id="error">Project name is required</span>
          </div>

          <div className="relative z-0 w-full my-12">
            <input
              type="text"
              name="websiteTwitter"
              placeholder=" "
              required
              value={formData.websiteTwitter}
              onChange={handleChange}

              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label htmlFor="websiteTwitter" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Website/Twitter</label>
            <span className={`text-sm text-red-600 ${errorVisible ? '' : 'hidden'}`} id="error">Website/Twtitter is required</span>
          </div>

          <div className="relative z-0 w-full my-12">
            <input
              type="text"
              name="contactPersonName"
              placeholder=" "
              required
              value={formData.contactPersonName}
              onChange={handleChange}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label htmlFor="contactPersonName" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Name of contact person</label>
            <span className={`text-sm text-red-600 ${errorVisible ? '' : 'hidden'}`} id="error">Name of contact person is required</span>
          </div>

          <div className="relative z-0 w-full my-12">
            <label htmlFor="communication-channel"  className="absolute duration-300 origin-0 text-gray-500 ">Preffered communication channel</label>
            <div className='flex flex-row'>
              <select name="communication-channel" id="communication-channel" className="pt-3 pb-2 block w-full px-0 mt-8 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" 
                onChange={handleChannelChange}
                value={selectedChannel}>
                <option value="">Select:</option>
                <option value="phone">Phone</option>
                <option value="telegram">Telegram</option>
                <option value="discord">Discord</option>
              </select>
            </div>
          </div>

        

          {selectedChannel === 'phone' && (
            <div className="relative z-0 w-full my-12">
              <input
              type="text"
              name="phone"
              placeholder=" "
              required
              value={formData.phone}
              onChange={handleChange}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label htmlFor="phone" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Phone</label>
            <span className={`text-sm text-red-600 ${errorVisible ? '' : 'hidden'}`} id="error">Phone is required</span>
            </div>
          )}

          {selectedChannel === 'telegram' && (
            <div className="relative z-0 w-full my-12">
              <input
              type="text"
              name="telegram"
              placeholder=" "
              required
              value={formData.telegram}
              onChange={handleChange}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label htmlFor="telegram" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Telegram</label>
            <span className={`text-sm text-red-600 ${errorVisible ? '' : 'hidden'}`} id="error">Telegram number is required</span>
            </div>
          )}

          {selectedChannel === 'discord' && (
            <div className="relative z-0 w-full my-12">
               <input
              type="text"
              name="discord"
              placeholder=" "
              required
              value={formData.discord}
              onChange={handleChange}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label htmlFor="discord" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Discord</label>
            <span className={`text-sm text-red-600 ${errorVisible ? '' : 'hidden'}`} id="error">Discord account name is required</span>
            </div>
          )}

          <div className="relative z-0 w-full my-12">
              <input
              type="text"
              name="email"
              placeholder=" "
              required
              value={formData.email}
              onChange={handleChange}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Email</label>
            <span className={`text-sm text-red-600 ${errorVisible ? '' : 'hidden'}`} id="error">Email address is required</span>
          </div>

            {isLoading?(
              <div className='flex items-center justify-center'>
                <Button disabled>
                <Loader2 className="h-6 w-16 mx-auto animate-spin" />
                  Submitting request...
                </Button>
              </div>

            ):(
            <button
            id="button"
            type="button"
            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-indigo-500 hover:bg-indigo-600 hover:shadow-lg focus:outline-none"
            onClick={handleSubmit}
            disabled={isLoading}
          >
              Submit
          </button>
            )}

        </form>
      </div>
    </FormContainer>
  );
};

export default RequestAuditForm;
