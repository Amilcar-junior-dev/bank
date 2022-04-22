import React from 'react';
import View from './view'
import { PropsProfile } from './Modal';
const ProfileInteligenc: React.FC<PropsProfile> = ({

}) => {
    return (
        <View
            name="Your name"
            firstValueItemBox='200,00'
            secondVlaueItemBox='140,00'
            firstTitleItemBox='Transfer'
            secondTtitleItemBox='Replenish'
            nameBoxInfo=''
            age=''
            adress=''
        />
    )
}
export default ProfileInteligenc;