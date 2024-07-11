import { WithRuBalance } from '../../helpers/hoc/withRuBalance';
import './styles.css'

const Card = ({balance, setBalance, ruBalance}) => {
    console.log({ruBalance});
    return (
        <div className='card'>
            <div className='card-block'>
                <p>Crypto-Finance</p>
                <button 
                onMouseEnter={() => console.log("---enter")} 
                onClick={setBalance}>
                Add money</button>
            </div>
            
            <div className='card-block'>
                <p>Konstantin Zamyakin</p>
                <p>{balance} $</p>
            </div>
        </div>
    )
}

export default WithRuBalance(Card);