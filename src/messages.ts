export const statusMessages: Record<number, string[]> = {
  100: [
    'Continue',
    'The server has received the request headers and the client should proceed to send the request body.',
  ],
  101: [
    'Switching Protocols',
    'The requester has asked the server to switch protocols and the server has agreed to do so.',
  ],
  102: [
    'Processing',
    'WebDAV; The server has received and is processing the request, but no response is available yet.',
  ],
  103: [
    'Early Hints',
    'Used to return some response headers before final HTTP message.',
  ],

  200: ['OK', 'The request has succeeded.', 'Success'],
  201: [
    'Created',
    'The request has been fulfilled, resulting in the creation of a new resource.',
  ],
  202: [
    'Accepted',
    'The request has been accepted for processing, but the processing has not been completed.',
  ],
  203: [
    'Non-Authoritative Information',
    "The server is a transforming proxy that received a 200 OK from its origin, but is returning a modified version of the origin's response.",
  ],
  204: [
    'No Content',
    'The server successfully processed the request and is not returning any content.',
  ],
  205: [
    'Reset Content',
    'The server successfully processed the request, but is not returning any content and requires that the requester reset the document view.',
  ],
  206: [
    'Partial Content',
    'The server is delivering only part of the resource due to a range header sent by the client.',
  ],
  207: [
    'Multi-Status',
    'WebDAV; The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.',
  ],
  208: [
    'Already Reported',
    'WebDAV; The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.',
  ],
  226: [
    'IM Used',
    'The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
  ],

  300: [
    'Multiple Choices',
    'The request has more than one possible response. The user agent or user should choose one of them.',
  ],
  301: [
    'Moved Permanently',
    'The URL of the requested resource has been changed permanently. The new URL is given in the response.',
  ],
  302: [
    'Found',
    'The URI of requested resource has been changed temporarily.',
    'Temporarily Moved',
  ],
  303: [
    'See Other',
    'The server sent this response to direct the client to get the requested resource at another URI with a GET request.',
  ],
  304: [
    'Not Modified',
    'Used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.',
  ],
  305: [
    'Use Proxy',
    'Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns.',
  ],
  307: [
    'Temporary Redirect',
    'The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request.',
  ],
  308: [
    'Permanent Redirect',
    'The resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used.',
  ],

  400: [
    'Bad Request',
    'The server could not understand the request due to invalid syntax.',
    'Malformed request.',
  ],
  401: [
    'Unauthorized',
    'Authentication is needed to get the requested response. It is similar to 403, but in this case, authentication is possible.',
  ],
  402: [
    'Payment Required',
    'This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems.',
  ],
  403: [
    'Forbidden',
    'The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.',
  ],
  404: [
    'Not Found',
    'The server can not find the requested resource.',
    'The specified URL cannot be found.',
  ],
  405: [
    'Method Not Allowed',
    'The request method is known by the server but has been disabled and cannot be used.',
  ],
  406: [
    'Not Acceptable',
    "This response is sent when the web server, after performing server-driven negotiation, doesn't find any content that conforms to the criteria given by the user agent.",
  ],
  407: [
    'Proxy Authentication Required',
    'This is similar to 401 but authentication is needed to be done by a proxy.',
  ],
  408: [
    'Request Timeout',
    'This response is sent on an idle connection by some servers, even without any previous request by the client.',
  ],
  409: [
    'Conflict',
    'This response is sent when a request conflicts with the current state of the server.',
    'Resource conflict.',
  ],
  410: [
    'Gone',
    'This response is sent when the requested content has been permanently deleted from server, with no forwarding address.',
  ],
  411: [
    'Length Required',
    'Server rejected the request because the Content-Length header field is not defined and the server requires it.',
  ],
  412: [
    'Precondition Failed',
    'The client has indicated preconditions in its headers which the server does not meet.',
  ],
  413: [
    'Payload Too Large',
    'Request entity is larger than limits defined by server.',
    'Request entity too large.',
  ],
  414: [
    'URI Too Long',
    'The URI requested by the client is longer than the server is willing to interpret.',
  ],
  415: [
    'Unsupported Media Type',
    'The media format of the requested data is not supported by the server, so the server is rejecting the request.',
  ],
  416: [
    'Range Not Satisfiable',
    'The range specified by the Range header field in the request cannot be fulfilled.',
  ],
  417: [
    'Expectation Failed',
    'This response code means the expectation indicated by the Expect request header field could not be met by the server.',
  ],
  418: [
    "I'm a teapot",
    'The server refuses the attempt to brew coffee with a teapot.',
  ],
  421: [
    'Misdirected Request',
    'The request was directed at a server that is not able to produce a response.',
  ],
  422: [
    'Unprocessable Entity',
    'WebDAV; The request was well-formed but was unable to be followed due to semantic errors.',
  ],
  423: ['Locked', 'WebDAV; The resource that is being accessed is locked.'],
  424: [
    'Failed Dependency',
    'WebDAV; The request failed due to failure of a previous request.',
  ],
  425: [
    'Too Early',
    'Indicates that the server is unwilling to risk processing a request that might be replayed.',
  ],
  426: [
    'Upgrade Required',
    'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.',
  ],
  428: [
    'Precondition Required',
    'The origin server requires the request to be conditional.',
  ],
  429: [
    'Too Many Requests',
    'The user has sent too many requests in a given amount of time ("rate limiting").',
  ],
  431: [
    'Request Header Fields Too Large',
    'The server is unwilling to process the request because its header fields are too large.',
  ],
  451: [
    'Unavailable For Legal Reasons',
    'The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.',
  ],

  500: [
    'Internal Server Error',
    "The server has encountered a situation it doesn't know how to handle.",
    'An unexpected error occurred.',
  ],
  501: [
    'Not Implemented',
    'The request method is not supported by the server and cannot be handled.',
  ],
  502: [
    'Bad Gateway',
    'The server, while working as a gateway to get a response needed to handle the request, got an invalid response.',
  ],
  503: [
    'Service Unavailable',
    'The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.',
  ],
  504: [
    'Gateway Timeout',
    'This error response is given when the server is acting as a gateway and cannot get a response in time.',
  ],
  505: [
    'HTTP Version Not Supported',
    'The HTTP version used in the request is not supported by the server.',
  ],
  506: [
    'Variant Also Negotiates',
    'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.',
  ],
  507: [
    'Insufficient Storage',
    'WebDAV; The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.',
  ],
  508: [
    'Loop Detected',
    'WebDAV; The server detected an infinite loop while processing the request.',
  ],
  510: [
    'Not Extended',
    'Further extensions to the request are required for the server to fulfill it.',
  ],
  511: [
    'Network Authentication Required',
    'Indicates that the client needs to authenticate to gain network access.',
  ],
};
