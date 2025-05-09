import { styles } from "../style";
import Button from "./Button";

const CTA = () => (
    <section className={`flex flex-col items-start md:flex-row md:justify-between md:items-center max-md:gap-5 ${styles.padding} ${styles.marginY} bg-black-gradient-2 rounded-2xl shadow-xl`}>
        <div className={`${styles.flexStartCol}`}>
            <h2 className="font-semibold text-white text-2xl sm:text-3xl mb-5">Let’s try our service now!</h2>
            <p className={`${styles.paragraph} md:w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <Button />
    </section>
)

export default CTA;