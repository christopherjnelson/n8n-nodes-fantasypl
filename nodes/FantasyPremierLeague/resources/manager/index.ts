import type { INodeProperties } from 'n8n-workflow';

export const managerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['manager'],
			},
		},
		options: [
			{
				name: 'Get Details',
				value: 'get',
				action: 'Get manager details',
				description:
					'Get manager profile, rank, joined leagues, kit, and summary statistics',
				routing: {
					request: {
						method: 'GET',
						url: '=/entry/{{$parameter.managerId}}/',
					},
				},
			},
			{
				name: 'Get History',
				value: 'getHistory',
				action: 'Get manager history',
				description:
					'Get manager gameweek-by-gameweek history for the current season, past seasons history, and chips played',
				routing: {
					request: {
						method: 'GET',
						url: '=/entry/{{$parameter.managerId}}/history/',
					},
				},
			},
			{
				name: 'Get Gameweek Picks',
				value: 'getPicks',
				action: 'Get manager gameweek picks',
				description:
					'Get the 15 picked players, captain, vice-captain, bench order, multipliers, active chip, and substitutions for a gameweek',
				routing: {
					request: {
						method: 'GET',
						url: '=/entry/{{$parameter.managerId}}/event/{{$parameter.gameweekId}}/picks/',
					},
				},
			},
			{
				name: 'Get Transfers',
				value: 'getTransfers',
				action: 'Get manager transfers',
				description:
					'Get all player transfers made by the manager during the season',
				routing: {
					request: {
						method: 'GET',
						url: '=/entry/{{$parameter.managerId}}/transfers/',
					},
				},
			},
		],
		default: 'get',
	},
];

export const managerFields: INodeProperties[] = [
	{
		displayName: 'Manager ID',
		name: 'managerId',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 1,
		required: true,
		description:
			'The Manager / Entry ID in Fantasy Premier League (found in your team URL on the FPL website)',
		displayOptions: {
			show: {
				resource: ['manager'],
			},
		},
	},
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
		description: 'The Gameweek event number (1 to 38) to get picks for',
		displayOptions: {
			show: {
				resource: ['manager'],
				operation: ['getPicks'],
			},
		},
	},
];
