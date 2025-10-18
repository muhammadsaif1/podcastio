const sidebarNavLink = [
    {
        id: 1,
        menuName: "Dashboard",
        navItems: [
            {
                id: 1,
                linkName: "Overview",
                link: "/user/dashboard",
                icon: "ti ti-home"
            },
            {
                id: 2,
                linkName: "Podcast",
                icon: "ti ti-broadcast",
                subMenu: [
                    {
                        id: 1,
                        linkName: "Create Podcast",
                        link: "/user/create-podcast",
                        icon: "ti ti-minus"
                    },
                    {
                        id: 2,
                        linkName: "All Podcast",
                        link: "/user/all-podcast",
                        icon: "ti ti-minus"
                    },
                ]
            },
            {
                id: 3,
                linkName: "Episode",
                // link: "/index-three"
                icon: "ti ti-video",
                subMenu: [
                    {
                        id: 1,
                        linkName: "Create Episode",
                        link: "/user/create-episode",
                        icon: "ti ti-minus"
                    },
                    {
                        id: 2,
                        linkName: "All Episode",
                        link: "/user/all-episodes",
                        icon: "ti ti-minus"
                    },
                ]
            },
            {
                id: 4,
                linkName: "Transactions",
                link: "/user/transactions",
                icon: "ti ti-arrows-exchange"
            },
            {
                id: 5,
                linkName: "Subscribe",
                // link: "/user/profile",
                icon: "ti ti-versions",
                subMenu: [
                    {
                        id: 1,
                        linkName: "Subscription",
                        link: "/user/subscriptions",
                        icon: "ti ti-minus"
                    },
                    {
                        id: 2,
                        linkName: "Subscriber's List",
                        link: "/user/subscriber-list",
                        icon: "ti ti-minus"
                    },
                ]
            },
            {
                id: 6,
                linkName: "Bookmark",
                link: "/user/bookmarks",
                icon: "ti ti-bookmark"
            },
            {
                id: 7,
                linkName: "Support Tickets",
                link: "/user/support-ticket",
                icon: "ti ti-id-badge-2"
            },
            {
                id: 8,
                linkName: "New Ticket",
                link: "/user/new-ticket",
                icon: "ti ti-ticket"
            },
        ],
    },
    {
        id: 2,
        menuName: "Account Setting",
        navItems: [
            {
                id: 1,
                linkName: "Profile",
                icon: "ti ti-user",
                subMenu: [
                    {
                        id: 1,
                        linkName: "Profile Setting",
                        link: "/user/profile-setting",
                        icon: "ti ti-minus"
                    },
                    {
                        id: 2,
                        linkName: "Change Password",
                        link: "/user/change-password",
                        icon: "ti ti-minus"
                    },
                    {
                        id: 3,
                        linkName: "2Fa Security",
                        link: "/user/two-factor-authentication",
                        icon: "ti ti-minus"
                    },
                    {
                        id: 4,
                        linkName: "Log Out",
                        link: "#",
                        icon: "ti ti-minus"
                    },
                ]
            },
            {
                id: 2,
                linkName: "Balance",
                icon: "ti ti-wallet",
                subMenu: [
                    {
                        id: 1,
                        linkName: "Add Balance",
                        link: "/user/add-balance",
                        icon: "ti ti-minus"
                    },
                    {
                        id: 2,
                        linkName: "Balance History",
                        link: "/user/balance-history",
                        icon: "ti ti-minus"
                    },
                ]
            },
            {
                id: 3,
                linkName: "Withdraw",
                icon: "ti ti-coins",
                subMenu: [
                    {
                        id: 1,
                        linkName: "Withdraw Balance",
                        link: "/user/withdraw-balance",
                        icon: "ti ti-minus"
                    },
                    {
                        id: 2,
                        linkName: "Log Withdrawal",
                        link: "/user/withdraw-history",
                        icon: "ti ti-minus"
                    }
                ]
            }
        ],
    }
]

export default sidebarNavLink