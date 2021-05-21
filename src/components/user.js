import React from 'react'

const User = ({ user }) => {
    return (
        <div>
            {user ?
                <React.Fragment>
                    <label >Email:</label>
                    {user.email}
                    <br />
                    <label>Name: </label>{user.name}
                </React.Fragment> :
                "Please refresh the page and Enter the ID..."

            }

        </div>


    )
}
export default User
