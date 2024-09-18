function Button(props) {
    const style = {
        padding : props.padding || "10px 30px",
        borderRadius : props.borderRadius || "10px",
        border : props.border || `2px solid ${props.color}`,
        backgroundColor : props.back || "white",
        color : props.color || "black",
        fontSize : props.fontSize || "15px",
        cursor : "pointer",
        transition : "all 300ms",
    }
    return(
        <>  
            <style>
                {
                    `.btn-app:hover{
                        transform : scale(1.07);
                    }
                    `
                }
            </style>
            <button className="btn-app" style={style}>
                {props.text}
            </button>
        </>
    )
}

export default Button;