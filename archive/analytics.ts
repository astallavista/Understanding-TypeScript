let logged;

function sendAnalytics(data: string) {
    console.log(data);
    logged = 'Artem';
    console.log(logged);
}

sendAnalytics('The data');