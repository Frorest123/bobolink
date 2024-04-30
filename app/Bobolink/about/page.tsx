import Image from "next/image"

export default function Algebra1(){
    return(
    <section>
        <div id="team-section">
            <div className="content">
                <h1><b>Our Team</b></h1>
                <div className = "centered-description">
                <p>Meet the masterminds behind Bobolink.</p>
                </div>
            </div>
            
            <div className="team-members">
                <div className="team-member">
                    <Image width={200} height={200} src="/nicole.png" alt="CEO" className="team-photo"></Image>
                    <h2>CEO</h2>
                    <p>Nicole Pochinki is our visionary seasoned leader with a passion for creating technologies that make a difference. She brings a rich blend of experience in educational technologies and pedagogic research. Her unique blend of innovation, empathy, and strategic vission guides Bobolink on its path to constantly pushing the boundaries of what is possible in EdTech.</p>
                </div>

                <div className="team-member">
                    <Image width={200} height={200} src="/joe.jpg" alt="CTO" className="team-photo"></Image>
                    <h2>CTO</h2>
                    <p>Joe Olson is the driving force behind our cutting-edge technology initiatives. With a PhD in Physics from Harvard University, his academic journey has spanned multiple disciplines, including computational neuroscience and educational data science. Curious by nature and focused by profession, he emodies the spirit of continuous learning that lies at the heart of our company's mission.</p>
                </div>
            </div>
        </div>
    </section>
 )
}