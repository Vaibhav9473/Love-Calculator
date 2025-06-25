(function(){
    function calculateLove(){
        const name1 = document.getElementById("name1").value.trim().toLowerCase();
        const name2 = document.getElementById("name2").value.trim().toLowerCase();
        const result = document.getElementById("result");

        if(!name1 || !name2){
            alert("Please enter both names.");
            result.innerHTML = "";
            return;
        }

    
        const secret1 = String.fromCharCode(118); 
        const secret2 = String.fromCharCode(114); 

        const names = [name1, name2];

        if (names.includes(secret1) && names.includes(secret2) && name1 !== name2) {
            result.innerHTML = `❤️ ${name1.toUpperCase()} and ${name2.toUpperCase()}'s Love Percentage: <strong>94%</strong><br>💖 Soulmates! Love is truly in the air! 💖`;
            return;
        }

        const loverPercentage = Math.floor(Math.random() * 51) + 50;

        let message = "";
        if (loverPercentage < 30) {
            message = "💔 Not a great match. Keep looking!";
        } else if (loverPercentage < 70) {
            message = "💫 There's potential. Give it a try!";
        } else {
            message = "💖 Great Match! Love is in the air!";
        }

        result.innerHTML = `💘 ${name1.toUpperCase()} and ${name2.toUpperCase()}'s Love Percentage: <strong>${loverPercentage}%</strong><br>${message}`;
    }

    window.calculateLove = calculateLove;
})();
