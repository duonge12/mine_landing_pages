import { aboutSubPath, companySubPath, path, serviceSubPath } from "./router_path";

export const headerLinks = [
    {
        path: path.home,
        text: "Home",
    },
    {
        path: path.about,
        text: "About us",
    },
    {
        path: path.service,
        text: "Our services",
        child: [
            {
                path: serviceSubPath.digital_talent_hub,
                text: "Digital talent hub",
            },
            {
                path: serviceSubPath.ai_consulting,
                text: "AI consulting and Implementation",
            },
            {
                path: serviceSubPath.digital_product,
                text: "Digital product development",
            },
            {
                path: serviceSubPath.cloud,
                text: "Cloud migration and Management service",
            },
        ]
    },
    {
        path: path.venture_builder,
        text: "Venture builder",
    },
    {
        path: path.neobank,
        text: "Neo bank labs",
    },
    {
        path: path.carreer,
        text: "Carreer",
    },
    {
        path: path.contact_use,
        text: "Contact us",
    },
];

export const footerLinks = [
    {
        path: path.company,
        text: "Company",
        child: [
            {
                path: companySubPath.home,
                text: "Home",
            },
            {
                path: companySubPath.neobank,
                text: "NeoBanks Labs",
            },
            {
                path: companySubPath.venture_builder,
                text: "Venture Builder",
            },
            {
                path: companySubPath.carreer,
                text: "Carreer",
            },
        ]
    },
    {
        path: path.about,
        text: "About",
        child: [
            {
                path: aboutSubPath.about_us,
                text: "About Us",
            },
            {
                path: aboutSubPath.activity_gallery,
                text: "Activity Gallery",
            },
            {
                path: aboutSubPath.founder_story_ceo_message,
                text: "Founder Story and CEO Message",
            },
            {
                path: aboutSubPath.our_press,
                text: "Our Press",
            },
        ]
    },
    {
        path: path.service,
        text: "Our services",
        child: [
            {
                path: serviceSubPath.digital_talent_hub,
                text: "Digital talent hub",
            },
            {
                path: serviceSubPath.ai_consulting,
                text: "AI consulting and Implementation",
            },
            {
                path: serviceSubPath.digital_product,
                text: "Digital product development",
            },
            {
                path: serviceSubPath.cloud,
                text: "Cloud migration and Management service",
            },
        ]
    },

];

