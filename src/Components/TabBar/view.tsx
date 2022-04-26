import React from 'react';
import {Tab} from './style';
import {TouchableOpacity, Icon} from './style'
//import Icon from 'react-native-vector-icons/Entypo';

const TabBar = ({data, isActive, onPress})=>{
    return(
        <Tab>
            {data.map((item, index)=>(
                <TouchableOpacity onPress={()=>onPress(item)} key={index}>
                    <Icon source={(item.icon)} width={0.1} height={0.1}/>
                </TouchableOpacity>
            ))}
        </Tab>
    )
}
export default TabBar;

//<Icon name={(item.icon)} size={40} color={isActive == index ?'#3bb1f0' : '#5B5B5B'} />