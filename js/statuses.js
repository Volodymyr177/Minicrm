async function loadStatuses() {
    const statusMsg = document.getElementById('statusMsg');
    const tbody = document.getElementById('statusBody');
    tbody.innerHTML = '';
    statusMsg.textContent = 'Loading...';

    try {
        const dateFrom = document.getElementById('dateFrom').value || new Date().toISOString().slice(0, 10);
        const dateTo = document.getElementById('dateTo').value || new Date().toISOString().slice(0, 10);

        const response = await fetch('statuses-proxy.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date_from: dateFrom.replace('T', ' '),
                date_to: dateTo.replace('T', ' '),
                page: 0,
                limit: 100
            })
        });

        const json = await response.json();

        console.log('API response:', json);
        console.log('json.data:', json.data);

        const rows = json.data;

        if (!Array.isArray(rows) || rows.length === 0) {
            statusMsg.textContent = 'No leads found for these dates.';
            return;
        }

        rows.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.email}</td>
                <td>${item.status || 'new'}</td>
                <td>${item.ftd}</td>
            `;
            tbody.appendChild(row);
        });

        statusMsg.textContent = `Found: ${rows.length}`;
    } catch (error) {
        statusMsg.textContent = `Request failed: ${error.message}`;
    }
}
