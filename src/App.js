import React from 'react'
import { I18nProvider } from 'lingui-react'
import { unpackCatalog } from 'lingui-i18n'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import Home from './Home'
import './App.css'
import en from '../locale/en/messages.js'
import fr from '../locale/fr/messages.js'
const catalogs = { en: unpackCatalog(en), fr: unpackCatalog(fr) }

// required in development only (huge dependency)
const dev =
  process.env.NODE_ENV !== 'production' ? require('lingui-i18n/dev') : undefined

const App = () => (
  <I18nProvider language={'fr'} catalogs={catalogs} development={dev}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </I18nProvider>
)

export default App
