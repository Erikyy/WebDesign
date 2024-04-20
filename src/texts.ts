

export const TEXTS = {
    title: "WebFlow",
    heroContent: "We offer you the tools to create modern web services!",
    buttons: {
        getStarted: 'Get Started'
    },
    features: {
        title: 'Features and Pricing',
        additionalContent: 'Choose your preferred edition',
    },
    plugins: {
        support: 'Our tools have support for first and thirdparty plugins',
    }
};

export type Pricing = {
    value: string;
    type: '/month' | '/annually' | null,
    small: boolean,
};

export type Feature = {
    name: string;
    additionalContent: string;
    features: string[],
    buttonContent: string,
    pricing: Pricing[],
};

export const FEATURES: Feature[] = [
    {
        name: 'Community Edition',
        additionalContent: 'Best for self hosted solutions and for learning projects.',
        features: [
            "Open Source",
            "Plugin sdk (Rust, C++, ...)",
            "Web only",
            "Self hosted"
        ],
        buttonContent: 'Get Started',
        pricing: [
            {
                value: 'Free',
                type: null,
                small: false,
            }
        ],
    },
    {
        name: 'Pro Edition',
        additionalContent: 'Use our hosting providers and more advanced tools.',
        features: [
            "Everything from Community Edition and:",
            "Web or Mobile apps",
            "Only our hosting providers"
        ],
        buttonContent: 'Get Started',
        pricing: [
            {
                value: '15€',
                type: '/month',
                small: false,
            }
        ],
    },
    {
        name: 'Enterprise Edition',
        additionalContent: 'For businesses and more large scale applications.',
        features: [
            "Everything from Pro Edition and:",
            "Self hosting",
            "Advanced security features"
        ],
        buttonContent: 'Contact us',
        pricing: [
            {
                value: 'Contact us for sales',
                type: null,
                small: true
            }
        ],
    }
];

export type Plugin = {
    name: string;
};

export const FIRST_PARTY_PLUGINS: Plugin[] = [
    { name: "First Plugin" },
    { name: "Second Plugin" },
    { name: "Third Plugin" }
];

export const THIRD_PARTY_PLUGINS: Plugin[] = [
    { name: "First Plugin" },
    { name: "Second Plugin" },
    { name: "Third Plugin" }
];

export type Reason = {
    header: string;
    content: string;
}

export const REASONS_TO_USE: Reason[] = [
    {
        header: 'Free community edition',
        content: 'Get started for free using our basic version of our tools.'
    },
    {
        header: 'Easy to use',
        content: 'Our tools are created to be easy to use for experienced developers and beginners.'
    },
    {
        header: 'Extensible',
        content: 'Our integration with first and third party plugins allows you to extend your web and mobile apps.'
    },
    {
        header: 'Mobile apps',
        content: 'With our tools. It makes poosible to create easy to use mobile apps in parallel to web apps.'
    }
];