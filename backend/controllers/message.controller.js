const express = require('express');
const router = express.Router();
const MessageService = require('../services/message.service')

router.post('/message',(req,res)=>{
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }
     MessageService.getResponse(text)
    .then(responseText => {
      res.json({ message: responseText });
    })
    .catch(error => {
      console.error('Error processing chat message:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports = router;
