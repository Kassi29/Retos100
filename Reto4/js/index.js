const ctx = document.getElementById("Chart");
const data = {
    labels: ["Channel pages", "Direct or unknow", "Search", "External"],
    datasets: [{
        label: "Traffic Sources",
        data: [37.5, 33.6, 11.0, 6.0],
        backgroundColor: ["#6792FF", "#4473EA", "#1A52E1", "#96B3FF"],
    }]
};

const config = {
    type: "doughnut",
    data: data,
    options: {
        plugins: {
            legend: {
                display: false,
            },
        },
        cutout: "80%",
    },
};

new Chart(ctx, config);

const $dataContainer = document.querySelector(".data");
if ($dataContainer) {
    let html = "";
    data.labels.forEach((label, index) => {
        html += `
            <p class="data-row">
                <span class="name">${label}</span>
                <span class="value">${data.datasets[0].data[index]}%</span>
            </p>`;
    });
    html += `<div style="text-align: right;"><a href="https://github.com/Kassi29" target="_blank" class="seemore">See more</a></div>`;
    $dataContainer.innerHTML = html;
}
