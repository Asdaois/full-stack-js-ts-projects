/**
 * Response to unknowEndpoint
 * @type {import('express').Response} response
 */
const unknowEndpoint = (_request, response) => {
  response.status(404).send({ error: 'UnknownEndpoint', message: 'This page doesnt exist' });
};

export default unknowEndpoint;
