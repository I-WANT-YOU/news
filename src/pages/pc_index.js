import React from 'react';
import PcHeader from '../component/pc_header';
import PcFooter from '../component/pc_footer';
import PcNews from '../component/pc_news';

export default class PcIndex extends React.Component{

    render() {
        return (
            <div>
                <PcHeader/>
                <PcNews/>
                <PcFooter/>
            </div>
        );
    }
}
