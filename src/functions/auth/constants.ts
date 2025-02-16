// Define an array of breakpoints and corresponding images
export const Images = {
    SMALL: "/splash-sm.png",
    MEDIUM: "/splash-md.png",
    XL_LARGE: "/splash-xl.png",
}

export const imageBreakpoints = [
    { minWidth: 1600, image: Images.XL_LARGE },
    { minWidth: 768, image: Images.MEDIUM },
    { minWidth: 600, image: Images.SMALL },
];