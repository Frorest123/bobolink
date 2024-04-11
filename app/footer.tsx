import Link from 'next/link'
import Image from 'next/image'
import bobolinkGif from '@/public/bobolinker.gif'

export default function () {
    return (
        <>
        <footer className="footer">
            <div className="footer-left">
                <Image src={bobolinkGif} alt=""/>
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