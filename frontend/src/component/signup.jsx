import React from 'react'

const Signup = () => {
    return (
        <div className='container'>
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h3>Signup</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div classNmae="form-group">
                                <lable>username</lable>
                                <input type="text" className="form-control" placeholder='Enter your username'/>
                            </div>
                            <div classNmae="form-group">
                                <lable>Email</lable>
                                <input type="text" className="form-control" placeholder='Enter your email'/>
                            </div>
                            <div className="form-group">
                                <lable>Password</lable>
                                <input type="text" className="form-control mb-4" placeholder='Enter your password'/>
                            </div>
                            <button className="btn btn-primary">Signup</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup