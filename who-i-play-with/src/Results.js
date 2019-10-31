import React, { Component } from 'react';
import qs from 'query-string';

class Results extends Component {
	render() {
		//const name = this.props.location.query.__summonerName;
		//const region = this.props.location.query.__region;
		const params = qs.parse(this.props.location.search)
		return (<p>Welcome, {params.summoner} from {params.region}</p>);
	}
}

export default Results;