export const styles = {
    boxWidth: "lg:max-w-[1024px] w-full",

    heading: "text-white font-semibold text-[38px] leading-[50px] max-md:text-[30px] max-md:leading-[46px]",
    paragraph: "font-normal text-dimWhite text-[16px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexBetween: "flex items-center justify-between",
    flexStartCol: "flex flex-col items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-6",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};
  
export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex md:flex-row flex-col-reverse ${styles.flexCenter} md:mr-5 mr-0 md:mt-0 mt-10 relative ${styles.paddingY}`,
    sectionImg: `flex-1 flex md:flex-row flex-col ${styles.flexCenter} md:ml-5 ml-0 md:mt-0 mt-10 relative ${styles.paddingY}`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

