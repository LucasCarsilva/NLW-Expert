const perguntas = [
    {
      pergunta: "O que significa a sigla 'DOM' em JavaScript?",
      respostas: [
        "Documento de Objeto Modelo",
        "Distribuição de Operações Múltiplas",
        "Modelo de Objeto do Documento",
      ],
      correta: 2
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona o primeiro elemento que corresponde a um seletor CSS especificado",
        "Modifica o estilo de um elemento HTML",
        "Cria um novo elemento HTML",
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "' Este é um comentário",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "parseFloat()",
        "Number()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para comparar valores e tipos em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'push()' faz em um array em JavaScript?",
      respostas: [
        "Remove o último elemento do array",
        "Adiciona um novo elemento ao final do array",
        "Inverte a ordem dos elementos no array",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "splice()",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "function minhaFuncao() {}",
        "myFunction: function() {}",
        "funcao = () => {}",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código?\n\nconsole.log(typeof([]));",
      respostas: [
        "'array'",
        "'object'",
        "'arrayobject'",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }