import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Charts from '../../features/charts'
import { headerSlice } from '../../app/store'

function InternalPage () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(headerSlice.actions.setPageTitle({ title: 'Charts' }))
  }, [])

  return (
        <Charts />
  )
}

export default InternalPage
