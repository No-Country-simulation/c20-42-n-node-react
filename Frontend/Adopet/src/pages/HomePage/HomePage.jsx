import React from "react";
import Banner from "../../components/Banner/Banner"
import ListCardMacota from "../../components/Mascota/ListCardMascota";
const HomePage = ()=>{
    const title ={
        padding:'10px',
        borderStyle: 'solid',
        borderColor: 'white white black white',
    }
    return(
        <>
            <Banner/>
            <div className="container">
                <h2 style={title}>Adote una Mascota</h2>
                <ListCardMacota/>
            </div>
        </>
    );
}

export default HomePage;