import { Person, PersonsResponse } from "../definitions/constant/model/person";
import { URL_BASE } from "../definitions/constant/values"
import { fetcher } from "../util/fecher"

export const findPeople = async (identification: string): Promise<Person[]> => {
	const response = await fetcher<PersonsResponse<Person[]>>(`${URL_BASE}people/${identification}`);
	const data = response.data;
	return data;
}

export const getAllPersons = async (id?: string): Promise<Person[]> => {
	if (id) {
		const response = await findPeople(id);
		return response;
	}
	const response = await fetcher<Person[]>(`${URL_BASE}people`);
	return response;
}

export const deletePerson = async (id: string) => {
	await fetcher(`${URL_BASE}people/${id}`, { method: 'DELETE' });
}

export const updatePerson = async (person: Person) => {
	const response = await fetcher(`${URL_BASE}people/${person.id}`, { method: 'PUT', body: person});
	return response;
}

export const savePerson = async (person: Person) => {
	const response = await fetcher(`${URL_BASE}people`, { method: 'POST', body: person});
	return response;
}