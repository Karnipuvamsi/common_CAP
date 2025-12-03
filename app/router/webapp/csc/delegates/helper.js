
const oHelper = {
    getRequestHeaders: (oRequest) => {
        return oRequest?.http?.req?.headers || oRequest.headers || {};
    },
    ts: {
        getOnBehalfOfUserId: (oRequest) => {
            return oHelper.getRequestHeaders(oRequest)?.["x-onbehalfof-user"] || oRequest.user?.attr?.email;
        } 
    },
    ur: {
        
    }
}

module.exports = {
    helper: oHelper
};