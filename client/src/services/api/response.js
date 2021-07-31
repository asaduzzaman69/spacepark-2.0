export const handleRespose = (response) => {
    if(response.results) {
        return response.results
    }
    if(response.data) {
        console.log(response.data)

        return response.data
    }

    return response;
}


export const handleError = (err) => {
    console.log(err)
    if(err.data) {

        return err.data
    }

    return err;

}