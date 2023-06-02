const BASE_URL = 'http://localhost:8080/https://motorsportstats.com/api/'

async function requester(path){
    try{
        const response = await fetch(BASE_URL + path,{
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
                'origin': 'http://localhost:3000'
            }
        })
        const data = await response.json()
        return data
    }catch(err){
        console.log(err)
    }
}

async function getDriverStandings(){
    try{
        const data = await requester('series-standings?seasonUuid=formula-one_2023&standingsType=driver&seriesClass=')
        var drivers = []
        for(var driver of data.standings){
            var driverObj = {
                driverName: driver.driver.name,
                driverPicture: driver.driver.picture,
                teamName: driver.teams[0].name,
                position: driver.position,
                points: driver.totalPoints,
                driverSlug: driver.driver.slug,
                teamSlug: driver.teams[0].slug
            }
            drivers.push(driverObj)
        }
        drivers.sort((a,b) => (a.position > b.position) ? 1 : ((b.position > a.position) ? -1 : 0))
        return drivers
    }catch(err){
        console.log(err)
    }
}

async function getTeamStandings(){
    try{
        const data = await requester('series-standings?seasonUuid=formula-one_2023&standingsType=constructor&seriesClass=')
        const teams = []
        for(var team of data.standings){
            var teamObj = {
                teamName: team.entrant.name,
                teamPicture:team.entrant.picture,
                position: team.position,
                points: team.totalPoints,
                teamSlug: team.entrant.slug,
                drivers: team.drivers.map(driver => {return {driverName: driver.driver.name, driverSlug: driver.driver.slug}})
            }
            teams.push(teamObj)
        }
        teams.sort((a,b) => (a.position > b.position) ? 1 : ((b.position > a.position) ? -1 : 0))
        return teams

    }catch(e){
        console.log(e)
    }
}

async function getEntityInfo(slug,isTeam=false){
    try{
        var val = isTeam?'team':'driver'
        var path = `${isTeam?'team':'career'}-summary?${val}Slug=${slug}&seriesSlug=formula-one&stats=championshipRank,starts,wins,podiums,poles,fastestLaps,bestFinishPosition,bestGridPosition,points&size=25`
        const data = await requester(path)
        var stats = data.content.find(obj => obj.year === 2023 )
        var returnObj = {
            position:stats.championshipRank,
            starts:stats.starts,
            wins:stats.wins,
            podiums:stats.podiums,
            poles:stats.poles,
            fastestLaps:stats.fastestLaps,
            bestFinishPosition:stats.bestFinishPosition,
            bestGridPosition:stats.bestGridPosition,
            points:stats.points
        }
        return returnObj
    }catch(e){
        console.log(e)
    }
}

// getTeamStandings()

export {getDriverStandings,getTeamStandings,getEntityInfo}