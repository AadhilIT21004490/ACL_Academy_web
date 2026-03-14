import type { PricingPlan, PricingPlanInner } from "./type";



export const pricingPlans: PricingPlan[] = [
    {
        id: 1,
        name: "PERSONAL",
        monthlyPrice: "5.60",
        yearlyPrice: "56.00",
        features: [
            "Custom SEO Packages",
            "Software Development",
            "All Basic Plan Features",
            "Performance Reports",
            "Basic Technical SEO",
            "Phone & Email Support"
        ],
    },
    {
        id: 2,
        name: "BUSINESS",
        monthlyPrice: "14.60",
        yearlyPrice: "146.00",
        features: [
            "All Basic Plan Features",
            "Phone & Email Support",
            "Software Development",
            "Custom SEO Packages",
            "Performance Reports",
            "Basic Technical SEO"
        ],
    },
    {
        id: 3,
        name: "PREMIUM",
        monthlyPrice: "24.60",
        yearlyPrice: "246.00",
        features: [
            "Performance Reports",
            "Basic Technical SEO",
            "All Basic Plan Features",
            "Custom SEO Packages",
            "Software Development",
            "Phone & Email Support"
        ],
    }
];


export const monthlyPlansInner: PricingPlanInner[] = [
        {
            id: 1,
            title: "Personal",
            price: "$5.60",
            duration: "/Per Month",
            features: [
                "Initial business assessment",
                "Basic market research and analysis",
                "Comprehensive business audit",
                "Monthly Progress Report",
                "Lifetime Email Support",
                "Digital Marketing Campaigns",
            ],
        },
        {
            id: 2,
            title: "Business",
            price: "$25.00",
            duration: "/Per Month",
            features: [
                "Digital Marketing Campaigns",
                "Basic market research and analysis",
                "Comprehensive business audit",
                "Life Time Support",
                "Comprehensive business audit",
                "Monthly Progress Report",
            ],
        },
        {
            id: 3,
            title: "Premium",
            price: "$40.60",
            duration: "/Per Month",
            features: [
                "Comprehensive business audit",
                "Advanced market research",
                "Basic market research and analysis",
                "Monthly Progress Report",
                "Lifetime Email Support",
                "Digital Marketing Campaigns",
            ],
        },
    ];
 
  export  const yearlyPlansInner: PricingPlanInner[] = [
        {
            id: 1,
            title: "Personal",
            price: "$55.00",
            duration: "/Per Year",
            features: [
                "Initial business assessment",
                "Basic market research and analysis",
                "Comprehensive business audit",
                "Monthly Progress Report",
                "Lifetime Email Support",
                "Digital Marketing Campaigns",
            ],
        },
        {
            id: 2,
            title: "Business",
            price: "$250.00",
            duration: "/Per Year",
            features: [
                "Digital Marketing Campaigns",
                "Basic market research and analysis",
                "Comprehensive business audit",
                "Life Time Support",
                "Comprehensive business audit",
                "Monthly Progress Report",
            ],
        },
        {
            id: 3,
            title: "Premium",
            price: "$400.00",
            duration: "/Per Year",
            features: [
                "Comprehensive business audit",
                "Advanced market research",
                "Basic market research and analysis",
                "Monthly Progress Report",
                "Lifetime Email Support",
                "Digital Marketing Campaigns",
            ],
        },
    ];
 