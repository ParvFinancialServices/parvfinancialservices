"use client"


import {
    ClipboardType,
    FileUser,
    BriefcaseBusinessIcon,
    HomeIcon,
    CarIcon,
    HandCoinsIcon,
    Users2Icon,
    LucideNotebookPen,
    MessageSquareWarning,
    MessageSquareText,
    Contact2Icon,
    UserPlus2Icon,
} from "lucide-react"

export const AdminSidebar = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },

    navMain: [
        {
            title: "Loan Applications",
            url: "/dashboard",
            icon: ClipboardType,
            isActive: true,
            items: [
                {
                    title: "Personal Loan",
                    url: "/admin/forms/personal_loan",
                    icon: FileUser,
                    isActive: true,
                },
                {
                    title: "Business Loan",
                    url: "/admin/forms/business_loan",
                    icon: BriefcaseBusinessIcon,
                    isActive: false,
                },
                {
                    title: "Home Loan",
                    url: "/admin/forms/home_loan",
                    icon: HomeIcon,
                },
                {
                    title: "Vehicle Loan",
                    url: "/admin/forms/vehicle_loan",
                    icon: CarIcon,
                },
                {
                    title: "Gold Loan",
                    url: "/admin/forms/gold_loan",
                    icon: HandCoinsIcon,
                },
            ]
        },
        {
            title: "Team members",
            url: "#",
            icon: Users2Icon,
            items: [
                {
                    title: "Connectors",
                    url: "/dashboard/connectors",
                },
                {
                    title: "Regional manager",
                    url: "/dashboard/connectors",
                },
                {
                    title: "Field Staff",
                    url: "/dashboard/connectors",
                },
                {
                    title: "Telecaller",
                    url: "/dashboard/connectors",
                },
            ],
        },
    ],
    projects: [
        {
            title: "Blogs",
            url: "/admin/blogs",
            icon: LucideNotebookPen,
        },
        {
            title: "Testimonials",
            url: "/admin/testimonials",
            icon: MessageSquareText,
        },
        {
            title: "Contact us",
            url: "/admin/contact_data",
            icon: Contact2Icon,
        },
        {
            title: "Career applications",
            url: "/admin/careers",
            icon: UserPlus2Icon,
        },
    ],
}
