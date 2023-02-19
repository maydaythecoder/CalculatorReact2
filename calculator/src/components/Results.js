import React, {Component} from 'react';

class ResultsObj extends Component {
    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
            
        );
    }
}

export default ResultsObj;