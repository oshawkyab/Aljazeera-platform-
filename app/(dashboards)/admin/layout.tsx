import { TLayout } from '@/types'
import React from 'react'

const AdminLayout = ({children} : TLayout) => {
  return (
    <div>{children}</div>
  )
}

export default AdminLayout