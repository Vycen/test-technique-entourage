export default {

  handleWSResponse(response, res, rej, successCode = 200) {
    if (response.status === successCode) {
      response.json().then((responseJson) => {
        res(responseJson);
      }).catch((e) => {
        rej(e);
      });
    } else {
      response.json().then((errorJson) => {
        rej(errorJson);
      }).catch((e) => {
        rej(e);
      });
    }
  }
};

//TODO Fix