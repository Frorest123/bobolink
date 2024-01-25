import Link from 'next/link'

export default function () {
    return (
        <>
        <footer className="footer">
            <div className="footer-left">
                <img src="https://cdn.discordapp.com/attachments/952064554408484915/1179534523038445628/Brain_Movie.gif?ex=657a2220&is=6567ad20&hm=050f30e54c6a5f54e9a90d3cf191e28a788fc1179b8d1c3f29dd6bdaf6c4c0dd&" alt=""/>
                <p>Pioneering Educational Technology</p>
            </div>
            <ul className="footer-right">
                <li>
                    <h2 className="Lessons">Useful Links</h2>

                    <ul className="box">
                        <li><Link href="/math/Algebra1">Team</Link></li>
                        <li><Link href="/math/Algebra2">Customer Service</Link></li>
                        <li><Link href="/math/APCalcAB">Waitlist</Link></li>
                    </ul>
                </li>
                <li>
                    <h2 className="Address">Address</h2>

                    <ul className="box">
                        <li><Link href="https://www.google.com/maps/place/101+W+11th+St,+New+York,+NY+10011/@40.7356079,-74.0010803,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259965a5a8fe9:0xac615890b4dc4e2a!8m2!3d40.7356079!4d-73.9985054!16s%2Fg%2F11f40b7s70?entry=ttu">101 West 11th st</Link></li>
                        <li><Link href="https://www.google.com/maps/place/101+W+11th+St,+New+York,+NY+10011/@40.7356079,-74.0010803,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259965a5a8fe9:0xac615890b4dc4e2a!8m2!3d40.7356079!4d-73.9985054!16s%2Fg%2F11f40b7s70?entry=ttu">New York</Link></li>
                        <li><Link href="https://www.google.com/maps/place/101+W+11th+St,+New+York,+NY+10011/@40.7356079,-74.0010803,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259965a5a8fe9:0xac615890b4dc4e2a!8m2!3d40.7356079!4d-73.9985054!16s%2Fg%2F11f40b7s70?entry=ttu">NY 10011</Link></li>
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