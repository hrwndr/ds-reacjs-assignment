import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

function Navbar() {
    const [search, setSearch] = useState('')
    const { setShowUsers, users, setLoading } = useContext(AppContext)

    useEffect(() => {
        if (search.trim() !== '') {
            setLoading(true)
            const res = users.filter(u => u.name.toLowerCase().startsWith(search.toLowerCase()) || u.email.toLowerCase().startsWith(search.toLowerCase()) || u.username.toLowerCase().startsWith(search.toLowerCase()) || u.company.name.toLowerCase().startsWith(search.toLowerCase()))
            setShowUsers(res)
            setLoading(false)
        } else {
            setShowUsers(users)
        }
    }, [search])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Deliverable Services
                </a>
                <form className="w-100">
                    <input
                        className="form-control me-sm-2 w-100"
                        type="text"
                        placeholder="🔍 search by name, email, username or company name.."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </form>
            </div>
        </nav>

    )
}

export default Navbar