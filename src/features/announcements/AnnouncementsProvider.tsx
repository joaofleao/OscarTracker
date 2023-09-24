import React from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

import AnnouncementsContext, { type AnnouncementsContextType } from './AnnouncementsContext'
import { useApp } from '@features/app'
import { db } from '@services/firebase'
import type { AnnouncementType } from '@types'
import { printFetch } from '@utils/functions'

const AnnouncementProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const announcementsCollection = collection(db, 'announcements')
  const app = useApp()

  const [announcements, setAnnouncements] = React.useState<AnnouncementType[]>([])

  const getAnnouncements = async (): Promise<void> => {
    if (!app.hasInternet) return
    const orderedAnnouncements = query(announcementsCollection, orderBy('date'))
    const response = await getDocs(orderedAnnouncements)
    printFetch('Firebase', 'Announcements fetched', 'yellow')
    const array = []
    response.forEach((item) => {
      return array.push(item.data())
    })
    setAnnouncements(array)
  }

  const value: AnnouncementsContextType = {
    announcements,
    getAnnouncements,
  }

  return <AnnouncementsContext.Provider value={value}>{children}</AnnouncementsContext.Provider>
}

export default AnnouncementProvider
