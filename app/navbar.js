import Link from 'next/link'

export default function Navbar() {
    return(
        <header>
            <div className="larrytheworm" style={{float:'left'}}>
                <img className="logo" src="https://cdn.discordapp.com/attachments/1116071450659536977/1213907440907583488/bobolinks.png?ex=6612dde7&is=660068e7&hm=71558f817af58f55da8859e2ce342c6fb687fb3ebf1ed603a8328897c5d53c8c&" />
                <ul className="homeLinks">
                    <li className="Bookwrm"><Link href="/">Bobolink</Link></li>
                </ul>
            </div>
            <nav className="navbar">
                <ul className="navLinks">
                    <li className="Login"><Link href="/math/Algebra2"></Link></li>
                    <li className="About"><Link href="/math/Algebra1">About Us</Link></li>
                </ul>
            </nav>
            <Link className="cta" href="/math/register"><button className='contactbutton'>Join Waitlist</button></Link>
        </header>
    )
}