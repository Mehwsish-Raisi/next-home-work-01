
import cssStyle from "./about.module.css"
console.log(cssStyle,"CSS-Style")
const AboutPage = () => {
    return (
        <div className="free">
            <h1 className={cssStyle.free}>
                About Page
            </h1>
        </div>
    );
    
}
export default  AboutPage;