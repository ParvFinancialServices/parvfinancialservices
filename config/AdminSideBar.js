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
  List,
  Menu,
  LayoutDashboard,
} from "lucide-react";

export const AdminSidebar = {
  navMain: [
    {
      title: "Loan Applications",
      url: "/dashboard",
      icon: ClipboardType,
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
      title: "Reports",
      url: "#",
      icon: Users2Icon,
      items: [
        {
          title: "Loans Report",
          url: "/dashboard/admin/view/loans",
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
// RM side bar
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
          url: "/dashboard/dsa/view/loans/category",
        },
        {
          title: "Member Wise",
          url: "/dashboard/dsa/view/loans/member",
        },
      ],
    },
  ],
  projects: [
    {
      title: "My Income",
      url: "/dsa/my-income",
      icon: HandCoinsIcon,
    },
    {
      title: "Dashboard",
      url: "/dsa/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Raise Ticket",
      url: "/dsa/raise-ticket",
      icon: Contact2Icon,
    },
  ],
};
export const TelecallerSidebar = {
  navMain: [
    
    {
      title: "Calling List",
      url: "#",
      icon: List,
      items: [
        {
          title: "Daily Calling List",
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
    {
      title: "Dashboard",
      url: "/telecaller/dashboard",
      icon: LayoutDashboard,
    },
    // {
    //   title: "Contact us",
    //   url: "/admin/contact_data",
    //   icon: Contact2Icon,
    // },
  ],
};
export const FieldStaffSidebar = {
  navMain: [
    
    {
      title: "Field Report",
      url: "#",
      icon: Users2Icon,
      items: [
        {
          title: "Client Visit",
          url: "/dashboard/admin/view/loans/category",
        },
        {
          title: "Loan Collection Report",
          url: "/dashboard/admin/view/loans/member",
        },
        {
          title: "Loan Disbursement Report",
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
    {
      title: "Dashboard",
      url: "/fieldstaff/dashboard",
      icon: LayoutDashboard,
    },
    // {
    //   title: "Contact us",
    //   url: "/admin/contact_data",
    //   icon: Contact2Icon,
    // },
  ],
};
