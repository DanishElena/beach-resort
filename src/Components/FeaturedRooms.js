import React from 'react'
import {RoomContext} from "../Context";
import {Title} from "./Title";
import {Rooms} from "./RoomsForFR";
import {Loading} from "./Loading";




export default class FeaturedRooms extends React.Component {
    static contextType = RoomContext;

    render() {
        let {loading, featuredRooms: rooms} = this.context;
        rooms = rooms.map(room => {
            return <Rooms key={room.id} room={room}/>
        })
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading/> : rooms}
                </div>
            </section>
        )
    }
}
    