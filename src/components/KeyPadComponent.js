import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>


                <button name="N" onClick={e => this.props.onClick(e.target.name)}>N</button>
                <button name="N" onClick={e => this.props.onClick(e.target.name)}>N</button>
                <button name="N" onClick={e => this.props.onClick(e.target.name)}>N</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button name="N" onClick={e => this.props.onClick(e.target.name)}>N</button>
                <button name="N" onClick={e => this.props.onClick(e.target.name)}>N</button>
                <button name="N" onClick={e => this.props.onClick(e.target.name)}>N</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button name="N" onClick={e => this.props.onClick(e.target.name)}>N</button>
                <button name="N" onClick={e => this.props.onClick(e.target.name)}>N</button>
                <button name="N" onClick={e => this.props.onClick(e.target.name)}>N</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="N" onClick={e => this.props.onClick(e.target.name)}>N</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;
