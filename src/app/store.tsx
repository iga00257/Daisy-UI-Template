import { configureStore, createSlice } from '@reduxjs/toolkit'
export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    pageTitle: 'Home', // current page title state management
    noOfNotifications: 15, // no of unread notifications
    newNotificationMessage: '', // message of notification to be shown
    newNotificationStatus: 1 // to check the notification type -  success/ error/ info
  },
  reducers: {
    setPageTitle: (state, action) => {
      state.pageTitle = action.payload.title
    },

    removeNotificationMessage: (state, action) => {
      state.newNotificationMessage = ''
    },

    showNotification: (state, action) => {
      console.log(action)
      state.newNotificationMessage = action.payload.message
      state.newNotificationStatus = action.payload.status
    }
  }
})
export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    title: '', // current  title state management
    isOpen: false, // modal state management for opening closing
    bodyType: '', // modal content management
    size: '', // modal content management
    extraObject: {}
  },
  reducers: {

    openModal: (state, action) => {
      const { title, bodyType, extraObject, size } = action.payload
      state.isOpen = true
      state.bodyType = bodyType
      state.title = title
      state.size = size || 'md'
      state.extraObject = extraObject
    },

    closeModal: (state, action) => {
      state.isOpen = false
      state.bodyType = ''
      state.title = ''
      state.extraObject = {}
    }

  }
})

export const rightDrawerSlice = createSlice({
  name: 'rightDrawer',
  initialState: {
    header: '', // current  title state management
    isOpen: false, // right drawer state management for opening closing
    bodyType: '', // right drawer content management
    extraObject: {}
  },
  reducers: {

    openRightDrawer: (state, action) => {
      const { header, bodyType, extraObject } = action.payload
      state.isOpen = true
      state.bodyType = bodyType
      state.header = header
      state.extraObject = extraObject
    },

    closeRightDrawer: (state, action) => {
      state.isOpen = false
      state.bodyType = ''
      state.header = ''
      state.extraObject = {}
    }

  }
})

const combinedReducer = {
  header: headerSlice.reducer,
  modal: modalSlice.reducer,
  rightDrawer: rightDrawerSlice.reducer
}

export default configureStore({
  reducer: combinedReducer
})
