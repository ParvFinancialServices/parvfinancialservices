"use client";

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
} from "lucide-react";

export const AdminSidebar = {
  navMain: [
    {
      title: "Loan Applications",
      url: "/dashboard",
      icon: ClipboardType,
      isActive: true,
      items: [
        {
          title: "Personal Loan",
          url: "/dashboard/admin/forms/personal_loan",
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
      ],
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
    {
      title: "Loans",
      url: "#",
      icon: Users2Icon,
      items: [
        {
          title: "Category Wise",
          url: "/dashboard/admin/view/loans/category",
        },
        {
          title: "Member Wise",
          url: "/dashboard/admin/view/loans/member",
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
};

export const RMSidebar = {
  navMain: [
    {
      title: "Loan Applications",
      url: "/dashboard",
      icon: ClipboardType,
      isActive: true,
      items: [
        {
          title: "Personal Loan",
          url: "/dashboard/admin/forms/personal_loan",
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
      ],
    },
    {
      title: "Loans",
      url: "#",
      icon: Users2Icon,
      items: [
        {
          title: "Category Wise",
          url: "/dashboard/admin/view/loans/category",
        },
        {
          title: "Member Wise",
          url: "/dashboard/admin/view/loans/member",
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
  ],
};

export const DSASidebar = {
  navMain: [
    {
      title: "Loan Applications",
      url: "/dashboard",
      icon: ClipboardType,
      isActive: true,
      items: [
        {
          title: "Personal Loan",
          url: "/dashboard/admin/forms/personal_loan",
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
      ],
    },
    {
      title: "Loans",
      url: "#",
      icon: Users2Icon,
      items: [
        {
          title: "Category Wise",
          url: "/dashboard/admin/view/loans/category",
        },
        {
          title: "Member Wise",
          url: "/dashboard/admin/view/loans/member",
        },
      ],
    },
  ],
  projects: [
    {
      title: "My Income",
      url: "/admin/my-income",
      icon: HandCoinsIcon,
    },
    // {
    //   title: "Testimonials",
    //   url: "/admin/testimonials",
    //   icon: MessageSquareText,
    // },
    // {
    //   title: "Contact us",
    //   url: "/admin/contact_data",
    //   icon: Contact2Icon,
    // },
  ],
};


