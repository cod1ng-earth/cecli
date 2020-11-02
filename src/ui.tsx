import React, { useState } from 'react';
import { Box, Text, useFocus } from 'ink';
import SelectInput from 'ink-select-input';
import TextInput from 'ink-text-input';

const Main = ({ label }: { label: string }) => {
	return <Box padding={1} borderStyle="single" flexBasis="50%">
		<Text>More text: {label}</Text>
	</Box>
}

const Foo = () => {
	const { isFocused } = useFocus();
	const [val, setVal] = useState<string>("");

	return <Box flexGrow={1} borderStyle="single" minWidth={10} justifyContent="center" alignItems="center">
		{isFocused ?
			<TextInput value={val} onChange={setVal} />
			: <Text color="green">{val}</Text>
		}
	</Box>
}
const App = () => {

	const [selected, setSelected] = useState<string>("main");

	const selections = [
		{ label: "Main", value: "main" },
		{ label: "Users", value: "users" },
		{ label: "Dates", value: "dates" },
	];

	return <Box flexDirection="column" width="100%">
		<Box>
			<SelectInput items={selections} onSelect={item => setSelected(item.value)} />
		</Box>
		<Box flexDirection="row">
			<Main label={selected} />

			<Foo></Foo>
			<Foo></Foo>
		</Box>
	</Box>
};

export default App;
