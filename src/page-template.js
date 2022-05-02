const generatecard = data => {
  var result = '';
  for (var i = 0; i< data.length; i++) {
    result += writecard(data[i]);
  }
  return result;
}

const writecard = data => {
  var temp = '';
  if (data.getRole() == 'Manager') {
    temp = `Office Number: ${data.officeNumber}`;
  } else if (data.getRole() == 'Engineer') {
    temp = `GitHub: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a>`
  } else if (data.getRole() == 'Intern') {
    temp = `School: ${data.school}`;
  }
  return `
        <div class="card shadow-sm rounded m-3" style="width: 15rem;">
        <div class="card-body bg-primary text-white">
          <h5 class="card-title">${data.name}</h5>
          <h6 class="card-text">${data.getRole()}</h6>
        </div>
        <div class = "card-body bg-secondary>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data.id}</li>
          <li class="list-group-item">Email: <a href = "mailto:${data.email}">${data.email}</a></li>
          <li class="list-group-item">${temp}</li>
        </ul>
        </div>
        </div>
  `;
}

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center">
          <h1 class="page-title text-secondary py-2 px-3 text-center">My Team</h1>
        </div>
      </header>
      <main class="container d-flex flex-wrap">
      ${generatecard(templateData)}
      </main>
      <footer class="container text-center py-3">
      </footer>
    </body>
    </html>
    `;
  };
  