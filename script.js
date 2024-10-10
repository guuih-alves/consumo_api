
 async function getPrevisao(){                          // Funcao para capturar o previsao do tempo
    const lat = document.getElementById('latitude').value;
    const long = document.getElementById('longitude').value;
    const cep = document.getElementById('cep').value;
   
   
    try{
         const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m`);
         const data = await response.json();

         document.getElementById('cloud').innerHTML = '';
         var weather = document.getElementById('cloud').innerHTML += `Previsão de tempo de acordo com a região: ${data.current.temperature_2m} ºC`; 
         document.getElementById('cloud').value = weather;   // Linha que seta valor dentro de Input  

       }
        catch(error){
            alert('Informações de coordenadas pendentes');
     
       }
    
           try{
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);               //Consumindo dados da API
                const data = await response.json();

                document.getElementById('rua').value = data.logradouro;             //Exibição de dados
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.uf;
   
        } catch(error){
           alert('Informações de CEP pendentes');
          
        }
        limpar();

   }

   function limpar(){  
    document.getElementById('nome').value='';
    document.getElementById('email').value='';
    document.getElementById('cep').value='';
    document.getElementById("longitude").value='';
    document.getElementById('latitude').value='';
   
}
