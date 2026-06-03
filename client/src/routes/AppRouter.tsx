import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PetsListPage } from '../pages/adopter/PetsListPage'

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/pets" replace />} />
      <Route path="/pets" element={<PetsListPage />} />
      <Route path="*" element={<Navigate to="/pets" replace />} />
    </Routes>
  </BrowserRouter>
)
