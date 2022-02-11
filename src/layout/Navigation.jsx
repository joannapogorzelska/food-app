import {Link} from 'react-router-dom'

function Navigation() {
    return (
        <header>
            <nav>

                <li><Link to="/">Recepies</Link></li>
                <li><Link to="/add-new-recepies">AddNewRecepies</Link></li>
                <li><Link to="/fav">Favourites</Link></li>
            </nav>
        </header>
    )
}

export default Navigation