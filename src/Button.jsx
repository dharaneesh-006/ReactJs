
// Use of inline-CSS in JSX

function Button(){

    const style = {

        backgroundColor: "hsl(274, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }

    return(
        <button style={style}>Click Me</button>
    )
}

export default Button