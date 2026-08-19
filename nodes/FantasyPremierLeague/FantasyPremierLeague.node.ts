import {
	NodeConnectionTypes,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import {
	customApiCallFields,
	customApiCallOperations,
} from './resources/customApiCall';
import { fixtureFields, fixtureOperations } from './resources/fixture';
import { gameweekFields, gameweekOperations } from './resources/gameweek';
import { generalFields, generalOperations } from './resources/general';
import { leagueFields, leagueOperations } from './resources/league';
import { managerFields, managerOperations } from './resources/manager';
import { playerFields, playerOperations } from './resources/player';

export class FantasyPremierLeague implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Fantasy Premier League',
		name: 'fantasyPremierLeague',
		icon: {
			light: 'file:../../icons/fantasyPremierLeague.svg',
			dark: 'file:../../icons/fantasyPremierLeague.dark.svg',
		},
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume data from the Fantasy Premier League (FPL) API',
		defaults: {
			name: 'Fantasy Premier League',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'fantasyPremierLeagueApi',
				required: false,
				displayOptions: {
					show: {
						authentication: ['cookie'],
					},
				},
			},
		],
		requestDefaults: {
			baseURL: 'https://fantasy.premierleague.com/api',
			headers: {
				Accept: 'application/json',
				'User-Agent': 'n8n-nodes-fantasypl',
			},
		},
		properties: [
			{
				displayName: 'Authentication',
				name: 'authentication',
				type: 'options',
				options: [
					{
						name: 'None (Public Endpoints)',
						value: 'none',
					},
					{
						name: 'Session Cookie / Token',
						value: 'cookie',
					},
				],
				default: 'none',
				description:
					'Choose None for public data, or Session Cookie if accessing authenticated endpoints',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Custom API Call',
						value: 'customApiCall',
					},
					{
						name: 'Fixture',
						value: 'fixture',
					},
					{
						name: 'Gameweek',
						value: 'gameweek',
					},
					{
						name: 'General',
						value: 'general',
					},
					{
						name: 'League',
						value: 'league',
					},
					{
						name: 'Manager',
						value: 'manager',
					},
					{
						name: 'Player',
						value: 'player',
					},
				],
				default: 'general',
			},
			// Custom API Call
			...customApiCallOperations,
			...customApiCallFields,
			// Fixture
			...fixtureOperations,
			...fixtureFields,
			// Gameweek
			...gameweekOperations,
			...gameweekFields,
			// General
			...generalOperations,
			...generalFields,
			// League
			...leagueOperations,
			...leagueFields,
			// Manager
			...managerOperations,
			...managerFields,
			// Player
			...playerOperations,
			...playerFields,
		],
	};
}
