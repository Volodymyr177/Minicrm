document.getElementById('leadForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const data = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        phone: form.phone.value,
        email: form.email.value,
        box_id: "28",
        offer_id: "5",
        countryCode: "GB",
        language: "en",
        password: "qwerty12",
        landingUrl: window.location.href,
        ip: await getIP()
    };

    const resMsg = document.getElementById('responseMsg');
    resMsg.textContent = 'Sending...';

    try {
        const res = await fetch('proxy.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        console.log('API response:', result);

        if (result.status) {
            resMsg.textContent = `Success! ID: ${result.id}, Email: ${result.email}`;
        } else {
            resMsg.textContent = `Error: ${result.error || 'Unknown error'}`;
        }
    } catch (err) {
        resMsg.textContent = `Request failed: ${err.message}`;
    }
});

async function getIP() {
    try {
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        return data.ip;
    } catch (err) {
        return '0.0.0.0';
    }
}
