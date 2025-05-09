import { card } from "../assets"
import { styles, layout } from "../style"
import Button from "./Button"

const CardDeal = () => (
    <section className={`relative ${layout.sectionImg} gap-10`}>
        <div className="absolute bottom-[10%] left-[-5%] lg:left-[-30%] w-[20%] h-[60%] pink__gradient z-[10]" />
        <div className={`relative z-[10] flex-1 ${styles.flexStartCol}`}>
            <h1 className={`${styles.heading}`}>Find a better card deal in few easy steps.</h1>
            <p className={`${styles.paragraph} mt-4 mb-3`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            <Button />
        </div>
        <div className="relative z-[10] flex-1">
            <img 
                src={card} 
                alt="Card" 
            />
        </div>
    </section>
)


export default CardDeal