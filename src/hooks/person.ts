import { useEffect, useState } from "react";
import { usePersons } from "../store/persons";
import { Person } from "../definitions/constant/model/person";
import { findPeople } from "../services/person";

export const usePersonSearch = (id: string) => {
	const [persons, getPersons] = usePersons((state) => ([state.persons, state.getPersons]));

	useEffect(() => {
		getPersons(id);
	}, [id, getPersons])

	return persons;
}

export const useFindPeople = (id: string) => {
	const [person, setPerson] = useState<Person>();
	
	const find = async () => {
		const response = await findPeople(id);

		if(response.length) {
			setPerson(response[0]);
		}
	}

	useEffect(() => {
		find();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return person;
}