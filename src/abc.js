import React from 'react';
const numbers = [1,2,3,4,5];
export default class ComponentHeader extends React.Component{ //class名开头必须大写
  constructor(props){
    super(props);
    
    this.state={
        date:new Date(),
        movestart:0
    };
    this.listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
  }
  componentDidMount() {
    document.addEventListener('mouseup',(event)=>{
      console.log(123);
    })
    document.addEventListener('mousemove',(event)=>{
      console.log(this.movestart);
      if(this.movestart == 1){
        console.log(123);
      }
    })
  }
  activateLasers(event){
    //const {movestart} = 1;
    //this.setState({ movestart: true });
    console.log(this.state);
  }
  Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn === 0) {
      return <div className="jsplumb-add" onClick={this.activateLasers}></div>;
    }
    return <div className="jsplumb-hover">ssss</div>;
  }
    render(){ //render解析类的输出
      let Greeting;

      if (this.state.movestart === 0) {
        Greeting = <div className="jsplumb-add" onClick={this.activateLasers}></div>;
      } else {
        Greeting = <div className="jsplumb-hover">ssss</div>;
      }
      let {movestart} = this.state;
      return(
        <div>
          <div className="jsplumb-left">
          {Greeting}
          1232{movestart}
          </div>
          <div className="jsplumb-right">
          <ul>{this.listItems}</ul>
          </div>
        </div>
      )
    }
  }