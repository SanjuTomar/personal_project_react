import React ,{useCallback, useMemo, useState}from 'react'
import data from './listData.json'
import Table from './Table'
import Header from './Header'
import Footer from './Footer'
function Index() {
const [listData,setListData] = useState(data)
const [count,setCount] = useState(0)
const memoizedDelete=useCallback((i)=>{
    deleteRecord(i);
},[])
const memoizedReadRecord=useCallback((i)=>{
    readRecord(i);
},[])


var checkLength = useMemo(()=>{
    updateList(listData)
},[listData])

const deleteRecord =(i)=>{
    console.log("10--",i);
    setListData(listData.filter((val,index)=>index !== i))
    }
const readRecord =(i)=>{
    console.log("12--",i);
    setListData(prev =>prev.map((val,index)=>{if(index ==i){return {...val,isRead:true}}else{return val}}))
}
console.log("27--",checkLength);
  return (
    <>
    <p>{checkLength}</p>
    <Header 
     allNamesCount ={"10"} 
    />
    <button type="button" onClick={()=>setCount(count+1)}>Click {count}</button>
    <Table
   
    data={listData}
    deleteRecord={memoizedDelete}
    readRecord={memoizedReadRecord}
    />
    <Footer />
    </>
  )
}

export default Index

const updateList =(listData)=>{
    console.log("49--");
    let  allNamesCount =0
    for(let i=0;i<listData.length;i++){
        allNamesCount ++
    } 
  return allNamesCount
}