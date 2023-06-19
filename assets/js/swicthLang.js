const langButton = document.querySelector(".swicthLang")

const langs = {
  portuguese: {
    mainTitle: 'Cadastro de Autores',
    labels: ['Nome', 'Email', 'Telefone', 'Gênero'],
    genres: ['Masculino', 'Feminino', 'Outro'],
    tasteGenreLabels: ['1° Gênero', '2° Gênero', '3° Gênero'],
    tasteGenres: 
      ['Selecionar', 'Fantasia', 'Ação', 'Aventura', 'Romance',
      'Dark-Fantasy', 'Mistério', 'Sci-fi', 'Religião', 'Técnicos', 'Literatura'],
    secondaryTitles: ['Sobre seus gostos', 'Conte-nos sobre você'],
    calls: ['Selecione os seus 3 gêneros favoritos', "Escolha os autores que já leu"],
  },
  english: {
    mainTitle: 'Author Registration',
    labels: ['Name', 'Email', 'Phone', 'Genre'],
    genres: ['Male', 'Female', 'Other'],
    tasteGenreLabels: ['1° Genre', '2° Genre', '3° Genre'],
    tasteGenres: 
      ['Select', 'Fantasy', 'Action', 'Adventure', 'Romance',
      'Dark-Fantasy', 'Mystery', 'Sci-fi', 'Religion', 'Technical', 'Literature'],
    secondaryTitles: ['Your literaly tastes', 'Tell us about yourself'],
    calls: ['Select your 3 favorites genres', "Chose authors you've read"],
  }
}

langButton.addEventListener('click', () => {
  const buttonText = document.querySelector('.swicthLang__text')
  const HTMLlanguage = document.documentElement.lang

  if (HTMLlanguage === 'en') {
    document.documentElement.lang = 'pt-br'
    buttonText.innerHTML = 'En-Us'
  } else {
    document.documentElement.lang = 'en'
    buttonText.innerHTML = 'Pt-Br'
  }
  changeLang(document.documentElement.lang) 
})

function changeLang(language) {
  let lang;
  language === 'en' ? lang = 'english' : lang = 'portuguese'
  
  const mainTitle = document.querySelector('.mainTitle')
  const genres = document.querySelectorAll('.genreOption')
  
  mainTitle.innerHTML = langs[lang].mainTitle

  for (let i = 0; i < genres.length; i++) {
    genres[i].nextSibling.textContent = `${langs[lang].genres[i]}\n`
  };

  const lists = {
    labels: document.querySelectorAll('.formData__labels'),
    genres: document.querySelectorAll('.genreOption'),
    tasteGenreLabels: document.querySelectorAll('.genreNumber'),
    secondaryTitles: document.querySelectorAll('.secondaryTitle'),
    calls: document.querySelectorAll('.call')
  }

  const listsToArray = [ Object.entries(lists) ]

  for (let i = 0; i < listsToArray.length; i++) {
    listsToArray[i].forEach(lists => {
      const key = lists[0]
      const elements = lists[1]
      const pos = Object.keys(langs[lang]).find((e) => e === key)

      for (let I = 0; I < elements.length; I++){
        elements[I].innerHTML = langs[lang][pos][I] 
      }
    }) 
  }
  
  document.querySelector('[data-language]').dataset.language = language
}
