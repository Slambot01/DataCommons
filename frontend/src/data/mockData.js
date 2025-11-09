export const stats = {
  tvl: "$1,247,500",
  yieldRate: "5.2%",
  datasetsFunded: 47,
  storagePreserved: "2.4 TB",
  activeDepositors: 328,
};

export const datasets = [
  {
    id: 1,
    name: "Global Climate Data Archive",
    category: "Climate",
    size: "450 GB",
    funded: "$12,500",
    storage: "Arweave",
    status: "Active",
    maintainer: "Climate Research Lab",
    description: "Comprehensive climate data spanning 50 years.",
  },
  {
    id: 2,
    name: "Open Genomics Database",
    category: "Biology",
    size: "780 GB",
    funded: "$18,200",
    storage: "Filecoin",
    status: "Active",
    maintainer: "GeneLab Institute",
    description: "Open-access genomic sequences for research.",
  },
  {
    id: 3,
    name: "Historical Census Records",
    category: "Government",
    size: "120 GB",
    funded: "$5,400",
    storage: "IPFS",
    status: "Active",
    maintainer: "Public Archives DAO",
    description: "Digitized census records from 1900-2020.",
  },
  {
    id: 4,
    name: "Open Medical Imaging Set",
    category: "Healthcare",
    size: "1.2 TB",
    funded: "$24,800",
    storage: "Arweave",
    status: "Active",
    maintainer: "MedData Collective",
    description: "Anonymized medical imaging dataset.",
  },
];

export const proposals = [
  {
    id: 1,
    title: "Fund Ocean Acidification Dataset",
    applicant: "Marine Biology Institute",
    amount: "$8,500",
    status: "Voting",
    votes: { for: 245, against: 32 },
    deadline: "2 days",
    score: 87,
  },
  {
    id: 2,
    title: "Allocation Policy Update - Increase Curator Rewards",
    applicant: "Protocol DAO",
    amount: "N/A",
    status: "Active",
    votes: { for: 412, against: 89 },
    deadline: "5 days",
    score: 92,
  },
  {
    id: 3,
    title: "Renewable Energy Dataset Collection",
    applicant: "GreenTech Research",
    amount: "$15,000",
    status: "Voting",
    votes: { for: 178, against: 45 },
    deadline: "1 day",
    score: 79,
  },
];

export const applications = [
  {
    id: 1,
    title: "Ancient Manuscript Archive",
    status: "Under Verification",
    submitted: "2 days ago",
    amount: "$6,200",
    applicant: "Historical Society",
  },
  {
    id: 2,
    title: "Seismic Activity Database",
    status: "Scoring Phase",
    submitted: "5 days ago",
    amount: "$11,400",
    applicant: "EarthWatch Labs",
  },
  {
    id: 3,
    title: "Open Art Collection Metadata",
    status: "In Voting",
    submitted: "1 week ago",
    amount: "$3,800",
    applicant: "Digital Museum DAO",
  },
];

export const recentActivity = [
  {
    id: 1,
    type: "funding",
    title: "Global Climate Data Archive funded",
    amount: "$12,500",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "deposit",
    title: "New deposit: 50,000 USDC",
    address: "0x3a2f...8d1c",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "proposal",
    title: "Voting opened: Ocean Acidification Dataset",
    proposalId: "#23",
    time: "1 day ago",
  },
];

export const transactions = [
  {
    id: 1,
    type: "Deposit",
    amount: "+10,000 USDC",
    date: "Oct 28, 2024",
    status: "Completed",
    txHash: "0x7a2f...3d8c",
  },
  {
    id: 2,
    type: "Yield Harvest",
    amount: "+247 USDC",
    date: "Nov 1, 2024",
    status: "Completed",
    txHash: "0x9b4e...2a7f",
  },
];
