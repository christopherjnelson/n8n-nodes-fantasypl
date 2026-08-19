# n8n-nodes-fantasypl

This is an n8n community node for the **Fantasy Premier League (FPL) API**. It allows you to integrate Official Fantasy Premier League data into your n8n workflows, automating manager notifications, gameweek performance tracking, transfer analysis, league standing digests, and custom football AI agents.

[n8n](https://n8n.io/) is a fair-code licensed workflow automation platform.

---

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### Community Nodes Installation (UI)

1. Go to **Settings > Community Nodes** in your n8n instance.
2. Select **Install**.
3. Enter `n8n-nodes-fantasypl` in the **npm Package Name** field.
4. Agree to the risks of community nodes and click **Install**.

### Manual Installation (Docker / Self-hosted)

In your n8n installation directory or custom Docker image:

```bash
npm install n8n-nodes-fantasypl
```

---

## Operations

The node covers the entire Fantasy Premier League API across 7 primary resources:

### 1. General
- **Get Bootstrap Data (`getBootstrapStatic`)**: Retrieve core overview data including all 20 Premier League teams, ~600+ players (elements), 38 gameweek events, positions (element types), phases, and game settings.
- **Get Event Status (`getEventStatus`)**: Check the real-time processing status of the current gameweek, day's bonus point calculations (BPS), and league table updates.

### 2. Fixture
- **Get Many (`getAll`)**: Retrieve all 380 fixtures for the Premier League season with kick-off times, teams, difficulty, and match status.
- **Get by Gameweek (`getByGameweek`)**: Retrieve all 10 fixtures for a specific gameweek (1 to 38).
- **Get Future / Past Fixtures (`getFuture`)**: Filter fixtures by upcoming status (`future=1`) or completed matches (`future=0`).

### 3. Gameweek
- **Get Live Data (`getLive`)**: Retrieve real-time live points, minutes, goals, assists, clean sheets, saves, bonus points, xG (expected goals), xA (expected assists), and match stats for all players in a specific gameweek.
- **Get Dream Team (`getDreamTeam`)**: Retrieve the highest-scoring dream team lineup and top player of the gameweek.

### 4. Player
- **Get Summary (`getSummary`)**: Retrieve comprehensive player details by Player ID (element ID), including upcoming fixtures, match-by-match history for the current season, and past season career statistics.

### 5. Manager
- **Get Details (`get`)**: Retrieve manager profile by Entry ID, including team name, overall rank, total points, gameweek summary, regional ranks, kit, and joined classic/H2H leagues.
- **Get History (`getHistory`)**: Retrieve gameweek-by-gameweek rank and point progression for the current season, past seasons history, and chips played (Wildcard, Free Hit, Triple Captain, Bench Boost).
- **Get Gameweek Picks (`getPicks`)**: Retrieve manager team selection for a specific gameweek (15 players with captain, vice-captain, bench order, multipliers), active chip, and automatic substitutions.
- **Get Transfers (`getTransfers`)**: Retrieve all player transfers made by the manager during the season with timestamps and point costs.

### 6. League
- **Get Classic Standings (`getClassicStandings`)**: Retrieve standings, rank changes, and manager scores for any classic league (e.g. `314` for the Overall league, or private mini-leagues). Supports pagination (`page_standings`, `page_new_entries`, `phase`).
- **Get Head-to-Head Standings (`getH2HStandings`)**: Retrieve standings and details for any H2H league.
- **Get Head-to-Head Matches (`getH2HMatches`)**: Retrieve head-to-head match fixtures, matchups, and scores for a specific gameweek.

### 7. Custom API Call
- **Custom API Call (`customApiCall`)**: Send arbitrary HTTP requests (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`) to any official or unofficial FPL API endpoint (e.g. `set-piece-notes/`, `me/`, `my-team/`) with custom query parameters and request bodies.

---

## Credentials

### Public Endpoints (Default)
Most Fantasy Premier League endpoints (fixtures, players, bootstrap, manager history, public leagues) are public and do not require authentication. Leave **Authentication** set to **None (Public Endpoints)**.

### Authenticated Endpoints (Optional)
If you wish to access private endpoints (such as your current unreleased team or making transfers via API), configure the **Fantasy Premier League API** credential:
1. Under **Authentication**, select **Session Cookie / Token**.
2. Provide your FPL session cookie (e.g. `pl_profile` obtained from browser cookies when logged in at fantasy.premierleague.com).
3. Optionally customize the `User-Agent` header.

---

## Compatibility

- Tested with n8n version `1.0.0` and above.
- Supports Node.js `>=22.22.0`.
- Built using n8n declarative request routing with full support for n8n AI Agent tools (`usableAsTool: true`).

---

## Usage

### Example Use Cases:
- **Gameweek Recap Telegram / Slack Bot**: Trigger after gameweek deadlines or matches finish, fetch live points using `Gameweek > Get Live Data` and `Manager > Get Details`, and post automatic league updates.
- **Price Change & Transfer Alerts**: Poll `General > Get Bootstrap Data` daily to track player `cost_change_event` and `selected_by_percent`.
- **FPL AI Advisor Agent**: Attach this node as an AI tool to an n8n AI Agent node so the LLM can query player stats, upcoming fixture difficulty, and injury news on demand.

---

## Resources

- [Official Fantasy Premier League](https://fantasy.premierleague.com/)
- [Postman FPL API Collection](https://www.postman.com/fplassist/fpl-assist/collection/zqlmv01/fantasy-premier-league-api)
- [n8n Community Node Documentation](https://docs.n8n.io/integrations/community-nodes/)

---

## License

[MIT](LICENSE.md)
