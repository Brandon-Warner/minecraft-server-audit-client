/* eslint-disable no-unused-vars */
import axios from 'axios';

const baseUrl = 'https://fast-thicket-91718.herokuapp.com/api';

const isOnline = data => (data === true ? 'yes' : 'no');
const isPlayersOnline = data => {
    if (data.online === false) {
        return 'N/A';
    }
    return data.players.online;
};
const isPlayersMax = data => {
    if (data.online === false) {
        return 'N/A';
    }
    return data.players.max;
};
const isBlocked = data => (data === true ? 'yes' : 'no');

const formatDate = d => {
    if (d !== null) {
        let date = new Date(d);
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return (d = mm + '/' + dd + '/' + yyyy);
    }
    return 'N/A';
};

const onlineInfoResponse = data => {
    if (!data.success) {
        return 'Error while checking offline-mode status';
    } else if (data.offlineMode) {
        return 'Server is using offline mode';
    } else {
        return "Server aborted the join process, it's either using online mode or a whitelist";

        // if (data.reason) {
        //     fetchResponse.concat(`reason was: ${response.reason}`);
        // }
    }
};

const fetchData = async name => {
    // console.log('fetchData name: ', name);

    const [newName, host] = name.split(':');

    // console.log('newName: ', newName);
    // console.log('host: ', host);

    const server_data = await axios.get(`${baseUrl}/serverinfo/${name}`);
    const serverInfo = server_data.data;

    const block_data = await axios.get(`${baseUrl}/blockinfo/${newName}`);
    const blockInfo = block_data.data;

    // console.log('fetch data: ', serverInfo, blockInfo);

    const allData = {
        name: name,
        hostname: serverInfo.hostname,
        ip: serverInfo.ip,
        version: serverInfo.version || 'N/A',
        active: isOnline(serverInfo.online),
        playersOnline: isPlayersOnline(serverInfo),
        playersMax: isPlayersMax(serverInfo),
        blocked: isBlocked(blockInfo.blocked),
        blockTime: formatDate(blockInfo.lastBlocked)
    };
    // console.log('allData: ', allData);
    return allData;
};

const fetchAllData = async name => {
    // console.log('fetchAllData: ', name);

    const [newName, host] = name.split(':');

    // console.log('newName: ', newName);
    // console.log('host: ', host);

    const server_data = await axios.get(`${baseUrl}/serverinfo/${name}`);
    const serverInfo = server_data.data;

    const block_data = await axios.get(`${baseUrl}/blockinfo/${newName}`);
    const blockInfo = block_data.data;

    const offline_data = await axios.get(`${baseUrl}/offlineinfo/${name}`);
    const offlineInfo = offline_data.data;

    // console.log('fetch all data SERVER INFO: ', serverInfo);
    // console.log('fetch all data BLOCK INFO: ', blockInfo);
    // console.log('fetch all data ONLINE INFO: ', offlineInfo);

    const allData = {
        name: name,
        hostname: serverInfo.hostname,
        ip: serverInfo.ip,
        version: serverInfo.version || 'N/A',
        active: isOnline(serverInfo.online),
        playersOnline: isPlayersOnline(serverInfo),
        playersMax: isPlayersMax(serverInfo),
        blocked: isBlocked(blockInfo.blocked),
        blockTime: formatDate(blockInfo.lastBlocked),
        modeData: onlineInfoResponse(offlineInfo)
    };
    // console.log('allData: ', allData);
    return allData;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchData, fetchAllData };
