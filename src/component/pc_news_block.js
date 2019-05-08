import React from 'react';
import fetchJsonp from 'fetch-jsonp';


export default class PcIndex extends React.Component{
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        let myFetchOptions = {
                method: 'GET',
                mode: 'cors',
                redirect: 'follow',
                headers: new Headers({
                    'content-type': 'application/json'
                })
        };
        fetch("http://v.juhe.cn/toutiao/index?type=top&key=f3a00554bd2a1c74d4904befefe06564" ,myFetchOptions)
            .then(response => console.log(response)).then(json=>console.log(json));

    };

    render() {
        return (
            <div>

            </div>
        );
    }
}
