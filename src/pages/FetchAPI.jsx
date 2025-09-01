import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        try{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!data.ok){
            throw new Error('There was a problem!');
        }
        const response = await data.json();
        setItems(response);

    }catch(err){
        console.log('Error: ' + err);
        setError(err.message);
    }
    finally{
        setLoading(false);
    }

    }

    const FilteredItems = items.filter((item) => item.title.toLowerCase().includes(searchTerm))
    if(error){
        return <p className='text-red-400'>{error}</p>
    }

    if(loading){
        return <p className='justify-center text-center'>Loading .... </p>
    }
  
    return (

    <div className='flex flex-col gap-18'>
        <div className='flex flex-row gap-4 justify-center'>
        {/* Search Bar here */}
            <label className='font-light'>Search Here</label>
            <input type="text" className='focus:outline-0 p-1 border focus:bg-blue-100' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
        </div>

        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-12'>
            {/* posts render here */}

            {
                FilteredItems.map((item, id) => {
                    return <div key={id} className='border space-y-6 font-serif max-w-fit'>
                            <p className='truncate font-normal text-lg'> <span className='font-bold'>Title: </span> {item.title}</p>
                            <p className='text-sm line-clamp-3'><span className='font-bold'>Body: </span>{item.body}</p>
                    </div>
                })
            }

        </div>

    </div>
  )
}

export default FetchAPI