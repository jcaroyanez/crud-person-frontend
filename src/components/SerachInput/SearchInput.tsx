import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons';
import { useDebouncedCallback } from "use-debounce";

interface SearchInputProps {
	onChange: (value: string) => void;
}

export const SearchInput = ({ onChange }: SearchInputProps) => {
	const onChangeValue = useDebouncedCallback((value: string) => {
		onChange(value);
	}, 500);

	return (
		<InputGroup>
			<InputLeftElement pointerEvents='none'>
				<Search2Icon color='gray.300' />
			</InputLeftElement>
			<Input width='200px' placeholder="Buscar" onChange={({ target }) => onChangeValue(target.value)} />
		</InputGroup>
	)
}