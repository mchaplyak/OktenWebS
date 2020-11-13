export function Post(props) {

    let {userId, id, title, body} = props.item

    return (
        <div>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    )


}