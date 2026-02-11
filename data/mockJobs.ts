export type Job = {
  id: string;
  title: string;
  team: string;
  brand: string;
  location: string;
  link: string;
  accentColor: string;
  logoUrl: string;
};

export const mockJobs = [
  {
    id: "job-001",
    title: "Team Member (Stock) – Luton Retail Park",
    team: "Retail",
    brand: "NEXT",
    location: "Luton, Bedfordshire",
    link: "/jobs/team-member-stock-luton",
    accentColor: "#000000",
    logoUrl: "/images/next.png",
  },
  {
    id: "job-002",
    title: "Sales Associate – Victoria's Secret",
    team: "Retail",
    brand: "Victoria's Secret",
    location: "Plymouth, Devon",
    link: "/jobs/sales-associate-vs-plymouth",
    accentColor: "#F4C6CF",
    logoUrl: "/images/victorias-secret.png",
  },
  {
    id: "job-003",
    title: "Assistant Buyer",
    team: "Product",
    brand: "JOULES",
    location: "Leicester, Leicestershire",
    link: "/jobs/assistant-buyer-joules",
    accentColor: "#F3E28E",
    logoUrl: "/images/joules.png",
  },
  {
    id: "job-004",
    title: "eCommerce Trading Manager – Gap & FatFace (12 Month FTC)",
    team: "Business Operations",
    brand: "GAP",
    location: "Trafford, Lancashire",
    link: "/jobs/ecommerce-trading-manager-gap",
    accentColor: "#0C1C3E",
    logoUrl: "/images/gap.png",
  },
  {
    id: "job-005",
    title: "Assistant Merchandiser – Home Textiles",
    team: "Product",
    brand: "NEXT",
    location: "Tottenham Court Road, London",
    link: "/jobs/assistant-merchandiser-home-textiles",
    accentColor: "#000000",
    logoUrl: "/images/next.png",
  },
  {
    id: "job-006",
    title: "Assistant Merchandiser",
    team: "Product",
    brand: "LIPSY",
    location: "London, London",
    link: "/jobs/assistant-merchandiser-lipsy",
    accentColor: "#E6CCC5",
    logoUrl: "/images/lipsy.png",
  },
  {
    id: "job-007",
    title: "Operations Manager – Infrastructure & Cloud Services",
    team: "Tech",
    brand: "NEXT",
    location: "Colombo, Sri Lanka",
    link: "/jobs/operations-manager-cloud",
    accentColor: "#000000",
    logoUrl: "/images/next.png",
  },
  {
    id: "job-008",
    title: "Assistant Merchandiser",
    team: "Retail",
    brand: "Cath Kidston",
    location: "London, London",
    link: "/jobs/assistant-merchandiser-cath-kidston",
    accentColor: "#C59289",
    logoUrl: "/images/cath-kidston.png",
  },
  {
    id: "job-009",
    title: "Joules Assistant Merchandiser – Menswear",
    team: "Product",
    brand: "JOULES",
    location: "Market Harborough, Leicestershire",
    link: "/jobs/assistant-merchandiser-joules-menswear",
    accentColor: "#F3E28E",
    logoUrl: "/images/joules.png",
  },
  {
    id: "job-010",
    title: "Product Manager",
    team: "Product",
    brand: "MADE",
    location: "London, London",
    link: "/jobs/product-manager-made",
    accentColor: "#BEFF03",
    logoUrl: "/images/made.png",
  },
];
