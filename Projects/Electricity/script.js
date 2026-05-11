document.querySelector("form").addEventListener("submit", (event) => {
            event.preventDefault();

            // Input unit value extract kar rahe hain
            const units = parseInt(document.getElementById("units").value);
            
            let tempUnits = units;

            // Slab rates logic calculations
            let slab1 = 0, slab2 = 0, slab3 = 0, slab4 = 0;

            // 1. First 50 units (Rate: 0.50)
            if (tempUnits > 0) {
                slab1 = Math.min(tempUnits, 50);
                tempUnits -= slab1;
            }
            const cost1 = slab1 * 0.50;

            // 2. Next 150 units (51-200) (Rate: 0.75)
            if (tempUnits > 0) {
                slab2 = Math.min(tempUnits, 150);
                tempUnits -= slab2;
            }
            const cost2 = slab2 * 0.75;

            // 3. Next 250 units (201-450) (Rate: 1.20)
            if (tempUnits > 0) {
                slab3 = Math.min(tempUnits, 250);
                tempUnits -= slab3;
            }
            const cost3 = slab3 * 1.20;

            // 4. Above 450 units (Rate: 1.50)
            if (tempUnits > 0) {
                slab4 = tempUnits;
            }
            const cost4 = slab4 * 1.50;

            // Calculations
            const subtotal = cost1 + cost2 + cost3 + cost4;
            const surcharge = subtotal * 0.20; // 20% surcharge
            const grandTotal = subtotal + surcharge;

            // Form inputs ko clear karna (Jaise aapne tip calc me kiya tha)
            document.getElementById("units").value = "";

            // Dynamic HTML outputs update kar rahe hain
            document.getElementById("s1").innerText = "₹" + cost1.toFixed(2);
            document.getElementById("s2").innerText = "₹" + cost2.toFixed(2);
            document.getElementById("s3").innerText = "₹" + cost3.toFixed(2);
            document.getElementById("s4").innerText = "₹" + cost4.toFixed(2);
            
            document.getElementById("sub").innerText = "₹" + subtotal.toFixed(2);
            document.getElementById("sur").innerText = "₹" + surcharge.toFixed(2);
            document.getElementById("total").innerText = "₹" + grandTotal.toFixed(2);

            // Result Card element toggle show/hide
            document.getElementById("dataCard").classList.add("divShow");
            document.getElementById("dataCard").classList.remove("divHide");
        });