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
    buttonText.innerHTML = 'en-us'
  } else {
    document.documentElement.lang = 'en'
    buttonText.innerHTML = 'pt-br'
  }
  changeLang(document.documentElement.lang) 
})

function changeLang(language) {
  let lang;
  language === 'en' ? lang = 'english' : lang = 'portuguese'
  
  const mainTitle = document.querySelector('.mainTitle')
  const optGroup = document.querySelectorAll('optgroup')
  const labels = document.querySelectorAll('.formData__labels')
  const genres = document.querySelectorAll('.genreOption')
  const tasteGenreLabels = document.querySelectorAll('.genreNumber')
  const secondaryTitles = document.querySelectorAll('.secondaryTitle')
  const calls = document.querySelectorAll('.call')

  mainTitle.innerHTML = langs[lang].mainTitle

  optGroup.forEach((group) => {
    const optionList = group.querySelectorAll('option')
    
    for (let i = 0; i < optionList.length; i++) {
      optionList[i].innerHTML = langs[lang].tasteGenres[i]
    }
  })

  for (let i = 0; i < genres.length; i++) {
    genres[i].nextSibling.textContent = `${langs[lang].genres[i]}\n`
  };

  for (let i = 0; i < labels.length; i++) {
    labels[i].innerHTML = langs[lang].labels[i]
  };
  
  for (let i = 0; i < secondaryTitles.length; i++) {
    secondaryTitles[i].innerHTML = langs[lang].secondaryTitles[i]
  }

  for (let i = 0; i < tasteGenreLabels.length; i++) {
    tasteGenreLabels[i].innerHTML = langs[lang].tasteGenreLabels[i]
  };

  for (let i = 0; i < calls.length; i++) {
    calls[i].innerHTML = langs[lang].calls[i]
  }

  document.querySelector('[data-language]').dataset.language = language
}
