import React from 'react';
import Home from './view';
import { PropsHome } from './Models';

const HomeInteligenc: React.FC<PropsHome> = ({
}) => {
    const data = [
        {
            id:1,
            name:'Coca',
            subtitle:'Market',
            value:'3,00',
        }, {
            id:1,
            name:'Bread',
            subtitle:'Bakery',
            value:'5,00',
        }
    ]
    return (
        <Home
            teatle='Balance'
            balance='10.999,00'
            firstGroupNumberCard="1234"
            secondGroupNumberCard="456"
            thirdGroupNumberCard="123"
            bedroomGroupNumberCard="379"
            dueDate='05/26'
            placeBuy='market'
            data={data}
        />
    )
}
export default HomeInteligenc;