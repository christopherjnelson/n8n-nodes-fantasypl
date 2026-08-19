import type { INodeProperties } from 'n8n-workflow';

export const leagueOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['league'],
			},
		},
		options: [
			{
				name: 'Get Classic Standings',
				value: 'getClassicStandings',
				action: 'Get classic league standings',
				description:
					'Get standings and details for a Classic league (e.g. 314 for Overall)',
				routing: {
					request: {
						method: 'GET',
						url: '=/leagues-classic/{{$parameter.leagueId}}/standings/',
					},
				},
			},
			{
				name: 'Get Head-to-Head Matches',
				value: 'getH2HMatches',
				action: 'Get head to head league matches',
				description:
					'Get match fixtures and results for a Head-to-Head league',
				routing: {
					request: {
						method: 'GET',
						url: '=/leagues-h2h-matches/league/{{$parameter.leagueId}}/',
					},
				},
			},
			{
				name: 'Get Head-to-Head Standings',
				value: 'getH2HStandings',
				action: 'Get head to head league standings',
				description:
					'Get standings and details for a Head-to-Head league',
				routing: {
					request: {
						method: 'GET',
						url: '=/leagues-h2h/{{$parameter.leagueId}}/standings/',
					},
				},
			},
		],
		default: 'getClassicStandings',
	},
];

export const leagueFields: INodeProperties[] = [
	{
		displayName: 'League ID',
		name: 'leagueId',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 314,
		required: true,
		description:
			'The League ID in Fantasy Premier League (e.g. 314 for Overall league)',
		displayOptions: {
			show: {
				resource: ['league'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['league'],
				operation: ['getClassicStandings', 'getH2HStandings'],
			},
		},
		options: [
			{
				displayName: 'Page New Entries',
				name: 'page_new_entries',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 1,
				description: 'Page number for new entries to the league',
				routing: {
					send: {
						type: 'query',
						property: 'page_new_entries',
					},
				},
			},
			{
				displayName: 'Page Standings',
				name: 'page_standings',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 1,
				description: 'Page number for the standings list',
				routing: {
					send: {
						type: 'query',
						property: 'page_standings',
					},
				},
			},
			{
				displayName: 'Phase',
				name: 'phase',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 1,
				description: 'Phase ID to filter the standings (e.g. 1 for full season)',
				routing: {
					send: {
						type: 'query',
						property: 'phase',
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFieldsH2HMatches',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['league'],
				operation: ['getH2HMatches'],
			},
		},
		options: [
			{
				displayName: 'Gameweek ID',
				name: 'event',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 38,
				},
				default: 1,
				description:
					'Filter head-to-head matches by gameweek event number (1 to 38)',
				routing: {
					send: {
						type: 'query',
						property: 'event',
					},
				},
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 1,
				description: 'Page number for match results',
				routing: {
					send: {
						type: 'query',
						property: 'page',
					},
				},
			},
		],
	},
];
