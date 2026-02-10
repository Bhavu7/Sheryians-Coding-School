let users = ["user@user.com", "male@male.com", "female@female.com"];

function sendEmail(email) {
  return new Promise((resolve, reject) => {
    let time = Math.floor(Math.random() * 5);
    setTimeout(() => {
      let probability = Math.floor(Math.random() * 10);
      if (probability <= 5) {
        resolve("Email Sent Successfully!");
      } else {
        reject("Email Not Sent!!!");
      }
    }, time);
  });
}

sendEmail("user@user.com")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

async function sendEmails(userList) {
  let responses = userList.map(function (email) {
    return sendEmail(email)
      .then(function (data) {
        return data;
      })
      .catch(function (err) {
        return err;
      });
  });
  let ans = await Promise.all(responses);
  ans.forEach(function (status) {
    console.log(status);
  });
}
sendEmails(users);
