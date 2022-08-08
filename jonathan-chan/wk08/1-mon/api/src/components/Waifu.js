import React, {Component} from 'react';
import axios from 'axios';

import Gallery from "./Gallery"
import Submit from './Submit';

class Waifu extends Component {
    constructor () {
        super();
        this.fetchWaifus = this.fetchWaifus.bind(this);
        this.state = {
            images: []
        };
    }

    fetchWaifus() {
        console.log('hi')
        const waifuURL = 'https://api.waifu.im/random/'
        axios(waifuURL).then((response) => {
            const waifu = response.data.images[0].url
            this.setState({images: waifu})
        });
    }
    render () {
        return (
            <div>
                <h1>Fetch Waifu</h1>
                <Submit onSubmit={this.fetchWaifus}/>
                <Gallery images={this.state.images}/>
            </div>
        );  
    }
}

export default Waifu;