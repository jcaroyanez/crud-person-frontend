import { Box, Button, Input } from "@chakra-ui/react";
import { TitleBar } from "../TitleBar/TitleBar";
import { Search2Icon } from '@chakra-ui/icons';
import { useState } from "react";

interface SearchHeaderProps {
	onSearch?: (typeId: string, id: string) => void;
	onSearchDdvanced?: (typeId: string, id: string) => void;
}

export const SearchHeader = ({ onSearch = () => {}, onSearchDdvanced = () => {} }: SearchHeaderProps) => {
	const [typeId, setTypeid] = useState('');
	const [id, setId] = useState('');

	return (
		<>
			<TitleBar title='Información' />
			<Box display='flex' alignItems='flex-end' gap='20px' marginTop='20px'>
				<Box width='200px'>
					<p>Tipo de documento *</p>
					<Input size='md' variant='outline' onChange={({ target }) => setTypeid(target.value)} />
				</Box>
				<Box width='200px'>
					<p>Numero del documento *</p>
					<Input size='md' value={id} onChange={({ target }) => setId(target.value)} />
				</Box>

				<Button
					leftIcon={<Search2Icon />}
					backgroundColor='#0F3349'
					color='#fff'
					variant='solid'
					onClick={() => {
						onSearch(typeId, id);
						setId('');
						}}>
					Buscar
				</Button>

				<Button
					rightIcon={<Search2Icon />}
					color='#0F3349'
					colorScheme='teal'
					variant='outline'
					onClick={() => onSearchDdvanced(typeId, id)}>
					Busqueda avanzada
				</Button>
			</Box>
		</>
	)
}