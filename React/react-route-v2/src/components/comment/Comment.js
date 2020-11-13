export function Comment(props) {

    let {postId, id, name, email, body} = props.item

    return (
        <div>
            <p>postId: {postId}</p>
            <p>Id: {id}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>body: {body}</p>

            <hr/>
        </div>
    )

}