import { useEffect, useState } from 'react'
import firebaseApp from '../utility/firebase.config.js';

const useFetchCollection = (collection) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const fetch = async() => {
        try{
            setIsPending(true)
            const response = await firebaseApp.db.collection(collection).get();
            //Need to add unique doc id to document
            setData(response.docs.map((doc,index) => {
                return {...doc.data(), id: index+1}
            }));
        }
        catch(err){
            console.log(err)
            setError("Unable to fetch from database")
        }
        finally {
            setIsPending(false)
        }
    }

    useEffect(() => {
        const abortCont = new AbortController();
        fetch()
        return () => abortCont.abort();
    },[]);

    return { data, isPending, error };
}

export default useFetchCollection