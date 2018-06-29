function validateRequest(obj) {

    validateMethod(obj['method']);
    validateURI(obj['uri']);
    validateVersion(obj['version']);
    validateMessage(obj['message']);

    return obj;

    function validateMethod(method) {
        switch (method) {
            case 'GET':
                return true;
            case 'POST':
                return true;
            case 'DELETE':
                return true;
            case 'CONNECT':
                return true;
            default:
                throw new Error('Invalid request header: Invalid Method');
        }
    }

    function validateURI(uri) {
        if (uri === '*') {
            return true;
        }
        if (uri === undefined || uri === '' || uri.match(/^[\w.]+$/) === null) {
            throw new Error('Invalid request header: Invalid URI');
        }
        return true;
    }

    function validateVersion(version) {
        switch (version) {
            case 'HTTP/0.9':
                return true;
            case 'HTTP/1.0':
                return true;
            case 'HTTP/1.1':
                return true;
            case 'HTTP/2.0':
                return true;
            default:
                throw new Error('Invalid request header: Invalid Version');
        }
    }

    function validateMessage(message) {
        if (message === undefined || message.match(/[<>\\&'"]/g)) {
            throw new Error('Invalid request header: Invalid Message');
        }

        return true;
    }
}

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

