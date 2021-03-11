# Generic-gmailsender

This is a simple tool to send mails through gmail from nodejs using the core library nodemailsender.

## Installation

To add the dependency, at the root of your project run :

```bash
npm i generic-gmailsender
```

## Usage

Add the following code to your project and modify it as you consider.

```bash
const email = require('generic-gmailsender');

var options = {
    auth_mail: "test@gmail.com", //Gmail address where the email will come from
    auth_pass: "test", //Gmail password of this aaccount
    alias: '"Example Header <"', // Sender header to identify mail
    to: 'test1@gmail.com, test2@gmail.com', //Recipients
    subject: 'Generic-gmailsender | test', //Mail subject
    text: 'Hey there, this is a test message sent with generic-gmailsender', //Message to send
};

email(options);
```

By default Google blocks the sending of emails from less secure applications. Therefore you should allow less secure applications in your Google account to send emails, enabling with a simple click through this link. [Allow less secure apps From your Google Account](https://myaccount.google.com/lesssecureapps)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or add to this tool.

[Github link project](https://github.com/rihernandez/generic-gmailsender)
[Npm package](https://www.npmjs.com/package/generic-gmailsender)

## License
[MIT](https://choosealicense.com/licenses/mit/)