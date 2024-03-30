import React from 'react';
import Image from 'next/image';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

const dummyAudits = [
    {   
        id: 1,
        status: "active",
        contest: "Doge coin",
        description: "Doge coin is a cryptocurrency featuring  dog from the 'Doge' Internet meme as its logo.",
        rewards: "1000 Doge coins",
        started: "2021-05-01",
        ends: "2021-05-31",
        url:"https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png"
    },
    {
        id: 2,
        status: "active",
        contest: "Ethereum",
        description: "Ethereum is a decentralized, open-source blockchain with smart contract functionality.",
        rewards: "1000 Ethereum",
        started: "2021-05-01",
        ends: "2021-05-31",
        url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/768px-Ethereum-icon-purple.svg.png"
    },
    {   
        id: 3,
        status: "completed",
        contest: "Solana",
        description: "Solana is a high-performance blockchain supporting builders around the world.",
        rewards: "1000 Solana coins",
        started: "2021-06-01",
        ends: "2021-06-30",
        url:"https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
    },
];

const HomeAudits = () => {
    return (
        <>
            <div className='flex items-center justify-center mt-36 mb-8'>
                <h1 className="mb-4 ml-4 bg-gradient-to-r from-indigo-800 to-purple-400 font-bold inline-block text-transparent bg-clip-text text-6xl text-center">Latest Active Poirot Audits</h1>
            </div>
            <section className='flex flex-col md:flex-row items-center justify-center gap-16'>
                {dummyAudits.map(audit => (
                     <Card className="mt-6 w-96 border-2 shadow-lg" key={audit.id}>
                     <CardBody>
                       <Typography variant="h5" color="blue-gray" className="my-2">
                        <div className='flex flex-row gap-4'>
                            <p className='mt-1'>{audit.contest}</p>
                            <Image
                                src={audit.url ?? ''}
                                alt='icon'
                                height={40}
                                width={40}
                            />
                        </div>
                       </Typography>
                       <Typography>
                        {audit.description}
                       </Typography>
                       <Typography variant="h5" color="blue-gray" className="my-4">
                        Reward: {audit.rewards}
                       </Typography>
                       <Typography variant="h5" color="blue-gray" className="my-4">
                        Status: {audit.status}
                       </Typography>
                       <Typography variant="h5" color="blue-gray" className="my-4">
                        Ends at: {audit.ends}
                       </Typography>
                     </CardBody>
                     <CardFooter className="pt-0 text-center">
                       <Button className='bg-black'>View Audit</Button>
                     </CardFooter>
                   </Card>
                ))}
            </section>
        </>
    );
};

export default HomeAudits;
