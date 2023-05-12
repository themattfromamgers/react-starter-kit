import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import {useState, useEffect} from 'react'
function App() {
	const isLocale = localStorage.getItem('locale');
	const defaultLocal = isLocale ? isLocale : navigator.language;
	const [locale, setLocale] = useState(defaultLocal)
	
	useEffect(()=>{
		localStorage.setItem('locale',locale)
	},[locale])
	
	const messages={
		'tr-TR': {
			title: "merhaba dünya",
			description: "üç yeni mesaj"
		},
		'en-US': {
			title: "hello world",
			description: 'you have three new messages'
		}
	}
  return (
    <div className="App"> 
	<IntlProvider locale={locale}
	messages={messages[locale]}>
	<FormattedMessage
	id="title"></FormattedMessage>
	<p><FormattedMessage
	messages={messages[locale]}
	id="description"></FormattedMessage></p>
	<button onClick={()=>setLocale("tr-TR")}>TR</button>
	<button onClick={()=>setLocale("en-US")}>EN</button>
    
	</IntlProvider>
	
	</div>
  );
}

export default App;
