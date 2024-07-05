import { useNavigate, useParams } from "react-router-dom";
import { FormPerson } from "../components/FormPerson/FormPerson"
import { Container } from "../components/shared/Container/Container";
import { Person } from "../definitions/constant/model/person"
import { useFindPeople } from "../hooks/person";
import { updatePerson } from "../services/person";
import { Alert } from "../components/shared/Alert/Alert";
import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

export const Edit = () => {
	const { id } = useParams();
	const person = useFindPeople(id!);
	const navigate = useNavigate();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const type = useRef('');

	const onSubmit = async (person: Person) => {
		try {
			await updatePerson({ ...person, id: person.id });
			type.current = 'success';
			onOpen();
		} catch (err) {
			console.error(err);
		}
	}

	const onCancel = () => {
		navigate('/');
	}

	return (
		<>
			<Container>
				<FormPerson person={person} title="Información" onSubmit={onSubmit} onCancel={onCancel} />
			</Container>
			<Alert isOpen={isOpen} onClose={onClose} type={type.current!} />
		</>

	)
}