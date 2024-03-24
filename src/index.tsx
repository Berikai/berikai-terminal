import { hydrate, prerender as ssr } from 'preact-iso'
import './style.css'

import App from './App'

if (typeof window !== 'undefined') {
    hydrate(<App />, document.getElementById('app'))
}

export async function prerender(data) { 
    await ssr(<App {...data} />)
}