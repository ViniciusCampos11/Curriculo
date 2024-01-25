function toggleMode(){
    const html = document.documentElement

    /*Troca do modo light/black*/
    
    /*Se na classlist que está no html, conter "light" remove, caso contrário add */
    /*
    if(html.classList.contains('light')){  
        html.classList.remove('light')
    }
    else{
        html.classList.add('light')
    }
    */

    /*Outra opção que fará a mesma coisa que a condicional Se acima*/
    html.classList.toggle('light')

    /*Trocar a imagem ao alterar o modo*/

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){  
        img.setAttribute('src', './assets/Imagem1.png')
        img.setAttribute('alt', 'Foto de Vinícius Campos usando barba e óculos, vestindo um terno cinza, camisa branca e gravata rosa. O fundo da imagem é rosa e azul.')
    }
    else{
        img.setAttribute('src', './assets/Imagem3.png')
        img.setAttribute('alt', 'Foto de Vinícius Campos usando barba e óculos, camisa preta e cordão dourado. O fundo da imagem é em tom de areia com luzes roxas.')
    }
    
}