import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/user/userSlice'

export default function Users() {
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <div>
            {error && <p>something went wrong</p>}
            {loading && <p>loading</p>}
            {!loading && !error && users?.map(item =>
                <li key={item.id}>User Name : {item.username}</li>
            )}
        </div>
    )
}
