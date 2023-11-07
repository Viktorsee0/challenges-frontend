class ChallengesApiClient {
    static SERVER_URL = 'http://localhost:8080'; // ...
    static GET_USERS_BY_IDS = '/users';

    static getUsers(userIds: number[]): Promise<Response> {
        return fetch(ChallengesApiClient.SERVER_URL +
        ChallengesApiClient.GET_USERS_BY_IDS +
        '/' + userIds.join(','));
    }
}
export default ChallengesApiClient;