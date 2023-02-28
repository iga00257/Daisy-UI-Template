import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Dashboard from '../../features/dashboard/index'
import { headerSlice } from '../../app/store'

function InternalPage () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(headerSlice.actions.setPageTitle({ title: 'Dashboard' }))
  }, [])

  return (
  <Dashboard />
  )
}

export default InternalPage
