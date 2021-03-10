import send from "./index";

describe("generic-mailsender", () => {
  it("should send a mail'", () => {
    var options = {
        auth_mail: "test@gmail.com",
        auth_pass: "test",
        alias: '"Example Header" <',
        to: 'test1@gmail.com, test2@gmail.com',
        subject: 'Generic-mailsender | test',
        text: 'Hey there, this is a test message sent with generic-mailsender',
    };  
    const test = send(options)
    expect(test).toHaveBeenCalled();
  });

});