import React from 'react'
import {RoomFilter} from "./RoomFilter";
import {RoomList} from "./RoomList";
import {Loading} from "./Loading";
import {withRoomConsumer} from "../Context";

const RoomContainer = ({context}) => {
//    console.log(context)
    const {loading, sortedRooms} = context

    if (loading) {
        return <Loading/>
    }
    return (
        <>
            <RoomFilter context={context}/>
            <RoomList rooms={sortedRooms}/>
        </>
    )
}



export default withRoomConsumer(RoomContainer)

// import React from 'react'
// import {RoomFilter} from "./RoomFilter";
// import {RoomList} from "./RoomList";
// import {Loading} from "./Loading";
// import {RoomConsumer} from "../Context";
//
//
// export const RoomContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 value => {
//                     const {loading, sortedRooms, rooms} = value
//                     if(loading) {
//                         return <Loading/>
//                     }
//                     return (
//                         <div>
//                         Hello
//                         <RoomFilter rooms={rooms}/>
//                         <RoomList rooms={sortedRooms}/>
//                     </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//
//     )
// }