import { create } from "zustand";
import { Person } from "../definitions/constant/model/person";
import { deletePerson, getAllPersons } from "../services/person";

type State = {
	persons: Person[];
}

type Action = {
	getPersons: (id?: string) => void;
	deletePerson: (id: string) => void;
}

export const usePersons = create<State & Action>((set, get) => ({
	persons: [],
	getPersons: async (id) => {
		try {
			const data = await getAllPersons(id);
			set({ persons: data})
		} catch (err) {	
			console.error(err)
		}
	},
	deletePerson: async (id) => {
		try {
			await deletePerson(id);
			get().getPersons();
		} catch (err) {
			console.error(err);
		}
	}
}))