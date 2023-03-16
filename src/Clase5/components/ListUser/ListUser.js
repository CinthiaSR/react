import '../RegistroUsuarios/RegistroUsuarios.css'
export const ListUser =({usuariosRegistrados}) => {
  
    return(
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Lastname</th>
            <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>                    
          {
        usuariosRegistrados.map((usuario) => {
            return (
              <tr>
            <th>
                <div className="form-group imageContainer">
  
    <div className="upload__image-wrapper">
                <img src={usuario.imagen} alt="avatar" className="avatar"/>
        
    </div>
    </div>
            
            </th>
               <td>{usuario.name}</td>
               <td>{usuario.lastName} </td>
               <td>{usuario.email} </td>
        </tr>                        
             )
          })
        }                            
        </tbody>
    </table>
    )
}
export default ListUser;