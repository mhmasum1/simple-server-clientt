import React from 'react';

const Users = () => {
    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email);
        const newUser = { name, email };

        // save this user data to the database (via server)
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after saving the user', data)
                if (data.insertedId) {
                    alert("users added successfully");
                    e.target.reset();
                }
            })

    }
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default Users;