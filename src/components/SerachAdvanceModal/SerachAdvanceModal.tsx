import { Box, Button, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { TitleBar } from "../shared/TitleBar/TitleBar";
import { TablePerson } from "../TablePerson/TablePerson";
import { SearchInput } from "../SerachInput/SearchInput";
import { useState } from "react";
import { AddIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { usePersons } from "../../store/persons";
import { usePersonSearch } from "../../hooks/person";
import { useNavigate } from "react-router-dom";

interface SearchAdVanceModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const SearchAdVanceModal = ({ isOpen, onClose }: SearchAdVanceModalProps) => {
	const [id, setId] = useState('');
	const navigate = useNavigate();
	const persons = usePersonSearch(id);
	const deletePerson = usePersons((state) => state.deletePerson);

	const onChange = (value: string) => {
		setId(value);
	}

	const onDelete = async (idValue: string) => {
		deletePerson(idValue);
	}

	const onEdit = (id: string) => {
		onClose();
		navigate(`/person/${id}`);
	}

	const handleAdd = () => {
		onClose();
		navigate('person/add');
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} size='xl'>
			<ModalOverlay />
			<ModalContent width='1280px' maxWidth='1280px' display='flex' justifyContent='center' padding='15px'>
				<TitleBar title="Búqueda avanzada" />
				<Box marginTop='15px' paddingBottom='20px' borderRadius='15px' boxShadow='0px 0px 7px 0px rgba(0,0,0,0.75)'>
					<Box marginBottom='10px' padding='15px' display='flex' justifyContent='space-between'>
						<SearchInput onChange={onChange} />
						<Button backgroundColor='#8ab726' color='#fff' rightIcon={<AddIcon />} onClick={handleAdd}>
							Registrar
						</Button>
					</Box>
					<TablePerson persons={persons!} onDelete={onDelete} onEdit={onEdit} />
				</Box>
				<Box marginTop='30px' display='flex' justifyContent='flex-end'>
					<Button onClick={onClose} color='#fff' rightIcon={<SmallCloseIcon />} backgroundColor='#fc0000'>Cancelar</Button>
				</Box>
			</ModalContent>
		</Modal>
	)
}