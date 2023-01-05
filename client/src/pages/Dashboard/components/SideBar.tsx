import { Container } from '../styled-components/styles';
import { Link } from 'react-router-dom';

export const SideBar = () => {
    return (
        <Container>
            <h3>SideBar</h3>
            <ul>
                <li>
                    Productos activos
                </li>
                <li>
                    Productos inactivos
                </li>
                <li>
                    Usuarios activos
                </li>
                <li>
                    Usuarios inactivos
                </li>
                <li>
                    <Link to='create'>Crear productos</Link>
                </li>
            </ul>
        </Container>
    )
}