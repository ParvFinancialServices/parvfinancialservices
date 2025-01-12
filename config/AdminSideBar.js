"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    ClipboardType,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
    NotebookTabs,
    NotebookTabsIcon,
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
                    url: "/dashboard/forms/personal_loan",
                    icon: FileUser,
                    isActive: true,
                },
                {
                    title: "Business Loan",
                    url: "/dashboard/forms/business_loan",
                    icon: BriefcaseBusinessIcon,
                    isActive: false,
                },
                {
                    title: "Home Loan",
                    url: "/dashboard/forms/home_loan",
                    icon: HomeIcon,
                },
                {
                    title: "Vehicle Loan",
                    url: "/dashboard/forms/vehicle_loan",
                    icon: CarIcon,
                },
                {
                    title: "Gold Loan",
                    url: "/dashboard/forms/gold_loan",
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
            url: "/dashboard/blogs",
            icon: LucideNotebookPen,
        },
        {
            title: "Testimonials",
            url: "/dashboard/testimonials",
            icon: MessageSquareText,
        },
        {
            title: "Contact us",
            url: "/dashboard/contact_data",
            icon: Contact2Icon,
        },
        {
            title: "Career applications",
            url: "/dashboard/careers",
            icon: UserPlus2Icon,
        },
    ],
}
