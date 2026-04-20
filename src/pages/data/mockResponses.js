export const mockResponses = [
    {
        keywords: ['gold', 'prices', 'increase', 'rise'],
        status: 'Confirmed',
        statusClass: 's-confirmed',
        response: `Based on reports from multiple trusted financial sources, gold prices are indeed expected to rise by approximately 2%. Analysts cite global market uncertainty and increased demand for safe-haven assets as the primary drivers. This has been confirmed by Reuters and the Financial Times.`,
    },
    {
        keywords: ['lebanon', 'fiba', 'basketball', 'fibawc'],
        status: 'Not Confirmed',
        statusClass: 's-false',
        response: `Claims circulating on social media suggesting Lebanon won the FibaWc are currently unverified. Official FIBA tournament records do not support this claim. We recommend checking the official FIBA website for accurate standings and results.`,
    },
    {
        keywords: ['drake', 'album', 'music', 'drop', 'release'],
        status: 'Rumored',
        statusClass: 's-rumor',
        response: `There are unconfirmed reports from multiple insiders suggesting Drake may be planning a surprise album release before the end of the year. However, no official announcement has been made by Drake or his label. Treat this as a rumor until officially confirmed.`,
    },
    {
        keywords: ['barcelona', 'inter', 'champions', 'football', 'soccer', 'barca'],
        status: 'Confirmed',
        statusClass: 's-confirmed',
        response: `Confirmed. Barcelona FC defeated Inter Milan 3–2 in a dramatic Champions League group stage match. A last-minute goal from Pedri secured the win, pushing Barcelona to the top of their group. This has been reported and verified by BBC Sport and Sky Sports.`,
    },
    {
        keywords: ['lakers', 'nba', 'celtics', 'playoff', 'basketball'],
        status: 'Confirmed',
        statusClass: 's-confirmed',
        response: `Confirmed. The Los Angeles Lakers secured their playoff spot after an overtime thriller against the Boston Celtics. LeBron James recorded a triple-double in the victory. This has been verified by ESPN and multiple NBA sources.`,
    },
    {
        keywords: ['fed', 'federal reserve', 'rate', 'interest', 'cut'],
        status: 'Rumored',
        statusClass: 's-rumor',
        response: `The Federal Reserve has hinted at a potential rate cut in Q1 of next year, though no official decision has been finalized. Fed chair signaled a cautious pivot as inflation data continues to cool. The Financial Times reports officials are still assessing incoming economic data before committing.`,
    },
]

export const starterPrompts = [
    'Is it true that gold prices are rising?',
    'Fact-check: Lebanon won the FibaWc',
    'Is Drake dropping a new album soon?',
    'Did Barcelona beat Inter Milan?',
]

export const fallbackResponse = {
    status: 'Unverified',
    statusClass: 's-rumor',
    response: `I couldn't find specific verified information about that claim in my current database. For the most accurate fact-check, I recommend cross-referencing with trusted sources such as Reuters, BBC, or AP News. My database is updated regularly — try rephrasing your query or check back later.`,
}