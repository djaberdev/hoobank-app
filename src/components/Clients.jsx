import { styles } from "../style";
import { clients } from "../constants";

const Clients = () => (
    <section className={`${styles.flexCenter} my-3`}>
        <div className={`${styles.flexCenter} flex-wrap w-full gap-3`}>
            {clients.map(client => (
                <div
                    key={client.id}
                    className={`${styles.flexCenter} flex-1 min-w-[120px] sm:min-w-[192px]`}
                >
                    <img 
                        src={client.logo}
                        alt={client.id} 
                        className="w-[100px] sm:w-[150px] object-contain duration-300 brightness-50 hover:brightness-100" 
                    />
                </div>
            ))}
        </div>
    </section>
)

export default Clients;