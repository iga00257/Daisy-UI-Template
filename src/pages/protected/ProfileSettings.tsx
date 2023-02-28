import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { headerSlice } from '../../app/store'
// import { setPageTitle } from '../../features/common/headerSlice'
// import ProfileSettings from '../../features/settings/profilesettings'

function InternalPage () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(headerSlice.actions.setPageTitle({ title: 'Settings' }))
  }, [])

  return (
        // <ProfileSettings />
        <div>ProfileSetting</div>
  )
}

export default InternalPage
