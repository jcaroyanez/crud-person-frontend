import { useNavigate } from "react-router-dom";
import { FormPerson } from "../components/FormPerson/FormPerson"
import { Container } from "../components/shared/Container/Container"
import { Person } from "../definitions/constant/model/person";
import { savePerson } from "../services/person";

export const Add = () => {
	const navigate = useNavigate();
	const onSubmit = (person: Person) => {

		try {
			savePerson(person);
			navigate('/');
		} catch (err) {
			console.error(err);
		}
	}

	const onCancel = () => {
		navigate('/');
	}

	return (
		<Container>
			<FormPerson title="Registrar" onSubmit={onSubmit} onCancel={onCancel} />
		</Container>
	)
}