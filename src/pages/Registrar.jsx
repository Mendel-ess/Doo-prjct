export function Registrar() {

    return( 
        <div className="Registrar-usuarios">
            <form>
                <div className="username">
                    <label>Nombre de usuario</label>
                    <input type="text" name="nombre de usuario"/>
                </div>
                <div className="email">
                    <label>E-mail</label>
                    <input type="text" name="E-mail"/>
                </div>
                <div className="password">
                    <label>Contraseña</label>
                    <input type="password" name="contraseña"/>
                </div>
            </form>
        </div>
    )
}