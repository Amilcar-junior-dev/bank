import React from 'react';
import { View, Image, Text } from 'react-native';
import { PropsHome } from './Models';
import {
    Container,
    Balance,
    HeadTitle,
    BoxCard,
    Card,
    LogoCard,
    BoxNumberCard,
    NumberCard,
    DuedDate,
    BoxDueDate,
    Details,
    BoxOptions,
    ItemBoxOptions,
    TextItemBoxOptions,
    BoxToday,
    BoxValuetoday,
    TextBoxToday,
    ValueTextBoxToday,
    Division,
    BoxHistoricDiary,
    BoxInternalHistoric,
    Box,
    TextBoxInternalHistoric,
} from './styled';

//import Transfer from 'react-native-vector-icons/dist/MaterialCommunityIcons';
//import Star from 'react-native-vector-icons/dist/Entypo';
//import Wallet from 'react-native-vector-icons/dist/FontAwesome';
//import CredCard from 'react-native-vector-icons/dist/AntDesign';

const Home: React.FC<PropsHome> = ({
    teatle,
    balance,
    firstGroupNumberCard,
    secondGroupNumberCard,
    thirdGroupNumberCard,
    dueDate,
    bedroomGroupNumberCard,
    data
}) => {
    return (

        <Container>

            <HeadTitle> {teatle} </HeadTitle>

            <Balance>R${balance}</Balance>

            <BoxCard>

                <Card>
                    <LogoCard>e.</LogoCard>

                    <BoxNumberCard>
                        <NumberCard>{firstGroupNumberCard}</NumberCard>
                        <NumberCard>{secondGroupNumberCard}</NumberCard>
                        <NumberCard>{thirdGroupNumberCard}</NumberCard>
                        <NumberCard>{bedroomGroupNumberCard}</NumberCard>
                    </BoxNumberCard>

                    <BoxDueDate>
                        <DuedDate>{dueDate}</DuedDate>
                        <Image
                            source={{ uri: 'https://seeklogo.com/images/M/MasterCard-logo-F37092E4F9-seeklogo.com.png' }}
                            style={{
                                width: 50,
                                height: 30,
                                marginTop: 8,
                                marginRight: 10
                            }} />
                    </BoxDueDate>
                </Card>
            </BoxCard>

            <Details>

                <BoxOptions>
                    <ItemBoxOptions>
                        <Image source={require('../../Assets/img/coluna.png')}
                        style={{
                            width:40,
                            height:40
                        }}/>
                        <TextItemBoxOptions>Transfer</TextItemBoxOptions>
                    </ItemBoxOptions>
                    <ItemBoxOptions>
                    <Image source={require('../../Assets/img/wallet.png')}
                        style={{
                            width:40,
                            height:40
                        }}/>
                        <TextItemBoxOptions>Wallet</TextItemBoxOptions>
                    </ItemBoxOptions>
                    <ItemBoxOptions>
                    <Image source={require('../../Assets/img/details.png')}
                        style={{
                            width:40,
                            height:40
                        }}/>
                        <TextItemBoxOptions>Details</TextItemBoxOptions>
                    </ItemBoxOptions>
                </BoxOptions>

                <BoxToday>
                    <BoxValuetoday >
                        <TextBoxToday>Today</TextBoxToday>
                    </BoxValuetoday>

                    <BoxValuetoday >
                        <ValueTextBoxToday>- R$ 1.236,00</ValueTextBoxToday>
                    </BoxValuetoday>
                </BoxToday>

                <Division />

                {data.map((item, index) => (
                    <BoxHistoricDiary key={index}>

                        <BoxInternalHistoric>
                           
                            <Box>
                                <TextBoxInternalHistoric style={{ fontSize: 20, fontWeight: "bold", color: "#575757" }}>{item.name}</TextBoxInternalHistoric>
                                <TextBoxInternalHistoric>{item.subtitle}</TextBoxInternalHistoric>
                            </Box>
                        </BoxInternalHistoric>

                        <BoxInternalHistoric>
                            <TextBoxInternalHistoric style={{ fontSize: 20, fontWeight: "bold", color: "#ff0000" }}>-R${item.value}</TextBoxInternalHistoric>
                        </BoxInternalHistoric>

                    </BoxHistoricDiary>
                ))}
            </Details>
        </Container>
    )
}
export default Home;

