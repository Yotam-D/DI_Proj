import React from 'react';


class UserFavoriteColors extends React.Component{
    constructor(){
        super();
    }

    render(){
        const AnimalsArr = this.props.fav_animals
        return(
            <div>
                <h2>Heythere from Component</h2>
                {AnimalsArr.map((item, index) => <li key ={index}>{item}</li>)} 
            </div>
        )
    }
}

export default UserFavoriteColors;