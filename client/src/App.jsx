import AppRoutes from './features/AppRoutes.jsx'

import { useContext } from 'react'
import { AuthContext } from './features/AuthProvider.jsx'
import LoadingSkeleton from './component/LoadingSkeleton.jsx'

const App = () => {
const { loading } = useContext(AuthContext);

if (loading) return <LoadingSkeleton />;

  return (
    <div>
      <AppRoutes />
    </div>
  )
}

export default App
