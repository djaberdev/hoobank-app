import { styles } from "../style";
import { discount, robot } from "../assets";
import { GetStarted } from "../components";

const Hero = () => (
    <section id="home" className={`flex flex-col lg:items-center md:justify-between lg:flex-row ${styles.paddingY} lg:gap-20`}>
        {/* Left Side */}
        <div className={`flex-1 ${styles.flexStartCol} px-6 lg:px-0 sm:px-16`}>
            <div className={`${styles.flexCenter} py-1 px-3 bg-black-gradient rounded-md`}>
                <img
                    src={discount}
                    alt="Discount"
                    className="w-[32px] h-[32px]"
                />
                <p className={`${styles.paragraph}`}>
                    <span className="text-white">20%</span> Discount For <span className="text-white">1 Month</span> Account
                </p>
            </div>

            <div className={`${styles.flexBetween} mt-4 gap-26 max-md:w-[100%]`}>
                <h1 className={`text-white font-semibold text-[40px] md:text-[46px] lg:text-[52px] leading-19 max-md:leading-16`}>The Next <br className="hidden sm:block" /><span className="text-gradient">Generation</span></h1>
                <div className="max-sm:hidden">
                    <GetStarted />
                </div>
            </div>

            <h1 className={`text-white font-semibold text-[40px] md:text-[46px] lg:text-[52px] leading-18 max-md:leading-16`}>Payment Method</h1>
            
            <p className={`${styles.paragraph} md:max-w-[483px] mt-5 max-lg:mb-10`}>
                Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
            </p>
        </div>
        
        {/* Right Side */}
        <div className="flex-1 relative">
            <img 
                src={robot} 
                alt="Robot"
                className="w-[100%] h-[100%] max-sm:h-[90%] relative z-[5]"
            />
            <div className="absolute top-0 w-[40%] h-[35%] pink__gradient z-[0]" />
            <div className="absolute bottom-40 w-[80%] h-[80%] white__gradient z-[1] rounded-full" />
            <div className="absolute bottom-20 right-20 w-[50%] h-[50%] blue__gradient z-[0]" />
        </div>

        <div className="block sm:hidden mt-5 mx-auto">
            <GetStarted />
        </div>
    </section> 
)

export default Hero;