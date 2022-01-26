import React, { Component } from 'react';
import Person from './Person';

class List extends Component {

    render() {
        let person = [
            {
                id:1,
                name:'vic',
                age:25
            },
            {
                id:2,
                name:'Hillary',
                age:26
            },
            {
                id:3,
                name:'Jose',
                age:30
            }
        ]


        // only use index as a key when there is no unique id
        // the list is static
        // the list will not be sorted or filtered



        let names = ['Vic','Jeff','Avata']

        let nameList = names.map((name,index) => <h5 key={index}>{index} - {name}</h5>)

        // let personList = person.map(person => <Person key={person.id} person={person}/>)

        return (
            <div>{nameList}</div>
        )
    }
}

export default List;
