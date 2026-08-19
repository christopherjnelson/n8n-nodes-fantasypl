import type { INodeProperties } from 'n8n-workflow';

export const generalOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['general'],
			},
		},
		options: [
			{
				name: 'Get Bootstrap Data',
				value: 'getBootstrapStatic',
				action: 'Get bootstrap overview data',
				description:
					'Get core FPL data including all players, teams, gameweek events, and settings',
				routing: {
					request: {
						method: 'GET',
						url: '/bootstrap-static/',
					},
				},
			},
			{
				name: 'Get Event Status',
				value: 'getEventStatus',
				action: 'Get event status',
				description:
					'Get the current processing status of gameweek bonus points and league updates',
				routing: {
					request: {
						method: 'GET',
						url: '/event-status/',
					},
				},
			},
		],
		default: 'getBootstrapStatic',
	},
];

export const generalFields: INodeProperties[] = [];
