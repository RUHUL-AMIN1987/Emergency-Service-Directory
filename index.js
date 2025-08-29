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


                      
                    // Call button select-1
              
          
                    const callBtn = document.getElementsByClassName('callButton')[0];

              
                    callBtn.addEventListener('click', function() {
                    
                        const titleText = document.getElementsByClassName('title-1')[0].innerText;

                      
                        const historyTitle = document.querySelector('.mt-4 h1');

                        // h1 এর ভেতরে নতুন টেক্সট বসালাম
                        historyTitle.innerText = titleText;
                           
                    });

                // Copy button select
                // const copyBtn = document.getElementsByClassName('copyBtn')[0];

                // copyBtn.addEventListener('click', function() {
                //     // title-1 থেকে টেক্সট নিলাম
                //     const titleText = document.getElementsByClassName('title-1')[0].innerText;

                //     // বর্তমান সময় নিলাম
                //     const now = new Date();
                //     const timeString = now.toLocaleTimeString(); // যেমন: 4:35:12 PM

                //     // Call History ব্লকের .mt-4 div ধরলাম
                //     const historyDiv = document.querySelector('.mt-4');

                //     // নতুন p এলিমেন্ট বানালাম
                //     const newEntry = document.createElement('p');
                //     newEntry.innerText = `${titleText} - ${timeString}`;

                //     // h1 এর নিচে নতুন লাইন হিসেবে যোগ করলাম
                //     historyDiv.appendChild(newEntry);
                // });
