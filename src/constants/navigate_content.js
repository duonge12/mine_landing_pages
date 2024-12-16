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

export const logoScr = "https://s3-alpha-sig.figma.com/img/a062/7c09/4ff204c4e4be0d77e444f29297b0b790?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZenZCxiVtBbXYOx7-fBCJ~8wcTBIkrLagBzqklcMaQ~ZPqhEcyhncnvsa9ws8j5d5Zcc6DxDLv1znnDjXI1IgU7BLXf5l6lAk-KJCnJ~8Lu4oSYRrYdSsg5zWzYA1XHv-lmgyHCUSEc4O1WpvNhGRscHnE1suD4ay9AFA617~PA3Qc5RYgHfAj9r61cPW-f5tAbOyWQJ7UrchO4IShq5f7XYpiHQ7jXpNDkoKp6kwuyAhVop~pM5~QdGfBq~~B~-uU2zfqNLQvpkl9PGBtXXcO6WJiDPFIJMx5DTWJZr24PHB5rtFALqTYQzkojmqO6l2AKF8gIPGxtLRFUYiQJ9FQ__"
