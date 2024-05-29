import { CLIENTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const clientsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getClients: builder.query({
			query: ({ pageNumber }) => ({
				url: CLIENTS_URL,
				params: {
					pageNumber,
				},
			}),
			keepUnusedDataFor: 5,
		}),
		getClientDetails: builder.query({
			query: (clientId) => ({
				url: `${CLIENTS_URL}/${clientId}`,
			}),
			keepUnusedDataFor: 5,
		}),
	}),
});

export const { useGetClientsQuery, useGetClientDetailsQuery } = clientsApiSlice;
