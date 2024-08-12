export interface ImenuItemLink {
  name: string,
  path: string
}

export interface ImenuItems {
  services: ImenuItemLink[],
  project: ImenuItemLink[],
  legal: ImenuItemLink[]
}

export const menuItems: ImenuItems = {
  services: [
    {
      name: "rent",
      path: "/rent"
    },
    {
      name: "earn",
      path: "/earn"
    }
  ],
  project: [
    {
      name: "about us",
      path: "/about"
    },
    {
      name: "contact",
      path: "/contact"
    }
  ],
  legal: [
    {
      name: "Terms of use",
      path: "/terms-of-use"
    },
    {
      name: "Privacy policy",
      path: "/privacy-policy"
    },
    {
      name: "Cookie policy",
      path: "/cookie-policy"
    }
  ]
}