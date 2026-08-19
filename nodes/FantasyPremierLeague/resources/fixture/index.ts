import type { INodeProperties } from 'n8n-workflow';

export const fixtureOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['fixture'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many fixtures',
				description: 'Get many 380 fixtures for the season',
				routing: {
					request: {
						method: 'GET',
						url: '/fixtures/',
					},
				},
			},
			{
				name: 'Get by Gameweek',
				value: 'getByGameweek',
				action: 'Get fixtures by gameweek',
				description: 'Get all fixtures for a specific gameweek',
				routing: {
					request: {
						method: 'GET',
						url: '/fixtures/',
					},
				},
			},
			{
				name: 'Get Future / Past Fixtures',
				value: 'getFuture',
				action: 'Get future or past fixtures',
				description: 'Filter fixtures by upcoming or completed status',
				routing: {
					request: {
						method: 'GET',
						url: '/fixtures/',
					},
				},
			},
		],
		default: 'getAll',
	},
];

export const fixtureFields: INodeProperties[] = [
	{
		displayName: 'Gameweek ID',
		name: 'gameweekId',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 38,
		},
		default: 1,
		required: true,
		description: 'The Gameweek event number (1 to 38)',
		displayOptions: {
			show: {
				resource: ['fixture'],
				operation: ['getByGameweek'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'event',
			},
		},
	},
	{
		displayName: 'Only Future Fixtures',
		name: 'futureFixtures',
		type: 'boolean',
		default: true,
		description:
			'Whether to return upcoming future fixtures (true) or past completed fixtures (false)',
		displayOptions: {
			show: {
				resource: ['fixture'],
				operation: ['getFuture'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'future',
				value: '={{$value ? 1 : 0}}',
			},
		},
	},
];
