import React from 'react'
import './scss/main.scss'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/rootReducer'
import { HashRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<HashRouter>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</HashRouter>,
)
