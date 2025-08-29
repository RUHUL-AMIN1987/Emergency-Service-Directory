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


                      
                   
                        // Function
                    function addToHistory(titleText) {
                        const historyDiv = document.querySelector('.mt-4'); // history container select
                        const newTitle = document.createElement('h1');
                        newTitle.innerText = titleText;
                        historyDiv.appendChild(newTitle);
                    }

                    // Call button-1 
                    const callBtn1 = document.getElementsByClassName('button-1')[0];
                    callBtn1.addEventListener('click', function() {
                        const titleText = document.getElementsByClassName('title-1')[0].innerText;
                        addToHistory(titleText);
                    });
                                                                                   
                    // Call button select-2
                const callBtn2 = document.getElementsByClassName('button-2')[0];
                    callBtn2.addEventListener('click', function() {                     
                        const titleText = document.getElementsByClassName('title-2')[0].innerText;                    
                        addToHistory(titleText);
                    });
                    
                       // Call button select-3
                const callBtn3 = document.getElementsByClassName('button-3')[0];
                    callBtn3.addEventListener('click', function(){
                       const titleText = document.getElementsByClassName('title-3')[0].innerText;
                       addToHistory(titleText);
                    });

                    // Call button select-4
                const callBtn4 = document.getElementsByClassName('button-4')[0];
                    callBtn4.addEventListener('click', function(){
                        const titleText = document.getElementsByClassName('title-4')[0].innerText;
                        addToHistory(titleText);
                    });
                    
                    // Call button select-5
                const callBtn5 = document.getElementsByClassName('button-5')[0];
                    callBtn5.addEventListener('click', function(){
                        const titleText = document.getElementsByClassName('title-5')[0].innerText;
                        addToHistory(titleText);
                    });

                     // Call button select-6
                const callBtn6 = document.getElementsByClassName('button-6')[0];
                    callBtn6.addEventListener('click', function (){
                        const titleText = document.getElementsByClassName('title-6')[0].innerText;
                       addToHistory(titleText);
                    });
                
                    // Call button select-7
                const callBtn7 = document.getElementsByClassName('button-7')[0];
                    callBtn7.addEventListener('click', function(){
                        const titleText = document.getElementsByClassName('title-7')[0].innerText;
                        addToHistory(titleText);
                    });

                    // Call button select-8
                const callBtn8 = document.getElementsByClassName('button-8')[0];
                    callBtn8.addEventListener('click', function(){
                        const titleText = document.getElementsByClassName('title-8')[0].innerText;
                        addToHistory(titleText);
                    });

                     // Call button select-9
                const callBtn9 = document.getElementsByClassName('button-9')[0];
                    callBtn9.addEventListener('click', function(){
                        const titleText = document.getElementsByClassName('title-9')[0].innerText;
                        addToHistory(titleText);
                    });

                        // Copy button
                const copyBtn1 = document.getElementsByClassName('copyBtn-1');
                    copyBtn1.addEventListener('click', function() {
                    const titleText = document.querySelector('.title-1').innerText; 
                    navigator.clipboard.writeText(titleText);
                });
                const copyBtn2 = document.getElementsByClassName('copyBtn-2');
                    copyBtn2.addEventListener('click', function() {
                    const titleText = document.querySelector('.title-2').innerText; 
                    navigator.clipboard.writeText(titleText);  
                });
                const copyBtn3 = document.getElementsByClassName('copyBtn-3');
                    copyBtn3.addEventListener('click', function() {
                    const titleText = document.querySelector('.title-3').innerText; 
                    navigator.clipboard.writeText(titleText)  
                });
                const copyBtn4 = document.querySelector('.copyBtn-4');
                    copyBtn4.addEventListener('click', function() {
                    const titleText = document.querySelector('.title-4').innerText;
                    navigator.clipboard.writeText(titleText)  
                });
                const copyBtn5 = document.getElementsByClassName('.copyBtn-5');
                    copyBtn5.addEventListener('click', function() {
                    const titleText = document.querySelector('.title-5').innerText; 
                    navigator.clipboard.writeText(titleText) 
                });
                const copyBtn6 = document.getElementsByClassName('.copyBtn-6');
                    copyBtn6.addEventListener('click', function() {
                    const titleText = document.querySelector('.title-6').innerText; 
                    navigator.clipboard.writeText(titleText)
                });
                const copyBtn7 = document.getElementsByClassName('.copyBtn-7');
                    copyBtn7.addEventListener('click', function() {
                    const titleText = document.querySelector('.title-7').innerText; 
                    navigator.clipboard.writeText(titleText)  
                });
                const copyBtn8 = document.getElementsByClassName('.copyBtn-8');
                    copyBtn8.addEventListener('click', function() {
                    const titleText = document.querySelector('.title-8').innerText; 
                    navigator.clipboard.writeText(titleText)  
                });
                const copyBtn9 = document.getElementsByClassName('.copyBtn-9');
                    copyBtn9.addEventListener('click', function() {
                    const titleText = document.querySelector('.title-9').innerText; 
                    navigator.clipboard.writeText(titleText)  
                });



           

                
