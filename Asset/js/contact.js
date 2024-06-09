function submitHandler() {
    let nameValue = document.getElementById("name").value;
    let emailValue = document.getElementById("email").value;
    let phoneValue = document.getElementById("phone").value;
    let subjectValue = document.getElementById("subject").value;
    let messageValue = document.getElementById("message").value;

    if (nameValue === "") {
        alert("Please type your name");
        return;
    } else if (emailValue === "") {
        alert("Please type your email");
        return;
    } else if (phoneValue === "") {
        alert("Please type your phone");
        return;
    } else if (subjectValue === "") {
        alert("Please type your subject");
        return;
    } else if (messageValue === "") {
        alert("Please type your message");
        return;
    }

    const data = {
        name: nameValue,
        email: emailValue,
        phone: phoneValue,
        subject: subjectValue,
        message: messageValue
    }

    const yourEmail = "faathir.alfath06@gmail.com";

    let a = document.createElement("a");
    a.href = `mailto:${yourEmail}?subject=$https://mail.google.com/mail?view=cm&fs=1(subjectValue)}&body=${encodeURIComponent(messageValue)}`;
    a.click();

    console.log(data);
}