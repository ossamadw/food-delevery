import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const PrivateRoutes = ({component}) => {
    const [isAuthenticated , setIsAuthenticated] = useState(false)

  return (
  
    isAuthenticated ? component : <Navigate to={'/'}  />
  )
}

export default PrivateRoutes