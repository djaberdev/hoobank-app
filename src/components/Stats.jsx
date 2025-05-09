import { stats } from "../constants";
import { styles } from "../style";

const Stats = () => (
    <section className={`${styles.flexBetween} flex-wrap py-2 gap-3 lg:-translate-y-5`}>
        {stats.map(stat => (
            <div
                key={stat.id}
                className="flex items-center gap-2"
            >
                <span className="text-white text-2xl">{stat.value}</span>
                <p className="text-gradient">{stat.title}</p>
            </div>
            
        ))}
    </section>
)


export default Stats;