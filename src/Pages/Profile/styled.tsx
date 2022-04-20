import styled from "styled-components/native";

export const Container = styled.View`
background-color: #000;
width: 100%;
height: 100%;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
justify-content: space-evenly;
`
export const Details = styled.View`
background-color: #000;
width: 100%;
height: 69%;
border-top-left-radius: 30px;
border-top-right-radius: 30px;
`
export const Card = styled.View`
width: 80%;
height: 150px;
padding: 10px 10px 15px 10px;
border-radius: 20px;
`
export const NameProfile = styled.Text`
margin-top: 10px;
font-size:30px;
color:#fff;
text-align: center;
`
export const BoxOptions = styled.View`
margin-top: 30px;
margin-left: 30px;
padding: 10px;
width: 80%;
height: 80px;
border-width: 1px;
flex-direction: row;
justify-content: space-between;
border-radius: 20px;
`
export const ItemBoxOptions = styled.View`
width:30%;
align-items: center;
justify-content: flex-end;
`
export const TextItemBoxOptions = styled.Text`
text-align: center;
font-weight: bold;
color:#3bb1f0;
`
export const BoxInfo = styled.Text`
padding: 10px 10px 10px 10px ;
`
export const InfoUser = styled.View`
margin-left: 10px;
margin-top: 25px;
justify-content: center;
background-color: #3bb1f0;
width: 300px;
height: 50px;
padding: 5px;
border-radius: 10px;
`
export const TextInfoUser = styled.Text`
color: #fff;
font-size: 16px;
`