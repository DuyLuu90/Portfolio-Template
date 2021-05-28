/* eslint-disable import/no-anonymous-default-export */
export default {
    API_ENDPOINT: (process.env.NODE_ENV==='production')
                ? 'http://localhost:8000/api'
                : process.env.REACT_APP_API_BASE_URL ,

}

