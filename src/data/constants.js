import { BookTextIcon, Cloud, Code2Icon, HomeIcon, SettingsIcon } from "lucide-react";


const menuItems = [
    {
      title: "Repositories",
      icon: HomeIcon,
      isActive: true,
      href: '/repo',
    },
    {
        title: "AI Code Review",
        icon: Code2Icon,
        isActive: false,
        href: '/ai',
    },
    {
        title: "Cloud Security",
        icon: Cloud,
        isActive: false,
        href: '/cloud',
    },
    {
        title: "How to use",
        icon: BookTextIcon,
        isActive: false,
        href: '/use',
    },
    {
        title: "Settings",
        icon: SettingsIcon,
        isActive: false,
        href: '/settings',
    },
  ];
  
  export default menuItems;

  const loginItems = [
    {

    },
  ]