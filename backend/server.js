const express = require('express');
const OpenTok = require('opentok');

const app = express();
const opentok = new OpenTok('0746b85d', 'Hp2Av6idSgZnuv0d');

// Your pre-created sessionId, or use opentok.createSession() to create one
const sessionId = '1_MX5hMDExYzljMS1hMzE5LTRkMjItYTljZi1lZGNjZTI3MmMwNDF-fjE3MjU2ODQ2OTkzMjl-VXcrOHNRT0M5TmNmR3VnQitHTmRBVVAwfn5-';

// Generate a new token for the session
app.get('/token', (req, res) => {
    const token = opentok.generateToken(sessionId, {
        role: 'publisher',
        expireTime: (Date.now() / 1000) + (60 * 60) // Token valid for 1 hour
    });
    res.json({ apiKey: '0746b85d', sessionId, token });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
