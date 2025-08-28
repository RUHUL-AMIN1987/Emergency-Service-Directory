//   add love coine
                const hearts = document.querySelectorAll('.heart');
                const countSpan = document.querySelector('.count span');

                hearts.forEach(heart => {
                    heart.addEventListener('click', () => {
                        let currentCount = parseInt(countSpan.textContent);
                        currentCount++;
                        countSpan.textContent = currentCount;
                    });
                });

                    // Subtraction call for 20 coins

                    const coinSpan = document.querySelector(".coins span");
                    const callButtons = document.querySelectorAll(".callButton");

                    callButtons.forEach(button => {
                        button.addEventListener("click", () => {
                        let currentCoins = parseInt(coinSpan.innerText);
                        if (currentCoins >= 20) {
                            currentCoins -= 20;
                            coinSpan.innerText = currentCoins;
                        } else {
                            alert("Not enough coins!");
                        }
                        });
                    });

                    // click even
                    document.getElementById('National-Emergency')
                        .addEventListener('click' ,function(){
                            alert('National Emergency Number 999');
                        });
                    document.getElementById('Police-Helpline-Number')
                        .addEventListener('click' ,function(){
                            alert('Police Helpline Number 999');
                        });
                    document.getElementById('Fire-Service-Number')
                        .addEventListener('click' ,function(){
                            alert('Fire Service Number 999');
                        });
                    document.getElementById('Ambulance-Service')
                        .addEventListener('click' ,function(){
                            alert('Ambulance Service 1994-999999');
                        });
                    document.getElementById('Women-&-Child-Helpline')
                        .addEventListener('click' ,function(){
                            alert('Women & Child Helpline 109');
                        });
                    document.getElementById('Anti-Corruption-Helpline')
                        .addEventListener('click' ,function(){
                            alert('Anti-Corruption Helpline 109');
                        });
                    document.getElementById('Electricity-Helpline')
                        .addEventListener('click' ,function(){
                            alert('Electricity Helpline 16216');
                        });
                    document.getElementById('Brac-Helpline')
                        .addEventListener('click' ,function(){
                            alert('Brac Helpline 16445');
                        });
                    document.getElementById('Bangladesh-Railway-Helpline')
                        .addEventListener('click' ,function(){
                            alert('Bangladesh Railway Helpline 163');
                        });