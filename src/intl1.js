import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import {useState} from 'react'
function App() {
	const [lang, setLang] = useState('tr-TR')
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
	<IntlProvider
	messages={messages[lang]}>
	<FormattedMessage
	id="title"></FormattedMessage>
	<p><FormattedMessage
	id="description"></FormattedMessage></p>
	<button onClick={()=>setLang("tr-TR")}>TR</button>
	<button onClick={()=>setLang("en-US")}>EN</button>
    
	</IntlProvider>
	
	</div>
  );
}

export default App;
