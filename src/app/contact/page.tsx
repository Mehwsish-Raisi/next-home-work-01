import cssStyle from "./contact.module.css";

const MyContact =  () => {
return (
    <div>
      <h1 className={cssStyle.design}> Contact us </h1>
      <p className={cssStyle.paragraph}>
        If you have any query, 
         <a className={cssStyle.mail} href="mailto:raisimish@gmail.com">
           Contact Us Via Email
        </a>
        </p>
    </div>
)
}
export default MyContact;