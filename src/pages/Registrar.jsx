export function Registrar() {

    return( 
        <div>
            <form>
                <div>
                    <label>Usuario</label>
                    <input type="text" name="usuario" />
                </div>
                <div>
                    <label>email</label>
                    <input type="text" name="email" />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" name="contraseña" />
                </div>
            </form>
        </div>
    )
}