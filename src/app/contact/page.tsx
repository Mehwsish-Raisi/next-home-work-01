import cssStyle from "./contact.module.css";
console.log(cssStyle,"CSS-Style")
const MyContact =  () => {
return (
    <div className="design">
      <h1 className={cssStyle.design}> Contact us </h1>
    </div>
)
}
export default MyContact;