import Link from 'next/link'

export default function Navbar() {
    return(
        <header>
            <div className="larrytheworm" style={{float:'left'}}>
                <img className="logo" src="https://cdn.discordapp.com/attachments/1116071450659536977/1213907440907583488/bobolinks.png?ex=65f72e67&is=65e4b967&hm=49cf73ff55dab0b14f369bf0a55adb445180e1485579e9c13a733a0be74ef309&" />
                <ul className="homeLinks">
                    <li className="Bookwrm"><Link href="/">Bobolink</Link></li>
                </ul>
            </div>
            <nav className="navbar">
                <ul className="navLinks">
                    <li className="About"><Link href="/math/Algebra1">About Us</Link></li>
                </ul>
            </nav>
            <Link className="cta" href="/math/register"><button className='contactbutton'>Join Waitlist</button></Link>
        </header>
    )
}