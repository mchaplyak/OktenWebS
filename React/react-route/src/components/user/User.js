export function User(props) {

    let {id, name, username, email} = props.item

    return(
        <div>
            {
                {id} - {name} - {username} - {email}
            }
    </div>
    )
}