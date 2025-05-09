import { arrowUp } from "../assets"
import { styles } from "../style"

const GetStarted = () => (
    <a
        href="/"
        className={`w-[120px] h-[120px] bg-blue-gradient rounded-full ${styles.flexCenter}`}
    >
        <div className={`w-[95%] h-[95%] bg-primary rounded-full ${styles.flexCenter}`}>
            <div>
                <div className="flex items-center gap-1">
                    <span className="text-gradient">Get</span>
                    <img 
                        src={arrowUp} 
                        alt="Arrow Up"
                    />
                </div>
                <span className="text-gradient">Started</span>
            </div>
        </div>
    </a>
)

export default GetStarted