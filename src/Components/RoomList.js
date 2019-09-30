import React from 'react'
import {Rooms} from "./RoomsForFR";

export const RoomList = ({rooms}) => {
    if(rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>Unfortunatelly no rooms matched your search parameters</h3>
            </div>
        )
    }
    return (
        <div className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item => {
                        return <Rooms key={item.id} room={item} />
                    })
                }
            </div>
        </div>
    )
}