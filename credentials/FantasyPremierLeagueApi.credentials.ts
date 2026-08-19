import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class FantasyPremierLeagueApi implements ICredentialType {
	name = 'fantasyPremierLeagueApi';

	displayName = 'Fantasy Premier League API';

	icon: Icon = { light: 'file:../icons/fantasyPremierLeague.svg', dark: 'file:../icons/fantasyPremierLeague.dark.svg' };

	documentationUrl = 'https://github.com/christopherjnelson/n8n-nodes-fantasypl#readme';

	properties: INodeProperties[] = [
		{
			displayName: 'Session Cookie',
			name: 'cookie',
			type: 'string',
			default: '',
		},
		{
			displayName: 'User Agent',
			name: 'userAgent',
			type: 'string',
			default: 'n8n-nodes-fantasypl',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'User-Agent': '={{$credentials.userAgent || "n8n-nodes-fantasypl"}}',
				Cookie: '={{$credentials.cookie || ""}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://fantasy.premierleague.com/api',
			url: '/bootstrap-static/',
			method: 'GET',
		},
	};
}
