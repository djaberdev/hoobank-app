import { styles } from "./style.js";
import {
    Navbar,
    Hero,
    Stats,
    Business,
    Billing,
    CardDeal,
    Testimonials,
    Clients,
    CTA,
    Footer,
} from "./components/index.js";

const App = () => {
    return (
        <main className="relative bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`${styles.flexStart} bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business /> 
                    <Billing /> 
                    <CardDeal />
                    <Testimonials /> 
                    <Clients /> 
                    <CTA /> {/* Call To Action */}
                </div>
            </div>
            <Footer />
        </main>
    )
} 

export default App;