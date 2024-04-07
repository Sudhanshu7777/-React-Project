import React, {useState} from 'react'
function Databinding() {
    const [data, setData] = useState({
        name: "Sudhanshu Gupta",
        age: 22
    })
    const handleChange=(event)=>{
        let value = event.target.value;
        setData({
            ...data,name:value
        });
    }
    return(
        <div>
            <h2>Data Binding</h2>
            <h4>One Way Binding: {data.name} {data.age}
            </h4>
            <div>
                <input type='text'value={data.name} 
                onChange={handleChange}
                />      
            </div>
        </div>
             
    )
}
export default Databinding;