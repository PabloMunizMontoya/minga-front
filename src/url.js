
let urlApi =  "http://localhost:8000/"


if ( process.env.NODE_ENV === "production") {
    urlApi = process.env.REACT_APP_API
}

module.exports = urlApi