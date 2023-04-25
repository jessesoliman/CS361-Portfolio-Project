import { useNavigate } from 'react-router-dom';

function EarnCoins() {
    return (
        <div>
            <h1>
                Welcome to the Coin Earner
            </h1>
            <p>Here you'll see a list of ways to earn coins.</p>
            <table className="table-schema">
                <thead>
                    <tr>
                        <th className='row-schema-2'>Activity</th>
                        <th className='row-schema-2'>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='row-schema'>Built in Coin Earner</td>
                        <td className='row-schema'>Earn coins passively when you have an account!</td>
                    </tr>
                    <tr>
                        <td className='row-schema'>Coins for grades</td>
                        <td className='row-schema'>Earn coins for your grades. The better the grade, the more you earn!</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default EarnCoins;