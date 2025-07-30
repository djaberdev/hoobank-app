import { apple, bill, google } from "../assets";
import { styles, layout } from "../style";

const Billing = () =>  (
    <section id="product" className={`${layout.sectionImgReverse} gap-10`}>
        <div className="flex-1">
            <img 
                src={bill}
                alt="Bill"
            />
        </div>
        <div className="flex-1 flex flex-col items-start gap-4">
            <h1 className={`${styles.heading}`}>Easily control your billing & invoicing.</h1>
            <p className={`${styles.paragraph}`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className="flex items-center gap-5">
                <img 
                    src={apple}
                    alt="App store"
                    className="w-[130px] h-[42px] object-contain"
                />
                <img 
                    src={google}
                    alt="Google play"
                    className="w-[130px] h-[42px] object-contain"
                />
            </div>
        </div>
    </section>
)

export default Billing;