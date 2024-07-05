import { useForm } from "react-hook-form";
import { Person } from "../../definitions/constant/model/person";
import { useEffect } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { TitleBar } from "../shared/TitleBar/TitleBar";
import { EmailIcon, SmallCloseIcon } from "@chakra-ui/icons";

interface PersonFormProps {
	person?: Person;
	title: string;
	onSubmit: (person: Person) => void;
	onCancel: () => void;
}

export const FormPerson = ({ person, title, onSubmit, onCancel }: PersonFormProps) => {
	const { register, handleSubmit, setValue, formState: { errors } } = useForm<Person>();

	useEffect(() => {
		if (person) {
			// Si hay datos de la persona, establecer los valores en el formulario
			setValue('id', person.id);
			setValue('firstName', person.firstName);
			setValue('secondName', person.secondName);
			setValue('fisrtLastName', person.fisrtLastName);
			setValue('secondLastName', person.secondLastName);
			setValue('birthDate', person.birthDate);
			setValue('gender', person.gender);
			setValue('maritalStatus', person.maritalStatus);
			setValue('typeIdentification', person.typeIdentification);
			setValue('identification', person.identification);
		}
	}, [person, setValue]);

	return (
		<Box display='flex' justifyContent='center' flexDirection='column' marginTop='40px'>
			<Box marginBottom='15px'>
				<TitleBar title={title} />
			</Box>
			<form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
				<div>
					<label htmlFor="firstName">Primer nombre*</label>
					<Input id="firstName" {...register('firstName', { required: 'Primer nombre es requerido' })} />
					{errors.firstName && <p style={{ color: '#fc0000', marginTop: '5px'}}>{errors.firstName.message}</p>}
				</div>

				<div>
					<label htmlFor="secondName">Secundo nombre*</label>
					<Input id="secondName" {...register('secondName', { required: 'Secundo nombre es requerido' })} />
					{errors.secondName && <p style={{ color: '#fc0000', marginTop: '5px'}}>{errors.secondName.message}</p>}
				</div>

				<div>
					<label htmlFor="fisrtLastName">Primer apellido*</label>
					<Input id="fisrtLastName" {...register('fisrtLastName', { required: 'Primer apellido es requerido' })} />
					{errors.fisrtLastName && <p style={{ color: '#fc0000', marginTop: '5px'}}>{errors.fisrtLastName.message}</p>}
				</div>

				<div>
					<label htmlFor="secondLastName">Secundo Apellido*</label>
					<Input id="secondLastName" {...register('secondLastName', { required: 'Secundo apellido es requerido' })} />
					{errors.secondLastName && <p style={{ color: '#fc0000', marginTop: '5px'}}>{errors.secondLastName.message}</p>}
				</div>

				<div>
					<label htmlFor="birthDate">Fecha de nacimiento*</label>
					<Input id="birthDate" {...register('birthDate', { required: 'Fecha de nacimiento es requerido' })} />
					{errors.birthDate && <p style={{ color: '#fc0000', marginTop: '5px'}}>{errors.birthDate.message}</p>}
				</div>

				<div>
					<label htmlFor="gender">Genero</label>
					<Input id="gender" {...register('gender', { required: 'Genero es requerido' })} />
					{errors.gender && <p style={{ color: '#fc0000', marginTop: '5px'}}>{errors.gender.message}</p>}
				</div>

				<div>
					<label htmlFor="maritalStatus">Estado civil*</label>
					<Input id="maritalStatus" {...register('maritalStatus', { required: 'Estado civil es requerido' })} />
					{errors.maritalStatus && <p style={{ color: '#fc0000', marginTop: '5px'}}>{errors.maritalStatus.message}</p>}
				</div>

				<div>
					<label htmlFor="typeIdentification">Tipo identificación</label>
					<Input id="typeIdentification" {...register('typeIdentification', { required: 'Tipo de identificacion es requerido' })} />
					{errors.typeIdentification && <p style={{ color: '#fc0000', marginTop: '5px'}}>{errors.typeIdentification.message}</p>}
				</div>

				<div>
					<label htmlFor="identification">Identificación</label>
					<Input id="identification" {...register('identification', { required: 'Identificación es requerido' })} />
					{errors.identification && <p style={{ color: '#fc0000', marginTop: '5px'}}>{errors.identification.message}</p>}
				</div>

				<Box gridColumn='span 2' display='flex' justifyContent='flex-end' gap='10px'>
					<Button color='#fff' rightIcon={<SmallCloseIcon />} backgroundColor='#fc0000' onClick={onCancel}>Cancelar</Button>
					<Button rightIcon={<EmailIcon />} color='#fff' backgroundColor='#8ab726' type="submit">Guardar</Button>
				</Box>
			</form>
		</Box>
	);
}