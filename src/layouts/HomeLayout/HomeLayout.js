import './HomeLayout.module.scss'

import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import { useTranslation } from 'react-i18next';
export default function HomeLayout({children}) {
  const { t, i18n } = useTranslation();
 
  return (
    <div>
       <Header t={t}/>
       
        {children}
       <Footer/>
    </div>
  )
}
