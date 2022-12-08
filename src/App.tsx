import { marked } from 'marked';
import { useState } from 'react';

function App() {
	const [input, setInput] = useState('');
	const onChange = (e: any) => {
		setInput(e.target.value);
	};

	return (
		<div className="container">
			<textarea
				name="editor"
				id="editor"
				cols={80}
				rows={20}
				onChange={onChange}
				defaultValue={
					'# A Header' +
					'\n' +
					'## Another Header' +
					'\n' +
					'\n' +
					'### A third Header' +
					'\n' +
					'[link](https://example.com) \n' +
					'\n' +
					'`code()` \n' +
					'\n' +
					'``` \n' +
					'code() \n' +
					'``` \n' +
					'- a list item \n\n' +
					'\n' +
					'> a quote \n' +
					'![Image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg \n' +
					'**bolded text**'
				}
			></textarea>
			<div
				id="preview"
				dangerouslySetInnerHTML={{ __html: marked(input) }}
			></div>
		</div>
	);
}

export default App;
