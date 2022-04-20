export interface PropsHome {
    teatle: string
    balance: string
    firstGroupNumberCard: string
    secondGroupNumberCard: string
    thirdGroupNumberCard: string
    bedroomGroupNumberCard: string
    dueDate:string
    placeBuy: string
    data: PropsData[]
}

interface PropsData {
    id: number
    name: string
    subtitle: string
    value: number
    placeBuy: string
}