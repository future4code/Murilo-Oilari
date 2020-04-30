import React from 'react';


export class Pokemon extends React.Component {
    render () {
        return  <div>
                    <ul>
                        {this.props.pokemon}
                    </ul>
                </div>
    }
}