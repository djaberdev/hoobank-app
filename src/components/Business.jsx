import { features } from "../constants";
import { styles, layout } from "../style";
import Button from "./Button.jsx";

// ! You can build components within its parent component.
const FeatureCard = ({ featureObj, index }) => (
    <div className={`flex items-center gap-6 py-4 px-6 rounded-lg ${index === (features.length - 2) ? "bg-black-gradient" : "bg-transparent" }`}>
        <div className={`w-[40px] h-[40px] rounded-[50%] bg-dimBlue ${styles.flexCenter}`}>
            <img 
                src={featureObj.icon}
                alt="icon"
                className="w-[50%] h-[50%] object-contain"
            />
        </div>
        <div className="max-w-3/4">
            <h4 className="text-white text-[16px] mb-2">{featureObj.title}</h4>
            <p className="text-sm text-dimWhite leading-[20px]">{featureObj.content}</p>
        </div>
    </div>
);

const Business = () => (
    <section id="features" className={`${layout.section} items-center gap-10`}>
        <div className={`flex-1 ${styles.flexStartCol} gap-6`}>
            <h1 className={`${styles.heading}`}>You do the business, <br /> we’ll handle the money.</h1>
            <p className={`${styles.paragraph}`}>
                With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
            </p>
            <Button />
        </div>

        <div className={`flex-1 ${styles.flexStartCol} gap-2`}>
            {features.map((feature, i) => (
                <FeatureCard
                    key={feature.id}
                    featureObj={feature}
                    index={i}
                />
            ))}
        </div>
    </section>
)

export default Business;