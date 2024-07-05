export interface FetchConfig extends RequestInit {
	headers?: HeadersInit;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	body?: any;
}

export async function fetcher<T>(
	endpoint: string,
	customConfig: FetchConfig = {},
): Promise<T> {
	const headers = { 'content-type': 'application/json' };

	const config = {
		...customConfig as Request,
		headers: {
			...headers,
			...customConfig?.headers,
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		body: JSON.stringify(customConfig.body) as any
	} as Request;

	const response = await fetch(endpoint, config);

	if (response.statusText === 'OK' || response.statusText === 'Created') {
		try {
			const data = response.json();
			return data;
		} catch (error) {
			return {} as T;
		}
	} else if(response.statusText === 'No Content') {
		return {} as T;
	}else {
		const errorMessage = await response.text();
		console.error(errorMessage);
		throw new Error(errorMessage);
	}
}