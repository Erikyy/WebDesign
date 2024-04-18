

export const TEXTS = {
    title: "WebFlow",
    heroContent: "We offer you the tools to create modern web services!",
    buttons: {
        getStarted: 'Get Started'
    }
};


export type Feature = {
    name: string;
    features: string[],
};

export const FEATURES: Feature[] = [
    {
        name: 'Community Edition',
        features: [
            "Open Source",
            "Plugin sdk (Rust, C++, ...)",
            "Web only",
            "Self hosted"
        ],
    },
    {
        name: 'Pro Edition',
        features: [
            "Everything from Community Edition and:",
            "Web or Mobile apps"
        ]
    },
    {
        name: 'Enterprise Edition',
        features: [
            "Everything from Pro Edition and:",
            "Hosting"
        ]
    }
]