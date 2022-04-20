import React from 'react';
import { PropsTransfer } from './Models';
import View from './view';

const TransferInteligenc: React.FC<PropsTransfer> = ({

}) => {
    return (
        <View
            country='United States'
            valueTransferenc='1.567,00'
            countryDestinationTranfers='Canadá'
            countryBoxHistoric='Brazil'
            valueBoxHistoric='1.200,00'
        />
    )
}
export default TransferInteligenc;