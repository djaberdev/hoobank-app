import { quotes } from "../assets";
import { styles } from "../style";

const FeedbackCard = ({ infoObj }) => (
    <div
        key={infoObj.id}
        className={`${styles.flexStartCol} justify-between gap-4 py-7 px-6 duration-500 rounded-xl feedback-card`}
    >
        <div className={`${styles.flexStartCol} gap-4`}>
            <img 
                src={quotes} 
                alt="Quotes"
                className="w-[42px] h-[42px]"
            />
            
            <p style={{ fontSize: "14px" }} className={`${styles.paragraph} max-w-[290px]`}>{infoObj.content}</p>
        </div>
        
        <div className="flex items-center gap-3">
            <img 
                src={infoObj.img} 
                alt={`${infoObj.name} avatar`}
                className="w-[40px] h-[40px] rounded-full"
            />
            <div className={`${styles.flexStartCol}`}>
                <h3 className="text-white text-[15px] font-medium ">{infoObj.name}</h3>
                <h4 className="text-dimWhite text-[13px] font-normal">{infoObj.title}</h4>
            </div>
        </div>
    </div>
)

export default FeedbackCard;