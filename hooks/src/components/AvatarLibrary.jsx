import React, { useEffect, useReducer } from "react";
import { useFetch } from './../hooks/useFetch';



function AvatarLibrary() {
    
    const state = useFetch(`https://jsonserver-vercel-api.vercel.app/api/posts`)
    console.log(state);
    const { isLoading, data: postList, error } = state

    return (
        <>
            {
                error ? <p>{error}</p> : 
                isLoading ? <p>Loading...</p> : (
                    <ul>
                        {postList?.map((post) => (
                            <li key={post.id}>
                                {
                                    post.title
                                }
                            </li>
                        ))}
                    </ul>
                )
            }
        </>
    )
}

export default AvatarLibrary

