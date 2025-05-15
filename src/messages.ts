/**
 * A mapping of HTTP status codes to an array of descriptive messages.
 * Multiple messages can be provided per status for flexible response options.
 */

export const statusMessages: Record<number, string[]> = {
  200: ['Success', 'OK'],
  201: ['Created', 'Resource created successfully'],
  202: ['Accepted', 'Request accepted for processing'],
  204: ['No Content', 'No content to return'],

  400: ['Bad Request', 'Invalid input data'],
  401: ['Unauthorized', 'Authentication required'],
  403: ['Forbidden', 'Access denied'],
  404: ['Not Found', 'Resource not found'],

  500: ['Internal Server Error', 'An unexpected error occurred'],
  502: ['Bad Gateway', 'Invalid response from upstream server'],
  503: ['Service Unavailable', 'Server currently unavailable'],
  504: ['Gateway Timeout', 'Upstream server timed out'],
};
