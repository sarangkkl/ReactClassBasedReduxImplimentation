import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment,decrement } from '../features/counterSlice'
import { store } from '../store'
// import { useSelector } from 'react-redux'



export class ClassTest extends Component {
    constructor(props){
        super(props)
        console.log("the props are",this.props)
        
    }
    

    increase(){
        this.props.increment();
        console.log("Hello")
    }
    decrease(){
        this.props.decrement();
        console.log("Hello")
    }

    componentDidMount(){
        const count = this.props.count
        console.log(count)
    }
  render() {
    return (
      <div>
          <h3>i am {this.props.count.count}</h3>
          <button onClick={()=>{this.increase()}}>Increase Me</button>
          <button onClick={()=>{this.decrease()}}>Increase Me</button>
      </div>
    )
  }

}

const  mapStateToProps = (state) =>{
    return {
        count:state.counter
    }
}

export default connect(mapStateToProps,{increment,decrement,store}) (ClassTest);