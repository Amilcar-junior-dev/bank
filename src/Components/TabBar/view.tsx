import React from 'react';
import {Tab} from './style';
import {TouchableOpacity} from './style'
import Icon from 'react-native-vector-icons/Entypo';

const TabBar = ({data, isActive, onPress})=>{
    return(
        <Tab>
            {data.map((item, index)=>(
                <TouchableOpacity onPress={()=>onPress(item)} key={index}>
                    <Icon name={(item.icon)} size={40} color={isActive == index ?'#3bb1f0' : '#5B5B5B'} />
                </TouchableOpacity>
            ))}
        </Tab>
    )
}
export default TabBar;