
 const LinksSocialMedia = {
    github:  "Eriberto-lab",
    youtube: "RocketSeat",
    facebook: "RocketSeat",
    instagram: "Erinhofl",
    twitter: "EribertoLima95"
  }
 
 
  // acessando o DOM
  function changeUserName(){
 document.getElementById('userName').textContent = 'Eri-lab'
 
 userName.textContent = 'Eri-lab' //consigo usar essa forma simplificado pq o userName é um id, sendo assim o JS reconhece tudo que vem antes do *.* como um id
 }
 changeUserName()
 
 function changeScocialMediaLinks(){
 
     for(let li of socialLinks.children){
 
         const social = li.getAttribute('class')
         li.children[0].href = `https://www.${social}.com${LinksSocialMedia{social}}`
         alert(li.children[0])
     }
 }
 
 changeScocialMediaLinks()

 function getInfoFromGitHubForProfile() {
   const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userImage.src = data.avatar_url
    })
    

 }

 getInfoFromGitHubForProfile()

 console(userName)


 
 
 
 























 //function changeScocialMediaLinks (){
 
    // for(let i = 0; i <= 10; i++){
        // alert(i)
  //   }
 //}
 
 // let i = 0; variavel criada com o valor zero, i <=10; enquanto a variavel i for menor ou igual a 10 o for vai rodar, i++ significa que toda vez que o for estiver rodando vai ser somado +1 na variavel i, ou seja i+1.
 
 // i+1 é a mesma coisa que i++ 