const ListadoCategoria= () => {
    return (
        <div className="container">
            <h3 className="mt-3">Lista de categorias</h3>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Nombre </th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <td>Animales Domesticos</td>
                    <td>
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </td>
                </tbody>
            </table>
        </div>
    )
}

export default ListadoCategoria;