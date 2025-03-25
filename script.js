function generateInputs() {
        const nameInput = document.getElementById("name");
        const jumlahPilihanInput = document.getElementById("jumlahPilihan");
        const generateButton = document.getElementById("generateButton");
        const container = document.getElementById("pilihanContainer");

        nameInput.disabled = true;
        jumlahPilihanInput.disabled = true;
        generateButton.disabled = true;

        nameInput.style.backgroundColor = "#fff0f7";
        jumlahPilihanInput.style.backgroundColor = "#fff0f7";
        generateButton.style.backgroundColor = "#ffc1d9";

        const jumlahPilihan = parseInt(jumlahPilihanInput.value);
        container.innerHTML = "";
        container.classList.remove("hidden");

        container.style.backgroundColor = "#ffe6f0";
        container.style.padding = "20px";
        container.style.borderRadius = "12px";
        container.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
        container.style.color = "#c2185b";

        const formBox = document.createElement("div");

        for (let i = 1; i <= jumlahPilihan; i++) {
            const inputBox = document.createElement("div");
            inputBox.style.margin = "5px 0";

            const label = document.createElement("label");
            label.innerText = `Pilihan ${i} : `;
            label.style.color = "#c2185b";
            label.style.fontWeight = "600";

            const input = document.createElement("input");
            input.type = "text";
            input.placeholder = `Teks Pilihan ${i}`;
            input.id = `pilihan${i}`;
            input.style.border = "1px solid #ffaad4";
            input.style.backgroundColor = "#fff0f7";
            input.style.borderRadius = "6px";
            input.style.padding = "5px";

            inputBox.appendChild(label);
            inputBox.appendChild(input);
            formBox.appendChild(inputBox);
        }

        const submitButton = document.createElement("button");
        submitButton.innerText = "OK";
        submitButton.style.marginTop = "10px";
        submitButton.style.backgroundColor = "#ff6fa7";
        submitButton.style.borderRadius = "6px";
        submitButton.style.padding = "10px";
        submitButton.style.fontWeight = "bold";
        submitButton.onclick = function () {
            disableInputs(jumlahPilihan);
            submitButton.disabled = true;
            submitButton.style.backgroundColor = "#ffc1d9";
            container.style.backgroundColor = "#fff0f7";
            generateSelection();
        };

        formBox.appendChild(submitButton);
        container.appendChild(formBox);
    }

    function disableInputs(jumlahPilihan) {
        for (let i = 1; i <= jumlahPilihan; i++) {
            const input = document.getElementById(`pilihan${i}`);
            if (input) {
                input.disabled = true;
            }
        }
    }

    function generateSelection() {
        const jumlahPilihan = parseInt(document.getElementById("jumlahPilihan").value);
        const selectionContainer = document.getElementById("selectionContainer");
        selectionContainer.innerHTML = "";
        selectionContainer.classList.remove("hidden");

        selectionContainer.style.backgroundColor = "#ffe6f0";
        selectionContainer.style.padding = "20px";
        selectionContainer.style.borderRadius = "12px";
        selectionContainer.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
        selectionContainer.style.color = "#c2185b";

        const selectionBox = document.createElement("div");

        const label = document.createElement("p");
        label.innerText = "Pilih salah satu:";
        label.style.fontWeight = "600";
        selectionBox.appendChild(label);

        for (let i = 1; i <= jumlahPilihan; i++) {
            const pilihanInput = document.getElementById("pilihan" + i);
            const pilihanText = pilihanInput ? pilihanInput.value.trim() : "";

            if (pilihanText === "") continue;

            const radioBox = document.createElement("div");
            radioBox.style.margin = "5px 0";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "pilihan";
            radio.value = pilihanText;

            radioBox.appendChild(radio);
            radioBox.appendChild(document.createTextNode(" " + pilihanText));
            selectionBox.appendChild(radioBox);
        }

        const finalSubmit = document.createElement("button");
        finalSubmit.innerText = "OK";
        finalSubmit.style.marginTop = "10px";
        finalSubmit.style.backgroundColor = "#ff6fa7";
        finalSubmit.style.borderRadius = "6px";
        finalSubmit.style.padding = "10px";
        finalSubmit.style.fontWeight = "bold";
        finalSubmit.onclick = function () {
            disableSelection();
            finalSubmit.disabled = true;
            finalSubmit.style.backgroundColor = "#ffc1d9";
            selectionContainer.style.backgroundColor = "#fff0f7";
            showFinalSelection();
        };

        selectionBox.appendChild(finalSubmit);
        selectionContainer.appendChild(selectionBox);
    }

    function disableSelection() {
        const radios = document.querySelectorAll('input[name="pilihan"]');
        radios.forEach(radio => {
            radio.disabled = true;
        });

        const buttons = document.querySelectorAll("#selectionContainer button");
        buttons.forEach(button => {
            button.disabled = true;
            button.style.backgroundColor = "#ffc1d9";
        });
    }

    function showFinalSelection() {
        const name = document.getElementById("name").value;
        const jumlahPilihan = parseInt(document.getElementById("jumlahPilihan").value);
        const selectedOption = document.querySelector('input[name="pilihan"]:checked');
        const chosenText = selectedOption ? selectedOption.value : "<Teks Pilihan>";

        const pilihanTexts = [];
        for (let i = 1; i <= jumlahPilihan; i++) {
            const pilihanInput = document.getElementById("pilihan" + i);
            if (pilihanInput) {
                pilihanTexts.push(pilihanInput.value);
            }
        }

        const resultContainer = document.getElementById("resultContainer");
        resultContainer.innerHTML = "";
        resultContainer.classList.remove("hidden");

        resultContainer.style.backgroundColor = "#fff0f7";
        resultContainer.style.padding = "20px";
        resultContainer.style.borderRadius = "12px";
        resultContainer.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
        resultContainer.style.color = "#c2185b";

        const resultBox = document.createElement("div");
        resultBox.innerHTML = `Hallo, nama saya ${name}, saya mempunyai sejumlah ${jumlahPilihan} pilihan yaitu ${pilihanTexts.join(", ")}, dan saya memilih ${chosenText}.`;
        resultBox.style.padding = "10px";
        resultBox.style.border = "2px solid #ffaad4";
        resultBox.style.marginTop = "10px";
        resultBox.style.backgroundColor = "#fff0f7";

        resultContainer.appendChild(resultBox);
    }
