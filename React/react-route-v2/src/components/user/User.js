import React from "react";

export function User(props) {

    let {id, username, name, email} = props.item

    return (
        <div>
            {id} - {username} - {name} - {email}
        </div>
    )
}