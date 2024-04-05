import React from 'react';
import Link from 'next/link';
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
        url:"https://s3.amazonaws.com/cdn.designcrowd.com/blog/32-Community-Logos-for-Design-Inspiration/connect-logotype-by-ben-harman-dribbble.png"
    },
    {
        id: 2,
        status: "active",
        contest: "Ethereum",
        description: "Ethereum is a decentralized, open-source blockchain with smart contract functionality.",
        rewards: "1000 Ethereum",
        started: "2021-05-01",
        ends: "2021-05-31",
        url:"https://www.graphicdesignforum.com/uploads/default/original/2X/7/74d0192b0d431435c749c3b9e633b996cd951be3.png"
    },
    {   
        id: 9,
        status: "completed",
        contest: "Ripple",
        description: "Ripple is a real-time gross settlement system, currency exchange and remittance network.",
        rewards: "1000 Ripple coins",
        started: "2021-06-01",
        ends: "2021-06-30",
        url:"https://img.freepik.com/premium-vector/stg-triangle-logo-design_786241-156.jpg"
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
                    <Link href={`/audit-contests/${audit.id}`} key={audit.id}>
                        <Card className="mt-6 w-96 border-2 shadow-lg">
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
                                <Button className='bg-indigo-600'>View Audit</Button>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </section>
        </>
    );
};

export default HomeAudits;
