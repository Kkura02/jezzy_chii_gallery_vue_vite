// import { sfw01, sfw02, sfw03, sfw04, sfw05, sfw06, sfw07, sfw08, sfw09, sfw10, sfw11, sfw12, sfw13, sfw14, sfw15, sfw16, sfw17, sfw18, sfw19, sfw20, sfw21, sfw22, sfw23, sfw24, sfw25, sfw26, sfw27, sfw28, sfw29, sfw30, sfw31, sfw32, sfw33, sfw34, sfw35, sfw36, sfw37, sfw38, sfw39, sfw40, sfw41, sfw42, sfw43, sfw44, sfw45, sfw46, sfw47, sfw48, sfw49, sfw50, sfw51, sfw52, merch01, merch02, merch03, merch04, nsfw01, nsfw02, nsfw03, nsfw04, nsfw05, nsfw06, nsfw07, nsfw08, nsfw09, nsfw10, nsfw11, nsfw12, nsfw13, nsfw14, nsfw15, nsfw16, nsfw17, nsfw18, nsfw19, nsfw20, nsfw21, nsfw22, nsfw23, nsfw24, nsfw25, nsfw26, nsfw27, nsfw28 } from '../assets/Images'

import { twitter, discord, email, twitterWhite, discordWhite, emailWhite, } from '../assets/Icons'

// const featuredImages = [sfw10, sfw06, sfw46, sfw20, sfw33, sfw06]

// export const gallery = [
//     {
//         SFW: [sfw01, sfw02, sfw03, sfw04, sfw05, sfw06, sfw07, sfw08, sfw09, sfw10, sfw11, sfw12, sfw13, sfw14, sfw15, sfw16, sfw17, sfw18, sfw19, sfw20, sfw21, sfw22, sfw23, sfw24, sfw25, sfw26, sfw27, sfw28, sfw29, sfw30, sfw31, sfw32, sfw33, sfw34, sfw35, sfw36, sfw37, sfw38, sfw39, sfw40, sfw41, sfw42, sfw43, sfw44, sfw45, sfw46, sfw47, sfw48, sfw49, sfw50, sfw51],
//         MERCH: [merch01, merch02, merch03, merch04],
//         NSFW: [nsfw01, nsfw02, nsfw03, nsfw04, nsfw05, nsfw06, nsfw07, nsfw08, nsfw09, nsfw10, nsfw11, nsfw12, nsfw13, nsfw14, nsfw15, nsfw16, nsfw17, nsfw18, nsfw19, nsfw20, nsfw21, nsfw22, nsfw23, nsfw24, nsfw25, nsfw26, nsfw27, nsfw28]
//     }
// ]
// ####################################################
// constants/gallery.js

// Make sure @ is set to /src in vite.config.js
// resolve: { alias: { '@': '/src' } }

const imageLoaders = {
    SFW: Object.values(import.meta.glob('@/assets/Images/SFW/*', { eager: true, import: 'default' })),
    MERCH: Object.values(import.meta.glob('@/assets/Images/MERCH/*', { eager: true, import: 'default' })),
    NSFW: Object.values(import.meta.glob('@/assets/Images/NSFW/*', { eager: true, import: 'default' }))
};

// Usage:
const sfwImages = imageLoaders.SFW;
const merchImages = imageLoaders.MERCH;
const nsfwImages = imageLoaders.NSFW;

//Call those image category const here
export const gallery = [
    {
        SFW: sfwImages,
        MERCH: merchImages,
        NSFW: nsfwImages
    }
];

// Featured images — match by filename
const findImage = (images, fileName) =>
    images.find(imgPath => imgPath.includes(fileName));

export const featuredImages = [
    findImage(sfwImages, 'sfw_010.jpg'),
    findImage(sfwImages, 'sfw_006.jpg'),
    findImage(sfwImages, 'sfw_046.jpg'),
    findImage(sfwImages, 'sfw_020.jpg'),
    findImage(sfwImages, 'sfw_033.jpg'),
    findImage(sfwImages, 'sfw_006.jpg')
];
// ####################################################

export const contacts = [
    {
        link: 'https://twitter.com/jezzychii',
        icon1: twitter,
        icon2: twitterWhite,
        alt: 'twitter',
        isHover: false,
    },
    {
        link: 'https://discord.com/users/Jezzychii#1802/',
        icon1: discord,
        icon2: discordWhite,
        alt: 'discord',
        isHover: false,
    },
    {
        link: 'mailto:jezerru@gmail.com',
        icon1: email,
        icon2: emailWhite,
        alt: 'email',
        isHover: false,
    },
]

export default featuredImages