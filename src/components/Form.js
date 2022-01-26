import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super()
        this.state = {
            username : '',
            message:'',
            course: 'react'
        }
    }

    changeUserName = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changeMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    changeCourse = (e) => {
        this.setState({
            course:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`${this.state.course} ${this.state.message}`)
    }
    
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange = {this.changeUserName} />
            </div>
            <div>
                <label>Message</label>
                <textarea type="text" value={this.state.message} onChange = {this.changeMessage} ></textarea>
            </div>
            <div>
                <label>Course</label>
                <select value={this.state.course} onChange={this.changeCourse}>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                    <option value="angular">Angular</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
  }
}

export default Form;
