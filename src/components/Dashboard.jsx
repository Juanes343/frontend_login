const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard">
      <h2>¡Bienvenido!</h2>
      
      <div className="user-info">
        <p><strong>Nombre:</strong> {user.nombre}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>ID:</strong> {user.id}</p>
      </div>

      <p>Has iniciado sesión exitosamente en el sistema.</p>
      
      <button className="logout-btn" onClick={onLogout}>
        Cerrar Sesión
      </button>
    </div>
  )
}

export default Dashboard