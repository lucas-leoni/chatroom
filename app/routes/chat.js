module.exports = (application) => {
  application.get('/chat', (req, res) => {
    /* res.render('chat'); */
    // EXPRESS APP MODULE FILE METHOD
    application.app.controllers.chat.iniciaChat(application, req, res);
  });

  application.post('/chat', (req, res) => {
    application.app.controllers.chat.iniciaChat(application, req, res);
  });
}