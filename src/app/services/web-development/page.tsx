import cssStyle from "./nested.module.css";

console.log(cssStyle,"CSS-Style")

const WebDevelopment = () => {
    return(
        <div className="nestedPage">
        <h1 className={cssStyle.nestedPage}>This is a Nested Page</h1>
        </div>
    )
}
export default WebDevelopment;
