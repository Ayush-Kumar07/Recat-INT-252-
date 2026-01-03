const { useMemo } = require("react")

let handleDelet= useCallback(id)=>{
    axios.delete('http://localhost:3000/posts/'+id)

},[fetchData])

const renderedList= useMemo(()=>{
    return fetchData.map((a, b))=>{
        <div key={a.id} className='flex justify-evenly items-center p-2 '></div>
        <p>{a.name}</p>
        <p>{a.email}</p>
        <p>{a.password}</p>
        <div className=' space x-6'> 
        <button className='bg-red-500 p-2 rounded-md text-white' onClick={()=>handleDelet(a.id)}>Delete</button>
        <button onClick={()=>handleEdit(a.id)} className='bg-blue-500 p-2 rounded-md text-white'>Edit</button>
        
        </div>
        </div>
    }
},[fetchData, handleDelete])
    }