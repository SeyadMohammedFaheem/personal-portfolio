export interface MetricType {
    value: string;
    label: string;
}

export interface ChallengeType {
    title: string;
    description: string;
}

export interface MetadataType {
    role?: string;
    duration?: string;
    year?: string;
    tools?: string;
}

export interface DataType {
    id: number;
    col: string;
    image: string;
    title: string;
    category: string;
    description?: string;
    year?: string;
    live?: string;
    metrics?: MetricType[];
    link?: string;
    // UX Case Study Fields
    problem?: string;
    solution?: string;
    role?: string;
    duration?: string;
    tools?: string[];
    challenges?: ChallengeType[];
    outcome?: string;
    metadata?: MetadataType;
}

export const portfolio_data: DataType[] = [
    {
        id: 1,
        col: "6",
        image: "/assets/images/projects/work1.jpg",
        title: "Pickcel Dashboard Redesign",
        category: "Dashboard Design",
        description:
            "Quick UX improvements that increased clarity for first-time users and boosted engagement.",
        year: "2025",
        metrics: [
            { value: "40%", label: "Faster Onboarding" },
            { value: "25%", label: "Higher Engagement" },
        ],
        link: "https://www.figma.com/proto/9BZN4coiFEEWlCk9zNsZIc/Console-UI-Redesign---Navigation-Optimization?page-id=0%3A1&node-id=0-1827&viewport=138%2C117%2C0.11&t=O2jBYAxOL7NcRWek-1&scaling=contain&content-scaling=fixed",
        live: "https://console.pickcel.com#/",
        problem: "Users were struggling with complex navigation and unclear information hierarchy in the Pickcel dashboard. First-time users took an average of 15 minutes to complete basic tasks, and the bounce rate was significantly high during onboarding.",
        solution: "Redesigned the navigation structure with a simplified sidebar, introduced progressive disclosure patterns, and created a more intuitive information architecture. Implemented contextual help and onboarding tooltips to guide new users through key features.",
        role: "Lead UX/UI Designer",
        duration: "3 months",
        tools: ["Figma", "Adobe XD", "Maze", "Hotjar", "Google Analytics"],
        challenges: [
            {
                title: "Complex Feature Set",
                description: "The dashboard had numerous features that needed to be accessible without overwhelming users. We solved this by implementing a progressive disclosure pattern and smart defaults."
            },
            {
                title: "Legacy User Expectations",
                description: "Existing users were accustomed to the old interface. We conducted extensive user testing and provided migration guides to ensure a smooth transition."
            },
            {
                title: "Performance Constraints",
                description: "The redesign needed to maintain fast load times despite adding new visual elements. We optimized assets and implemented lazy loading for non-critical components."
            }
        ],
        outcome: "The redesign resulted in a 40% reduction in onboarding time, 25% increase in user engagement, and significantly improved user satisfaction scores. The new design system also reduced design-to-development time by 30%.",
        metadata: {
            role: "UX/UI DESIGNER",
            duration: "3 MONTHS",
            year: "2025",
            tools: "FIGMA, SKETCH"
        }
    },
    {
        id: 2,
        col: "6",
        image: "/assets/images/projects/work2.jpg",
        title: "Pickcel GO App Design",
        category: "UX Case Study",
        description:
            "A modular component exploration to speed up design iterations.",
        year: "2024",
        metrics: [
            { value: "3x", label: "Faster Iterations" },
            { value: "20%", label: "Improved Usability" },
        ],
        link: "https://www.figma.com/proto/RJ1wtC2LyGH9TNR1lPzRRi/Portfolio-FInal?page-id=247%3A2463&node-id=247-2464&scaling=min-zoom&content-scaling=fixed&t=zJAFUzafUpJ6HWYV-1&hide-ui=1",
        metadata: {
            role: "PRODUCT DESIGNER",
            duration: "2 MONTHS",
            year: "2024",
            tools: "FIGMA, PROTOPIE"
        }
    },
    {
        id: 3,
        col: "4",
        image: "/assets/images/projects/work3.jpg",
        title: "Website Redesign",
        category: "Website Study",
        description:
            "Motion study highlighting micro-interactions and delight moments.",
        year: "2025",
        metrics: [
            { value: "15%", label: "More Retention" },
            { value: "30%", label: "Better Conversion" },
        ],
        link: "https://faheem.work/projects/website-redesign",
        live: "https://pickcel.com#/",
        metadata: {
            role: "LEAD DESIGNER",
            duration: "4 MONTHS",
            year: "2025",
            tools: "FIGMA, ADOBE XD"
        }
    },
    {
        id: 4,
        col: "4",
        image: "/assets/images/projects/work4.jpg",
        title: "Octalume - Smart IoT Dashboard",
        category: "Dashboard Study",
        description:
            "Identity refresh exploring typography, color, and layout systems.",
        year: "2024",
        metrics: [
            { value: "50%", label: "UI Consistency" },
            { value: "18%", label: "Drop in Errors" },
        ],
        link: "https://www.behance.net/gallery/213204745/Octalume-Smart-IoT-Dashboard-UIUX-Design",
        live: "https://seyadmohammedfaheem.github.io/octalume/",
        metadata: {
            role: "UI/UX DESIGNER",
            duration: "3 MONTHS",
            year: "2024",
            tools: "FIGMA, MIRO"
        }
    },
    {
        id: 5,
        col: "4",
        image: "/assets/images/projects/work5.jpg",
        title: "Scentropolis Perfume App",
        category: "App Design",
        description:
            "Concept mockups for a data-dense analytics experience.",
        year: "2024",
        metrics: [
            { value: "25%", label: "Faster Load Time" },
            { value: "10%", label: "Higher Conversion" },
        ],
        link: "https://www.behance.net/gallery/181399267/Scentropolis-UIUX-Mobile-App-Perfume-App-Design",
        metadata: {
            role: "PRODUCT DESIGNER",
            duration: "2 MONTHS",
            year: "2024",
            tools: "FIGMA, PRINCIPLE"
        }
    },
];
