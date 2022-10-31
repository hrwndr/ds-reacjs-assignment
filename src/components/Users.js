import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

function Users() {
    const { setUsers, showUsers, loading, setLoading, setCurrentUser } = useContext(AppContext)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return loading ? (
        <div className="text-center text-primary mt-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    ) : (
        <section className='m-3'>
            <div className="row">

                {showUsers.length > 0 ? showUsers.map(u => <div className="col-sm-12 col-md-4 col-lg-3" key={u.id}>
                    <div className="card mb-2">
                        <h5 className="card-header">@{u.username.toLowerCase()}</h5>
                        <div className="card-body">
                            <h5 className="card-title">{u.name}</h5>
                            <p className="card-text">
                                {u.company.name}
                            </p>
                            <button
                                className="btn btn-sm btn-primary" type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={() => setCurrentUser(u)}
                            >
                                View Profile
                            </button>
                        </div>
                    </div>
                </div>
                ) : <div className='text-center fs-3'>🤷🏼‍♂️ No search results!</div>}
            </div>
        </section>
    )
}

export default Users