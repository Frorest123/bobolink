import Link from 'next/link'

export default function () {
    return (
        <>
        <footer className="footer">
            <div className="footer-left">
                <img src="https://cdn.discordapp.com/attachments/1116071450659536977/1213907197310935090/bobolinker.gif?ex=65f72e2d&is=65e4b92d&hm=7ef66c214e5f11b881fc92e27977ef005b5462b5fd8e132a86aee8355951c3a9&" alt=""/>
                <p>Pioneering Educational Technology</p>
            </div>
            <ul className="footer-right">
                <li>
                    <h2 className="Lessons">Useful Links</h2>

                    <ul className="box">
                        <li><Link href="/math/Algebra1">Team</Link></li>
                        <li><Link href="/math/register">Waitlist</Link></li>
                    </ul>
                </li>
                <li>
                    <h2 className="Address">Contact</h2>

                    <ul className="box">
                        <li><Link href="">team@bobolink.ai</Link></li>
                        <li><Link href="">+1 (954) 371 - 4062</Link></li>
                        <li><Link href="https://twitter.com/Bobolink_AI">Twitter</Link></li>
                        <li><Link href="https://www.linkedin.com/company/bobolink-ai/">LinkedIn</Link></li>
                        <li><Link href="https://www.youtube.com/@Bobolink-AI">Youtube</Link></li>
                    </ul>
                </li>
            </ul>
            <div className="footer-bottom">
                <p>All Rights reserved by Bobolink</p>
            </div>
        </footer>
        </>
    )
}   