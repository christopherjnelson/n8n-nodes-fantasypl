import type { IHttpRequestMethods, INodeProperties } from 'n8n-workflow';

export const customApiCallOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['customApiCall'],
			},
		},
		options: [
			{
				name: 'Custom API Call',
				value: 'customApiCall',
				action: 'Make a custom API call',
				description:
					'Make an arbitrary request to any Fantasy Premier League endpoint',
				routing: {
					request: {
						method: '={{$parameter.httpMethod}}' as IHttpRequestMethods,
						url: '=/{{$parameter.endpoint.replace(/^\\//, "")}}',
					},
				},
			},
		],
		default: 'customApiCall',
	},
];

export const customApiCallFields: INodeProperties[] = [
	{
		displayName: 'HTTP Method',
		name: 'httpMethod',
		type: 'options',
		options: [
			{
				name: 'DELETE',
				value: 'DELETE',
			},
			{
				name: 'GET',
				value: 'GET',
			},
			{
				name: 'PATCH',
				value: 'PATCH',
			},
			{
				name: 'POST',
				value: 'POST',
			},
			{
				name: 'PUT',
				value: 'PUT',
			},
		],
		default: 'GET',
		required: true,
		description: 'The HTTP method to use for the request',
		displayOptions: {
			show: {
				resource: ['customApiCall'],
				operation: ['customApiCall'],
			},
		},
	},
	{
		displayName: 'Endpoint',
		name: 'endpoint',
		type: 'string',
		default: '',
		placeholder: 'set-piece-notes/',
		required: true,
		description:
			'The endpoint URL path relative to the FPL API base URL (e.g. set-piece-notes/ or me/)',
		displayOptions: {
			show: {
				resource: ['customApiCall'],
				operation: ['customApiCall'],
			},
		},
	},
	{
		displayName: 'Query Parameters',
		name: 'queryParameters',
		type: 'fixedCollection',
		placeholder: 'Add Parameter',
		default: {},
		description: 'Query parameters to add to the request',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['customApiCall'],
				operation: ['customApiCall'],
			},
		},
		options: [
			{
				name: 'parameters',
				displayName: 'Parameter',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Name of the query parameter',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Value of the query parameter',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'query',
				property:
					'={{$value.parameters ? $value.parameters.reduce((acc, curr) => ({...acc, [curr.name]: curr.value}), {}) : {}}}',
			},
		},
	},
	{
		displayName: 'JSON Body',
		name: 'jsonBody',
		type: 'json',
		default: '',
		description: 'JSON object to send as request body',
		displayOptions: {
			show: {
				resource: ['customApiCall'],
				operation: ['customApiCall'],
				httpMethod: ['POST', 'PUT', 'PATCH'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: '={{$value ? JSON.parse($value) : undefined}}',
			},
		},
	},
];
