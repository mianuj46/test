import React, { useEffect, useState } from 'react'

function Ecommerce() {
    let [id, setId] = useState()
    let [sp, setsp] = useState()
    let [productName, setProd] = useState()
    let [category, setcategory] = useState("electronic")
    let [items, setItems] = useState([])
    let [data,setData]=useState([])
    let[indx,setIndex]=useState([])

    const handleDelete=(index)=>{
     let v=data.filter((item,idx)=>idx!==index)
     localStorage.setItem(category,JSON.stringify(v));
     setData(v)

    }
        const handleClick = () => {
        let obj =
        {
            id, sp, productName, category
        }
        const arr = JSON.parse(localStorage.getItem(category)) || [];
        arr.push(obj);
       localStorage.setItem(category,JSON.stringify(arr));
       let v=JSON.parse(localStorage.getItem(category))
       setData(v)
    }
    
    useEffect(()=>{
       let v=localStorage.getItem(category)
       let c=JSON.parse(v)
       setData(c)
    },[category])

    return (
        <div >
            <div style={{display:'flex',width:'80%',margin:'20px'}}>
            <div>
                product id
                <input type={'text'} onChange={(e) => { setId((e.target.value)) }} value={id} />
            </div>
            <div>
                selling price
                <input type={'text'} onChange={(e) => { setsp((e.target.value)) }} value={sp} />
            </div>
            <div>
                product name
                <input type={'text'} onChange={(e) => { setProd((e.target.value)) }} value={productName} />
            </div>
            <div>
                choose a category
                <select onChange={(e) => { setcategory(e.target.value) }} value={category}>
                    <option value="electronic">electronic</option>
                    <option value="food">food</option>
                    <option value="skincare">Skin care</option>
                </select>
            </div>
            <button onClick={handleClick}>Add Product</button>
            </div>
           
            <div>
                <div onClick={()=>setcategory('electronic')}> <h2>Electronic items </h2></div>
                {
                    category=='electronic'?<ul>
                  {data.length>0?data?.map((item,idx)=>(
                        <>
                         <li>{item.sp}-{category}-{item.productName} <button onClick={()=>handleDelete(idx)}>Delete</button></li>
                        </>
                    )):<h3> Empty list please add item</h3>}
                </ul>
                :null
                }
                
            </div>
            <div>
                <div onClick={()=>setcategory('food')}> <h2>Food items</h2> </div>
                {
                    category=='food'?<ul>
                    {data.length>0?data?.map((item,idx)=>(
                        <>
                         <li>{item.sp}-{category}-{item.productName} <button onClick={()=>handleDelete(idx)}>Delete</button></li>
                        </>
                    )):<h3> Empty list please add item</h3>}
                </ul>
                :null
                }
                
            </div>
            <div>
                <div onClick={()=>setcategory('skincare')}> <h2>Skin care </h2> </div>
                {
                    category=='skincare'?<ul>
                         {data.length>0?data?.map((item,idx)=>(
                        <>
                         <li>{item.sp}-{category}-{item.productName} <button onClick={()=>handleDelete(idx)}>Delete</button></li>
                        </>
                    )):<h3> Empty list please add item</h3>}
                </ul>
                :null
                }
                
            </div>
        </div>
    )
}

export default Ecommerce