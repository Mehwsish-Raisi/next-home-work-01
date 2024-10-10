import Link from "next/link";
export  function HomePage() {
  return (
    <div>
      <h1 id="main">My Home Page</h1>
      <nav>
      <ul>
        <li id="one" ><Link href="/">Home</Link></li>
        <li id="two"><Link href="/about"  target="_blank">About</Link></li>
        <li id="three"><Link href="/contact" target="_blank">Contact</Link></li>
        <li id="four"><Link href="/services/web-development" target="_blank"> Services</Link></li>
      </ul>
      </nav>
    </div>
    );
    
}
export default HomePage;