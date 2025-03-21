document.addEventListener("DOMContentLoaded", function () {
    function generateInputs() {
        let nameInput = document.getElementById("name");
        let jumlahPilihanInput = document.getElementById("jumlahPilihan");
        let generateButton = document.getElementById("generateButton");
        let container = document.getElementById("pilihanContainer");

        // Nonaktifkan input utama dan ubah tampilannya
        nameInput.disabled = true;
        jumlahPilihanInput.disabled = true;
        generateButton.disabled = true;

        // Ubah warna setelah dikunci
        nameInput.style.backgroundColor = "#d3d3d3";
        jumlahPilihanInput.style.backgroundColor = "#d3d3d3";
        generateButton.style.backgroundColor = "#b0b0b0"; // Ubah warna tombol OK jadi abu-abu

        let jumlahPilihan = parseInt(jumlahPilihanInput.value);
        container.innerHTML = ""; // Bersihkan kontainer sebelumnya
        container.classList.remove("hidden"); // Tampilkan kontainer

        let formBox = document.createElement("div");
    
        for (let i = 1; i <= jumlahPilihan; i++) {
            let inputBox = document.createElement("div");
            inputBox.style.margin = "5px 0";

            let label = document.createElement("label");
            label.innerText = `Pilihan ${i} : `;
            label.style.color = "#808080"; // Ubah teks menjadi abu-abu seperti di gambar

            let input = document.createElement("input");
            input.type = "text";
            input.placeholder = `Teks Pilihan ${i}`;
            input.id = `pilihan${i}`;
            input.style.border = "1px solid black";

            inputBox.appendChild(label);
            inputBox.appendChild(input);
            formBox.appendChild(inputBox);
        }
    
        let submitButton = document.createElement("button");
        submitButton.innerText = "OK";
        submitButton.style.marginTop = "10px";
        submitButton.onclick = function () {
            disableInputs(jumlahPilihan);
            generateSelection();
        };

        formBox.appendChild(submitButton);
        container.appendChild(formBox);
    }
    
    function disableInputs(jumlahPilihan) {
        for (let i = 1; i <= jumlahPilihan; i++) {
            let input = document.getElementById(`pilihan${i}`);
            if (input) {
                input.disabled = true; // Matikan input
                input.style.backgroundColor = "#d3d3d3"; // Ubah warna ke abu-abu
            }
        }
    }

    function generateSelection() {
        let jumlahPilihan = parseInt(document.getElementById("jumlahPilihan").value);
        let selectionContainer = document.getElementById("selectionContainer");
        selectionContainer.innerHTML = ""; // Bersihkan kontainer sebelumnya
        selectionContainer.classList.remove("hidden"); // Tampilkan container

        let selectionBox = document.createElement("div");
    
        let label = document.createElement("p");
        label.innerText = "Pilih salah satu:";
        selectionBox.appendChild(label);
    
        for (let i = 1; i <= jumlahPilihan; i++) {
            let pilihanInput = document.getElementById("pilihan" + i);
            let pilihanText = pilihanInput ? pilihanInput.value.trim() : "";

            if (pilihanText === "") continue;

            let radioBox = document.createElement("div");
            radioBox.style.margin = "5px 0";
    
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "pilihan";
            radio.value = pilihanText;
    
            radioBox.appendChild(radio);
            radioBox.appendChild(document.createTextNode(" " + pilihanText));
            selectionBox.appendChild(radioBox);
        }
    
        let finalSubmit = document.createElement("button");
        finalSubmit.innerText = "OK";
        finalSubmit.style.marginTop = "10px";
        finalSubmit.onclick = function () {
            disableSelection();
            showFinalSelection();
        };

        selectionBox.appendChild(finalSubmit);
        selectionContainer.appendChild(selectionBox);
    }

    function disableSelection() {
        let radios = document.querySelectorAll('input[name="pilihan"]');
        radios.forEach(radio => {
            radio.disabled = true; // Matikan semua radio button
        });

        let buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            button.disabled = true;
            button.style.backgroundColor = "#b0b0b0"; // Ubah warna tombol ke abu-abu
        });
    }
    
    function showFinalSelection() {
        let name = document.getElementById("name").value;
        let jumlahPilihan = parseInt(document.getElementById("jumlahPilihan").value);
        let selectedOption = document.querySelector('input[name="pilihan"]:checked');
        let chosenText = selectedOption ? selectedOption.value : "<Teks Pilihan>";

        let pilihanTexts = [];
        for (let i = 1; i <= jumlahPilihan; i++) {
            let pilihanInput = document.getElementById("pilihan" + i);
            if (pilihanInput) {
                pilihanTexts.push(pilihanInput.value);
            }
        }

        let resultContainer = document.getElementById("resultContainer");
        resultContainer.innerHTML = ""; 
        resultContainer.classList.remove("hidden"); 

        let resultBox = document.createElement("div");
        resultBox.innerHTML = `Hallo, nama saya ${name}, saya mempunyai sejumlah ${jumlahPilihan} pilihan yaitu ${pilihanTexts.join(", ")}, dan saya memilih ${chosenText}.`;
        resultBox.style.padding = "10px";
        resultBox.style.border = "2px solid black";
        resultBox.style.marginTop = "10px";
        resultBox.style.backgroundColor = "#d3d3d3"; // Ubah hasil menjadi abu-abu

        resultContainer.appendChild(resultBox);
    }

    document.getElementById("generateButton").addEventListener("click", generateInputs);
});
