# Generic-mailsender

This is a simple tool to send mails from nodejs using the core library nodemailsender.

## Installation

In the root of your project run :

```bash
npm i generic-mailsender
```

## Usage

Add the following code and modify as you need it.

```bash
const email = require('generic-mailsender');

var options = {
    auth_mail: "test@gmail.com",
    auth_pass: "test",
    alias: '"Example Header" <',
    to: 'test1@gmail.com, test2@gmail.com',
    subject: 'Generic-mailsender | test',
    text: 'Hey there, this is a test message sent with generic-mailsender',
};

email.send(options);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

[Github link project](https://github.com/rihernandez/generic-mailsender)

## License
[MIT](https://choosealicense.com/licenses/mit/)