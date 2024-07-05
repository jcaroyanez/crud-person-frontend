import { Box, Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { Person } from "../../definitions/constant/model/person"
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

interface TablePersonProps {
	persons: Person[];
	onDelete?: (id: string) => void;
	onEdit?: (id: string) => void;
}

export const TablePerson = ({ persons = [], onDelete = () => {}, onEdit = () => {} }: TablePersonProps) => {
	return (
		<TableContainer>
			<Table size='sm'>
				<Thead>
					<Tr backgroundColor='#e5e5e5'>
						<Th textTransform='none'>Tipo de documento</Th>
						<Th textTransform='none'>Número de documento</Th>
						<Th textTransform='none'>Primer nombre</Th>
						<Th textTransform='none'>Secundo apellido</Th>
						<Th textTransform='none'>Acción</Th>
					</Tr>
				</Thead>
				<Tbody>
					{persons.map((person) => (
						<Tr key={person.identification}>
							<Td>{person.typeIdentification}</Td>
							<Td>{person.identification}</Td>
							<Td>{person.firstName}</Td>
							<Td>{person.secondLastName}</Td>
							<Td>
								<Box>
									<Button backgroundColor='transparent' onClick={() => onEdit(person.identification)}>
										<EditIcon />
									</Button>
									<Button backgroundColor='transparent' onClick={() => onDelete(person.identification)}>
										<DeleteIcon />
									</Button>
								</Box>
							</Td>
						</Tr>))}
				</Tbody>
			</Table>
		</TableContainer>
	)
}