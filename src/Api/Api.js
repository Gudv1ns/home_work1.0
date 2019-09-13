export const fetchTask = () => {
    const url = 'https://test-task-server.herokuapp.com/api/v1/category/all';
    const response = fetch(url);
    response.then((response) => {
        return response;
    })
    .then((data) => {
        return data;
    })
    return response;
}