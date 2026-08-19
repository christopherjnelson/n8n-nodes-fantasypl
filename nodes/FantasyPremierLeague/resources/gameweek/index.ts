import type { INodeProperties } from 'n8n-workflow';

export const gameweekOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['gameweek'],
			},
		},
		options: [
			{
				name: 'Get Live Data',
				value: 'getLive',
				action: 'Get live gameweek data',
				description:
					'Get live points, bonus points, goals, assists, and in-depth match stats for all players in a gameweek',
				routing: {
					request: {
						method: 'GET',
						url: '=/event/{{$parameter.gameweekId}}/live/',
					},
				},
			},
			{
				name: 'Get Dream Team',
				value: 'getDreamTeam',
				action: 'Get gameweek dream team',
				description:
					'Get the highest-scoring dream team lineup and top player for a specific gameweek',
				routing: {
					request: {
						method: 'GET',
						url: '=/dream-team/{{$parameter.gameweekId}}/',
					},
				},
			},
		],
		default: 'getLive',
	},
];

export const gameweekFields: INodeProperties[] = [
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
				resource: ['gameweek'],
				operation: ['getLive', 'getDreamTeam'],
			},
		},
	},
];
