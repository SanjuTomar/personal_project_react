
import React from 'react'
import { useState } from 'react'
import data from './listData.json'

function ShowList(props) {
  //const {data} = props

  
   // console.log("data---",data);
   // const [list,settList] = useState(data)

    //console.log("9---",list);
  // function  showList(e,i){
  //   settList(list.filter((val,index)=>index !==i))
  // // console.log("12---",e.target,i);
  //   }
    // function  viewList(e,i){
   
    //     // setView(view.filter((val,index)=>{if(index ==i){
           
    //         settList(prev =>prev.map((val,index)=>{if(index ==i){return {...val,isRead:true}}else{return val}}))
    //      //  this.setState({bgcolor:'green'})}}))
    //   // console.log("12---",e.target,i);
    //     }
    
  return (

    <>
    {/* <table>
    <thead>
        <tr >
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {list.map((val, index) => (
            <tr style={{backgroundColor:val.isRead?'grey':'white'}} key={index}>
                <td>{val.name}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <button type="button" onClick={(e) => showList(e,index)}>Delete</button>
                <button style={{margin:"10px"}} type="button" onClick={(e) => viewList(e,index)}>View</button>
            </tr>
        ))}
    </tbody>
</table> */}

    </>
    
  )
}

export default ShowList