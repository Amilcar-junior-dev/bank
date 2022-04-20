import React from 'react';
import { Image, TextInput } from 'react-native';
import { PropsProfile } from './Modal';

import {
    Container,
    Details,
    NameProfile,
    ItemBoxOptions,
    TextItemBoxOptions,
    BoxOptions,
    InfoUser,
    TextInfoUser,
    BoxInfo,
} from './styled';

const Profile: React.FC<PropsProfile> = ({
    name,
    firstValueItemBox,
    secondVlaueItemBox,
    firstTitleItemBox,
    secondTtitleItemBox,
    nameBoxInfo,
    age,
    adress,
}) => {
    return (
        <Container>

            <Image source={{ uri: "https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png" }}
                style={{
                    width: "100%",
                    height: "60%"
                }}
            />

            <Details>

                <NameProfile>{name}</NameProfile>

                <BoxOptions>
                    <ItemBoxOptions>
                        <TextItemBoxOptions>R${firstValueItemBox}</TextItemBoxOptions>
                        <TextItemBoxOptions>{firstTitleItemBox}</TextItemBoxOptions>
                    </ItemBoxOptions>
                    <ItemBoxOptions>
                        <TextItemBoxOptions>R${secondVlaueItemBox}</TextItemBoxOptions>
                        <TextItemBoxOptions>{secondTtitleItemBox}</TextItemBoxOptions>
                    </ItemBoxOptions>
                </BoxOptions>

                <BoxInfo>
                    <InfoUser>
                        <TextInfoUser>Name:{nameBoxInfo} </TextInfoUser>
                    </InfoUser>
                </BoxInfo>

                <BoxInfo>
                    <InfoUser>
                        <TextInfoUser>Age: {age} </TextInfoUser>
                    </InfoUser>
                </BoxInfo>

                <BoxInfo>
                    <InfoUser>
                        <TextInfoUser>Adress: {adress} </TextInfoUser>
                    </InfoUser>
                </BoxInfo>

            </Details>
        </Container>
    )
}
export default Profile;