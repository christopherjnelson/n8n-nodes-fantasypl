import type { INodeProperties } from 'n8n-workflow';

export const playerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['player'],
			},
		},
		options: [
			{
				name: 'Get Summary',
				value: 'getSummary',
				action: 'Get player summary',
				description:
					'Get upcoming fixtures, match-by-match history for the current season, and past seasons history for a player',
				routing: {
					request: {
						method: 'GET',
						url: '=/element-summary/{{$parameter.playerId}}/',
					},
				},
			},
		],
		default: 'getSummary',
	},
];

export const playerFields: INodeProperties[] = [
	{
		displayName: 'Player ID',
		name: 'playerId',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 1,
		required: true,
		description: 'The ID of the player / element in Fantasy Premier League (e.g. 1)',
		displayOptions: {
			show: {
				resource: ['player'],
				operation: ['getSummary'],
			},
		},
	},
];
