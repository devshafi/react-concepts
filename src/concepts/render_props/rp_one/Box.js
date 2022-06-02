export default function Box(props) {

    const mouse = props.mouse;
    const mouseMove = props.mouseMove;

    const boxStyles = {
        height: '100px',
        width: '100px',
        backgroundColor: 'green',
        position: 'absolute',
        left: mouse.x,
        top: mouse.y,
        transition:"all .5s"
    }
    return (
        <div style={{height:'100vh'}} onMouseMove={mouseMove}>
            <div style={boxStyles}  >
            </div>
        </div>


    )
}