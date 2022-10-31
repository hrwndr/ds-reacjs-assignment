import React from 'react'

function Profile({ user }) {
    const { name, username, email, address, phone, website, company } = user
    return (
        <>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                @{username.toLowerCase()}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="well well-sm text-center">
                                <div className="row">
                                    <h4>{name}</h4>
                                    <span>📱 {phone.split('x')[0].trim()}</span>
                                    <small>
                                        <cite title={`${address.street}, ${address.suite}, ${address.city}`}>
                                            📍 {address.street}, {address.suite}, {address.city} - {address.zipcode}
                                        </cite>
                                    </small>
                                    <p>
                                        📧 {email.toLowerCase()}
                                        <br />
                                        🖰 <a href={website}>{website}</a>
                                        <br />
                                        👔 {company.name}<br />
                                        <span className="blockquote-footer">{company.catchPhrase}</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" onClick={() => window.open(`https://maps.google.com/?q=${address.geo.lat},${address.geo.lng}`, '_blank')} className="btn btn-primary">
                                Locate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Profile