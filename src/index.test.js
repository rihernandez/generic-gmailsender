import email from "./index";

describe("generic-gmailsender", () => {
  it("should send a mail'", () => {
    var options = {
        auth_mail: "test@gmail.com",
        auth_pass: "test",
        alias: '"Example Header" <',
        to: 'test1@gmail.com, test2@gmail.com',
        subject: 'Generic-gmailsender | test',
        text: 'Hey there, this is a test message sent with generic-gmailsender',
    };  
    const test = email(options)
    expect(test).toHaveBeenCalled();
  });

});