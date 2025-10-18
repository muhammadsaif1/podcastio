const PricingData = [
    {
        id: 1,
        name: "Free",
        isPopular: false,
        monthlyPackage: {
            price: 0.00,
            duration: "Mo",
        },
        yearlyPackage: {
            price: 0.00,
            duration: "Yr",
        },
        desc: "Get exclusive podcasts from your favorite hosts on here for free.",
        features: [
            {
                id: 1,
                isDisabled: false,
                title: "Latest and freebies topics",
                icon: 'ti ti-check',
            },
            {
                id: 2,
                isDisabled: false,
                title: "Curated speakers",
                icon: 'ti ti-check',
            },
            {
                id: 3,
                isDisabled: false,
                title: "Free content only",
                icon: 'ti ti-check',
            },
            {
                id: 4,
                isDisabled: false,
                title: "Available on all platforms",
                icon: 'ti ti-check',
            },
            {
                id: 5,
                isDisabled: true,
                title: "upto 20 channel Subscribe",
                icon: 'ti ti-check',
            },
            {
                id: 6,
                isDisabled: true,
                title: "Unlimited episodes",
                icon: 'ti ti-check',
            },

        ],
        btn: {
            btnText: "Get Started Now",
            btnLink: "/register",
        }
    },
    {
        id: 2,
        name: "Premium",
        isPopular: true,
        monthlyPackage: {
            price: 29.00,
            duration: "Mo",
        },
        yearlyPackage: {
            price: 329.00,
            duration: "Yr",
        },
        desc: "Get exclusive podcasts from your favorite hosts on here for free.",
        features: [
            {
                id: 1,
                isDisabled: false,
                title: "Latest and Premium topics",
                icon: 'ti ti-check',
            },
            {
                id: 2,
                isDisabled: false,
                title: "Curated speakers",
                icon: 'ti ti-check',
            },
            {
                id: 3,
                isDisabled: false,
                title: "All content",
                icon: 'ti ti-check',
            },
            {
                id: 4,
                isDisabled: false,
                title: "Available on all platforms",
                icon: 'ti ti-check',
            },
            {
                id: 5,
                isDisabled: false,
                title: "upto 20 channel Subscribe",
                icon: 'ti ti-check',
            },
            {
                id: 6,
                isDisabled: false,
                title: "Unlimited episodes",
                icon: 'ti ti-check',
            },
        ],
        btn: {
            btnText: "Get Started Now",
            btnLink: "/register",
        }
    },
    {
        id: 3,
        name: "Special",
        isPopular: false,
        monthlyPackage: {
            price: 99.00,
            duration: "Mo",
        },
        yearlyPackage: {
            price: 999.00,
            duration: "Yr",
        },
        desc: "Get exclusive podcasts from your favorite hosts on here for free.",
        features: [
            {
                id: 1,
                isDisabled: false,
                title: "Latest and Premium topics",
                icon: 'ti ti-check',
            },
            {
                id: 2,
                isDisabled: false,
                title: "Curated speakers",
                icon: 'ti ti-check',
            },
            {
                id: 3,
                isDisabled: false,
                title: "All content",
                icon: 'ti ti-check',
            },
            {
                id: 4,
                isDisabled: false,
                title: "Available on all platforms",
                icon: 'ti ti-check',
            },
            {
                id: 5,
                isDisabled: false,
                title: "upto 20 channel Subscribe",
                icon: 'ti ti-check',
            },
            {
                id: 6,
                isDisabled: false,
                title: "Unlimited episodes",
                icon: 'ti ti-check',
            },
        ],
        btn: {
            btnText: "Get Started Now",
            btnLink: "/register",
        }
    },
]

export default PricingData