import { Container } from './components/shared/Container/Container'
import { SearchHeader } from './components/shared/SerachHeader/SearchHeader'
import { Box, useDisclosure } from '@chakra-ui/react';
import { SearchAdVanceModal } from './components/SerachAdvanceModal/SerachAdvanceModal';
import { Outlet, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { findPeople } from './services/person';

export const App = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();

	const search = async (_: string, id: string) => {
		if(!id) {
			return;
		}
	
		const response = await findPeople(id);

		if(response.length) {
			navigate(`/person/${response[0].identification}`)
		}
	}

	const searchAdvance = () => {
		onOpen();
	}

	return (
		<>
			<Container>
				<Box marginBottom='10px'>
					<h1>Administrador Personas</h1>
				</Box>
				<SearchHeader onSearch={search} onSearchDdvanced={searchAdvance} />
			</Container>
			{isOpen && <SearchAdVanceModal isOpen={isOpen} onClose={onClose} />}
			<Suspense fallback={<p>Loading...</p>}>
				<Outlet />
			</Suspense>
		</>
	)
}
