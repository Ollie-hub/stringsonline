import './frontpage.scss'
export default function frontPage() {

    return (
        <>
            <section className="frontpage-main">
                <section className="frontpage-header">

                </section>
                <section className="frontpage-banner">
                    <nav className="frontpage-navigation">
                        <ul>
                            <li><a href="#">Guitarer</a>
                                <ul className="dropdown">
                                    <li><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                </ul>
                            </li>
                            <li><a href="#">Basser</a></li>
                            <li><a href="#">Handmade</a></li>
                            <li><a href="#">Keyboards</a></li>
                            <li><a href="#">Trommer</a></li>
                            <li><a href="#">Percussion</a></li>
                            <li><a href="#">Stryg & Blæs</a></li>
                            <li><a href="#">Brands</a></li>

                        </ul>
                    </nav>
                    <section className="frontpage-banner">

                    </section>
                </section>
            </section>
        </>
    )
}