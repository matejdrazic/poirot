const dummyQs = [
    {
      question: "Can you explain the consensus mechanism used in this blockchain?",
      answer: "The consensus mechanism used in this blockchain is proof of work, where participants (miners) compete to solve complex mathematical puzzles to validate and add new blocks to the blockchain."
    },
    {
      question: "How does the blockchain handle transaction validation?",
      answer: "Transactions are validated through cryptographic signatures and consensus among network nodes. Each transaction must be digitally signed by the sender and verified by network validators before being added to the blockchain."
    },
    {
      question: "What measures are in place to prevent double spending?",
      answer: "Double spending is prevented through consensus mechanisms such as proof of work or proof of stake, where the majority of network participants agree on the validity of transactions. Additionally, each transaction is recorded on the blockchain, making it tamper-evident and immutable."
    },
    {
      question: "Are there any vulnerabilities in the smart contracts deployed on this blockchain?",
      answer: "Smart contracts are audited for potential vulnerabilities such as reentrancy, arithmetic overflow/underflow, and unauthorized access. Code reviews, automated analysis tools, and thorough testing are performed to identify and mitigate any security risks."
    },
    {
      question: "How is data privacy maintained on the blockchain?",
      answer: "Data privacy on the blockchain is maintained through techniques such as encryption and hashing. Private information can be encrypted before being stored on the blockchain, and access controls can be implemented to restrict visibility to authorized parties."
    }
];

export default dummyQs;
