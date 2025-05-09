import { feedbacks } from "../constants";
import { styles } from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
    <section id="clients" className={`relative ${styles.paddingY} ${styles.flexStartCol} gap-10 md:gap-20`}>
        <div className="absolute top-[10%] right-[-5%] lg:right-[-40%] w-[40%] h-[80%] blue__gradient z-[10]" />
        <div className={`relative z-[10] w-full flex flex-col items-start md:flex-row md:items-center md:justify-between gap-3`}>
            <h2 className={`${styles.heading}`}>
                What people are <br /> saying about us
            </h2>
            <p style={{ fontSize: "14px" }} className={`${styles.paragraph} max-w-[400px]`}>
                Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
        </div>

        <div className={`relative z-[10] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6`}>
            {feedbacks.map(feedback => (
                <FeedbackCard infoObj={feedback} />
            ))}
        </div>
    </section>
)

export default Testimonials;