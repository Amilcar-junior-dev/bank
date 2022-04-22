import React from 'react';
import { Image } from 'react-native';
import { PropsTransfer } from './Models';
import {
    Container,
    Header,
    TransferFrom,
    ViewTransfer,
    From,
    Country,
    TextCountry,
    Division,
    AmountSend,
    TextAmountSend,
    ImgFlow,
    HistoricTransference,
    HeaderHistoric,
    ItemHistoric,
    Description,
    TextDescription,
} from './styled';

const Transfer: React.FC<PropsTransfer> = ({
    country,
    valueTransferenc,
    countryDestinationTranfers,
    countryBoxHistoric,
    valueBoxHistoric
}) => {

    return (
        <Container>

            <Header> Transference </Header>

            <TransferFrom>

                <ViewTransfer>
                    <From>From:</From>
                    <Country>
                        <Image source={{ uri: "https://img2.gratispng.com/20180723/ksp/kisspng-flag-of-the-united-states-clip-art-dubai-flag-5b5694386def19.8898116515324006964503.jpg" }}
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 75
                            }} />
                        <TextCountry>{country}</TextCountry>
                    </Country>
                </ViewTransfer>

                <Division />

                <AmountSend>
                    <TextAmountSend>You send:</TextAmountSend>
                    <TextAmountSend style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "#030303"
                    }}
                    >R${valueTransferenc}</TextAmountSend>
                </AmountSend>

            </TransferFrom>

            <ImgFlow>
                <Image source={{ uri: "https://w7.pngwing.com/pngs/454/1012/png-transparent-arrow-up-and-down-icon-angle-symbol-font-arrow-updown-angle-desktop-wallpaper-apple-color-emoji-thumbnail.png" }}
                    style={{
                        width: 30,
                        height: 30,
                    }}
                />
            </ImgFlow>

            <TransferFrom>
                <ViewTransfer>
                    <From>To:</From>
                    <Country>
                        <Image source={{ uri: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/11/bandeira-do-canada.jpg" }}
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 75
                            }}
                            resizeMode='contain'
                        />
                        <TextCountry>{countryDestinationTranfers}</TextCountry>
                    </Country>
                </ViewTransfer>

                <Division />

                <AmountSend>
                    <TextAmountSend>You send:</TextAmountSend>
                    <TextAmountSend style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "#030303"
                    }} >R${valueTransferenc}</TextAmountSend>
                </AmountSend>
            </TransferFrom>

            <HistoricTransference>
                <HeaderHistoric>Historic</HeaderHistoric>
            </HistoricTransference>

            <ItemHistoric>
                <Description>
                    <TextDescription style={{ fontWeight: "bold" }}>Received</TextDescription>
                    <TextDescription>{countryBoxHistoric}</TextDescription>
                </Description>
                <TextDescription style={{
                    fontWeight: "bold",
                    color: "#46e92d"
                }}>R$ {valueBoxHistoric}</TextDescription>
            </ItemHistoric>

            <ItemHistoric>
                <Description>
                    <TextDescription style={{ fontWeight: "bold" }}>Received</TextDescription>
                    <TextDescription>{countryBoxHistoric}</TextDescription>
                </Description>
                <TextDescription style={{
                    fontWeight: "bold",
                    color: "#46e92d"
                }}>R${valueBoxHistoric}</TextDescription>
            </ItemHistoric>
        </Container>
    )
}
export default Transfer;