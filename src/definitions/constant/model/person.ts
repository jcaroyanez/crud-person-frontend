export interface Person {
	id: number;
	firstName: string;
	secondName: string;
	fisrtLastName: string;
	secondLastName: string;
	birthDate: string;
	gender: string;
	maritalStatus: string;
	typeIdentification: string;
	identification: string;
}

export interface PersonsResponse<T> {
	data: T
}